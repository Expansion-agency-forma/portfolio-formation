import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/simulateur.css'
import {
  CALENDLY_URL,
  ETAPES,
  HYPOTHESES,
  INVESTISSEMENT_PAR_FORMATION,
  QUESTIONS,
  REPONSES_FREINS,
  VIDEO_OFFRE_ID,
  WEBHOOK_URL,
  calculer,
  decoderReponses,
  encoderReponses,
  fourchette,
  nombre,
  niveauPotentiel,
  normaliserEmail,
  normaliserTelephone,
  prixEnLigneConseille,
  scoreLead,
  ventes,
} from '../lib/simulateur'
import { track, trackCustom } from '../lib/pixel'
import { evenementGA, rdvReserve } from '../lib/analytics'

const STOCKAGE = 'expansion-simulateur-v1'
const PRIX_EN_LIGNE = [47, 97, 147, 197, 247, 297, 347, 397, 497, 597, 697, 797, 997, 1297, 1497]
const UTM_CLES = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid']

function lireStockage() {
  try {
    return JSON.parse(window.localStorage.getItem(STOCKAGE)) || null
  } catch {
    return null
  }
}

function ecrireStockage(valeur) {
  try {
    window.localStorage.setItem(STOCKAGE, JSON.stringify(valeur))
  } catch {
    /* stockage indisponible : on continue sans */
  }
}

/* ------------------------------------------------------------------ */
/* Petits composants                                                    */
/* ------------------------------------------------------------------ */

function Fleche() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Coche() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5 L6.5 11.5 L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Jauge({ reponses, compacte = false }) {
  const { niveau, label } = niveauPotentiel(reponses)
  return (
    <div className={`simu-jauge${compacte ? ' simu-jauge--compacte' : ''}`} aria-label={`Potentiel estimé : ${label}`}>
      <span className="simu-jauge__label">Votre potentiel</span>
      <span className="simu-jauge__barres" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className={`simu-jauge__barre${i <= niveau ? ' is-on' : ''}`} />
        ))}
      </span>
      <span className="simu-jauge__valeur">{label}</span>
    </div>
  )
}

function VideoClic({ youtubeId, titre }) {
  const [lecture, setLecture] = useState(false)
  return (
    <div className="simu-video">
      {lecture ? (
        <iframe
          className="simu-video__iframe"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={titre}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="simu-video__poster" onClick={() => setLecture(true)} aria-label={`Lire la vidéo : ${titre}`}>
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            onError={(e) => {
              if (!e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = '1'
                e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
              }
            }}
          />
          <span className="simu-video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5 L19 12 L8 19 Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

function Calendly({ prenom, email }) {
  const ref = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams({
      hide_gdpr_banner: '1',
      background_color: '1f0808',
      text_color: 'ffffff',
      primary_color: 'c9a84c',
    })
    const url = `${CALENDLY_URL}?${params.toString()}`
    const lancer = () => {
      if (!ref.current || !window.Calendly) return
      ref.current.innerHTML = ''
      window.Calendly.initInlineWidget({
        url,
        parentElement: ref.current,
        prefill: { name: prenom || '', email: email || '' },
        resize: true,
      })
    }
    if (window.Calendly) {
      lancer()
    } else {
      let script = document.querySelector('script[data-calendly]')
      if (!script) {
        script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.dataset.calendly = '1'
        document.body.appendChild(script)
      }
      script.addEventListener('load', lancer)
      return () => script.removeEventListener('load', lancer)
    }
    return undefined
  }, [prenom, email])

  return (
    <>
      <div className="simu-calendly" ref={ref}>
        <a className="btn btn--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
          Réserver mon appel gratuit
          <Fleche />
        </a>
      </div>
      <p className="simu-calendly__secours">
        L’agenda ne s’affiche pas ?{' '}
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
          Ouvrir l’agenda dans un nouvel onglet
        </a>
      </p>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Écrans du quiz                                                       */
/* ------------------------------------------------------------------ */

function Intro({ onStart }) {
  return (
    <div className="simu-intro">
      <span className="eyebrow">Simulateur gratuit</span>
      <h1 className="simu-intro__titre">
        Calculez combien votre organisme de formation pourrait gagner{' '}
        <span className="simu-intro__italique">avec une formation en ligne.</span>
      </h1>
      <p className="simu-intro__texte">
        13 questions en un clic, basées sur vos vrais chiffres : élèves, abonnés, prix de vos
        formations. Vous obtenez une estimation de votre potentiel, sans rien à écrire.
      </p>
      <button type="button" className="btn btn--primary simu-intro__bouton" onClick={onStart}>
        Commencer la simulation
        <Fleche />
      </button>
      <p className="simu-confiance">Gratuit · 1 minute · Résultat immédiat</p>
      <ul className="simu-intro__points">
        <li>
          <Coche /> Ce que vous pouvez vendre dès le lancement, à votre base actuelle
        </li>
        <li>
          <Coche /> Ce que ça peut vous rapporter chaque mois ensuite
        </li>
        <li>
          <Coche /> En combien de temps votre investissement est remboursé
        </li>
      </ul>
    </div>
  )
}

function Question({ question, index, total, reponses, onRepondre, onRetour }) {
  const valeur = reponses[question.id]
  const [multi, setMulti] = useState(() => (Array.isArray(valeur) ? valeur : []))
  const [prix, setPrix] = useState(() => (typeof valeur === 'number' ? valeur : question.defaut || 900))
  const titreRef = useRef(null)

  useEffect(() => {
    titreRef.current?.focus({ preventScroll: true })
  }, [question.id])

  const progression = Math.round((index / total) * 100)

  return (
    <div className="simu-question" key={question.id}>
      <div className="simu-question__haut">
        <button type="button" className="simu-retour" onClick={onRetour}>
          ← Retour
        </button>
        <span className="simu-etape">
          Étape {question.etape + 1}/3 · {ETAPES[question.etape]}
        </span>
      </div>
      <div className="simu-progression" role="progressbar" aria-valuenow={index} aria-valuemin={0} aria-valuemax={total}>
        <span style={{ width: `${progression}%` }} />
      </div>
      <p className="simu-compteur">
        Question {index + 1} sur {total}
      </p>
      <h2 className="simu-question__titre" tabIndex={-1} ref={titreRef}>
        {question.titre}
      </h2>
      {question.aide && <p className="simu-question__aide">{question.aide}</p>}

      {question.type === 'slider' && (
        <div className="simu-slider">
          <div className="simu-slider__valeur">
            {nombre(prix)} <span>€</span>
          </div>
          <input
            type="range"
            min={question.min}
            max={question.max}
            step={question.step}
            value={prix}
            onChange={(e) => setPrix(Number(e.target.value))}
            aria-label={question.titre}
            style={{ '--progress': `${((prix - question.min) / (question.max - question.min)) * 100}%` }}
          />
          <div className="simu-slider__bornes" aria-hidden="true">
            <span>{nombre(question.min)} €</span>
            <span>{nombre(question.max)} € et +</span>
          </div>
          <div className="simu-actions">
            <button type="button" className="btn btn--primary" onClick={() => onRepondre(question.id, prix)}>
              Continuer
              <Fleche />
            </button>
            <button type="button" className="simu-lien" onClick={() => onRepondre(question.id, null)}>
              {question.inconnu}
            </button>
          </div>
        </div>
      )}

      {question.type === 'multi' && (
        <>
          <div className="simu-options simu-options--multi">
            {question.options.map((o) => {
              const actif = multi.includes(o.value)
              return (
                <button
                  key={o.value}
                  type="button"
                  className={`simu-option${actif ? ' is-actif' : ''}`}
                  aria-pressed={actif}
                  onClick={() =>
                    setMulti((m) => (m.includes(o.value) ? m.filter((v) => v !== o.value) : [...m, o.value]))
                  }
                >
                  <span className="simu-option__case" aria-hidden="true">
                    {actif && <Coche />}
                  </span>
                  {o.label}
                </button>
              )
            })}
          </div>
          <div className="simu-actions">
            <button type="button" className="btn btn--primary" onClick={() => onRepondre(question.id, multi)}>
              {multi.length ? 'Continuer' : 'Aucun de ces freins'}
              <Fleche />
            </button>
          </div>
        </>
      )}

      {!question.type && (
        <div className={`simu-options${question.options.length > 4 ? ' simu-options--grille' : ''}`}>
          {question.options.map((o) => {
            const actif = valeur === o.value
            return (
              <button
                key={`${o.value}-${o.label}`}
                type="button"
                className={`simu-option${actif ? ' is-actif' : ''}${o.inconnu ? ' simu-option--inconnu' : ''}`}
                onClick={() => onRepondre(question.id, o.value)}
              >
                {o.label}
              </button>
            )
          })}
        </div>
      )}

      {index >= 3 && <Jauge reponses={reponses} />}
    </div>
  )
}

function Contact({ reponses, onEnvoyer, onRetour, envoiEnCours }) {
  const [champs, setChamps] = useState({ prenom: '', centre: '', ville: '', email: '', telephone: '', instagram: '' })
  const [consentement, setConsentement] = useState(false)
  const [pot, setPot] = useState('')
  const [erreurs, setErreurs] = useState({})

  const maj = (cle) => (e) => setChamps((c) => ({ ...c, [cle]: e.target.value }))

  const valider = (e) => {
    e.preventDefault()
    const err = {}
    if (!champs.prenom.trim()) err.prenom = 'Indiquez votre prénom'
    if (!champs.centre.trim()) err.centre = 'Indiquez le nom de votre centre'
    if (!champs.ville.trim()) err.ville = 'Indiquez votre ville'
    const email = normaliserEmail(champs.email)
    if (!email) err.email = 'Adresse email invalide'
    const telephone = normaliserTelephone(champs.telephone)
    if (!telephone) err.telephone = 'Numéro invalide (ex : 06 12 34 56 78)'
    if (!consentement) err.consentement = 'Merci de cocher cette case pour recevoir votre récap'
    setErreurs(err)
    if (Object.keys(err).length) return
    onEnvoyer({
      prenom: champs.prenom.trim(),
      centre: champs.centre.trim(),
      ville: champs.ville.trim(),
      email,
      telephone,
      instagram: champs.instagram.trim().replace(/^@/, ''),
      robot: pot,
    })
  }

  return (
    <form className="simu-contact" onSubmit={valider} noValidate>
      <div className="simu-question__haut">
        <button type="button" className="simu-retour" onClick={onRetour}>
          ← Retour
        </button>
        <span className="simu-etape">Dernière étape</span>
      </div>
      <div className="simu-progression">
        <span style={{ width: '100%' }} />
      </div>
      <h2 className="simu-question__titre">Votre analyse est prête.</h2>
      <p className="simu-question__aide">
        Où vous envoyer votre récap ? Votre résultat s’affiche juste après, et vous le recevez aussi
        par email.
      </p>
      <Jauge reponses={reponses} compacte />

      <div className="simu-champs">
        {[
          ['prenom', 'Prénom', 'text', 'given-name'],
          ['centre', 'Nom de votre centre', 'text', 'organization'],
          ['ville', 'Ville', 'text', 'address-level2'],
          ['email', 'Email', 'email', 'email'],
          ['telephone', 'Téléphone', 'tel', 'tel'],
        ].map(([cle, label, type, auto]) => (
          <label key={cle} className={`simu-champ${erreurs[cle] ? ' has-erreur' : ''}`}>
            <span>{label}</span>
            <input type={type} value={champs[cle]} onChange={maj(cle)} autoComplete={auto} inputMode={type === 'tel' ? 'tel' : undefined} />
            {erreurs[cle] && <em>{erreurs[cle]}</em>}
          </label>
        ))}
        <label className="simu-champ">
          <span>
            Instagram <small>(facultatif)</small>
          </span>
          <input type="text" value={champs.instagram} onChange={maj('instagram')} placeholder="@votrecompte" autoComplete="off" />
        </label>
        <label className="simu-champ simu-champ--cache" aria-hidden="true">
          <span>Site web</span>
          <input type="text" tabIndex={-1} autoComplete="off" value={pot} onChange={(e) => setPot(e.target.value)} />
        </label>
      </div>

      <label className={`simu-consentement${erreurs.consentement ? ' has-erreur' : ''}`}>
        <input type="checkbox" checked={consentement} onChange={(e) => setConsentement(e.target.checked)} />
        <span>
          J’accepte de recevoir mon récap et d’être recontacté(e) par Expansion Agency au sujet de mon
          projet. <Link to="/confidentialite" target="_blank">Politique de confidentialité</Link>
        </span>
      </label>
      {erreurs.consentement && <em className="simu-erreur">{erreurs.consentement}</em>}

      <div className="simu-actions">
        <button type="submit" className="btn btn--primary" disabled={envoiEnCours}>
          Voir mon potentiel
          <Fleche />
        </button>
      </div>
      <p className="simu-confiance">Vos données restent confidentielles. Aucun démarchage abusif.</p>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* Résultat                                                             */
/* ------------------------------------------------------------------ */

function Resultat({ reponses, contact, partage, onRecommencer }) {
  const conseille = prixEnLigneConseille(reponses)
  const [prixEnLigne, setPrixEnLigne] = useState(conseille)
  const [copie, setCopie] = useState(false)
  const res = useMemo(() => calculer(reponses, { prixEnLigne }), [reponses, prixEnLigne])
  const { chaleur } = scoreLead(reponses)
  const n = res.n
  const freins = (reponses.freins || []).filter((f) => REPONSES_FREINS[f])
  const premiereVideo = freins.find((f) => REPONSES_FREINS[f].youtubeId)

  const scenarios = []
  if (!reponses.pub) {
    const avecPub = calculer(reponses, { prixEnLigne, pub: 500 })
    scenarios.push(['Avec 500 € de publicité par mois', fourchette(avecPub.annee1), 'sur 12 mois, budget pub déduit'])
  }
  if (n > 1) {
    const une = calculer(reponses, { prixEnLigne: undefined, formations: 1 })
    scenarios.push(['Avec une seule formation', fourchette(une.annee1), 'sur 12 mois'])
  }
  if (reponses.coaching !== 'oui') {
    const avecCoaching = calculer(reponses, { coaching: 'oui', prixEnLigne: undefined })
    scenarios.push([
      `Avec un coaching business (prix conseillé ${nombre(avecCoaching.prix)} €)`,
      fourchette(avecCoaching.annee1),
      'sur 12 mois',
    ])
  }

  const indexPrix = Math.max(0, PRIX_EN_LIGNE.findIndex((p) => p >= prixEnLigne))
  const lienPartage = `${window.location.origin}/simulateur?r=${encoderReponses(reponses)}`

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(lienPartage)
      setCopie(true)
      setTimeout(() => setCopie(false), 2500)
    } catch {
      window.prompt('Copiez ce lien :', lienPartage)
    }
  }

  let rentabilite
  if (res.moisRentable === 0) rentabilite = 'dès le lancement'
  else if (res.moisRentable !== null && res.moisRentable <= 12) rentabilite = `en ${res.moisRentable} mois environ`
  else rentabilite = 'en plus de 12 mois'

  const partRemb = Math.round(res.partRemboursee[0] * 100)

  return (
    <div className="simu-resultat">
      <header className="simu-resultat__entete">
        <span className="eyebrow">{partage ? 'Simulation partagée' : 'Votre potentiel estimé'}</span>
        <h1 className="simu-resultat__titre">
          {contact?.prenom ? `${contact.prenom}, voici` : 'Voici'} ce que votre formation en ligne pourrait vous rapporter
        </h1>
        <div className="simu-resultat__chiffre">
          <span className="simu-resultat__montant">
            {fourchette(res.annee1)}
            <sup>*</sup>
          </span>
          <span className="simu-resultat__periode">Potentiel sur 12 mois</span>
        </div>
        <p className="simu-resultat__sous">
          Dont {fourchette(res.caLancement)}* potentiellement dès le lancement, en proposant votre formation à
          votre base actuelle.
        </p>
        <p className="simu-resultat__asterisque">
          * Il s’agit d’un potentiel, pas d’un résultat garanti : une estimation calculée à partir de vos
          réponses et d’hypothèses prudentes. Le détail du calcul est en bas de page.
        </p>
        <a href="#reserver" className="btn btn--primary">
          {chaleur === 'chaud' ? 'Valider ce potentiel en 30 minutes' : 'En parler gratuitement'}
          <Fleche />
        </a>
      </header>

      <section className="simu-cartes">
        <article className="simu-carte">
          <h3>Potentiel au lancement*</h3>
          <p className="simu-carte__valeur">{fourchette(res.caLancement)}</p>
          <p>
            Environ {ventes(res.ventesLancement)} possibles auprès de vos anciens élèves et de votre communauté.
            {partRemb > 0 && (
              <>
                {' '}
                <strong>
                  {partRemb >= 100 ? 'Votre investissement est déjà remboursé.' : `Soit ${partRemb} % de votre investissement remboursé.`}
                </strong>
              </>
            )}
          </p>
        </article>
        <article className="simu-carte">
          <h3>Potentiel par mois*</h3>
          <p className="simu-carte__valeur">{fourchette(res.netMensuel)}</p>
          <p>
            Environ {ventes(res.ventesMensuelles)} par mois
            {res.budget ? `, budget pub de ${nombre(res.budget)} € déduit` : ''}.
          </p>
        </article>
        <article className="simu-carte">
          <h3>Rentabilité estimée*</h3>
          <p className="simu-carte__valeur">{rentabilite}</p>
          <p>
            Investissement à partir de {nombre(INVESTISSEMENT_PAR_FORMATION)} € par formation
            {n > 1 ? `, soit ${nombre(res.investissement)} € pour ${n} formations` : ''}. Calcul
            fait sur l’estimation la plus basse.
          </p>
        </article>
      </section>

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">Le prix de votre formation en ligne</h2>
        <p className="simu-bloc__texte">
          Prix conseillé : {nombre(conseille)} €
          {reponses.coaching === 'oui' ? ' (avec coaching business)' : ''}. Déplacez le curseur pour tester un
          autre prix : tous les chiffres se mettent à jour.
        </p>
        <div className="simu-slider simu-slider--resultat">
          <div className="simu-slider__valeur">
            {nombre(prixEnLigne)} <span>€</span>
          </div>
          <input
            type="range"
            min={0}
            max={PRIX_EN_LIGNE.length - 1}
            step={1}
            value={indexPrix}
            onChange={(e) => setPrixEnLigne(PRIX_EN_LIGNE[Number(e.target.value)])}
            aria-label="Prix de votre formation en ligne"
            style={{ '--progress': `${(indexPrix / (PRIX_EN_LIGNE.length - 1)) * 100}%` }}
          />
        </div>
      </section>

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">D’où viendraient vos ventes*</h2>
        <ul className="simu-sources">
          <li>
            <span>Vos anciens élèves, au lancement</span>
            <strong>{ventes(res.lancAnciens)}</strong>
          </li>
          <li>
            <span>Votre communauté, au lancement</span>
            <strong>{ventes(res.lancAbonnes)}</strong>
          </li>
          <li>
            <span>Vos nouveaux élèves du présentiel, par mois</span>
            <strong>{ventes(res.vNouveaux)}</strong>
          </li>
          <li>
            <span>Votre communauté, par mois</span>
            <strong>{ventes(res.vCommunaute)}</strong>
          </li>
          <li>
            <span>La publicité, par mois</span>
            <strong>{res.budget ? `${fourchette(res.caPub)} de ventes` : 'pas de budget pub'}</strong>
          </li>
        </ul>
      </section>

      {scenarios.length > 0 && (
        <section className="simu-bloc">
          <h2 className="simu-bloc__titre">Et si… (potentiel estimé*)</h2>
          <div className="simu-scenarios">
            {scenarios.map(([titre, valeur, detail]) => (
              <div key={titre} className="simu-scenario">
                <span>{titre}</span>
                <strong>{valeur}</strong>
                <small>{detail}</small>
              </div>
            ))}
          </div>
          {(reponses.etranger === 'oui' || reponses.etranger === 'peutetre') && (
            <p className="simu-bloc__texte simu-bloc__texte--note">
              Vous voulez aussi vendre à l’étranger : nous pouvons traduire votre formation pour d’autres
              marchés. Ce potentiel n’est pas compté ici, on l’étudie ensemble pendant l’appel.
            </p>
          )}
        </section>
      )}

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">Votre plan en 3 étapes</h2>
        <ol className="simu-plan">
          <li>
            <strong>Tournage dans votre centre</strong>
            <span>
              {n > 1 ? `Vos ${n} formations sont filmées` : 'Votre formation est filmée'} sur place par notre équipe,
              puis montées en modules clairs.
            </span>
          </li>
          <li>
            <strong>Lancement auprès de votre base</strong>
            <span>
              On la propose d’abord à vos anciens élèves et à votre communauté : {ventes(res.ventesLancement)} estimées.
            </span>
          </li>
          <li>
            <strong>Des ventes chaque mois</strong>
            <span>
              {res.budget
                ? `Avec ${nombre(res.budget)} € de pub par mois et vos nouveaux élèves : ${fourchette(res.netMensuel)} par mois.`
                : `Vos nouveaux élèves et votre communauté : ${fourchette(res.netMensuel)} par mois, davantage avec de la publicité.`}
            </span>
          </li>
        </ol>
        <p className="simu-bloc__texte simu-bloc__texte--note">
          Votre formation est prête à vendre environ 30 jours après le tournage.
        </p>
      </section>

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">En 1 minute : comment on travaille</h2>
        <VideoClic youtubeId={VIDEO_OFFRE_ID} titre="Comment Expansion digitalise votre formation" />
      </section>

      {freins.length > 0 && (
        <section className="simu-bloc">
          <h2 className="simu-bloc__titre">Vos freins, nos réponses</h2>
          <p className="simu-bloc__texte">
            Dans le questionnaire, vous avez indiqué ce qui vous freinait jusqu’ici. Voici ce qu’on vous
            répond{premiereVideo ? ', en vidéo et par écrit' : ''}.
          </p>
          {premiereVideo && (
            <div className="simu-frein-video">
              <p className="simu-frein-video__question">
                <span>Votre question en vidéo</span>« {REPONSES_FREINS[premiereVideo].question} »
              </p>
              <VideoClic youtubeId={REPONSES_FREINS[premiereVideo].youtubeId} titre={REPONSES_FREINS[premiereVideo].question} />
            </div>
          )}
          <div className="simu-freins">
            {freins.map((f) => (
              <article key={f} className="simu-frein">
                <h3>{REPONSES_FREINS[f].titre}</h3>
                <p>{REPONSES_FREINS[f].texte}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">Ils l’ont fait : résultats réels de nos clients</h2>
        <div className="simu-cas">
          <div className="simu-cas__item">
            <strong>150 000 €</strong>
            <span>de chiffre d’affaires pour l’un de nos clients après la digitalisation de ses formations</span>
          </div>
          <div className="simu-cas__item">
            <strong>10 formations</strong>
            <span>en ligne vendues en 3 mois par un autre client</span>
          </div>
        </div>
      </section>

      <section className="simu-bloc simu-reserver" id="reserver">
        <h2 className="simu-bloc__titre">
          {chaleur === 'chaud'
            ? 'Votre potentiel est élevé : validons-le ensemble'
            : 'Parlons de votre projet'}
        </h2>
        <p className="simu-bloc__texte">
          30 minutes, gratuit et sans engagement. On reprend votre simulation et on vous dit concrètement
          comment l’atteindre.
        </p>
        <Calendly prenom={contact?.prenom} email={contact?.email} />
      </section>

      <section className="simu-bloc simu-bloc--discret">
        <p className="simu-mention">
          * Simulation indicative basée sur vos réponses et sur des hypothèses prudentes. Ce n’est pas une
          promesse de résultat : vos ventes dépendront de votre offre, de votre audience et de votre
          implication.
        </p>
        <details className="simu-hypotheses">
          <summary>Comment c’est calculé</summary>
          <ul>
            <li>Prix en ligne conseillé : environ {Math.round(HYPOTHESES.ratioPrixEnLigne * 100)} % du prix en présentiel, +70 % avec un coaching business.</li>
            <li>Au lancement : de 0,5 à 5 % de vos anciens élèves rachètent selon votre métier, et 0,05 à 0,1 % de vos abonnés.</li>
            <li>Chaque mois : 10 à 18 % de vos nouveaux élèves prennent aussi la version en ligne, et 0,01 à 0,02 % de vos abonnés achètent.</li>
            <li>Publicité : 1 € investi rapporte 1,5 à 2,3 € de ventes, budget déduit du résultat.</li>
            <li>Plus le prix est élevé, moins il y a d’acheteurs. Chaque formation supplémentaire rapporte moins que la précédente.</li>
          </ul>
        </details>
        <div className="simu-pied">
          <button type="button" className="simu-lien" onClick={copier}>
            {copie ? 'Lien copié ✓' : 'Partager ma simulation (utile si vous décidez à plusieurs)'}
          </button>
          <button type="button" className="simu-lien" onClick={onRecommencer}>
            Refaire la simulation
          </button>
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

function Simulateur() {
  const params = useMemo(
    () => new URLSearchParams(typeof window !== 'undefined' ? window.location.search : ''),
    [],
  )
  const partage = useMemo(() => {
    const code = params.get('r')
    return code ? decoderReponses(code) : null
  }, [params])

  const initial = useMemo(() => {
    const sauve = lireStockage()
    const domaineUrl = params.get('d')
    if (domaineUrl && QUESTIONS[0].options.some((o) => o.value === domaineUrl)) {
      return { ecran: 1, reponses: { domaine: domaineUrl }, contact: null, envoye: false }
    }
    return sauve || { ecran: 'intro', reponses: {}, contact: null, envoye: false }
  }, [params])

  const [ecran, setEcran] = useState(partage ? 'resultat' : initial.ecran)
  const [reponses, setReponses] = useState(partage || initial.reponses)
  const [contact, setContact] = useState(partage ? null : initial.contact)
  const [envoye, setEnvoye] = useState(partage ? true : initial.envoye)
  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const haut = useRef(null)

  useEffect(() => {
    if (params.has('d')) {
      const propre = new URLSearchParams(params)
      propre.delete('d')
      const q = propre.toString()
      window.history.replaceState(null, '', `/simulateur${q ? `?${q}` : ''}`)
    }
    try {
      const utm = {}
      UTM_CLES.forEach((k) => {
        const v = params.get(k)
        if (v) utm[k] = v
      })
      if (Object.keys(utm).length) window.sessionStorage.setItem('expansion-utm', JSON.stringify(utm))
    } catch {
      /* ignore */
    }
  }, [params])

  useEffect(() => {
    if (partage) return
    ecrireStockage({ ecran, reponses, contact, envoye })
  }, [ecran, reponses, contact, envoye, partage])

  useEffect(() => {
    haut.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [ecran])

  useEffect(() => {
    const surMessage = (e) => {
      if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.event_scheduled') {
        track('Schedule')
        rdvReserve('simulateur')
      }
    }
    window.addEventListener('message', surMessage)
    return () => window.removeEventListener('message', surMessage)
  }, [])

  const demarrer = () => {
    trackCustom('SimulateurDebut')
    evenementGA('simulateur_debut')
    setEcran(0)
  }

  const repondre = useCallback(
    (id, valeur) => {
      setReponses((r) => ({ ...r, [id]: valeur }))
      const index = QUESTIONS.findIndex((q) => q.id === id)
      trackCustom('SimulateurQuestion', { question: index + 1 })
      evenementGA('simulateur_question', { numero: index + 1, question: id })
      const suivant = () => setEcran(index + 1 < QUESTIONS.length ? index + 1 : 'contact')
      const q = QUESTIONS[index]
      if (!q.type) setTimeout(suivant, 220)
      else suivant()
    },
    [],
  )

  const retour = () => {
    if (ecran === 'contact') setEcran(QUESTIONS.length - 1)
    else if (ecran === 0) setEcran('intro')
    else if (typeof ecran === 'number') setEcran(ecran - 1)
  }

  const envoyer = async (infos) => {
    if (infos.robot) {
      setContact(infos)
      setEcran('resultat')
      return
    }
    setEnvoiEnCours(true)
    const res = calculer(reponses)
    const { score, chaleur } = scoreLead(reponses)
    let utm = {}
    try {
      utm = JSON.parse(window.sessionStorage.getItem('expansion-utm')) || {}
    } catch {
      utm = {}
    }
    const libelle = (id) => {
      const q = QUESTIONS.find((x) => x.id === id)
      const v = reponses[id]
      if (Array.isArray(v)) return v.map((x) => q.options.find((o) => o.value === x)?.label || x).join(', ')
      if (v === null || v === undefined) return 'Je ne sais pas'
      return q.options?.find((o) => o.value === v)?.label ?? String(v)
    }
    const donnees = {
      date: new Date().toISOString(),
      prenom: infos.prenom,
      centre: infos.centre,
      ville: infos.ville,
      email: infos.email,
      telephone: infos.telephone,
      instagram: infos.instagram,
      chaleur,
      score,
      domaine: libelle('domaine'),
      role: libelle('role'),
      prix_presentiel: reponses.prix ?? 'Je ne sais pas',
      eleves_par_an: libelle('eleves'),
      anciens_eleves: libelle('anciens'),
      abonnes: libelle('abonnes'),
      existant: libelle('existant'),
      nb_formations: libelle('formations'),
      coaching: libelle('coaching'),
      budget_pub: libelle('pub'),
      etranger: libelle('etranger'),
      freins: libelle('freins'),
      delai: libelle('delai'),
      prix_en_ligne: res.prix,
      lancement_min: Math.round(res.caLancement[0]),
      lancement_max: Math.round(res.caLancement[1]),
      mensuel_min: Math.round(res.netMensuel[0]),
      mensuel_max: Math.round(res.netMensuel[1]),
      annee1_min: Math.round(res.annee1[0]),
      annee1_max: Math.round(res.annee1[1]),
      lien_resultat: `${window.location.origin}/simulateur?r=${encoderReponses(reponses)}`,
      utm_source: utm.utm_source || '',
      utm_medium: utm.utm_medium || '',
      utm_campaign: utm.utm_campaign || '',
      utm_content: utm.utm_content || '',
      utm_term: utm.utm_term || '',
      fbclid: utm.fbclid || '',
      consentement: 'oui',
    }
    if (WEBHOOK_URL && !envoye) {
      const corps = new URLSearchParams(Object.entries(donnees).map(([k, v]) => [k, String(v)]))
      try {
        await fetch(WEBHOOK_URL, { method: 'POST', mode: 'no-cors', keepalive: true, body: corps })
      } catch {
        try {
          navigator.sendBeacon?.(WEBHOOK_URL, corps)
        } catch {
          /* le résultat s'affiche quand même */
        }
      }
    }
    track('Lead', { value: Math.round(res.annee1[0]), currency: 'EUR' })
    evenementGA('generate_lead', {
      lead_source: 'simulateur',
      value: Math.round(res.annee1[0]),
      currency: 'EUR',
      domaine: reponses.domaine || '',
      chaleur,
      score,
    })
    setContact({ prenom: infos.prenom, email: infos.email })
    setEnvoye(true)
    setEnvoiEnCours(false)
    setEcran('resultat')
  }

  const recommencer = () => {
    setReponses({})
    setContact(null)
    setEnvoye(false)
    setEcran('intro')
    if (partage) window.history.replaceState(null, '', '/simulateur')
  }

  const question = typeof ecran === 'number' ? QUESTIONS[ecran] : null

  return (
    <div className="simu-page">
      <header className="simu-header" ref={haut}>
        <Link to="/" className="navbar__brand simu-header__marque">
          <span className="navbar__brand-dot" aria-hidden="true" />
          Expansion
        </Link>
      </header>
      <main className={`simu-main${ecran === 'resultat' ? ' simu-main--large' : ''}`}>
        {ecran === 'intro' && <Intro onStart={demarrer} />}
        {question && (
          <Question
            key={question.id}
            question={question}
            index={ecran}
            total={QUESTIONS.length}
            reponses={reponses}
            onRepondre={repondre}
            onRetour={retour}
          />
        )}
        {ecran === 'contact' && (
          <Contact reponses={reponses} onEnvoyer={envoyer} onRetour={retour} envoiEnCours={envoiEnCours} />
        )}
        {ecran === 'resultat' && (
          <Resultat reponses={reponses} contact={contact} partage={Boolean(partage)} onRecommencer={recommencer} />
        )}
      </main>
    </div>
  )
}

export default Simulateur

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/simulateur.css'
import {
  CALENDLY_URL,
  CONVERSION_PUB,
  ETAPES,
  ETAPES_PUB,
  HYPOTHESES,
  INVESTISSEMENT_PAR_FORMATION,
  PRIX_EN_LIGNE,
  QUESTIONS,
  QUESTIONS_PUB,
  REPONSES_FREINS,
  ROLES,
  VIDEO_OFFRE_ID,
  WEBHOOK_URL,
  calculer,
  calculerPub,
  decoderReponses,
  encoderReponses,
  fourchette,
  nombre,
  niveauPotentiel,
  normaliserEmail,
  normaliserTelephone,
  prixEnLigneConseille,
  questionsActives,
  resultat,
  scoreLead,
  titreQuestion,
  ventes,
} from '../lib/simulateur'
import { track, trackCustom } from '../lib/pixel'
import { evenementGA, rdvReserve } from '../lib/analytics'
import { lireSource, ajouterSourceCalendly } from '../lib/attribution'

const STOCKAGE = 'expansion-simulateur-v2'

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

function Jauge({ mode, reponses, compacte = false }) {
  const { niveau, label } = niveauPotentiel(mode, reponses)
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
    const url = ajouterSourceCalendly(`${CALENDLY_URL}?${params.toString()}`)
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

function Intro({ onChoisir, embarque }) {
  const Titre = embarque ? 'h2' : 'h1'
  return (
    <div className="simu-intro">
      {!embarque && <span className="eyebrow">Simulateur gratuit</span>}
      {embarque ? (
        <Titre className="simu-intro__titre">Que voulez-vous simuler ?</Titre>
      ) : (
        <>
          <Titre className="simu-intro__titre">
            Combien pourriez-vous gagner{' '}
            <span className="simu-intro__italique">de plus ?</span>
          </Titre>
          <p className="simu-intro__texte">
            Choisissez ce que vous voulez simuler. Questions en un clic, calcul basé sur vos chiffres et sur
            nos campagnes réelles.
          </p>
        </>
      )}
      <div className="simu-modes">
        <button type="button" className="simu-mode" onClick={() => onChoisir('formation')}>
          <span className="simu-mode__titre">Créer ma formation en ligne</span>
          <span className="simu-mode__texte">
            Ce que vos formations pourraient rapporter une fois filmées et vendues en ligne, en France et à l’étranger.
          </span>
          <span className="simu-mode__cta">
            Simuler <Fleche />
          </span>
        </button>
        <button type="button" className="simu-mode" onClick={() => onChoisir('pub')}>
          <span className="simu-mode__titre">Remplir mes formations avec la publicité</span>
          <span className="simu-mode__texte">
            Le chiffre d’affaires que votre budget pub pourrait générer, d’après les coûts réels de nos campagnes.
          </span>
          <span className="simu-mode__cta">
            Simuler <Fleche />
          </span>
        </button>
      </div>
      <p className="simu-confiance">Gratuit · 1 à 2 minutes · Résultat immédiat</p>
    </div>
  )
}

function valeurInitialeSlider(question, reponses, valeur) {
  if (typeof valeur === 'number') return valeur
  return question.defaut ? question.defaut(reponses) : question.min
}

function Question({ mode, question, index, total, reponses, onRepondre, onRetour }) {
  const valeur = reponses[question.id]
  const [multi, setMulti] = useState(() => (Array.isArray(valeur) ? valeur : []))
  const [num, setNum] = useState(() => valeurInitialeSlider(question, reponses, valeur))
  const titreRef = useRef(null)
  const etapes = mode === 'pub' ? ETAPES_PUB : ETAPES

  useEffect(() => {
    titreRef.current?.focus({ preventScroll: true })
  }, [question.id])

  const progression = Math.round((index / total) * 100)
  const paliers = question.paliers
  const indexPalier = paliers ? Math.max(0, paliers.findIndex((p) => p >= num)) : 0
  const min = paliers ? 0 : question.min
  const max = paliers ? paliers.length - 1 : question.max
  const position = paliers ? indexPalier : num

  return (
    <div className="simu-question" key={question.id}>
      <div className="simu-question__haut">
        <button type="button" className="simu-retour" onClick={onRetour}>
          ← Retour
        </button>
        <span className="simu-etape">
          Étape {question.etape + 1}/3 · {etapes[question.etape]}
        </span>
      </div>
      <div className="simu-progression" role="progressbar" aria-valuenow={index} aria-valuemin={0} aria-valuemax={total}>
        <span style={{ width: `${progression}%` }} />
      </div>
      <p className="simu-compteur">
        Question {index + 1} sur {total}
      </p>
      <h2 className="simu-question__titre" tabIndex={-1} ref={titreRef}>
        {titreQuestion(question, reponses)}
      </h2>
      {question.aide && <p className="simu-question__aide">{question.aide}</p>}

      {question.type === 'slider' && (
        <div className="simu-slider">
          <div className="simu-slider__valeur">
            {nombre(num)} <span>€</span>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={paliers ? 1 : question.step}
            value={position}
            onChange={(e) => setNum(paliers ? paliers[Number(e.target.value)] : Number(e.target.value))}
            aria-label={titreQuestion(question, reponses)}
            style={{ '--progress': `${((position - min) / (max - min)) * 100}%` }}
          />
          <div className="simu-slider__bornes" aria-hidden="true">
            <span>{nombre(paliers ? paliers[0] : question.min)} €</span>
            <span>{nombre(paliers ? paliers[paliers.length - 1] : question.max)} € et +</span>
          </div>
          <div className="simu-actions">
            <button type="button" className="btn btn--primary" onClick={() => onRepondre(question.id, num)}>
              Continuer
              <Fleche />
            </button>
            {question.inconnu && (
              <button type="button" className="simu-lien" onClick={() => onRepondre(question.id, null)}>
                {question.inconnu}
              </button>
            )}
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
              {multi.length ? 'Continuer' : question.vide || 'Continuer'}
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
                className={`simu-option${actif ? ' is-actif' : ''}${o.inconnu ? ' simu-option--inconnu' : ''}${o.detail ? ' simu-option--detail' : ''}`}
                onClick={() => onRepondre(question.id, o.value)}
              >
                <span className="simu-option__texte">
                  {o.label}
                  {o.detail && <small>{o.detail}</small>}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {index >= 3 && <Jauge mode={mode} reponses={reponses} />}
    </div>
  )
}

function Contact({ mode, reponses, onEnvoyer, onRetour, envoiEnCours }) {
  const [champs, setChamps] = useState({ prenom: '', centre: '', ville: '', email: '', telephone: '', instagram: '', role: '' })
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
    if (!champs.role) err.role = 'Choisissez une réponse'
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
      role: champs.role,
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
      <h2 className="simu-question__titre">Votre simulation est prête.</h2>
      <p className="simu-question__aide">
        Où vous envoyer votre récap ? Votre résultat s’affiche juste après, et vous le recevez aussi
        par email.
      </p>
      <Jauge mode={mode} reponses={reponses} compacte />

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
        <label className={`simu-champ${erreurs.role ? ' has-erreur' : ''}`}>
          <span>Vous êtes</span>
          <select value={champs.role} onChange={maj('role')}>
            <option value="">Choisir…</option>
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
          {erreurs.role && <em>{erreurs.role}</em>}
        </label>
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
          Voir mon résultat
          <Fleche />
        </button>
      </div>
      <p className="simu-confiance">Vos données restent confidentielles. Aucun démarchage abusif.</p>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* Fin de parcours : rendez-vous ou vidéo                               */
/* ------------------------------------------------------------------ */

// Questions posées à ceux qui demandent la vidéo : de quoi préparer une vidéo vraiment personnalisée.
const QUESTIONS_VIDEO = {
  formation: [
    { id: 'objectif', label: 'Dans 6 mois, ce serait réussi si…', type: 'choix', options: ['J’ai un revenu en plus', 'Je touche des élèves trop loin de mon centre', 'J’anime moins de sessions', 'Je vends aussi à l’étranger'] },
    { id: 'origine', label: 'D’où viennent vos élèves aujourd’hui ?', type: 'multi', options: ['Bouche-à-oreille', 'Instagram / TikTok', 'Google', 'Plateformes (CPF…)', 'Apporteurs d’affaires', 'Publicité'] },
    { id: 'deplait', label: 'Qu’est-ce qui vous déplaît là-dedans ?', type: 'texte', placeholder: 'Ex. : trop irrégulier, commissions trop élevées…', facultatif: true },
    { id: 'deja', label: 'Avez-vous déjà essayé de vendre une formation en ligne ?', type: 'choix', options: ['Non, jamais', 'Oui, mais ça n’a pas marché', 'Oui, ça marche un peu'] },
    { id: 'blocage', label: 'Qu’est-ce qui a bloqué ?', type: 'texte', facultatif: true, si: (d) => d.deja && d.deja !== 'Non, jamais' },
  ],
  pub: [
    { id: 'places', label: 'Combien de places vous reste-t-il sur cette session ?', type: 'choix', options: ['Moins de 5', '5 à 10', '10 à 20', 'Plus de 20', 'Entrées toute l’année'] },
    { id: 'zone', label: 'Dans quelle zone recrutez-vous ?', type: 'texte', placeholder: 'Ex. : Lyon + 30 km, ou toute la France à distance', facultatif: true },
    { id: 'rentables', label: 'Quels élèves vous rapportent le plus ?', type: 'multi', options: ['Financés CPF', 'France Travail', 'Autofinancés', 'Entreprises / OPCO'] },
    { id: 'pubAvant', label: 'Avez-vous déjà fait de la publicité ?', type: 'choix', options: ['Jamais', 'Oui, sans bons résultats', 'Oui, avec de bons résultats'] },
    { id: 'cplAvant', label: 'Combien vous coûtait un contact ?', type: 'texte', placeholder: 'Ex. : 12 €, ou je ne sais pas', facultatif: true, si: (d) => d.pubAvant && d.pubAvant !== 'Jamais' },
  ],
}

function FormulaireVideo({ mode, contact, onEnvoyer }) {
  const [d, setD] = useState({ lien: contact?.instagram ? `@${contact.instagram}` : '' })
  const [erreurs, setErreurs] = useState({})
  const [envoi, setEnvoi] = useState(false)
  const maj = (cle, valeur) => {
    setD((x) => ({ ...x, [cle]: valeur }))
    if (erreurs[cle]) setErreurs((x) => ({ ...x, [cle]: undefined }))
  }
  const basculer = (cle, valeur) =>
    setD((x) => {
      const liste = x[cle] || []
      return { ...x, [cle]: liste.includes(valeur) ? liste.filter((v) => v !== valeur) : [...liste, valeur] }
    })
  const pub = mode === 'pub'

  const valider = async (e) => {
    e.preventDefault()
    const err = {}
    if (!d.lien?.trim()) err.lien = 'Indiquez votre site, votre fiche Google ou votre Instagram'
    if (!d.formation?.trim()) err.formation = 'Indiquez la formation'
    if (pub && !d.prix?.trim()) err.prix = 'Indiquez le prix'
    setErreurs(err)
    if (Object.keys(err).length) return
    setEnvoi(true)
    await onEnvoyer(d)
    setEnvoi(false)
  }

  const questions = QUESTIONS_VIDEO[pub ? 'pub' : 'formation'].filter((q) => !q.si || q.si(d))

  return (
    <form className="simu-video-form" onSubmit={valider} noValidate>
      <p className="simu-video-form__intro">
        Pour une vidéo faite pour votre centre, et pas une vidéo générique, il nous manque quelques infos.
        Moins d’une minute.
      </p>
      <label className={`simu-champ${erreurs.lien ? ' has-erreur' : ''}`}>
        <span>Votre site, votre fiche Google ou votre Instagram</span>
        <input type="text" value={d.lien || ''} onChange={(e) => maj('lien', e.target.value)} placeholder="www.votre-centre.fr ou @votrecompte" />
        {erreurs.lien && <em>{erreurs.lien}</em>}
      </label>
      <label className={`simu-champ${erreurs.formation ? ' has-erreur' : ''}`}>
        <span>{pub ? 'Quelle formation voulez-vous remplir en priorité ?' : 'Quelle formation voulez-vous mettre en ligne en premier ?'}</span>
        <input type="text" value={d.formation || ''} onChange={(e) => maj('formation', e.target.value)} placeholder={pub ? 'Ex. : formation VTC, CAP esthétique…' : 'Ex. : extension de cils volume russe'} />
        {erreurs.formation && <em>{erreurs.formation}</em>}
      </label>
      {pub && (
        <div className="simu-video-form__ligne">
          <label className={`simu-champ${erreurs.prix ? ' has-erreur' : ''}`}>
            <span>Son prix</span>
            <input type="text" inputMode="numeric" value={d.prix || ''} onChange={(e) => maj('prix', e.target.value)} placeholder="Ex. : 1 500 €" />
            {erreurs.prix && <em>{erreurs.prix}</em>}
          </label>
          <label className="simu-champ">
            <span>
              Prochaine session <small>(facultatif)</small>
            </span>
            <input type="text" value={d.session || ''} onChange={(e) => maj('session', e.target.value)} placeholder="Ex. : 12 janvier" />
          </label>
        </div>
      )}
      {questions.map((q) => (
        <div key={q.id} className="simu-video-form__question">
          {q.type === 'texte' ? (
            <label className="simu-champ">
              <span>
                {q.label} {q.facultatif && <small>(facultatif)</small>}
              </span>
              <input type="text" value={d[q.id] || ''} onChange={(e) => maj(q.id, e.target.value)} placeholder={q.placeholder} />
            </label>
          ) : (
            <>
              <span className="simu-video-form__label">
                {q.label} {q.type === 'multi' && <small>(plusieurs choix possibles)</small>}
              </span>
              <div className="simu-puces">
                {q.options.map((o) => {
                  const actif = q.type === 'multi' ? (d[q.id] || []).includes(o) : d[q.id] === o
                  return (
                    <button
                      key={o}
                      type="button"
                      className={`simu-puce${actif ? ' is-actif' : ''}`}
                      aria-pressed={actif}
                      onClick={() => (q.type === 'multi' ? basculer(q.id, o) : maj(q.id, actif ? undefined : o))}
                    >
                      {o}
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      ))}
      <label className="simu-champ">
        <span>
          Une question que vous voulez qu’on traite dans la vidéo ? <small>(facultatif)</small>
        </span>
        <textarea rows={2} value={d.question || ''} onChange={(e) => maj('question', e.target.value)} />
      </label>
      <div className="simu-actions">
        <button type="submit" className="btn btn--primary" disabled={envoi}>
          Recevoir ma vidéo
          <Fleche />
        </button>
      </div>
    </form>
  )
}

function FinParcours({ contact, chaleur, onDemanderVideo, videoDemandee, mode }) {
  const [choix, setChoix] = useState(null)
  return (
    <section className="simu-bloc simu-reserver" id="reserver">
      <h2 className="simu-bloc__titre">
        {chaleur === 'chaud' ? 'Votre potentiel est élevé : la suite ?' : 'Et maintenant ?'}
      </h2>
      <p className="simu-bloc__texte">Deux façons d’aller plus loin, gratuitement et sans engagement.</p>
      <div className="simu-fin">
        <button
          type="button"
          className={`simu-fin__choix${choix === 'rdv' ? ' is-actif' : ''}`}
          onClick={() => setChoix('rdv')}
        >
          <strong>Réserver un appel de 30 minutes</strong>
          <span>On reprend votre simulation ensemble et on vous dit comment l’atteindre.</span>
        </button>
        <button
          type="button"
          className={`simu-fin__choix${choix === 'video' ? ' is-actif' : ''}`}
          onClick={() => setChoix('video')}
        >
          <strong>Recevoir une vidéo personnalisée sur mon centre</strong>
          <span>
            {mode === 'pub'
              ? 'Votre marché, la pub qu’on lancerait pour vous et ce qu’elle coûterait, expliqués en vidéo.'
              : 'Comment votre formation se vendrait en ligne, étape par étape, expliqué en vidéo.'}
          </span>
        </button>
      </div>
      {choix === 'rdv' && <Calendly prenom={contact?.prenom} email={contact?.email} />}
      {choix === 'video' && !videoDemandee && <FormulaireVideo mode={mode} contact={contact} onEnvoyer={onDemanderVideo} />}
      {choix === 'video' && videoDemandee && (
        <div className="simu-video-ok" role="status">
          <strong>C’est noté{contact?.prenom ? `, ${contact.prenom}` : ''} !</strong>
          <p>
            Vous recevez votre vidéo par email{contact?.email ? ` (${contact.email})` : ''} sous 48 h ouvrées. À la fin,
            un lien vous permet de réserver un appel si vous voulez passer à la mise en place.
          </p>
          <button type="button" className="simu-lien" onClick={() => setChoix('rdv')}>
            Finalement, je préfère réserver un appel maintenant
          </button>
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Résultat — formation en ligne                                        */
/* ------------------------------------------------------------------ */

const LANGUES = { anglais: 'anglais', espagnol: 'espagnol', arabe: 'arabe', portugais: 'portugais', italien: 'italien', allemand: 'allemand' }

function listeLangues(l) {
  const noms = l.map((x) => LANGUES[x] || x)
  if (noms.length <= 1) return noms.join('')
  return `${noms.slice(0, -1).join(', ')} et ${noms[noms.length - 1]}`
}

function ResultatCfa({ reponses, res, contact, partage }) {
  const plein = res.contrats[0] >= res.capacite
  return (
    <>
      <header className="simu-resultat__entete">
        <span className="eyebrow">{partage ? 'Simulation partagée' : 'Votre potentiel estimé'}</span>
        <h1 className="simu-resultat__titre">
          {contact?.prenom ? `${contact.prenom}, voici` : 'Voici'} ce que votre diplôme à distance pourrait vous rapporter
        </h1>
        <div className="simu-resultat__chiffre">
          <span className="simu-resultat__montant">
            {fourchette(res.annee1)}
            <sup>*</sup>
          </span>
          <span className="simu-resultat__periode">de prise en charge OPCO par an</span>
        </div>
        <p className="simu-resultat__sous">
          Soit {Math.round(res.contrats[0])} à {Math.round(res.contrats[1])} contrats sur les {res.capacite} places que
          vous pourriez ouvrir à distance, à {nombre(res.npec)} € par contrat et par an.
        </p>
        <p className="simu-resultat__asterisque">
          * Potentiel estimé, pas un résultat garanti. Le détail du calcul est en bas de page.
        </p>
      </header>
      <section className="simu-cartes">
        <article className="simu-carte">
          <h3>Prise en charge retenue</h3>
          <p className="simu-carte__valeur">{nombre(res.npec)} €</p>
          <p>
            Par contrat et par an
            {reponses.distance === 'plus80' ? ', après la baisse de 20 % pour une formation à 80 % à distance (plancher 4 000 €)' : ''}.
          </p>
        </article>
        <article className="simu-carte">
          <h3>Candidats par mois*</h3>
          <p className="simu-carte__valeur">{res.budget ? `${Math.round(res.candidatsMois[0])} à ${Math.round(res.candidatsMois[1])}` : '—'}</p>
          <p>{res.budget ? `Avec ${nombre(res.budget)} € de publicité par mois.` : 'Sans publicité : uniquement le bouche-à-oreille et votre site.'}</p>
        </article>
        <article className="simu-carte">
          <h3>Places remplies*</h3>
          <p className="simu-carte__valeur">{plein ? 'Toutes' : `${Math.round((res.contrats[0] / res.capacite) * 100)} à ${Math.round((res.contrats[1] / res.capacite) * 100)} %`}</p>
          <p>{plein ? 'Votre budget suffit à remplir vos places. On peut même l’ajuster à la baisse.' : 'Plus de budget ou un meilleur suivi des candidats remplirait davantage.'}</p>
        </article>
      </section>
      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">À savoir pour un CFA à distance</h2>
        <ul className="simu-sources">
          <li>
            <span>Un diplôme sur 2 ans est financé chaque année du contrat</span>
            <strong>× 2 ans</strong>
          </li>
          <li>
            <span>Formation à 80 % ou plus à distance</span>
            <strong>−20 % de prise en charge</strong>
          </li>
          <li>
            <span>Plancher de prise en charge</span>
            <strong>4 000 € par contrat</strong>
          </li>
        </ul>
        <p className="simu-bloc__texte simu-bloc__texte--note">
          Chaque contrat suppose aussi une entreprise d’accueil : on peut vous amener les deux avec la publicité
          (candidats et employeurs).
        </p>
      </section>
    </>
  )
}

function ResultatFormation({ reponses, contact, partage }) {
  const typeCpf = reponses.type === 'cpf'
  const conseille = prixEnLigneConseille(reponses)
  const [prixForce, setPrixForce] = useState(null)
  const res = useMemo(() => calculer(reponses, prixForce ? { prixForce } : {}), [reponses, prixForce])
  if (res.cfa) return <ResultatCfa reponses={reponses} res={res} contact={contact} partage={partage} />
  const prixAffiche = res.prix
  const n = res.n
  const freins = (reponses.freins || []).filter((f) => REPONSES_FREINS[f])
  const premiereVideo = freins.find((f) => REPONSES_FREINS[f].youtubeId)

  const scenarios = []
  if (!reponses.pub) {
    const avecPub = calculer(reponses, { prixForce: prixAffiche, pub: 500 })
    scenarios.push(['Avec 500 € de publicité par mois', fourchette(avecPub.annee1), 'sur 12 mois, budget pub déduit'])
  }
  if (n > 1) {
    const une = calculer(reponses, { prixForce: prixAffiche, formations: 1 })
    scenarios.push(['Avec une seule formation', fourchette(une.annee1), 'sur 12 mois'])
  }
  if (reponses.type === 'fondspropres' && reponses.coaching !== 'oui') {
    const avecCoaching = calculer(reponses, { coaching: 'oui' })
    scenarios.push([
      `Avec un coaching business (prix conseillé ${nombre(avecCoaching.prix)} €)`,
      fourchette(avecCoaching.annee1),
      'sur 12 mois',
    ])
  }

  let rentabilite
  if (res.moisRentable === 0) rentabilite = 'dès le lancement'
  else if (res.moisRentable !== null && res.moisRentable <= 12) rentabilite = `en ${res.moisRentable} mois environ`
  else rentabilite = 'en plus de 12 mois'
  const partRemb = Math.round(res.partRemboursee[0] * 100)

  const paliers = typeCpf ? null : PRIX_EN_LIGNE
  const indexPrix = paliers ? Math.max(0, paliers.findIndex((p) => p >= prixAffiche)) : 0

  return (
    <>
      <header className="simu-resultat__entete">
        <span className="eyebrow">{partage ? 'Simulation partagée' : 'Votre potentiel estimé'}</span>
        <h1 className="simu-resultat__titre">
          {contact?.prenom ? `${contact.prenom}, voici` : 'Voici'} ce que {n > 1 ? `vos ${n} formations` : 'votre formation'} en ligne pourrai{n > 1 ? 'en' : ''}t vous rapporter
        </h1>
        <div className="simu-resultat__chiffre">
          <span className="simu-resultat__montant">
            {fourchette(res.annee1)}
            <sup>*</sup>
          </span>
          <span className="simu-resultat__periode">Potentiel sur 12 mois en France</span>
        </div>
        <p className="simu-resultat__sous">
          Dont {fourchette(res.caLancement)}* potentiellement dès le lancement, en proposant votre formation à
          votre base actuelle.
          {res.langues.length > 0 && ` Et jusqu’à ${fourchette(res.etranger12)} de plus avec la version ${listeLangues(res.langues)}.`}
        </p>
        <p className="simu-resultat__asterisque">
          * Il s’agit d’un potentiel, pas d’un résultat garanti : une estimation calculée à partir de vos
          réponses et d’hypothèses prudentes. Le détail du calcul est en bas de page.
        </p>
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
        <h2 className="simu-bloc__titre">{typeCpf ? 'Le prix de votre formation' : 'Le prix de votre formation en ligne'}</h2>
        <p className="simu-bloc__texte">
          {typeCpf
            ? 'L’élève paie seulement le reste à charge de 150 €, le CPF finance le reste.'
            : `Prix conseillé pour votre domaine : ${nombre(conseille)} €${reponses.coaching === 'oui' ? ' (avec coaching business)' : ''}.`}{' '}
          Déplacez le curseur pour tester un autre prix : tous les chiffres se mettent à jour.
        </p>
        <div className="simu-slider simu-slider--resultat">
          <div className="simu-slider__valeur">
            {nombre(prixAffiche)} <span>€</span>
          </div>
          {paliers ? (
            <input
              type="range"
              min={0}
              max={paliers.length - 1}
              step={1}
              value={indexPrix}
              onChange={(e) => setPrixForce(paliers[Number(e.target.value)])}
              aria-label="Prix de votre formation en ligne"
              style={{ '--progress': `${(indexPrix / (paliers.length - 1)) * 100}%` }}
            />
          ) : (
            <input
              type="range"
              min={500}
              max={5000}
              step={50}
              value={prixAffiche}
              onChange={(e) => setPrixForce(Number(e.target.value))}
              aria-label="Prix de votre formation"
              style={{ '--progress': `${((prixAffiche - 500) / 4500) * 100}%` }}
            />
          )}
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

      {res.langues.length > 0 && (
        <section className="simu-bloc">
          <h2 className="simu-bloc__titre">Vendre à l’étranger</h2>
          <div className="simu-scenarios">
            <div className="simu-scenario">
              <span>Version {listeLangues(res.langues)}</span>
              <strong>{fourchette(res.etranger12)}</strong>
              <small>sur 12 mois, budget pub déduit</small>
            </div>
          </div>
          <p className="simu-bloc__texte simu-bloc__texte--note">
            À l’étranger, vous n’avez pas encore d’audience : ces ventes viennent de la publicité. Calcul fait
            avec {nombre(res.budgetEtranger)} € de pub par mois et par langue
            {reponses.pub ? '' : ' (vous n’avez pas indiqué de budget, on a pris 500 €)'}, avec des ventes
            un peu plus faibles qu’en France. La traduction n’est pas comptée dans le coût.
          </p>
        </section>
      )}

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
      </section>

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">En 1 minute : comment on travaille</h2>
        <VideoClic youtubeId={VIDEO_OFFRE_ID} titre="Comment Expansion digitalise votre formation" />
      </section>

      {freins.length > 0 && (
        <section className="simu-bloc">
          <h2 className="simu-bloc__titre">Vos freins, nos réponses</h2>
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
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Résultat — publicité                                                 */
/* ------------------------------------------------------------------ */

const LIBELLE_OFFRE = {
  fondspropres: 'votre formation',
  cpf: 'votre formation CPF',
  cfa_eleves: 'votre CFA (apprentis)',
  cfa_employeurs: 'votre CFA (entreprises)',
}

function ResultatPub({ reponses, contact, partage }) {
  const [budget, setBudget] = useState(Number(reponses.budgetPub) || 1500)
  const res = useMemo(() => calculerPub(reponses, { budgetPub: budget }), [reponses, budget])
  const unite = res.cfa ? 'contrats' : 'ventes'
  const conv = CONVERSION_PUB[res.offre]
  const fmtNb = ([a, b]) => {
    const x = Math.round(a)
    const y = Math.round(b)
    return x === y ? `${x}` : `${x} à ${y}`
  }
  return (
    <>
      <header className="simu-resultat__entete">
        <span className="eyebrow">{partage ? 'Simulation partagée' : 'Votre potentiel estimé'}</span>
        <h1 className="simu-resultat__titre">
          {contact?.prenom ? `${contact.prenom}, voici` : 'Voici'} ce que la publicité pourrait rapporter à {LIBELLE_OFFRE[res.offre]}
        </h1>
        <div className="simu-resultat__chiffre">
          <span className="simu-resultat__montant">
            {fourchette(res.ca12)}
            <sup>*</sup>
          </span>
          <span className="simu-resultat__periode">
            {res.cfa ? 'de prise en charge OPCO sur 12 mois' : 'de chiffre d’affaires sur 12 mois'}
          </span>
        </div>
        <p className="simu-resultat__sous">
          Avec {nombre(budget)} € de publicité par mois : {fmtNb(res.leads)} personnes intéressées par mois et{' '}
          {fmtNb(res.cfa ? res.ventes12 : res.ventes12)} {unite} sur l’année
          {res.cfa ? `, à ${nombre(res.valeur)} € par contrat` : `, à ${nombre(res.valeur)} € la formation`}.
        </p>
        <p className="simu-resultat__asterisque">
          * Chiffre d’affaires brut, avant le budget publicitaire et les autres charges. Potentiel estimé, pas
          un résultat garanti.
        </p>
      </header>

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">Testez un autre budget</h2>
        <div className="simu-slider simu-slider--resultat">
          <div className="simu-slider__valeur">
            {nombre(budget)} <span>€ / mois</span>
          </div>
          <input
            type="range"
            min={300}
            max={10000}
            step={100}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            aria-label="Budget publicitaire par mois"
            style={{ '--progress': `${((budget - 300) / 9700) * 100}%` }}
          />
          <div className="simu-slider__bornes" aria-hidden="true">
            <span>300 €</span>
            <span>10 000 €</span>
          </div>
        </div>
      </section>

      <section className="simu-cartes">
        <article className="simu-carte">
          <h3>Personnes intéressées par mois</h3>
          <p className="simu-carte__valeur">{fmtNb(res.leads)}</p>
          <p>
            À {nombre(res.cpl[0])} – {nombre(res.cpl[1])} € par contact.{' '}
            <strong>{res.source}</strong>
          </p>
        </article>
        <article className="simu-carte">
          <h3>{res.cfa ? 'Contrats signés sur l’année*' : 'Ventes par mois*'}</h3>
          <p className="simu-carte__valeur">{res.cfa ? fmtNb(res.ventes12) : fmtNb(res.ventesMois)}</p>
          <p>
            {res.cfa
              ? `Limité à vos ${res.places} places. Environ ${Math.round(conv[0] * 100)} à ${Math.round(conv[1] * 100)} % des contacts signent.`
              : `Environ ${Math.round(conv[0] * 100)} à ${Math.round(conv[1] * 100)} % des contacts achètent quand ils sont rappelés vite.`}
          </p>
        </article>
        <article className="simu-carte">
          <h3>Chiffre d’affaires par mois*</h3>
          <p className="simu-carte__valeur">{fourchette(res.caMois)}</p>
          <p>Brut, une fois les campagnes lancées (les 2 premiers mois servent à les régler).</p>
        </article>
      </section>

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">Ce qui n’est pas compté ici</h2>
        <p className="simu-bloc__texte">
          Le budget publicitaire, notre rémunération et vos éventuels closers. On calcule votre bénéfice réel
          ensemble pendant l’appel, avec vos vrais chiffres.
        </p>
        {reponses.rappel !== 'equipe' && (
          <p className="simu-bloc__texte simu-bloc__texte--note">
            Vous n’avez pas encore quelqu’un pour rappeler les contacts dans la journée : c’est ce qui fait le plus
            varier les ventes. Le calcul en tient compte (ventes réduites). On peut aussi s’en charger.
          </p>
        )}
        {res.offre === 'cpf' && (
          <p className="simu-bloc__texte simu-bloc__texte--note">
            CPF : la publicité est autorisée, le démarchage (appels, SMS ou messages non sollicités) est
            interdit. On ne rappelle que les personnes qui ont demandé à être contactées.
          </p>
        )}
      </section>

    </>
  )
}

/* ------------------------------------------------------------------ */
/* Écran résultat (commun)                                              */
/* ------------------------------------------------------------------ */

function Resultat({ mode, reponses, contact, partage, onRecommencer, onDemanderVideo, videoDemandee }) {
  const [copie, setCopie] = useState(false)
  const { chaleur } = scoreLead(mode, reponses, contact?.role)
  const lienPartage = `${window.location.origin}/simulateur?r=${encoderReponses({ ...reponses, mode })}`

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(lienPartage)
      setCopie(true)
      setTimeout(() => setCopie(false), 2500)
    } catch {
      window.prompt('Copiez ce lien :', lienPartage)
    }
  }

  return (
    <div className="simu-resultat">
      {mode === 'pub' ? (
        <ResultatPub reponses={reponses} contact={contact} partage={partage} />
      ) : (
        <ResultatFormation reponses={reponses} contact={contact} partage={partage} />
      )}

      <section className="simu-bloc">
        <h2 className="simu-bloc__titre">Ils l’ont fait : résultats réels de nos clients</h2>
        <div className="simu-cas">
          <div className="simu-cas__item">
            <strong>150 000 €</strong>
            <span>de chiffre d’affaires pour l’un de nos clients après la digitalisation de ses formations</span>
          </div>
          <div className="simu-cas__item">
            <strong>15 000 €</strong>
            <span>générés le premier mois de publicité pour un autre client</span>
          </div>
        </div>
      </section>

      {partage ? (
        <section className="simu-bloc simu-reserver" id="reserver">
          <h2 className="simu-bloc__titre">Parlons de ce projet</h2>
          <Calendly />
        </section>
      ) : (
        <FinParcours
          contact={contact}
          chaleur={chaleur}
          mode={mode}
          onDemanderVideo={onDemanderVideo}
          videoDemandee={videoDemandee}
        />
      )}

      <section className="simu-bloc simu-bloc--discret">
        <p className="simu-mention">
          * Simulation indicative basée sur vos réponses et sur des hypothèses prudentes. Ce n’est pas une
          promesse de résultat : vos ventes dépendront de votre offre, de votre audience et de votre suivi
          commercial.
        </p>
        <details className="simu-hypotheses">
          <summary>Comment c’est calculé</summary>
          {mode === 'pub' ? (
            <ul>
              <li>Coût par contact : relevé sur nos propres campagnes Meta quand nous avons déjà diffusé dans votre domaine, sinon estimation prudente.</li>
              <li>Environ 1 contact sur 2 prend rendez-vous, puis 10 à 15 % signent. Moins si personne ne rappelle vite.</li>
              <li>Plus la formation est chère, moins les contacts achètent.</li>
              <li>Montée en charge : les campagnes tournent à 50 % le 1er mois et 80 % le 2e, le temps de les régler.</li>
              <li>CFA : 2 à 5 % des candidats et 4 à 8 % des entreprises intéressées aboutissent à un contrat, dans la limite de vos places.</li>
            </ul>
          ) : (
            <ul>
              <li>Au lancement : de 0,5 à 5 % de vos anciens élèves rachètent selon votre métier, et 0,05 à 0,1 % de vos abonnés.</li>
              <li>Chaque mois : 10 à 18 % de vos nouveaux élèves prennent aussi la version en ligne, et 0,01 à 0,02 % de vos abonnés achètent.</li>
              <li>Publicité : 1 € investi rapporte {String(HYPOTHESES.retourPub[0]).replace('.', ',')} à {String(HYPOTHESES.retourPub[1]).replace('.', ',')} € de ventes, budget déduit.</li>
              <li>Plus le prix est élevé, moins il y a d’acheteurs. Chaque formation supplémentaire rapporte moins que la précédente.</li>
              <li>Étranger : une langue traduite rapporte environ 70 % de ce que rapporte la publicité en France, à budget égal, budget déduit.</li>
              <li>CFA : prise en charge saisie, −20 % au-delà de 80 % à distance (plancher 4 000 €), 2 à 5 % des candidats signent.</li>
            </ul>
          )}
        </details>
        <div className="simu-pied">
          <button type="button" className="simu-lien" onClick={copier}>
            {copie ? 'Lien copié ✓' : 'Partager ma simulation (utile si vous décidez à plusieurs)'}
          </button>
          <button type="button" className="simu-lien" onClick={onRecommencer}>
            Faire une autre simulation
          </button>
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Envoi                                                                */
/* ------------------------------------------------------------------ */

function lireUtm() {
  try {
    return JSON.parse(window.sessionStorage.getItem('expansion-utm')) || {}
  } catch {
    return {}
  }
}

function libelleReponse(liste, id, reponses) {
  const q = liste.find((x) => x.id === id)
  const v = reponses[id]
  if (!q) return ''
  if (Array.isArray(v)) return v.map((x) => q.options.find((o) => o.value === x)?.label || x).join(', ')
  if (v === null) return 'Je ne sais pas'
  if (v === undefined) return ''
  return q.options?.find((o) => o.value === v)?.label ?? String(v)
}

async function posterWebhook(donnees) {
  if (!WEBHOOK_URL) return
  const corps = new URLSearchParams(Object.entries(donnees).map(([k, v]) => [k, String(v ?? '')]))
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

function construireDonnees(mode, reponses, infos) {
  const { score, chaleur } = scoreLead(mode, reponses, infos.role)
  const utm = lireUtm()
  const liste = mode === 'pub' ? QUESTIONS_PUB : QUESTIONS
  const lib = (id) => libelleReponse(liste, id, reponses)
  const commun = {
    date: new Date().toISOString(),
    mode: mode === 'pub' ? 'Publicité' : 'Formation en ligne',
    prenom: infos.prenom,
    centre: infos.centre,
    ville: infos.ville,
    email: infos.email,
    telephone: infos.telephone,
    instagram: infos.instagram,
    role: ROLES.find((r) => r.value === infos.role)?.label || '',
    chaleur,
    score,
    domaine: lib('domaine'),
    delai: lib('delai'),
    lien_resultat: `${window.location.origin}/simulateur?r=${encoderReponses({ ...reponses, mode })}`,
    utm_source: utm.utm_source || '',
    utm_medium: utm.utm_medium || '',
    utm_campaign: utm.utm_campaign || '',
    utm_content: utm.utm_content || '',
    utm_term: utm.utm_term || '',
    fbclid: utm.fbclid || '',
    source_trafic: lireSource()?.libelle || '',
    canal_trafic: lireSource()?.canal || '',
    consentement: 'oui',
  }
  if (mode === 'pub') {
    const res = calculerPub(reponses)
    return {
      ...commun,
      type_offre: lib('offre'),
      prix_en_ligne: res.valeur,
      budget_pub: `${res.budget} € / mois`,
      budget_pub_mensuel: res.budget,
      leads_mois: `${Math.round(res.leads[0])} à ${Math.round(res.leads[1])}`,
      cpl: `${res.cpl[0]} à ${res.cpl[1]} €`,
      nb_formations: res.cfa ? `${res.places} places` : '',
      freins: lib('rappel') ? `Rappel des contacts : ${lib('rappel')}` : '',
      mensuel_min: Math.round(res.caMois[0]),
      mensuel_max: Math.round(res.caMois[1]),
      annee1_min: Math.round(res.ca12[0]),
      annee1_max: Math.round(res.ca12[1]),
      _valeur: Math.round(res.ca12[0]),
    }
  }
  const res = calculer(reponses)
  return {
    ...commun,
    type_offre: lib('type'),
    prix_presentiel: reponses.type === 'cfa' ? `NPEC ${Math.round(res.npec)} €` : '',
    eleves_par_an: reponses.type === 'cfa' ? `${lib('capacite')} places à distance` : lib('eleves'),
    anciens_eleves: lib('anciens'),
    abonnes: lib('abonnes'),
    existant: lib('existant'),
    nb_formations: lib('formations'),
    coaching: lib('coaching'),
    budget_pub: lib('pub'),
    budget_pub_mensuel: Number(reponses.pub ?? 0),
    langues: lib('langues'),
    etranger: (reponses.langues || []).length ? 'Oui' : 'Non',
    freins: lib('freins'),
    prix_en_ligne: Math.round(res.prix),
    lancement_min: Math.round(res.caLancement[0]),
    lancement_max: Math.round(res.caLancement[1]),
    mensuel_min: Math.round(res.netMensuel[0]),
    mensuel_max: Math.round(res.netMensuel[1]),
    annee1_min: Math.round(res.annee1[0]),
    annee1_max: Math.round(res.annee1[1]),
    _valeur: Math.round(res.annee1[0]),
  }
}

/* ------------------------------------------------------------------ */
/* Application (page dédiée ou intégrée à l'accueil)                    */
/* ------------------------------------------------------------------ */

const ETAT_VIDE = { mode: null, ecran: 'intro', reponses: {}, contact: null, envoye: false, video: false }

export function SimulateurApp({ embarque = false }) {
  const navigate = useNavigate()
  const params = useMemo(
    () => new URLSearchParams(!embarque && typeof window !== 'undefined' ? window.location.search : ''),
    [embarque],
  )
  const partage = useMemo(() => {
    const code = params.get('r')
    return code ? decoderReponses(code) : null
  }, [params])

  const initial = useMemo(() => {
    if (embarque) return ETAT_VIDE
    if (partage) return { ...ETAT_VIDE, mode: partage.mode || 'formation', ecran: 'resultat', reponses: partage, envoye: true }
    const modeUrl = params.get('mode')
    const domaineUrl = params.get('d')
    if (modeUrl === 'pub' || modeUrl === 'formation') return { ...ETAT_VIDE, mode: modeUrl, ecran: 0 }
    if (domaineUrl) return { ...ETAT_VIDE, mode: 'formation', ecran: 0, reponses: { domaine: domaineUrl } }
    return lireStockage() || ETAT_VIDE
  }, [params, partage, embarque])

  const [etat, setEtat] = useState(initial)
  const { mode, ecran, reponses, contact, envoye, video } = etat
  const maj = (patch) => setEtat((e) => ({ ...e, ...patch }))
  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const haut = useRef(null)
  const premierRendu = useRef(true)

  const liste = useMemo(() => (mode ? questionsActives(mode, reponses) : []), [mode, reponses])

  useEffect(() => {
    if (embarque) return
    if (params.has('d') || params.has('mode')) {
      const propre = new URLSearchParams(params)
      propre.delete('d')
      propre.delete('mode')
      const q = propre.toString()
      window.history.replaceState(null, '', `/simulateur${q ? `?${q}` : ''}`)
    }
    try {
      const utm = {}
      ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'].forEach((k) => {
        const v = params.get(k)
        if (v) utm[k] = v
      })
      if (Object.keys(utm).length) window.sessionStorage.setItem('expansion-utm', JSON.stringify(utm))
    } catch {
      /* ignore */
    }
  }, [params, embarque])

  useEffect(() => {
    if (partage) return
    if (embarque && etat.ecran === 'intro') return
    ecrireStockage(etat)
  }, [etat, partage, embarque])

  useEffect(() => {
    if (premierRendu.current) {
      premierRendu.current = false
      return
    }
    const el = haut.current
    if (!el) return
    if (embarque) {
      const top = el.getBoundingClientRect().top
      if (top < 0 || top > window.innerHeight * 0.4) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [ecran, embarque])

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

  const choisirMode = (m) => {
    trackCustom('SimulateurDebut', { mode: m })
    evenementGA('simulateur_debut', { mode: m, emplacement: embarque ? 'accueil' : 'page' })
    setEtat({ ...ETAT_VIDE, mode: m, ecran: 0 })
  }

  const repondre = useCallback(
    (id, valeur) => {
      setEtat((e) => {
        const nouvelles = { ...e.reponses, [id]: valeur }
        const actives = questionsActives(e.mode, nouvelles)
        const index = actives.findIndex((q) => q.id === id)
        trackCustom('SimulateurQuestion', { question: index + 1, mode: e.mode })
        evenementGA('simulateur_question', { numero: index + 1, question: id, mode: e.mode })
        return { ...e, reponses: nouvelles, suivant: index + 1 < actives.length ? index + 1 : 'contact' }
      })
    },
    [],
  )

  // Passage à l'écran suivant, avec un petit délai pour voir le choix sélectionné.
  useEffect(() => {
    if (etat.suivant === undefined) return
    const t = setTimeout(() => setEtat((e) => ({ ...e, ecran: e.suivant, suivant: undefined })), 200)
    return () => clearTimeout(t)
  }, [etat.suivant])

  const retour = () => {
    if (ecran === 'contact') maj({ ecran: liste.length - 1 })
    else if (ecran === 0) maj({ ecran: 'intro', mode: null })
    else if (typeof ecran === 'number') maj({ ecran: ecran - 1 })
  }

  const envoyer = async (infos) => {
    const { robot, ...propre } = infos
    if (robot) {
      maj({ contact: propre, ecran: 'resultat' })
      return
    }
    setEnvoiEnCours(true)
    const donnees = construireDonnees(mode, reponses, propre)
    const { _valeur, ...corps } = donnees
    if (!envoye) await posterWebhook(corps)
    track('Lead', { value: _valeur, currency: 'EUR' })
    evenementGA('generate_lead', {
      lead_source: 'simulateur',
      simulateur_mode: mode,
      canal_source: lireSource()?.canal || '',
      outil_source: lireSource()?.outil || '',
      value: _valeur,
      currency: 'EUR',
      domaine: reponses.domaine || reponses.offre || '',
      chaleur: corps.chaleur,
      score: corps.score,
    })
    const suivant = { ...etat, contact: propre, envoye: true, ecran: 'resultat', suivant: undefined }
    setEnvoiEnCours(false)
    if (embarque) {
      ecrireStockage(suivant)
      navigate('/simulateur')
      return
    }
    setEtat(suivant)
  }

  const demanderVideo = async (details = {}) => {
    maj({ video: true })
    evenementGA('simulateur_video_demandee', { mode })
    trackCustom('SimulateurVideo', { mode })
    if (!contact?.email) return
    const res = resultat(mode, reponses)
    const liste = (v) => (Array.isArray(v) ? v.join(', ') : v || '')
    await posterWebhook({
      evenement: 'video',
      date: new Date().toISOString(),
      mode: mode === 'pub' ? 'Publicité' : 'Formation en ligne',
      prenom: contact.prenom,
      centre: contact.centre,
      ville: contact.ville,
      instagram: details.lien || contact.instagram,
      email: contact.email,
      telephone: contact.telephone,
      domaine: libelleReponse(mode === 'pub' ? QUESTIONS_PUB : QUESTIONS, mode === 'pub' && !reponses.domaine ? 'offre' : 'domaine', reponses),
      annee1_min: Math.round(res.annee1[0]),
      annee1_max: Math.round(res.annee1[1]),
      lien_resultat: `${window.location.origin}/simulateur?r=${encoderReponses({ ...reponses, mode })}`,
      formation_prioritaire: details.formation || '',
      prix_session: mode === 'pub' ? [details.prix, details.session && `session : ${details.session}`].filter(Boolean).join(' · ') : '',
      objectif: details.objectif || '',
      origine_eleves: [liste(details.origine), details.deplait && `ce qui déplaît : ${details.deplait}`].filter(Boolean).join(' · '),
      deja_essaye: [details.deja, details.blocage].filter(Boolean).join(' : '),
      places_restantes: details.places || '',
      zone: details.zone || '',
      eleves_rentables: liste(details.rentables),
      pub_avant: [details.pubAvant, details.cplAvant && `CPL : ${details.cplAvant}`].filter(Boolean).join(' · '),
      question_video: details.question || '',
    })
  }

  const recommencer = () => {
    setEtat(ETAT_VIDE)
    if (partage) window.history.replaceState(null, '', '/simulateur')
  }

  const question = typeof ecran === 'number' ? liste[ecran] : null

  return (
    <div className={embarque ? 'simu-embarque' : undefined} ref={haut}>
      <main
        className={`simu-main${ecran === 'resultat' ? ' simu-main--large' : ''}${ecran === 'intro' ? ' simu-main--intro' : ''}`}
      >
        {ecran === 'intro' && <Intro onChoisir={choisirMode} embarque={embarque} />}
        {question && (
          <Question
            key={`${mode}-${question.id}`}
            mode={mode}
            question={question}
            index={ecran}
            total={liste.length}
            reponses={reponses}
            onRepondre={repondre}
            onRetour={retour}
          />
        )}
        {ecran === 'contact' && (
          <Contact mode={mode} reponses={reponses} onEnvoyer={envoyer} onRetour={retour} envoiEnCours={envoiEnCours} />
        )}
        {ecran === 'resultat' && !embarque && (
          <Resultat
            mode={mode}
            reponses={reponses}
            contact={contact}
            partage={Boolean(partage)}
            onRecommencer={recommencer}
            onDemanderVideo={demanderVideo}
            videoDemandee={video}
          />
        )}
      </main>
    </div>
  )
}

function Simulateur() {
  return (
    <div className="simu-page">
      <header className="simu-header">
        <Link to="/" className="navbar__brand simu-header__marque">
          <span className="navbar__brand-dot" aria-hidden="true" />
          Expansion
        </Link>
      </header>
      <SimulateurApp />
    </div>
  )
}

export default Simulateur

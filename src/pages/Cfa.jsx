import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/simulateur.css'
import '../styles/secteur.css'
import '../styles/cfa.css'

export const CALENDLY_CFA = 'https://calendly.com/expansionagency/presentation-strategie-clone'

function FlecheExterne() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const LEVIERS = [
  {
    tag: 'Côté entreprises',
    titre: 'Des entreprises prêtes à recruter vos alternants',
    texte:
      'Vos élèves sont inscrits mais n’ont pas encore de contrat ? On cible les dirigeants et recruteurs de votre zone et de vos métiers, avec une pub qui leur montre ce qu’un alternant peut leur apporter.',
    points: [
      'Ciblage par secteur, taille d’entreprise et zone géographique',
      'Formulaire qui qualifie le besoin : poste, ville, date d’embauche',
      'Demandes transmises à votre équipe en temps réel',
    ],
  },
  {
    tag: 'Côté candidats',
    titre: 'Des candidats pour remplir vos promotions',
    texte:
      'Il vous reste des places pour la prochaine rentrée ? On attire des jeunes qui cherchent une formation en alternance, avec des pubs pensées pour les réseaux où ils passent leur temps.',
    points: [
      'Campagnes Meta, TikTok et Snapchat par formation',
      'Questions de sélection : âge, niveau d’études, rentrée souhaitée',
      'Candidatures classées dans un tableau prêt à rappeler',
    ],
  },
]

const INCLUS = [
  {
    titre: 'Les vidéos publicitaires',
    texte:
      'On écrit les scripts et on produit les vidéos : face caméra, motion design ou témoignages de vos alternants. Chaque pub parle à une seule cible.',
  },
  {
    titre: 'Les formulaires qualifiants',
    texte:
      'Les bonnes questions dès le premier contact, pour que votre équipe sache tout de suite qui rappeler en priorité.',
  },
  {
    titre: 'La remontée des contacts',
    texte:
      'Chaque nouvelle demande arrive dans un Google Sheet et peut déclencher un email et un SMS, à la personne comme à votre équipe.',
  },
  {
    titre: 'Le pilotage des campagnes',
    texte:
      'On suit le coût par contact, on coupe ce qui ne marche pas et on renforce ce qui marche, chaque semaine.',
  },
]

const ETAPES = [
  {
    titre: 'Appel stratégie',
    texte: 'On fait le point sur vos formations, vos places restantes et le nombre d’entreprises qu’il vous manque.',
  },
  {
    titre: 'Création des pubs',
    texte: 'Scripts, vidéos, visuels et formulaires : on prépare tout, vous validez avant la mise en ligne.',
  },
  {
    titre: 'Lancement',
    texte: 'Les campagnes sont lancées sur les bonnes plateformes et les premiers contacts arrivent dans votre tableau.',
  },
  {
    titre: 'Suivi et ajustements',
    texte: 'Point régulier sur les résultats, nouvelles pubs quand il le faut, et bilan avant chaque rentrée.',
  },
]

const FAQ = [
  {
    q: 'Qui rappelle les entreprises et les candidats ?',
    a: 'Votre équipe, puisque c’est elle qui connaît vos formations. On s’occupe de faire venir les contacts et de vous les transmettre au bon endroit, avec les informations utiles pour les rappeler vite.',
  },
  {
    q: 'Peut-on ne cibler que les entreprises, ou que les candidats ?',
    a: 'Oui. On peut lancer un seul des deux leviers ou les deux en parallèle, selon ce qui vous manque le plus à l’approche de la rentrée.',
  },
  {
    q: 'Sur quelles plateformes passent les publicités ?',
    a: 'Meta (Facebook et Instagram) pour toucher les dirigeants comme les jeunes, et TikTok ou Snapchat quand on cherche des candidats. On choisit selon vos formations et votre cible.',
  },
  {
    q: 'Faut-il déjà avoir des vidéos ?',
    a: 'Non. On écrit et on produit les pubs. Si vous avez des alternants ou des entreprises partenaires prêts à témoigner, on les intègre : c’est souvent ce qui convainc le plus.',
  },
  {
    q: 'Combien ça coûte ?',
    a: 'Chaque accompagnement est construit sur mesure, selon le nombre de formations, les zones à couvrir et vos objectifs. On vous fait une proposition claire après l’appel stratégie.',
  },
]

function Cfa() {
  const nav = [
    { href: '#leviers', label: 'Ce qu’on apporte' },
    { href: '#methode', label: 'Méthode' },
    { href: '#faq', label: 'FAQ' },
    { href: '/simulation', label: 'Calculer mon potentiel', className: 'navbar__simu' },
  ]

  return (
    <>
      <Navbar items={nav} crossLink={{ to: '/', label: 'Accueil' }} cta={{ href: CALENDLY_CFA, label: 'Réserver un appel' }} />

      <main className="secteur">
        <section className="secteur-hero">
          <nav className="secteur-fil" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">CFA</span>
          </nav>
          <span className="eyebrow" data-reveal>
            Publicité pour CFA et écoles en alternance
          </span>
          <h1 className="secteur-hero__titre" data-reveal style={{ '--reveal-delay': '100ms' }}>
            Des entreprises pour vos alternants,{' '}
            <span className="secteur-hero__italique">des candidats pour vos rentrées</span>
          </h1>
          <p className="secteur-hero__intro" data-reveal style={{ '--reveal-delay': '180ms' }}>
            Trouver une entreprise à chaque élève, remplir chaque promotion : on lance pour votre CFA des campagnes
            publicitaires qui font venir les deux. Vidéos, formulaires, ciblage et suivi des contacts, on s’occupe de
            tout. Votre équipe n’a plus qu’à rappeler.
          </p>
          <div className="secteur-hero__boutons" data-reveal style={{ '--reveal-delay': '260ms' }}>
            <a href={CALENDLY_CFA} target="_blank" rel="noreferrer" className="btn btn--primary">
              Réserver un appel stratégie
              <FlecheExterne />
            </a>
            <a href="#leviers" className="btn btn--secondary">
              Voir ce qu’on apporte
            </a>
          </div>
          <p className="secteur-hero__confiance">Meta · TikTok · Snapchat Ads</p>
        </section>

        <section className="secteur-section" id="leviers">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Deux leviers</span>
            <h2 className="section-head__title">
              Ce qui manque à votre CFA,{' '}
              <span className="section-head__title-italic">on va le chercher</span>
            </h2>
          </div>
          <div className="cfa-leviers">
            {LEVIERS.map((l, i) => (
              <article key={l.titre} className="cfa-levier" data-reveal style={{ '--reveal-delay': `${i * 100}ms` }}>
                <span className="cfa-levier__tag">{l.tag}</span>
                <h3>{l.titre}</h3>
                <p>{l.texte}</p>
                <ul>
                  {l.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="secteur-section secteur-section--alt">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Clé en main</span>
            <h2 className="section-head__title">
              Tout ce qu’on met en place{' '}
              <span className="section-head__title-italic">pour vous</span>
            </h2>
          </div>
          <div className="secteur-grille">
            {INCLUS.map((p, i) => (
              <article key={p.titre} className="secteur-carte" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="secteur-carte__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.titre}</h3>
                <p>{p.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secteur-section" id="methode">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Notre méthode</span>
            <h2 className="section-head__title">
              Du premier appel{' '}
              <span className="section-head__title-italic">aux premiers contacts</span>
            </h2>
          </div>
          <ol className="secteur-etapes">
            {ETAPES.map((e, i) => (
              <li key={e.titre} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="secteur-etapes__num">{i + 1}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="faq" className="faq">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="section-head__title">
              Vos questions{' '}
              <span className="section-head__title-italic">sur l’accompagnement</span>
            </h2>
          </div>
          <div className="faq__inner">
            <div className="faq__list">
              {FAQ.map((item) => (
                <details key={item.q} className="faq-item" data-reveal>
                  <summary className="faq-item__summary">
                    {item.q}
                    <span className="faq-item__icon" aria-hidden="true">
                      <svg viewBox="0 0 14 14" fill="none">
                        <path d="M7 2 V12 M2 7 H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-item__answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="cta-final">
        <div className="cta-final__inner">
          <div className="cta-final__card" data-reveal="scale">
            <span className="eyebrow cta-final__eyebrow">Parlons-en</span>
            <h2 className="cta-final__title">
              Prêt à préparer{' '}
              <span className="cta-final__title-italic">votre prochaine rentrée ?</span>
            </h2>
            <p className="cta-final__desc">
              30 minutes pour faire le point sur vos formations, vos places restantes et les entreprises qu’il vous
              manque. On vous dit concrètement ce qu’on lancerait pour vous.
            </p>
            <a href={CALENDLY_CFA} target="_blank" rel="noreferrer" className="btn btn--primary">
              Réserver un appel stratégie
              <FlecheExterne />
            </a>
            <span className="cta-final__reassurance">Gratuit · Sans engagement · 30 minutes</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cfa

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ouvrirPreferencesCookies } from '../lib/consentement'
import { PIXEL_ID } from '../lib/pixel'

const AVEC_PUBLICITE = Boolean(PIXEL_ID)

function Confidentialite() {
  return (
    <>
      <Navbar items={[]} crossLink={{ to: '/', label: 'Accueil' }} />
      <main className="legal">
        <div className="legal__inner">
          <header className="legal__header" data-reveal>
            <span className="eyebrow">Vos données personnelles</span>
            <h1 className="legal__title">
              Politique de{' '}
              <span className="legal__title-italic">confidentialité</span>
            </h1>
            <p className="legal__updated">Dernière mise à jour : octobre 2026</p>
          </header>

          <section className="legal__section">
            <h2 className="legal__h2">1. Responsable de traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur le site <strong>www.expansion-agency.com</strong> est&nbsp;:
            </p>
            <ul className="legal__list">
              <li>Nathanaël Dahomais (The Expansion Agency) — entrepreneur individuel</li>
              <li>Siège : 9 rue Le Bout aux Épines, 78270 La Villeneuve-en-Chevrie</li>
              <li>SIREN : 831 862 008</li>
              <li>Contact : <a href="mailto:contact@expansion-agency.com">contact@expansion-agency.com</a></li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">2. Données collectées</h2>
            <p>
              Nous collectons les données suivantes lorsque vous interagissez
              avec le site&nbsp;:
            </p>
            <ul className="legal__list">
              <li>
                <strong>Formulaire de contact / prise de rendez-vous</strong> :
                nom, prénom, email, téléphone, nom de l'organisme, message.
              </li>
              <li>
                <strong>Simulateur de potentiel</strong> : vos réponses au
                questionnaire (domaine, élèves, audience, projet…) ainsi que
                prénom, nom de votre organisme, ville, email, téléphone et, si
                vous le renseignez, votre compte Instagram.
              </li>
              <li>
                <strong>Réservation d'appel via Calendly</strong> : informations
                fournies par vous dans le formulaire de réservation.
              </li>
              <li>
                <strong>Navigation sur le site</strong>, uniquement si vous
                l’acceptez dans le bandeau cookies : pages consultées, parcours
                sur le site, type d’appareil et de navigateur, ville
                approximative, source de la visite. Ces données sont mesurées
                par Google Analytics{AVEC_PUBLICITE ? ' et, pour la publicité, par le pixel Meta' : ''}.
                Sans votre accord, aucune mesure n’est effectuée.
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">3. Finalités et bases légales</h2>
            <ul className="legal__list">
              <li>
                <strong>Répondre à vos demandes</strong> (formulaires, emails,
                rendez-vous) — base légale : exécution de mesures
                précontractuelles ou intérêt légitime.
              </li>
              <li>
                <strong>Vous envoyer le récapitulatif de votre simulation et
                vous recontacter au sujet de votre projet</strong> — base
                légale : votre consentement, que vous pouvez retirer à tout
                moment.
              </li>
              <li>
                <strong>Exécuter le contrat</strong> si vous devenez client —
                base légale : exécution du contrat.
              </li>
              <li>
                <strong>Mesurer l'audience du site</strong> pour en améliorer
                le contenu{AVEC_PUBLICITE ? ' et mesurer les résultats de nos publicités' : ''} — base
                légale : votre consentement, donné et retirable à tout moment
                via le bandeau cookies.
              </li>
              <li>
                <strong>Respecter nos obligations légales</strong> (comptabilité,
                facturation) — base légale : obligation légale.
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">4. Durées de conservation</h2>
            <ul className="legal__list">
              <li>
                <strong>Prospects</strong> : 3 ans à compter du dernier contact.
              </li>
              <li>
                <strong>Clients</strong> : durée de la relation commerciale,
                puis 5 ans après la fin de la relation (prescription
                commerciale), et 10 ans pour les documents comptables.
              </li>
              <li>
                <strong>Statistiques d'audience</strong> : 14 mois dans Google
                Analytics ; cookies de mesure : 13 mois maximum.
              </li>
              <li>
                <strong>Votre choix sur les cookies</strong> : 6 mois, après
                quoi il vous est redemandé.
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">5. Destinataires et sous-traitants</h2>
            <p>
              Vos données sont accessibles uniquement au Prestataire et aux
              sous-traitants techniques suivants, strictement dans le cadre de
              l'exécution du service&nbsp;:
            </p>
            <ul className="legal__list">
              <li><strong>Vercel Inc.</strong> — hébergement du site (États-Unis, garanties contractuelles type DPF).</li>
              <li><strong>Calendly LLC</strong> — prise de rendez-vous en ligne (États-Unis, garanties contractuelles type DPF).</li>
              <li><strong>Make (Celonis)</strong> — transmission des réponses du simulateur vers nos outils de suivi (Union européenne).</li>
              <li><strong>Google LLC</strong> — tableur de suivi des demandes et, avec votre accord, mesure d'audience Google Analytics (garanties contractuelles type DPF).</li>
              {AVEC_PUBLICITE && (
                <li><strong>Meta Platforms Ireland Ltd</strong> — avec votre accord, mesure des résultats de nos publicités Facebook et Instagram (pixel Meta).</li>
              )}
              <li><strong>Supabase Inc.</strong> — base de données (si utilisée pour stocker vos informations).</li>
            </ul>
            <p>
              Vos données ne sont <strong>jamais</strong> revendues à des tiers.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">6. Cookies</h2>
            <p>
              Lors de votre première visite, un bandeau vous demande votre
              accord. Refuser est aussi simple qu’accepter, et rien n’est
              mesuré tant que vous n’avez pas choisi.
            </p>
            <ul className="legal__list">
              <li>
                <strong>Nécessaires</strong> (sans accord) : mémorisation de
                votre choix sur les cookies et de votre progression dans le
                simulateur, stockées dans votre navigateur.
              </li>
              <li>
                <strong>Mesure d’audience</strong> (avec accord) : cookies
                Google Analytics <code>_ga</code> et <code>_ga_*</code>, 13 mois
                maximum.
              </li>
              {AVEC_PUBLICITE && (
                <li>
                  <strong>Publicité</strong> (avec accord) : cookies Meta{' '}
                  <code>_fbp</code> et <code>_fbc</code>, 3 mois.
                </li>
              )}
              <li>
                <strong>Agenda Calendly</strong> : l’agenda intégré, que vous
                ouvrez pour réserver un appel, est fourni par Calendly qui
                peut déposer ses propres cookies de fonctionnement.
              </li>
            </ul>
            <p>
              Vous pouvez modifier votre choix à tout moment&nbsp;: les cookies
              de mesure sont alors supprimés.
            </p>
            <p>
              <button type="button" className="btn btn--secondary" onClick={ouvrirPreferencesCookies}>
                Gérer les cookies
              </button>
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">7. Vos droits</h2>
            <p>
              Conformément au Règlement général sur la protection des données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants&nbsp;:
            </p>
            <ul className="legal__list">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition pour des motifs légitimes</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit de définir des directives post-mortem</li>
            </ul>
            <p>
              Pour exercer ces droits, adressez votre demande par email à{' '}
              <a href="mailto:contact@expansion-agency.com">
                contact@expansion-agency.com
              </a>
              . Une réponse vous sera apportée dans un délai maximum d'un mois.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">8. Réclamation auprès de la CNIL</h2>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne
              sont pas respectés, vous pouvez adresser une réclamation à la
              Commission nationale de l'informatique et des libertés (CNIL) —{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">9. Sécurité</h2>
            <p>
              Le Prestataire met en œuvre les mesures techniques et
              organisationnelles appropriées pour garantir la sécurité et la
              confidentialité de vos données personnelles (chiffrement en
              transit, accès restreint, sauvegardes).
            </p>
          </section>

          <p className="legal__contact">
            Pour toute question sur cette politique :{' '}
            <a href="mailto:contact@expansion-agency.com">
              contact@expansion-agency.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Confidentialite

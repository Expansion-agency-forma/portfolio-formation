import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Cgv() {
  return (
    <>
      <Navbar items={[]} crossLink={{ to: '/', label: 'Accueil' }} />
      <main className="legal">
        <div className="legal__inner">
          <header className="legal__header" data-reveal>
            <span className="eyebrow">Conditions générales</span>
            <h1 className="legal__title">
              Conditions générales{' '}
              <span className="legal__title-italic">de vente</span>
            </h1>
            <p className="legal__updated">Dernière mise à jour : avril 2026</p>
          </header>

          <section className="legal__section">
            <h2 className="legal__h2">Article 1 — Objet</h2>
            <p>
              Les présentes conditions générales de vente (ci-après « CGV »)
              régissent les relations contractuelles entre The Expansion Agency,
              entreprise individuelle immatriculée au RNE sous le numéro SIREN
              831 862 008, dont le siège est situé 9 rue Le Bout aux Épines,
              78270 La Villeneuve-en-Chevrie (ci-après « le Prestataire »), et
              toute personne physique ou morale sollicitant ses services
              (ci-après « le Client »).
            </p>
            <p>
              Toute commande passée auprès du Prestataire implique
              l'acceptation sans réserve des présentes CGV par le Client.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 2 — Services proposés</h2>
            <p>Le Prestataire propose les services suivants&nbsp;:</p>
            <ul className="legal__list">
              <li>
                <strong>Digitalisation de formations</strong> : tournage
                professionnel sur site, montage vidéo, mise en module pédagogique,
                livraison d'un système de vente clé en main.
              </li>
              <li>
                <strong>Campagnes publicitaires à la performance</strong> :
                stratégie, production de créatives, gestion et optimisation
                de campagnes sur Meta, TikTok, YouTube et Snapchat.
              </li>
            </ul>
            <p>
              Le périmètre exact de chaque prestation est précisé dans le devis
              transmis au Client avant toute commande.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 3 — Commande et formation du contrat</h2>
            <p>
              Toute demande de prestation donne lieu à l'établissement d'un
              devis personnalisé. Le contrat est formé à compter de la signature
              du devis par le Client et du versement de l'acompte éventuel prévu.
            </p>
            <p>
              Le Client garantit l'exactitude des informations fournies. Toute
              modification substantielle du périmètre en cours de mission fera
              l'objet d'un avenant écrit.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 4 — Prix et modalités de paiement</h2>
            <p>
              Les prix sont exprimés en euros, hors taxes. En tant
              qu'entrepreneur individuel bénéficiant de la franchise en base de
              TVA, le Prestataire n'applique pas de TVA (article 293 B du Code
              général des impôts), sauf mention contraire.
            </p>
            <p>
              Les modalités de paiement sont précisées dans le devis. Le
              paiement s'effectue par virement bancaire. Sauf accord contraire,
              les factures sont réglables à réception.
            </p>
            <p>
              Pour les campagnes publicitaires au résultat, la rémunération du
              Prestataire correspond à un pourcentage du chiffre d'affaires
              généré, indiqué dans le devis (généralement 10 à 20&nbsp;%).
            </p>
            <p>
              Tout retard de paiement entraîne l'application de pénalités au
              taux de 3 fois le taux d'intérêt légal, ainsi qu'une indemnité
              forfaitaire pour frais de recouvrement de 40&nbsp;€ (articles
              L.441-10 et D.441-5 du Code de commerce).
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 5 — Délais et exécution</h2>
            <p>
              Les délais mentionnés dans le devis sont donnés à titre indicatif
              et dépendent de la collaboration active du Client (validations,
              fourniture des éléments, accès aux plateformes nécessaires).
            </p>
            <p>
              Le Prestataire s'engage à réaliser les prestations avec soin et
              selon les règles de l'art. Il est soumis à une obligation de
              moyens, non de résultat, sauf mention contraire au devis.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 6 — Obligations du Client</h2>
            <ul className="legal__list">
              <li>Fournir les informations, accès et contenus nécessaires à l'exécution de la mission dans les délais convenus</li>
              <li>Valider les livrables intermédiaires dans les délais impartis</li>
              <li>Régler les sommes dues dans les délais convenus</li>
              <li>Respecter les réglementations applicables à son activité (publicité, RGPD, consommation)</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 7 — Propriété intellectuelle</h2>
            <p>
              Les livrables (vidéos, scripts, visuels, landing pages, tunnels de
              vente) sont cédés au Client après paiement intégral du prix. Le
              Prestataire conserve la propriété intellectuelle de ses outils,
              méthodes et savoir-faire internes.
            </p>
            <p>
              Le Prestataire se réserve le droit de mentionner les prestations
              réalisées à titre de référence commerciale (portfolio, études de
              cas), sauf demande écrite contraire du Client.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 8 — Confidentialité</h2>
            <p>
              Chaque partie s'engage à préserver la confidentialité des
              informations non publiques échangées dans le cadre de la mission,
              pendant toute la durée du contrat et pendant 3 ans après son
              terme.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 9 — Responsabilité</h2>
            <p>
              La responsabilité du Prestataire est limitée au montant hors taxes
              des sommes effectivement perçues au titre de la mission concernée.
              Le Prestataire ne saurait être tenu responsable des dommages
              indirects (perte de chiffre d'affaires, perte de clientèle, etc.).
            </p>
            <p>
              Le Prestataire ne peut être tenu responsable des décisions des
              plateformes publicitaires tierces (Meta, TikTok, YouTube, Snap),
              notamment en cas de suspension ou de refus de compte publicitaire
              pour non-conformité aux règles des plateformes.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 10 — Force majeure</h2>
            <p>
              Aucune des parties ne pourra être tenue responsable d'un manquement
              à ses obligations résultant d'un cas de force majeure au sens de
              l'article 1218 du Code civil.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 11 — Résiliation</h2>
            <p>
              En cas de manquement grave d'une partie à ses obligations, l'autre
              partie pourra résilier le contrat de plein droit, 15 jours après
              mise en demeure restée sans effet, adressée par lettre recommandée
              avec accusé de réception.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 12 — Protection des données</h2>
            <p>
              Le traitement des données personnelles du Client est décrit dans
              la <a href="/confidentialite">politique de confidentialité</a>.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 13 — Réclamations et médiation</h2>
            <p>
              Toute réclamation doit être adressée par email à{' '}
              <a href="mailto:contact@expansion-agency.com">contact@expansion-agency.com</a>.
              En cas de litige entre professionnels non résolu à l'amiable, les
              parties pourront recourir à la médiation avant toute action en
              justice.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">Article 14 — Droit applicable et juridiction</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, et après échec de toute tentative de règlement amiable,
              compétence exclusive est attribuée au Tribunal de commerce de
              Versailles.
            </p>
          </section>

          <p className="legal__contact">
            Pour toute question relative aux présentes CGV :{' '}
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

export default Cgv

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MentionsLegales() {
  return (
    <>
      <Navbar items={[]} crossLink={{ to: '/', label: 'Accueil' }} />
      <main className="legal">
        <div className="legal__inner">
          <header className="legal__header" data-reveal>
            <span className="eyebrow">Informations légales</span>
            <h1 className="legal__title">
              Mentions{' '}
              <span className="legal__title-italic">légales</span>
            </h1>
            <p className="legal__updated">Dernière mise à jour : avril 2026</p>
          </header>

          <section className="legal__section">
            <h2 className="legal__h2">1. Éditeur du site</h2>
            <p>
              Le site <strong>www.expansion-agency.com</strong> (ci-après « le Site »)
              est édité par&nbsp;:
            </p>
            <ul className="legal__list">
              <li><strong>Nom commercial</strong> : The Expansion Agency</li>
              <li><strong>Raison sociale</strong> : Nathanaël Dahomais</li>
              <li><strong>Forme juridique</strong> : Entrepreneur individuel (EI)</li>
              <li><strong>Siège social</strong> : 9 rue Le Bout aux Épines, 78270 La Villeneuve-en-Chevrie, France</li>
              <li><strong>SIREN</strong> : 831 862 008</li>
              <li><strong>SIRET</strong> : 831 862 008 00016</li>
              <li><strong>Code APE / NAF</strong> : 47.91A — Vente à distance sur catalogue général</li>
              <li><strong>Date de création</strong> : 03 août 2017</li>
              <li><strong>Email</strong> : <a href="mailto:contact@expansion-agency.com">contact@expansion-agency.com</a></li>
              <li><strong>Directeur de la publication</strong> : Nathanaël Dahomais</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">2. Hébergeur</h2>
            <p>Le Site est hébergé par&nbsp;:</p>
            <ul className="legal__list">
              <li><strong>Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>Site web : <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a></li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments présents sur le Site (textes, images, vidéos,
              identité visuelle, éléments graphiques, code source, logos, marques)
              sont la propriété exclusive de The Expansion Agency ou de ses
              partenaires, et sont protégés par le droit de la propriété
              intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, des éléments du Site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans l'autorisation
              écrite préalable de l'éditeur.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">4. Données personnelles</h2>
            <p>
              Les informations recueillies sur le Site font l'objet d'un
              traitement informatique. Pour connaître nos pratiques en matière de
              données personnelles, consultez notre{' '}
              <a href="/confidentialite">politique de confidentialité</a>.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">5. Cookies</h2>
            <p>
              Le Site utilise des cookies techniques et de mesure d'audience
              (Vercel Web Analytics) pour en améliorer le fonctionnement. Aucun
              cookie publicitaire tiers n'est déposé sans votre consentement. Vous
              pouvez gérer leur dépôt depuis les paramètres de votre navigateur.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">6. Responsabilité</h2>
            <p>
              L'éditeur s'efforce de fournir sur le Site des informations aussi
              précises que possible. Toutefois, il ne pourra être tenu responsable
              des omissions, inexactitudes ou carences dans la mise à jour,
              qu'elles soient de son fait ou du fait de tiers partenaires.
            </p>
            <p>
              L'utilisateur est seul responsable de l'usage qu'il fait des
              informations fournies. L'éditeur ne saurait être tenu responsable de
              tout dommage direct ou indirect résultant de l'accès, de
              l'utilisation ou de l'impossibilité d'accéder au Site.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">7. Liens hypertextes</h2>
            <p>
              Le Site peut contenir des liens vers d'autres sites. L'éditeur
              n'exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__h2">8. Droit applicable et juridiction</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et après échec de toute tentative de règlement
              amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <p className="legal__contact">
            Pour toute question relative aux présentes mentions légales :{' '}
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

export default MentionsLegales

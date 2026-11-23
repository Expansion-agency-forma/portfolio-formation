import '../styles/avis-clients.css'

// Retours clients publiés sur Instagram, réécrits en texte pour qu'ils soient lisibles
// par Google et les assistants IA. N'écrire entre guillemets que ce que le client a vraiment dit.
export const AVIS = [
  {
    key: 'beauty-mood',
    nom: 'Johanna',
    centre: 'Beauty Mood, organisme de formation et centre certificateur',
    metier: 'Onglerie',
    lieu: 'Beaumont-lès-Valence',
    citation: 'Il faut se faire confiance et il faut se lancer.',
    texte:
      'Elle recevait de plus en plus de demandes de personnes qui habitaient loin et voulaient suivre sa formation avec tous ses conseils dans le détail. Nous avons filmé sa formation en ligne directement dans son centre.',
    lien: 'https://www.instagram.com/reel/DfSiCewxtg0/',
  },
  {
    key: 'melanie',
    nom: 'Mélanie',
    centre: 'L’Atypique Headspa',
    metier: 'Soins du cheveux et head spa',
    lieu: 'France',
    texte:
      'En deux jours de tournage intensif, nous avons filmé 4 formations complètes. Mélanie raconte son expérience juste après le tournage.',
    lien: 'https://www.instagram.com/reel/DZLMK0bs-9_/',
  },
  {
    key: 'yasmine',
    nom: 'Yasmine',
    centre: 'Formatrice en lissage',
    metier: 'Coiffure',
    lieu: 'France',
    texte:
      'Elle recevait énormément de demandes d’élèves de Paris, Lille ou Lyon qui ne pouvaient pas se déplacer. Sa formation est maintenant en ligne : un vrai gain de temps, une formation accessible partout en France et plus de chiffre d’affaires. D’autres formations en ligne sont en préparation.',
    lien: 'https://www.instagram.com/reel/DeSXCcLxQ9n/',
  },
  {
    key: 'brow-lift',
    nom: 'Formatrice Brow Lift',
    centre: 'Centre de formation en esthétique',
    metier: 'Brow lift et épilation des sourcils',
    lieu: 'Bruxelles',
    texte:
      'Elle hésitait à se lancer. Nous l’avons accompagnée sur tout le projet : structuration du programme, rédaction du contenu, tournage, montage et mise en ligne. Sa formation est prête et elle est pleinement satisfaite du résultat.',
    lien: 'https://www.instagram.com/reel/DbtPkzls4K3/',
  },
  {
    key: 'prothesie',
    nom: 'Formatrice en prothésie ongulaire',
    centre: 'Formations en présentiel et à distance',
    metier: 'Prothésie ongulaire',
    lieu: 'Paris',
    texte:
      'Objectif : proposer une formation à distance en complément du présentiel. En 2 jours de tournage, nous avons réalisé une formation en ligne complète couvrant la majorité des techniques de prothésie ongulaire.',
    lien: 'https://www.instagram.com/reel/DezmsOAxDSt/',
  },
  {
    key: 'marseille',
    nom: 'Formatrice',
    centre: 'Centre de formation',
    metier: 'Digitalisation de formations',
    lieu: 'Marseille',
    texte:
      'Son objectif : digitaliser ses formations pour toucher plus de monde et se libérer du temps sur le long terme. Nous avons pris en charge la structuration, le tournage, le montage et la mise en ligne.',
    lien: 'https://www.instagram.com/reel/DVBVbjFDLop/',
  },
]

function AvisClients() {
  return (
    <section id="avis-clients" className="avis">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Retours clients</span>
        <h2 className="section-head__title">
          Elles ont mis leur formation{' '}
          <span className="section-head__title-italic">en ligne avec nous</span>
        </h2>
      </div>

      <div className="avis__grille">
        {AVIS.map((a) => (
          <article key={a.key} className="avis__carte" data-reveal="fade">
            <div className="avis__entete">
              <span className="avis__metier">{a.metier}</span>
              <span className="avis__lieu">{a.lieu}</span>
            </div>
            {a.citation && <blockquote className="avis__citation">« {a.citation} »</blockquote>}
            <p className="avis__texte">{a.texte}</p>
            <div className="avis__pied">
              <div>
                <strong className="avis__nom">{a.nom}</strong>
                <span className="avis__centre">{a.centre}</span>
              </div>
              <a className="avis__lien" href={a.lien} target="_blank" rel="noopener noreferrer">
                Voir la vidéo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AvisClients

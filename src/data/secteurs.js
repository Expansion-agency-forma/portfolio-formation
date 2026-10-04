// Contenu des pages métiers « Créer une formation en ligne ».
// Une entrée = une page indexable. `domaine` correspond à la 1re question du simulateur,
// `realisations` aux clés de FORMATIONS (src/components/Formations.jsx).

export const BASE_SECTEURS = '/creer-formation-en-ligne'

const METHODE = [
  {
    titre: 'Préparation',
    texte:
      'On construit le programme avec vous : découpage en modules, ordre des techniques, matériel et modèles à prévoir le jour J.',
  },
  {
    titre: 'Tournage dans votre centre',
    texte:
      'Notre équipe vient avec plusieurs caméras, micros, lumières et prompteur. Comptez 2 à 3 jours de tournage en moyenne, selon la longueur de votre formation.',
  },
  {
    titre: 'Montage en modules',
    texte:
      'Chaque module est monté, sous-titré et habillé : les points clés s’affichent à l’écran au moment où vous les dites.',
  },
  {
    titre: 'Mise en ligne et vente',
    texte:
      'Page de vente, inscription, paiement, emails automatiques, puis publicité pour trouver vos élèves. Votre formation est prête à vendre environ 30 jours après le tournage.',
  },
]

const FAQ_PROPRIETE = {
  q: 'À qui appartiennent les vidéos ?',
  a: 'À vous, à 100 %. Nous vous remettons les rushes et les vidéos montées à la livraison, pour que vous puissiez exploiter le contenu comme vous le souhaitez.',
}

export const SECTEURS = [
  {
    slug: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Esthétique & beauté',
    seoTitle: 'Créer une formation en ligne en esthétique | Expansion',
    seoDescription:
      'Ongles, cils, browlift, soins du visage : on filme votre formation esthétique dans votre centre, en gros plan, on la monte en modules et on la vend en ligne.',
    eyebrow: 'Formation en ligne · Esthétique & beauté',
    titre: 'Créez votre formation en\u00a0ligne',
    titreItalique: 'en esthétique et beauté',
    intro:
      'Prothésie ongulaire, extension de cils, rehaussement, browlift, soins du visage : vos gestes se transmettent très bien en vidéo, à condition d’être filmés de près et sous le bon angle. Nous tournons votre formation dans votre centre, nous la découpons en modules et nous mettons en place tout ce qu’il faut pour la vendre en ligne.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation esthétique',
    pourquoi: [
      {
        titre: 'Des gestes vus de plus près qu’en salle',
        texte:
          'En présentiel, vos élèves regardent par-dessus votre épaule. En vidéo, chaque pose et chaque angle de travail sont filmés en gros plan, et elles peuvent revoir le geste autant de fois qu’il le faut.',
      },
      {
        titre: 'Une nouvelle offre pour vos anciennes élèves',
        texte:
          'Les élèves déjà formées sont les premières intéressées par un module de perfectionnement ou une nouvelle technique. Vous vendez à une base qui vous fait déjà confiance.',
      },
      {
        titre: 'Des élèves partout en France',
        texte:
          'Votre formation n’est plus réservée aux personnes qui peuvent venir dans votre centre. Une prothésiste de Lille peut se former avec vous sans quitter son institut.',
      },
      {
        titre: 'Votre présentiel garde sa place',
        texte:
          'La version en ligne ne remplace pas vos sessions : elle peut préparer la pratique, servir de support après la formation ou être vendue seule, selon votre modèle.',
      },
    ],
    filmesTitre: 'Les formations esthétiques que l’on filme',
    filmes: [
      'Prothésie ongulaire : gel, résine, capsules',
      'Extension et rehaussement de cils',
      'Browlift et restructuration des sourcils',
      'Soins du visage et soins à l’appareil',
      'Blanchiment dentaire esthétique',
      'Toute technique qui se montre avec les mains',
    ],
    filmesTexte:
      'Pendant le tournage, une modèle est installée comme en cabine. On filme vos mains, la zone travaillée et votre visage quand vous expliquez, sans jamais gêner votre geste. Les points clés s’affichent à l’écran au moment où vous les dites.',
    realisations: ['prothesie', 'cils', 'rehaussement', 'browlift', 'blanchiment'],
    faq: [
      {
        q: 'Faut-il prévoir une modèle pour le tournage ?',
        a: 'Oui, comme pour une démonstration en cabine. Nous vous indiquons à l’avance combien de modèles prévoir selon le nombre de techniques à filmer, et nous organisons le planning du tournage avec vous.',
      },
      {
        q: 'Une formation en ligne suffit-elle pour apprendre un geste esthétique ?',
        a: 'Pour la théorie, l’hygiène, le matériel et la démonstration, oui. Pour la pratique sur modèle, beaucoup de centres choisissent un format mixte : la vidéo prépare l’élève, la session en centre valide le geste. Nous construisons l’offre avec vous.',
      },
      {
        q: 'Combien de temps dure le tournage ?',
        a: 'Deux à trois jours en moyenne. Plus la formation est longue, avec plusieurs techniques ou plusieurs intervenantes, plus le tournage prend de temps : on fixe le planning avec vous.',
      },
      FAQ_PROPRIETE,
    ],
  },
  {
    slug: 'coiffure',
    domaine: 'coiffure',
    nom: 'Coiffure',
    seoTitle: 'Créer une formation en ligne en coiffure | Expansion',
    seoDescription:
      'Extensions, lissage, coupe, barbier, head spa : on filme votre formation coiffure dans votre salon ou votre centre, on la monte en modules et on la vend en ligne.',
    eyebrow: 'Formation en ligne · Coiffure',
    titre: 'Créez votre formation en\u00a0ligne',
    titreItalique: 'en coiffure',
    intro:
      'Pose d’extensions, lissage, coloration, coupe homme, head spa : en coiffure, tout se joue dans le placement des mains, les sections et le timing. Nous filmons votre formation là où vous enseignez, sous plusieurs angles, puis nous la transformons en programme en ligne prêt à vendre.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation coiffure',
    pourquoi: [
      {
        titre: 'Chaque section filmée sous plusieurs angles',
        texte:
          'Séparation des mèches, tension, position des outils : la caméra montre ce que l’élève ne voit pas toujours depuis sa place, et il peut revoir chaque étape à son rythme.',
      },
      {
        titre: 'Une offre de plus pour vos anciens élèves',
        texte:
          'Une nouvelle technique ou un module de perfectionnement se propose d’abord aux coiffeurs que vous avez déjà formés.',
      },
      {
        titre: 'Former ceux qui ne peuvent pas fermer leur salon',
        texte:
          'Beaucoup de professionnels hésitent à perdre une journée de chiffre d’affaires pour se former. En ligne, ils apprennent le soir ou le lundi, à leur rythme.',
      },
      {
        titre: 'Un complément à vos sessions',
        texte:
          'La vidéo peut préparer la journée en salon ou servir de support après la formation, pour que vos élèves revoient chaque étape avant de se lancer.',
      },
    ],
    filmesTitre: 'Les formations coiffure que l’on filme',
    filmes: [
      'Pose d’extensions de cheveux',
      'Lissages : brésilien, tanin, kératine',
      'Head spa et soins du cuir chevelu',
      'Coupe, dégradé et barbe',
      'Coloration, balayage et mèches',
      'Toute technique qui se montre sur tête',
    ],
    filmesTexte:
      'On filme sur modèle ou sur tête d’entraînement selon la technique, avec un plan large pour la posture et des plans serrés pour le travail des mèches. Les étapes et les produits utilisés s’affichent à l’écran au bon moment.',
    realisations: ['extensions', 'lissage', 'headspa'],
    faq: [
      {
        q: 'Peut-on tourner dans mon salon ?',
        a: 'Oui. Nous venons avec caméras, micros et lumières, et nous nous adaptons à l’espace. Il suffit de prévoir un créneau sans clientèle pendant le tournage.',
      },
      {
        q: 'Faut-il des modèles ?',
        a: 'Pour les techniques sur cheveux réels (extensions, lissage, coloration), oui. Nous vous aidons à planifier le tournage pour enchaîner les techniques sans temps mort.',
      },
      {
        q: 'Combien de temps entre le tournage et la mise en ligne ?',
        a: 'Le montage est livré sous 3 à 5 semaines selon le volume. Le système de vente (page, inscription, paiement) se prépare en parallèle, pour une mise en ligne rapide.',
      },
      FAQ_PROPRIETE,
    ],
  },
  {
    slug: 'vtc-taxi',
    domaine: 'vtc',
    nom: 'VTC & taxi',
    seoTitle: 'Créer votre formation VTC et taxi en ligne | Expansion',
    seoDescription:
      'Centre de formation VTC ou taxi ? On filme vos cours de préparation à l’examen, on les organise par épreuve et on lance la vente de votre formation en ligne.',
    eyebrow: 'Formation en ligne · VTC & taxi',
    titre: 'Créez votre formation en\u00a0ligne',
    titreItalique: 'VTC et taxi',
    intro:
      'L’examen théorique VTC compte sept épreuves, de la réglementation T3P à l’anglais. Vos candidats ont besoin de réviser souvent, à leur rythme, et beaucoup travaillent déjà à côté. Nous filmons vos cours dans votre centre et nous les organisons en modules, épreuve par épreuve, pour que vous puissiez vendre votre préparation en ligne partout en France.',
    pourquoiTitre: 'Pourquoi proposer votre préparation VTC en ligne',
    pourquoi: [
      {
        titre: 'Des candidats qui révisent quand ils peuvent',
        texte:
          'Beaucoup de vos candidats ont déjà un emploi. Une préparation en ligne leur permet de réviser le soir, de revoir une épreuve difficile et d’arriver prêts le jour de l’examen.',
      },
      {
        titre: 'Une préparation organisée par épreuve',
        texte:
          'Réglementation T3P, gestion, sécurité routière, français, anglais, développement commercial, réglementation VTC : chaque épreuve devient un module clair, facile à suivre et à revoir.',
      },
      {
        titre: 'Des inscrits au-delà de votre ville',
        texte:
          'Votre préparation théorique se vend dans toute la France, puis amène une partie des candidats vers vos sessions en centre et la préparation à l’épreuve pratique.',
      },
      {
        titre: 'Une offre d’entrée qui remplit vos sessions',
        texte:
          'Une formation en ligne à prix accessible fait connaître votre centre et vous permet de proposer ensuite vos formations complètes à des candidats déjà convaincus.',
      },
    ],
    filmesTitre: 'Ce que l’on filme pour votre centre',
    filmes: [
      'Réglementation du transport public particulier de personnes (T3P)',
      'Gestion et développement commercial',
      'Sécurité routière',
      'Français et anglais professionnels',
      'Réglementation nationale VTC',
      'Accueil client et déroulé de l’épreuve pratique',
    ],
    filmesTexte:
      'Les cours sont filmés dans vos salles, avec votre formateur face caméra et ses supports à l’écran. Les règles à retenir et les erreurs fréquentes s’affichent au moment où il les explique.',
    realisations: [],
    faq: [
      {
        q: 'Une formation en ligne peut-elle préparer à l’examen VTC ?',
        a: 'Oui pour l’épreuve théorique, qui repose sur des QCM et des questions à réponse courte. L’épreuve pratique se prépare au volant : la vidéo peut en expliquer le déroulé et les attentes, mais la conduite se travaille avec vous.',
      },
      {
        q: 'Est-ce aussi adapté aux centres qui préparent au taxi ?',
        a: 'Oui. Les épreuves communes aux examens taxi et VTC se filment de la même façon, et les épreuves propres au taxi deviennent des modules à part.',
      },
      {
        q: 'Que se passe-t-il quand la réglementation change ?',
        a: 'Comme la formation est découpée en modules, une mise à jour ne concerne que le module touché : il n’y a pas besoin de tout refaire.',
      },
      FAQ_PROPRIETE,
    ],
  },
  {
    slug: 'metiers-techniques',
    domaine: 'technique',
    nom: 'Métiers techniques',
    seoTitle: 'Créer une formation en ligne métiers techniques | Expansion',
    seoDescription:
      'Automobile, BTP, artisanat : on filme vos gestes techniques sur le terrain, étape par étape, et on transforme votre savoir-faire en formation en ligne à vendre.',
    eyebrow: 'Formation en ligne · Métiers techniques',
    titre: 'Créez votre formation en\u00a0ligne',
    titreItalique: 'pour les métiers techniques',
    intro:
      'Remplacement de pare-brise, mécanique, pose, finitions : un savoir-faire technique se transmet mal par écrit, mais très bien en vidéo quand chaque étape est filmée de près. Nous tournons dans votre atelier ou sur votre plateau technique et nous livrons une formation en ligne structurée, prête à être vendue.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation technique',
    pourquoi: [
      {
        titre: 'Chaque étape filmée sur le terrain',
        texte:
          'Outils, réglages, ordre des opérations : on filme le travail réel, dans votre atelier, avec des plans rapprochés sur les gestes qui comptent.',
      },
      {
        titre: 'La sécurité montrée à l’image',
        texte:
          'Équipements de protection, points de vigilance, erreurs à éviter : ce qui est montré se retient mieux que ce qui est lu.',
      },
      {
        titre: 'Moins de jours sur place pour vos stagiaires',
        texte:
          'La théorie et la démonstration se suivent en ligne ; le temps passé dans votre centre se concentre sur la pratique.',
      },
      {
        titre: 'Un savoir-faire qui se vend au-delà de votre région',
        texte:
          'Professionnels en reconversion, artisans qui veulent ajouter une compétence : votre formation trouve son public partout en France.',
      },
    ],
    filmesTitre: 'Les formations techniques que l’on filme',
    filmes: [
      'Remplacement de pare-brise et vitrage automobile',
      'Mécanique et pièces automobiles',
      'Second œuvre et finitions du bâtiment',
      'Pose, installation et maintenance',
      'Tout savoir-faire qui se montre étape par étape',
    ],
    filmesTexte:
      'On adapte le tournage à votre environnement : atelier, véhicule, plateau technique. Un plan large situe l’opération, des plans serrés montrent l’outil et la pièce, et les étapes s’affichent à l’écran pour que le stagiaire ne perde jamais le fil.',
    realisations: ['parebrise', 'pieceauto'],
    faq: [
      {
        q: 'Peut-on filmer dans un atelier bruyant ?',
        a: 'Oui. Nous utilisons des micros-cravates pour que votre voix reste claire malgré les machines, et certaines explications peuvent être enregistrées au calme.',
      },
      {
        q: 'Combien de temps dure le tournage ?',
        a: 'Deux à trois jours en moyenne. Plus la formation est longue et dense, ou plus il y a d’intervenants, plus le tournage prend de temps : on fixe le planning avec vous.',
      },
      {
        q: 'Comment la formation est-elle vendue ?',
        a: 'Nous créons la page de vente et le parcours d’inscription, nous connectons vos outils de paiement et d’emailing, puis nous pouvons lancer des campagnes publicitaires pour trouver vos stagiaires.',
      },
      FAQ_PROPRIETE,
    ],
  },
].map((s) => ({ ...s, path: `${BASE_SECTEURS}/${s.slug}`, methode: METHODE }))

export function secteurParSlug(slug) {
  return SECTEURS.find((s) => s.slug === slug) || null
}

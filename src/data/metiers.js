// Pages « Créer une formation en ligne en [métier] » : une page par spécialité, rattachée à un secteur parent.
// Même structure que SECTEURS (src/data/secteurs.js), avec `parent` = slug du secteur.

const FAQ_PROPRIETE = {
  q: 'À qui appartiennent les vidéos ?',
  a: 'À vous, à 100 %. Nous vous remettons les rushes et les vidéos montées à la livraison, pour que vous puissiez exploiter le contenu comme vous le souhaitez.',
}

const FAQ_DUREE = {
  q: 'Combien de temps dure le tournage ?',
  a: 'Deux à trois jours en moyenne. Plus la formation compte de techniques, de modèles ou d’intervenants, plus le tournage prend de temps : on fixe le planning avec vous avant de venir.',
}

function metier(m) {
  return {
    eyebrow: `Formation en ligne · ${m.nom}`,
    titre: 'Créez votre formation en ligne',
    ...m,
  }
}

export const METIERS = [
  metier({
    slug: 'prothesie-ongulaire',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Prothésie ongulaire',
    seoTitle: 'Créer sa formation en ligne en prothésie ongulaire | Expansion',
    seoDescription:
      'Formatrice en onglerie ? On filme votre formation prothésie ongulaire (gel, résine, capsules, nail art) en gros plan dans votre centre et on la vend en ligne.',
    titreItalique: 'en prothésie ongulaire',
    intro:
      'Préparation de l’ongle naturel, pose de capsules ou de chablons, gel, résine, limage, nail art : en onglerie, tout se joue au millimètre. Nous filmons votre formation dans votre centre, en très gros plan sur la main de la modèle, et nous la transformons en programme en ligne que vos élèves peuvent revoir autant de fois qu’il le faut.',
    pourquoiTitre: 'Pourquoi mettre votre formation onglerie en ligne',
    pourquoi: [
      {
        titre: 'Le limage et l’apex vus de vraiment près',
        texte:
          'Angle de la lime, épaisseur du gel, construction de l’apex : en salle, l’élève voit de loin. En vidéo, la caméra est à quelques centimètres de l’ongle et chaque geste peut être revu au ralenti.',
      },
      {
        titre: 'Une formation qui se vend sans ouvrir de session',
        texte:
          'Votre formation complète, un module gel ou un module nail art se vendent toute l’année, même quand votre planning de sessions est plein.',
      },
      {
        titre: 'Une offre pour vos anciennes élèves',
        texte:
          'Les prothésistes que vous avez déjà formées cherchent à se perfectionner : babyboomer, french, capsules américaines, renforcement. Chaque technique peut devenir un module à vendre.',
      },
      {
        titre: 'Des élèves bien au-delà de votre ville',
        texte:
          'Une future prothésiste qui ne peut pas venir dans votre centre se forme avec vous en ligne, puis vient éventuellement valider la pratique sur place.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation onglerie',
    filmes: [
      'Hygiène, désinfection et préparation de l’ongle naturel',
      'Pose de capsules et de chablons',
      'Construction au gel ou à la résine, apex et courbe C',
      'Limage, finitions et pose de couleur',
      'French, babyboomer et nail art',
      'Remplissage, dépose et erreurs à éviter',
    ],
    filmesTexte:
      'La main de la modèle est posée sur un repose-main, avec une caméra en plongée et une autre de profil pour voir l’épaisseur. Les points clés (quantité de produit, temps de catalyse, angle de la lime) s’affichent à l’écran au moment où vous les dites.',
    realisations: ['prothesie'],
    faq: [
      {
        q: 'Une prothésiste peut-elle vraiment apprendre en vidéo ?',
        a: 'La théorie, l’hygiène, le matériel et la démonstration de chaque technique s’apprennent très bien en vidéo, souvent mieux qu’en salle grâce aux gros plans. Pour l’entraînement sur modèle, beaucoup de centres associent la formation en ligne à une journée de pratique en présentiel.',
      },
      {
        q: 'Combien de modèles prévoir pour le tournage ?',
        a: 'En général une modèle par technique filmée de bout en bout (pose complète, remplissage, nail art). Nous établissons la liste avec vous pendant la préparation.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'extension-de-cils',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Extension de cils',
    seoTitle: 'Créer sa formation en ligne en extension de cils | Expansion',
    seoDescription:
      'Cil à cil, volume russe, mega volume : on filme votre formation extension de cils en macro, cil par cil, et on la transforme en formation en ligne à vendre.',
    titreItalique: 'en extension de cils',
    intro:
      'Isolation, choix de la courbure et de l’épaisseur, collage cil à cil, création de bouquets en volume russe : l’extension de cils est un geste minuscule, impossible à bien voir depuis le fond d’une salle. Nous le filmons en macro, sous plusieurs angles, et nous construisons avec vous une formation en ligne claire, module par module.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation cils',
    pourquoi: [
      {
        titre: 'L’isolation et le collage filmés en macro',
        texte:
          'Avec un objectif macro, l’élève voit la pince, le cil naturel et le point de collage comme si elle tenait elle-même les outils. C’est souvent plus clair qu’en démonstration réelle.',
      },
      {
        titre: 'Un module par niveau',
        texte:
          'Cil à cil pour débuter, volume russe, mega volume, mapping et rehaussement : chaque niveau devient une formation à part, que l’élève achète quand elle est prête.',
      },
      {
        titre: 'Des élèves qui révisent avant chaque cliente',
        texte:
          'Une jeune technicienne revoit la vidéo de création des bouquets ou de mapping avant sa prestation. Votre formation l’accompagne bien après la session.',
      },
      {
        titre: 'Des ventes toute l’année',
        texte:
          'La formation en ligne se vend pendant que vous êtes en cabine ou en session, y compris auprès d’élèves trop loin de votre centre.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation extension de cils',
    filmes: [
      'Hygiène, colle, allergies et contre-indications',
      'Analyse de l’œil et mapping',
      'Isolation et pose cil à cil',
      'Création de bouquets : volume russe et mega volume',
      'Remplissage, dépose et conseils après la pose',
      'Erreurs fréquentes et rattrapages',
    ],
    filmesTexte:
      'La modèle est allongée comme en cabine. Une caméra macro suit la pince, une autre filme l’œil entier pour le mapping, et votre visage apparaît quand vous expliquez. Longueurs, courbures et temps de séchage s’affichent à l’écran.',
    realisations: ['cils', 'rehaussement'],
    faq: [
      {
        q: 'Arrive-t-on à filmer un geste aussi petit ?',
        a: 'Oui, c’est justement là que la vidéo apporte le plus. Nous utilisons un objectif macro et un éclairage dédié pour que chaque cil soit net à l’écran.',
      },
      {
        q: 'Peut-on séparer cil à cil et volume russe ?',
        a: 'Oui, et c’est ce que nous conseillons : une formation par niveau se vend mieux et permet à l’élève de progresser avec vous, formation après formation.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'rehaussement-de-cils',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Rehaussement de cils',
    seoTitle: 'Créer sa formation en ligne en rehaussement de cils | Expansion',
    seoDescription:
      'On filme votre formation rehaussement de cils (lash lift) étape par étape, choix du bigoudi, temps de pose, teinture, et on la vend en ligne pour vous.',
    titreItalique: 'en rehaussement de cils',
    intro:
      'Choix du bigoudi, application des lotions, temps de pose selon le type de cil, teinture : le rehaussement de cils est une technique rapide à vendre et très demandée, parfaite pour une formation en ligne courte. Nous la filmons dans votre centre et nous la transformons en programme prêt à vendre.',
    pourquoiTitre: 'Pourquoi proposer votre formation rehaussement en ligne',
    pourquoi: [
      {
        titre: 'Une formation courte, facile à acheter',
        texte:
          'Le rehaussement s’apprend en peu de temps : c’est une formation idéale pour un premier achat, à un prix accessible, qui fait ensuite découvrir vos autres formations.',
      },
      {
        titre: 'Les temps de pose expliqués cas par cas',
        texte:
          'Cils fins, épais, abîmés : la vidéo peut montrer plusieurs modèles et expliquer pourquoi le temps de pose change, ce qu’une seule démonstration en salle ne permet pas.',
      },
      {
        titre: 'Un complément naturel à vos formations cils',
        texte:
          'Vos élèves en extension de cils sont souvent intéressées par le rehaussement. Vous leur proposez un module de plus, en ligne, sans organiser de nouvelle session.',
      },
      {
        titre: 'Une technique qui se revoit avant chaque cliente',
        texte:
          'L’élève garde accès à la vidéo et revoit le choix du bigoudi ou le temps de pose avant ses premières prestations.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation rehaussement',
    filmes: [
      'Contre-indications et test préalable',
      'Choix et pose du bigoudi selon l’œil',
      'Application des lotions et temps de pose',
      'Teinture des cils',
      'Soin final et conseils à la cliente',
      'Rattrapages et erreurs à éviter',
    ],
    filmesTexte:
      'Gros plan sur l’œil de la modèle, plan large pour le placement des mains, minuteur à l’écran pendant les temps de pose : l’élève suit exactement ce que vous faites et quand.',
    realisations: ['rehaussement', 'cils'],
    faq: [
      {
        q: 'Une formation aussi courte vaut-elle le coup en ligne ?',
        a: 'Oui : c’est souvent la meilleure porte d’entrée. Le tournage est rapide, le prix est accessible pour l’élève, et une partie des acheteuses reviennent ensuite pour vos formations plus longues.',
      },
      {
        q: 'Peut-on filmer le rehaussement et la teinture des sourcils en même temps ?',
        a: 'Oui. On organise le planning pour filmer plusieurs techniques du regard pendant les mêmes jours de tournage.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'browlift-sourcils',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Browlift et sourcils',
    seoTitle: 'Créer sa formation en ligne browlift et sourcils | Expansion',
    seoDescription:
      'Browlift, restructuration, teinture et henné sourcils : on filme votre formation sourcils dans votre centre et on la transforme en formation en ligne à vendre.',
    titreItalique: 'en browlift et sourcils',
    intro:
      'Prise de mesures, création de la ligne, browlift, teinture, henné, épilation à la pince ou au fil : une formation sourcils mélange théorie de la morphologie et geste précis. Nous filmons les deux dans votre centre et nous en faisons une formation en ligne structurée.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation sourcils',
    pourquoi: [
      {
        titre: 'La morphologie expliquée à l’écran',
        texte:
          'Les points de repère, la courbe et l’équilibre du visage s’expliquent bien mieux avec des tracés qui apparaissent à l’écran pendant que vous mesurez.',
      },
      {
        titre: 'Le browlift étape par étape',
        texte:
          'Lotions, sens de brossage, temps de pose, fixation : chaque étape est filmée de près et peut être revue avant la première cliente.',
      },
      {
        titre: 'Des modules à combiner',
        texte:
          'Browlift, restructuration, teinture, henné : chaque technique devient un module, vendu seul ou dans un pack regard avec vos formations cils.',
      },
      {
        titre: 'Une nouvelle source de revenus',
        texte:
          'Votre formation se vend en ligne pendant que vous êtes en cabine, auprès d’esthéticiennes de toute la France.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation sourcils',
    filmes: [
      'Morphologie et prise de mesures',
      'Création de la ligne de sourcil',
      'Browlift : lotions, brossage et temps de pose',
      'Teinture et henné',
      'Épilation à la pince ou au fil',
      'Conseils d’entretien à donner à la cliente',
    ],
    filmesTexte:
      'Un plan de face sur le visage de la modèle pour les mesures, des gros plans pour le geste, et les repères de morphologie dessinés à l’écran au moment où vous les expliquez.',
    realisations: ['browlift'],
    faq: [
      {
        q: 'Peut-on inclure la morphologie et la théorie ?',
        a: 'Oui. On alterne des passages face caméra pour la théorie et des démonstrations sur modèle. Les schémas de morphologie sont ajoutés au montage.',
      },
      {
        q: 'Peut-on vendre le browlift et les cils dans un même pack ?',
        a: 'Oui. Une fois les formations filmées, on peut les vendre séparément ou en pack « regard », avec un prix d’ensemble.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'maquillage-permanent',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Maquillage permanent',
    seoTitle: 'Créer sa formation en ligne en maquillage permanent | Expansion',
    seoDescription:
      'Microblading, dermopigmentation, candy lips, eye-liner : on filme votre formation maquillage permanent en gros plan et on la vend en ligne, en France et à l’étranger.',
    titreItalique: 'en maquillage permanent',
    intro:
      'Colorimétrie, dessin préparatoire, microblading, shading, candy lips, eye-liner : le maquillage permanent demande une grande précision et beaucoup de théorie. Nous filmons votre formation dans votre centre, en macro sur la peau, et nous la transformons en programme en ligne complet.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation maquillage permanent',
    pourquoi: [
      {
        titre: 'La théorie, enfin bien expliquée',
        texte:
          'Colorimétrie, types de peau, pigments, cicatrisation : la partie théorique est longue. En vidéo, l’élève la suit à son rythme et la revoit autant qu’il faut, avec des schémas à l’écran.',
      },
      {
        titre: 'Le geste filmé en macro',
        texte:
          'Angle de l’aiguille, profondeur, régularité des traits : la caméra macro montre ce que l’œil ne voit pas en salle.',
      },
      {
        titre: 'Une formation qui prépare la pratique',
        texte:
          'L’élève arrive à la journée pratique en sachant déjà tout de la théorie. Vous consacrez le temps en centre à la pratique sur peau synthétique puis sur modèle.',
      },
      {
        titre: 'Une technique qui s’exporte',
        texte:
          'Le maquillage permanent se forme partout dans le monde. Traduite, votre formation peut se vendre aussi à l’étranger.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation maquillage permanent',
    filmes: [
      'Colorimétrie, pigments et types de peau',
      'Dessin préparatoire et prise de mesures',
      'Microblading et shading des sourcils',
      'Candy lips et eye-liner',
      'Entraînement sur peau synthétique',
      'Cicatrisation, retouche et suivi de la cliente',
    ],
    filmesTexte:
      'Caméra macro sur la zone travaillée, plan sur le dermographe, plan face caméra pour la théorie. Les pigments utilisés, la profondeur et les erreurs à éviter s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'La formation en ligne remplace-t-elle la formation hygiène obligatoire ?',
        a: 'Non. La formation hygiène et salubrité exigée pour le maquillage permanent reste à suivre auprès d’un organisme habilité. Votre formation en ligne porte sur la technique et peut rappeler cette obligation à vos élèves.',
      },
      {
        q: 'Peut-on filmer sur une vraie cliente ?',
        a: 'Oui, avec son accord écrit. Beaucoup de centres filment aussi sur peau synthétique pour montrer les premiers traits sans contrainte de temps.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'soins-du-visage',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Soins du visage',
    seoTitle: 'Créer sa formation en ligne en soins du visage | Expansion',
    seoDescription:
      'Hydrafacial, soins à l’appareil, lifting coréen, massages du visage : on filme votre formation soins du visage dans votre institut et on la vend en ligne.',
    titreItalique: 'en soins du visage',
    intro:
      'Diagnostic de peau, protocole complet, soins à l’appareil, massages manuels, lifting coréen : un soin du visage est une suite d’étapes précises qu’il faut voir dans le bon ordre. Nous filmons votre protocole dans votre institut et nous le transformons en formation en ligne.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation soins du visage',
    pourquoi: [
      {
        titre: 'Le protocole dans l’ordre, sans rien oublier',
        texte:
          'Chaque étape du soin est un chapitre de la vidéo. L’élève retrouve instantanément le passage dont elle a besoin.',
      },
      {
        titre: 'Les mouvements de massage bien visibles',
        texte:
          'Pression, rythme, sens des manœuvres : filmés au-dessus de la modèle, les gestes se comprennent mieux qu’en regardant à côté de la table.',
      },
      {
        titre: 'Une formation pour chaque appareil',
        texte:
          'Hydrafacial, radiofréquence, LED, cryothérapie : chaque appareil peut faire l’objet d’une formation courte, vendue aux instituts qui viennent de s’équiper.',
      },
      {
        titre: 'Des élèves formées sans fermer leur institut',
        texte:
          'Les esthéticiennes en activité se forment le soir ou le lundi, sans perdre une journée de chiffre d’affaires.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation soins du visage',
    filmes: [
      'Diagnostic de peau et contre-indications',
      'Démaquillage, exfoliation et préparation',
      'Soins à l’appareil, réglages et sécurité',
      'Massages manuels et lifting coréen',
      'Masques, finitions et conseils à la cliente',
      'Vente du soin et des produits en cabine',
    ],
    filmesTexte:
      'Une caméra au-dessus de la table, une autre de côté pour vos mains, un plan face caméra pour les explications. Les réglages des appareils et les temps de pose s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Peut-on filmer une formation sur un appareil précis ?',
        a: 'Oui. C’est un format très demandé : une formation courte par appareil, que vous pouvez vendre aux instituts qui viennent d’acheter la machine.',
      },
      {
        q: 'Et si la formation est en arabe ou dans une autre langue ?',
        a: 'Nous montons et sous-titrons des formations dans d’autres langues, et nous pouvons ajouter des sous-titres en français pour toucher plus d’élèves.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'extensions-de-cheveux',
    parent: 'coiffure',
    domaine: 'coiffure',
    nom: 'Extensions de cheveux',
    seoTitle: 'Créer sa formation en ligne en extensions de cheveux | Expansion',
    seoDescription:
      'Kératine, bandes adhésives, micro-anneaux, tissage : on filme votre formation extensions de cheveux en gros plan dans votre salon et on la vend en ligne.',
    titreItalique: 'en extensions de cheveux',
    intro:
      'Choix des mèches, sections, pose à la kératine, bandes adhésives, micro-anneaux, entretien et dépose : la pose d’extensions demande de la méthode et beaucoup de précision. Nous filmons votre formation dans votre salon ou votre centre et nous la transformons en programme en ligne prêt à vendre.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation extensions',
    pourquoi: [
      {
        titre: 'Les sections montrées sous tous les angles',
        texte:
          'Placement des mèches, distance au cuir chevelu, régularité : plusieurs caméras montrent ce que l’élève ne voit pas toujours depuis sa place.',
      },
      {
        titre: 'Une formation par méthode',
        texte:
          'Kératine, bandes adhésives, micro-anneaux, tissage : chaque méthode peut devenir une formation à part, ou un pack complet.',
      },
      {
        titre: 'Des élèves partout en France',
        texte:
          'Coiffeuses et poseuses indépendantes se forment avec vous sans se déplacer, puis viennent éventuellement en salon pour la pratique.',
      },
      {
        titre: 'Une vitrine pour vos produits',
        texte:
          'Si vous vendez vos propres mèches ou votre matériel, la formation en ligne amène naturellement vos élèves à commander chez vous.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation extensions',
    filmes: [
      'Diagnostic, choix des mèches et colorimétrie',
      'Sections et préparation des cheveux',
      'Pose à la kératine',
      'Bandes adhésives et micro-anneaux',
      'Coupe et mise en forme après la pose',
      'Entretien, remontée et dépose',
    ],
    filmesTexte:
      'Un plan large sur la tête de la modèle pour les sections, des plans serrés sur la pose de chaque mèche, et les températures, quantités et erreurs à éviter affichées à l’écran.',
    realisations: ['extensions'],
    faq: [
      {
        q: 'Faut-il une modèle avec des cheveux longs ?',
        a: 'Cela dépend des techniques à filmer. Nous définissons avec vous le profil de modèle idéal pour chaque méthode pendant la préparation.',
      },
      {
        q: 'Peut-on vendre la formation avec un kit de matériel ?',
        a: 'Oui. La page de vente peut proposer la formation seule ou accompagnée de votre kit, avec la livraison gérée par votre boutique.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'lissage',
    parent: 'coiffure',
    domaine: 'coiffure',
    nom: 'Lissage',
    seoTitle: 'Créer sa formation en ligne en lissage brésilien | Expansion',
    seoDescription:
      'Lissage brésilien, au tanin, à la kératine, botox capillaire : on filme votre formation lissage dans votre salon, étape par étape, et on la vend en ligne.',
    titreItalique: 'en lissage',
    intro:
      'Diagnostic du cheveu, choix du produit, application mèche par mèche, temps de pose, température du fer : un lissage réussi dépend d’une méthode précise. Nous filmons votre protocole dans votre salon et nous en faisons une formation en ligne claire et prête à vendre.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation lissage',
    pourquoi: [
      {
        titre: 'Chaque type de cheveu traité',
        texte:
          'Cheveux fins, épais, colorés, frisés : la vidéo peut montrer plusieurs modèles et expliquer comment adapter le produit et la température à chacun.',
      },
      {
        titre: 'Le passage du fer filmé de près',
        texte:
          'Épaisseur des mèches, tension, nombre de passages : des gros plans montrent exactement ce que fait votre main.',
      },
      {
        titre: 'Une formation qui accompagne vos produits',
        texte:
          'Si vous avez votre propre gamme, la formation en ligne apprend à l’utiliser correctement et donne envie de la commander.',
      },
      {
        titre: 'Des ventes sans nouvelle session',
        texte:
          'Votre formation se vend toute l’année, auprès de coiffeuses de toute la France, pendant que vous êtes au salon.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation lissage',
    filmes: [
      'Diagnostic du cheveu et choix du produit',
      'Lavage et préparation',
      'Application mèche par mèche et temps de pose',
      'Séchage et passage du fer : température et tension',
      'Lissage au tanin, à la kératine, botox capillaire',
      'Conseils d’entretien à donner à la cliente',
    ],
    filmesTexte:
      'Plans larges pour les sections, plans serrés sur le fer et l’application, minuteur et température affichés à l’écran pendant chaque étape.',
    realisations: ['lissage'],
    faq: [
      {
        q: 'Peut-on filmer plusieurs types de lissage ?',
        a: 'Oui. On prévoit une modèle par technique ou par type de cheveu, et chaque lissage devient un module ou une formation à part.',
      },
      {
        q: 'Peut-on citer ma marque de produits dans la formation ?',
        a: 'Oui, c’est votre formation. Votre gamme peut apparaître à l’écran et être proposée sur la page de vente.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'barbier',
    parent: 'coiffure',
    domaine: 'coiffure',
    nom: 'Barbier',
    seoTitle: 'Créer sa formation en ligne barbier et dégradé | Expansion',
    seoDescription:
      'Dégradé, taille de barbe, rasage à l’ancienne, contours : on filme votre formation barbier sous plusieurs angles et on la transforme en formation en ligne.',
    titreItalique: 'barbier et coupe homme',
    intro:
      'Dégradé à blanc, mid fade, taper, taille et rasage de la barbe, contours au rasoir : le métier de barbier se transmet par le geste, et chaque passage de tondeuse compte. Nous filmons votre formation sous plusieurs angles et nous la transformons en programme en ligne.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation barbier',
    pourquoi: [
      {
        titre: 'Le dégradé filmé sous trois angles',
        texte:
          'Face, profil, nuque : l’élève voit le travail des sabots et la fonte des lignes comme s’il était derrière le fauteuil.',
      },
      {
        titre: 'Un format qui parle aux jeunes barbiers',
        texte:
          'Le public barbier se forme beaucoup en vidéo. Une formation bien filmée, avec votre style, se démarque des tutoriels gratuits.',
      },
      {
        titre: 'Des modules par technique',
        texte:
          'Dégradé, barbe, rasage, contours, coupe aux ciseaux : chaque technique devient un module que l’élève achète selon son niveau.',
      },
      {
        titre: 'Une audience que vous avez peut-être déjà',
        texte:
          'Si vos réseaux montrent déjà vos coupes, votre communauté est la première cliente de votre formation en ligne.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation barbier',
    filmes: [
      'Matériel, hygiène et entretien des outils',
      'Dégradé : sabots, transitions et fonte',
      'Taille et dessin de la barbe',
      'Rasage à l’ancienne et serviette chaude',
      'Contours et finitions au rasoir',
      'Conseils à donner au client',
    ],
    filmesTexte:
      'Trois caméras autour du fauteuil, un plan serré sur la tondeuse et les numéros de sabot affichés à l’écran au moment où vous changez.',
    realisations: [],
    faq: [
      {
        q: 'Comment se démarquer des tutoriels gratuits ?',
        a: 'Par la structure et la qualité : un vrai programme, du débutant au confirmé, filmé sous plusieurs angles, avec vos explications sur le pourquoi de chaque geste. C’est ce que le gratuit ne donne pas.',
      },
      {
        q: 'Peut-on filmer dans mon barbershop ?',
        a: 'Oui, c’est même préférable : l’élève se forme dans un vrai salon. On s’organise pour filmer en dehors des heures d’ouverture si besoin.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'head-spa',
    parent: 'coiffure',
    domaine: 'coiffure',
    nom: 'Head spa',
    seoTitle: 'Créer sa formation en ligne en head spa | Expansion',
    seoDescription:
      'Head spa japonais, diagnostic du cuir chevelu, massages, soins : on filme votre formation head spa dans votre espace et on la vend en ligne.',
    titreItalique: 'en head spa',
    intro:
      'Diagnostic du cuir chevelu à la caméra, lavages, massages crâniens, soins, rituels : le head spa est une prestation très demandée, et beaucoup de coiffeuses et d’esthéticiennes cherchent à se former. Nous filmons votre protocole dans votre espace et nous le transformons en formation en ligne.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation head spa',
    pourquoi: [
      {
        titre: 'Une prestation en pleine croissance',
        texte:
          'De plus en plus de salons et d’instituts veulent proposer le head spa. Votre formation en ligne arrive au moment où la demande est forte.',
      },
      {
        titre: 'Les massages vus d’en haut',
        texte:
          'Pressions, enchaînements, rythme : filmés au-dessus du bac, les gestes se suivent beaucoup mieux qu’à côté de la cliente.',
      },
      {
        titre: 'L’ambiance de votre espace à l’écran',
        texte:
          'Le head spa se vend aussi par l’expérience. Le tournage met en valeur votre espace, ce qui rend la formation plus désirable.',
      },
      {
        titre: 'Une formation qui se vend à distance',
        texte:
          'Coiffeuses et esthéticiennes de toute la France se forment sans se déplacer, puis équipent leur salon.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation head spa',
    filmes: [
      'Diagnostic du cuir chevelu',
      'Installation de la cliente et ambiance',
      'Lavages et soins selon le type de cuir chevelu',
      'Massages crâniens, nuque et épaules',
      'Rituel complet du début à la fin',
      'Conseils produits et vente en cabine',
    ],
    filmesTexte:
      'Une caméra au-dessus du bac, une autre de côté pour vos mains, et des images du diagnostic au microscope intégrées au montage pour montrer l’état du cuir chevelu.',
    realisations: ['headspa'],
    faq: [
      {
        q: 'Peut-on intégrer les images de la caméra de diagnostic ?',
        a: 'Oui. Nous récupérons les images du microscope ou de la caméra capillaire et les intégrons au montage, au moment où vous les commentez.',
      },
      {
        q: 'Le head spa s’adresse-t-il aux coiffeuses ou aux esthéticiennes ?',
        a: 'Aux deux. La page de vente et la publicité peuvent cibler les deux publics, avec un message adapté à chacun.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'blanchiment-dentaire',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Blanchiment dentaire',
    seoTitle: 'Créer sa formation en ligne en blanchiment dentaire esthétique | Expansion',
    seoDescription:
      'Formatrice en blanchiment dentaire esthétique ? On filme votre protocole (accueil, teinte, pose du gel, lampe LED, conseils après séance) et on le vend en ligne.',
    titreItalique: 'en blanchiment dentaire',
    intro:
      'Questionnaire client, prise de teinte avant et après, pose de l’écarteur, application du gel, réglage de la lampe LED, conseils après séance : le blanchiment dentaire esthétique repose sur un protocole précis et sur un cadre réglementaire que vos élèves doivent maîtriser. Nous filmons votre protocole complet dans votre centre et nous le transformons en formation en ligne structurée.',
    pourquoiTitre: 'Pourquoi mettre votre formation blanchiment en ligne',
    pourquoi: [
      {
        titre: 'Un protocole qui se suit étape par étape',
        texte:
          'Le blanchiment se déroule toujours dans le même ordre. En vidéo, chaque étape devient une leçon courte que l’élève peut revoir juste avant sa première vraie séance.',
      },
      {
        titre: 'La partie réglementaire expliquée une fois pour toutes',
        texte:
          'Produits autorisés, contre-indications, fiche client, responsabilité : vous l’expliquez une fois face caméra, clairement, au lieu de le répéter à chaque session.',
      },
      {
        titre: 'Une formation courte, facile à vendre',
        texte:
          'Le blanchiment s’apprend vite et se rentabilise vite. C’est un format idéal pour une formation en ligne d’entrée de gamme, qui attire ensuite des élèves vers vos autres formations.',
      },
      {
        titre: 'Un complément pour les esthéticiennes déjà installées',
        texte:
          'Beaucoup d’esthéticiennes veulent ajouter le blanchiment à leur carte sans fermer leur institut pour se former. La version en ligne répond exactement à ce besoin.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation blanchiment',
    filmes: [
      'Cadre réglementaire, produits et contre-indications',
      'Accueil, questionnaire et fiche client',
      'Prise de teinte avant la séance',
      'Pose de l’écarteur et application du gel',
      'Réglage de la lampe et déroulé de la séance',
      'Résultat, conseils après séance et photos avant/après',
    ],
    filmesTexte:
      'Une caméra en face de la cliente pour le sourire, une autre en gros plan sur l’application du gel. Les temps de pose et les points de vigilance s’affichent à l’écran pendant que vous les expliquez.',
    realisations: ['blanchiment'],
    faq: [
      {
        q: 'Peut-on parler de la réglementation dans la formation ?',
        a: 'Oui, et c’est même recommandé. Nous filmons un module dédié face caméra, sur la base de ce que vous enseignez déjà. Le contenu réglementaire reste sous votre responsabilité : nous le mettons en forme, nous ne le rédigeons pas à votre place.',
      },
      {
        q: 'Faut-il une cliente pour le tournage ?',
        a: 'Oui, au moins une séance complète sur une vraie cliente, pour montrer le protocole de bout en bout et un vrai résultat avant/après.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'tatouage-ephemere',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Tatouage éphémère',
    seoTitle: 'Créer sa formation en ligne en tatouage éphémère | Expansion',
    seoDescription:
      'Henné, jagua, tatouage temporaire : on filme votre formation tatouage éphémère (peau, sécurité, tracé, tarifs) et on la transforme en formation en ligne à vendre.',
    titreItalique: 'en tatouage éphémère',
    intro:
      'Préparation de la peau, règles d’hygiène et de sécurité, entraînement au tracé, réalisation des motifs, fixation des tarifs, lancement de l’activité : nous avons déjà filmé une formation complète en tatouage éphémère. Nous savons comment montrer le tracé de près et comment rendre la partie business aussi concrète que la pratique.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation tatouage éphémère',
    pourquoi: [
      {
        titre: 'Le tracé filmé à la verticale',
        texte:
          'Une caméra au-dessus du support suit chaque trait. L’élève voit la pression, la vitesse et le sens du geste, puis s’entraîne chez elle en mettant la vidéo en pause.',
      },
      {
        titre: 'Un métier qui se lance vite',
        texte:
          'Les élèves veulent démarrer rapidement : événements, mariages, marchés d’été. Une formation en ligne leur permet de commencer à se former le jour même de l’achat.',
      },
      {
        titre: 'La partie business, le vrai plus',
        texte:
          'Fixer ses prix, trouver ses premiers clients, travailler en événementiel : ces modules théoriques face caméra font souvent la différence avec les formations concurrentes.',
      },
      {
        titre: 'Une audience nationale',
        texte:
          'Le tatouage éphémère se pratique partout. En ligne, votre formation touche des élèves de toute la France et des pays francophones.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation tatouage éphémère',
    filmes: [
      'Présentation de la formatrice et du métier',
      'La peau, l’hygiène et la sécurité',
      'Le matériel et la préparation des produits',
      'Entraînement au tracé sur support',
      'Réalisation de motifs sur modèle',
      'Fixer ses tarifs et se lancer après la formation',
    ],
    filmesTexte:
      'Les modules pratiques sont filmés en plongée au-dessus du support ou de la peau, les modules théoriques face caméra avec un prompteur. Les étapes et les chiffres clés apparaissent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Avez-vous déjà filmé une formation de ce type ?',
        a: 'Oui. Plusieurs modules de la formation tatouage éphémère que nous avons tournée sont visibles sur notre page Réalisations : introduction, peau et sécurité, tarifs, lancement de l’activité, entraînement au tracé.',
      },
      {
        q: 'Peut-on filmer sur support plutôt que sur modèle ?',
        a: 'Les deux. L’entraînement se filme très bien sur support, et quelques motifs complets sur modèle montrent le rendu final.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'spray-tan',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Spray tan',
    seoTitle: 'Créer sa formation en ligne en spray tan (bronzage sans UV) | Expansion',
    seoDescription:
      'Formatrice spray tan ? On filme votre formation bronzage sans UV (préparation, choix de la teinte, gestuelle au pistolet, finitions) et on la vend en ligne.',
    titreItalique: 'en spray tan',
    intro:
      'Préparation de la cliente, choix de la teinte selon la carnation, réglage du pistolet, gestuelle de pulvérisation, zones délicates, conseils après séance : le spray tan est un geste rapide qui demande de la régularité. Nous filmons une séance complète, en plan large et en gros plan, pour que vos élèves comprennent le mouvement autant que la technique.',
    pourquoiTitre: 'Pourquoi mettre votre formation spray tan en ligne',
    pourquoi: [
      {
        titre: 'La gestuelle vue en entier',
        texte:
          'Distance, vitesse, ordre des zones : en plan large, l’élève voit le mouvement complet autour de la cliente. En gros plan, elle voit le rendu sur les mains, les pieds et le visage.',
      },
      {
        titre: 'Une formation courte et accessible',
        texte:
          'Le spray tan s’apprend en peu de temps. C’est un format parfait pour une formation en ligne à prix accessible, vendue toute l’année et surtout avant l’été.',
      },
      {
        titre: 'Le choix de la teinte bien expliqué',
        texte:
          'Carnation, sous-ton, résultat souhaité : avec des exemples à l’écran, l’élève apprend à choisir la bonne solution sans se tromper.',
      },
      {
        titre: 'Une prestation à ajouter à sa carte',
        texte:
          'Les esthéticiennes et les instituts cherchent des prestations rapides et rentables. Votre formation en ligne leur permet de se former sans fermer leur institut.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation spray tan',
    filmes: [
      'Matériel, cabine et choix des solutions',
      'Préparation de la peau et consignes avant la séance',
      'Choix de la teinte selon la carnation',
      'Réglage du pistolet et gestuelle de pulvérisation',
      'Mains, pieds, visage et zones délicates',
      'Séchage, conseils après séance et erreurs à éviter',
    ],
    filmesTexte:
      'Une caméra en plan large pour la gestuelle complète, une autre en gros plan sur les zones délicates. Les distances et les temps de séchage s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Comment filmer une séance avec une cliente peu vêtue ?',
        a: 'Avec une tenue adaptée (maillot de bain ou sous-vêtements jetables) et un cadrage pensé à l’avance. Nous validons avec vous et la modèle ce qui apparaîtra à l’écran.',
      },
      {
        q: 'Le brouillard du pistolet gêne-t-il le tournage ?',
        a: 'Non, nous plaçons les caméras hors de la zone de pulvérisation et nous protégeons le matériel. La cabine reste celle où vous travaillez habituellement.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'lifting-coreen',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Lifting coréen',
    seoTitle: 'Créer sa formation en ligne en lifting coréen | Expansion',
    seoDescription:
      'Formatrice en lifting coréen ou massage facial ? On filme votre protocole en gros plan sur le visage, manœuvre par manœuvre, et on le vend en ligne.',
    titreItalique: 'en lifting coréen',
    intro:
      'Démaquillage, préparation de la peau, enchaînement des manœuvres, pressions, rythme, outils : le lifting coréen repose sur une séquence précise que l’élève doit mémoriser. Nous filmons votre protocole complet en gros plan sur le visage de la modèle et nous découpons chaque manœuvre pour qu’elle soit facile à revoir.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation lifting coréen',
    pourquoi: [
      {
        titre: 'Chaque manœuvre nommée et répétable',
        texte:
          'Le nom de la manœuvre s’affiche à l’écran au moment où vous la faites. L’élève peut revoir une séquence précise autant de fois qu’il le faut pour la mémoriser.',
      },
      {
        titre: 'Le rythme et la pression se voient enfin',
        texte:
          'En gros plan, on voit la position des doigts, l’appui et la vitesse. C’est ce que les élèves ont le plus de mal à retenir après une session en présentiel.',
      },
      {
        titre: 'Une tendance qui attire de nouvelles élèves',
        texte:
          'Le lifting coréen et les soins japonais sont très recherchés. Une formation en ligne vous permet de répondre à cette demande partout en France.',
      },
      {
        titre: 'Facile à combiner avec vos autres soins',
        texte:
          'Le protocole peut être vendu seul ou intégré dans un pack avec vos soins du visage, votre head spa ou votre cryothérapie.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation lifting coréen',
    filmes: [
      'Origines du soin, bienfaits et contre-indications',
      'Installation de la cliente et préparation de la peau',
      'Enchaînement des manœuvres, séquence par séquence',
      'Position des mains, pressions et rythme',
      'Utilisation des outils (gua sha, ventouses, rouleaux)',
      'Protocole complet en temps réel et conseils de vente',
    ],
    filmesTexte:
      'Une caméra au-dessus de la tête de la modèle, une autre de profil. Le protocole est filmé deux fois : manœuvre par manœuvre avec vos explications, puis en entier à vitesse réelle.',
    realisations: [],
    faq: [
      {
        q: 'Avez-vous déjà filmé ce type de soin ?',
        a: 'Oui, nous avons tourné un protocole de lifting coréen en pratique multi-caméras pour un centre de formation esthétique, avec d’autres soins du même programme.',
      },
      {
        q: 'Faut-il filmer le protocole en entier, sans coupure ?',
        a: 'Nous recommandons les deux versions : une version découpée et commentée pour apprendre, et une version complète pour voir le rythme réel du soin.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'epilation',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Épilation',
    seoTitle: 'Créer sa formation en ligne en épilation (cire, fil, sucre) | Expansion',
    seoDescription:
      'Formatrice en épilation ? Cire chaude, cire tiède, fil, pâte de sucre, épilation intégrale : on filme votre formation et on la transforme en formation en ligne.',
    titreItalique: 'en épilation',
    intro:
      'Choix de la cire, température, sens du poil, tension de la peau, geste d’arrachage, zones sensibles : en épilation, la technique se joue sur des détails que l’on rate facilement en salle. Nous filmons vos démonstrations zone par zone et nous en faisons une formation en ligne complète, de la cire tiède à l’épilation intégrale.',
    pourquoiTitre: 'Pourquoi mettre votre formation épilation en ligne',
    pourquoi: [
      {
        titre: 'Le geste d’arrachage au ralenti',
        texte:
          'Tension de la peau, angle et vitesse : au ralenti, l’élève comprend pourquoi un geste fait moins mal qu’un autre et pourquoi le poil casse ou non.',
      },
      {
        titre: 'Une leçon par zone',
        texte:
          'Sourcils, lèvre, aisselles, jambes, maillot : chaque zone devient une leçon courte. L’élève revoit celle dont elle a besoin juste avant de la pratiquer.',
      },
      {
        titre: 'Une formation de base très demandée',
        texte:
          'L’épilation est la prestation la plus pratiquée en institut. Votre formation en ligne attire les débutantes, les reconversions et les candidates au CAP.',
      },
      {
        titre: 'Plusieurs techniques à vendre séparément',
        texte:
          'Cire, fil, pâte de sucre : chaque technique peut devenir une formation à part, vendue seule ou en pack.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation épilation',
    filmes: [
      'Hygiène, matériel et choix des cires',
      'Température, application et sens du poil',
      'Visage : sourcils, lèvre, menton',
      'Corps : aisselles, bras, jambes',
      'Maillot classique, échancré et intégral',
      'Fil ou pâte de sucre, soins après épilation',
    ],
    filmesTexte:
      'Gros plan sur la zone épilée, avec un plan plus large pour la posture de la praticienne. Les températures et les points de vigilance s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Comment filmer les zones intimes avec respect ?',
        a: 'Avec une modèle volontaire, des sous-vêtements jetables et un cadrage décidé à l’avance. Rien n’est diffusé sans votre accord et celui de la modèle.',
      },
      {
        q: 'Peut-on filmer plusieurs techniques le même jour ?',
        a: 'Oui. Avec plusieurs modèles, on enchaîne cire, fil et pâte de sucre dans la même journée de tournage.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'microblading',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Microblading',
    seoTitle: 'Créer sa formation en ligne en microblading | Expansion',
    seoDescription:
      'Formatrice en microblading ou microshading ? On filme le dessin, le tracé poil à poil et la cicatrisation en macro, et on transforme votre formation en programme en ligne.',
    titreItalique: 'en microblading',
    intro:
      'Morphologie du sourcil, dessin et symétrie, choix du pigment, tracé poil à poil, profondeur d’incision, cicatrisation, retouche : le microblading demande une précision que seule la macro permet vraiment de montrer. Nous filmons votre formation de l’entraînement sur peau synthétique jusqu’à la séance sur modèle.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation microblading',
    pourquoi: [
      {
        titre: 'Le tracé poil à poil en macro',
        texte:
          'Angle de la lame, pression, espacement des traits : la caméra macro montre ce que l’élève ne voit jamais en salle, même assise à côté de vous.',
      },
      {
        titre: 'Des heures d’entraînement guidées',
        texte:
          'Le microblading s’apprend d’abord sur peau synthétique. Avec la vidéo, l’élève s’entraîne chez elle en suivant vos exercices pas à pas.',
      },
      {
        titre: 'La théorie enfin bien rangée',
        texte:
          'Colorimétrie, hygiène, contre-indications, cicatrisation : la partie théorique est filmée face caméra, découpée et illustrée, au lieu d’être dictée en début de session.',
      },
      {
        titre: 'Plus de place pour la pratique en présentiel',
        texte:
          'Si l’élève arrive en ayant déjà vu la théorie en ligne, vos journées en centre peuvent être consacrées entièrement à la pratique sur modèle.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation microblading',
    filmes: [
      'Hygiène, matériel et contre-indications',
      'Morphologie et dessin du sourcil',
      'Colorimétrie et choix du pigment',
      'Exercices de tracé sur peau synthétique',
      'Séance complète sur modèle',
      'Cicatrisation, retouche et conseils à la cliente',
    ],
    filmesTexte:
      'Une caméra macro sur le sourcil, une autre au-dessus pour le dessin et la symétrie. Les angles, les profondeurs et les temps de pose s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Quelle différence avec votre page maquillage permanent ?',
        a: 'Le maquillage permanent couvre l’ensemble des techniques (sourcils, lèvres, yeux, dermographe). Cette page est dédiée au microblading et au microshading des sourcils, faits à la main.',
      },
      {
        q: 'Peut-on montrer un sourcil cicatrisé ?',
        a: 'Oui, si vous avez des photos de clientes après cicatrisation ou si la modèle revient pour la retouche, nous l’intégrons dans la formation.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'maquillage-professionnel',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Maquillage professionnel',
    seoTitle: 'Créer sa formation en ligne en maquillage professionnel | Expansion',
    seoDescription:
      'Maquilleuse formatrice ? Teint, contouring, yeux, maquillage mariée ou artistique : on filme votre formation maquillage et on la transforme en formation en ligne.',
    titreItalique: 'en maquillage professionnel',
    intro:
      'Préparation de la peau, teint, correction, contouring, yeux, lèvres, maquillage mariée ou de soirée : le maquillage se juge à la lumière et à la couleur. Nous filmons votre formation avec un éclairage studio qui respecte les teintes réelles, pour que vos élèves voient exactement ce que vous voyez.',
    pourquoiTitre: 'Pourquoi mettre votre formation maquillage en ligne',
    pourquoi: [
      {
        titre: 'Des couleurs fidèles à l’écran',
        texte:
          'Un éclairage mal réglé change la couleur d’un fond de teint. Nous calibrons la lumière pour que le rendu à l’écran soit celui que vous obtenez en vrai.',
      },
      {
        titre: 'Le visage et la palette en même temps',
        texte:
          'Une caméra sur le visage, une autre sur vos mains et vos produits : l’élève voit quel pinceau, quelle quantité et quel geste, au même moment.',
      },
      {
        titre: 'Un module par type de maquillage',
        texte:
          'Maquillage nude, soirée, mariée, peaux matures, peaux foncées : chaque thème devient une formation que vous pouvez vendre séparément.',
      },
      {
        titre: 'Des élèves partout',
        texte:
          'Futures maquilleuses, reconversions, esthéticiennes qui veulent se perfectionner : votre formation les touche partout en France et à l’étranger.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation maquillage',
    filmes: [
      'Hygiène, kit et choix des produits',
      'Préparation de la peau et teint',
      'Correction, contouring et enlumineur',
      'Yeux : fards, eye-liner, faux cils',
      'Lèvres et mise en valeur du regard',
      'Looks complets : jour, soirée, mariée',
    ],
    filmesTexte:
      'Éclairage studio calibré, une caméra face au visage et une autre sur les mains. Les références de produits et les étapes s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Pouvez-vous filmer plusieurs carnations ?',
        a: 'Oui, et c’est un vrai plus pour vos élèves. Nous prévoyons avec vous des modèles de carnations différentes et nous adaptons l’éclairage à chacune.',
      },
      {
        q: 'Faut-il citer les marques de produits ?',
        a: 'C’est vous qui décidez. Vous pouvez citer vos références ou rester neutre, nous adaptons les textes à l’écran.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'beaute-des-pieds',
    parent: 'esthetique-beaute',
    domaine: 'beaute',
    nom: 'Beauté des pieds',
    seoTitle: 'Créer sa formation en ligne en beauté des pieds et pédicure esthétique | Expansion',
    seoDescription:
      'Formatrice en beauté des pieds ou pédicure esthétique ? On filme votre protocole en gros plan (bain, soin des ongles, callosités, pose de vernis) et on le vend en ligne.',
    titreItalique: 'en beauté des pieds',
    intro:
      'Bain, soin des ongles et des cuticules, traitement des callosités, gommage, massage, pose de vernis ou de gel : la beauté des pieds est une prestation très demandée et souvent mal maîtrisée. Nous filmons votre protocole en gros plan, avec des angles qui montrent bien les zones difficiles.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation beauté des pieds',
    pourquoi: [
      {
        titre: 'Les gestes délicats vus de près',
        texte:
          'Coupe des ongles, repoussage des cuticules, travail de la râpe : la caméra se place là où l’élève ne pourrait jamais se mettre en salle.',
      },
      {
        titre: 'Les limites du métier bien expliquées',
        texte:
          'Ce que l’esthéticienne peut faire et ce qui relève du pédicure-podologue : vous l’expliquez clairement une fois, face caméra.',
      },
      {
        titre: 'Une prestation simple à ajouter',
        texte:
          'Beaucoup d’onglistes et d’esthéticiennes veulent proposer la beauté des pieds. Une formation en ligne leur permet de s’y mettre rapidement.',
      },
      {
        titre: 'Facile à combiner avec l’onglerie',
        texte:
          'Votre formation peut se vendre seule ou en complément d’une formation prothésie ongulaire ou semi-permanent.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation beauté des pieds',
    filmes: [
      'Hygiène, matériel et limites du métier',
      'Bain et préparation du pied',
      'Coupe, limage et soin des cuticules',
      'Traitement esthétique des callosités et gommage',
      'Massage des pieds',
      'Pose de vernis ou de semi-permanent',
    ],
    filmesTexte:
      'Le pied de la modèle est surélevé, avec une caméra en plongée et une autre de côté. Les gestes à éviter et les points d’hygiène s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Faut-il un fauteuil de pédicure pour le tournage ?',
        a: 'Nous tournons dans votre centre avec votre installation habituelle. Nous adaptons simplement la position des caméras à votre fauteuil.',
      },
      {
        q: 'Peut-on associer cette formation à une formation onglerie ?',
        a: 'Oui, c’est même très courant. Les deux peuvent être tournées pendant le même déplacement.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'tresses-coiffure-afro',
    parent: 'coiffure',
    domaine: 'coiffure',
    nom: 'Tresses et coiffure afro',
    seoTitle: 'Créer sa formation en ligne en tresses et coiffure afro | Expansion',
    seoDescription:
      'Formatrice en tresses, braids, nattes collées, locks ou soins des cheveux texturés ? On filme votre formation coiffure afro et on la vend en ligne.',
    titreItalique: 'en tresses et coiffure afro',
    intro:
      'Démêlage, séparations nettes, nattes collées, box braids, knotless, vanilles, locks, soins des cheveux crépus et bouclés : la coiffure afro demande des gestes rapides et répétitifs, difficiles à suivre en direct. Nous les filmons de près, sous plusieurs angles, et nous les ralentissons quand il le faut.',
    pourquoiTitre: 'Pourquoi mettre votre formation tresses en ligne',
    pourquoi: [
      {
        titre: 'Le tressage ralenti au bon moment',
        texte:
          'Croisement des mèches, ajout des rajouts, tension : ce qui se fait en une seconde en vrai peut être ralenti et commenté à l’écran.',
      },
      {
        titre: 'Des séparations bien visibles',
        texte:
          'La propreté des séparations fait la qualité d’une coiffure. En vue de dessus, l’élève voit exactement comment vous tracez chaque ligne.',
      },
      {
        titre: 'Une demande énorme, peu de formations sérieuses',
        texte:
          'Beaucoup de personnes veulent apprendre les tresses, mais peu de formations en ligne sont bien filmées. C’est une vraie place à prendre.',
      },
      {
        titre: 'Une formation par style',
        texte:
          'Nattes collées, box braids, knotless, twists, locks : chaque style devient une formation que vous pouvez vendre séparément.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation tresses',
    filmes: [
      'Les types de cheveux texturés et leur préparation',
      'Démêlage, soins et protection du cuir chevelu',
      'Tracer des séparations nettes',
      'Nattes collées et tresses africaines',
      'Box braids, knotless et ajout des rajouts',
      'Vanilles, twists, locks et entretien',
    ],
    filmesTexte:
      'Une caméra au-dessus de la tête pour les séparations, une autre de côté pour le geste de tressage. Les passages clés sont ralentis au montage.',
    realisations: [],
    faq: [
      {
        q: 'Une coiffure longue peut-elle être filmée en entier ?',
        a: 'Oui. Nous filmons la coiffure complète, puis le montage garde les passages utiles et accélère les répétitions, pour que la vidéo reste agréable à suivre.',
      },
      {
        q: 'Combien de modèles prévoir ?',
        a: 'En général une modèle par style. Pour les coiffures très longues, on peut filmer une partie de la tête seulement et montrer le résultat final.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
  metier({
    slug: 'coloration-balayage',
    parent: 'coiffure',
    domaine: 'coiffure',
    nom: 'Coloration et balayage',
    seoTitle: 'Créer sa formation en ligne en coloration et balayage | Expansion',
    seoDescription:
      'Formatrice en coloration ? Diagnostic, colorimétrie, balayage, ombré, patine, décoloration : on filme votre formation et on la transforme en formation en ligne.',
    titreItalique: 'en coloration et balayage',
    intro:
      'Diagnostic, lecture de la hauteur de ton, colorimétrie, préparation des mélanges, sections, balayage à main levée, ombré, patine : la coloration est à la fois très technique et très visuelle. Nous filmons vos démonstrations avec une lumière fidèle aux couleurs, pour que le résultat à l’écran soit celui que vous obtenez au bac.',
    pourquoiTitre: 'Pourquoi digitaliser votre formation coloration',
    pourquoi: [
      {
        titre: 'Des couleurs justes à l’écran',
        texte:
          'Un reflet cuivré ou cendré se voit mal sous une mauvaise lumière. Nous réglons l’éclairage pour que les nuances restent fidèles du début à la fin.',
      },
      {
        titre: 'La colorimétrie enfin claire',
        texte:
          'Étoile chromatique, neutralisation, oxydants : la théorie est illustrée par des schémas animés à l’écran, bien plus faciles à retenir qu’un tableau.',
      },
      {
        titre: 'Le geste du balayage vu de près',
        texte:
          'Inclinaison du pinceau, quantité de produit, fondu : en gros plan, l’élève voit le geste qui fait la différence entre un balayage réussi et des démarcations.',
      },
      {
        titre: 'Une formation pour les coiffeuses en poste',
        texte:
          'Les coiffeuses déjà installées veulent se perfectionner sans fermer leur salon. Votre formation en ligne s’adapte à leur emploi du temps.',
      },
    ],
    filmesTitre: 'Ce que l’on filme dans une formation coloration',
    filmes: [
      'Diagnostic et hauteur de ton',
      'Colorimétrie et neutralisation',
      'Préparation des mélanges et oxydants',
      'Sections et application racines',
      'Balayage, ombré et techniques de fondu',
      'Décoloration, patine et résultat final',
    ],
    filmesTexte:
      'Éclairage calibré, une caméra sur la tête de la modèle et une autre sur votre plan de travail. Les références de mélange et les temps de pose s’affichent à l’écran.',
    realisations: [],
    faq: [
      {
        q: 'Le temps de pose ne rend-il pas la vidéo trop longue ?',
        a: 'Non. Les temps de pose sont coupés au montage et remplacés par un rappel à l’écran (« 35 minutes de pose »). On montre seulement ce qui est utile.',
      },
      {
        q: 'Peut-on montrer plusieurs techniques sur la même modèle ?',
        a: 'Parfois, oui (racines et patine par exemple). Pour un balayage complet, nous prévoyons une modèle dédiée.',
      },
      FAQ_DUREE,
      FAQ_PROPRIETE,
    ],
  }),
]

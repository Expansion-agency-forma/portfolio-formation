// Rubrique « Ressources » : articles pour les organismes de formation.
// Le contenu de chaque article est écrit dans un format texte simple, décrit dans src/lib/article.js.
// Une entrée = une page indexable (/ressources/<slug>), ajoutée automatiquement au sitemap.
import { analyser, nombreDeMots } from '../lib/article.js'

export const BASE_RESSOURCES = '/ressources'

export const AUTEUR = {
  nom: 'Nathanaël Dahomais',
  role: 'Fondateur d’Expansion Agency',
  bio: 'Depuis 2021, Nathanaël accompagne les organismes de formation dans la digitalisation de leurs formations : tournage sur site, montage en modules, système de vente et publicité. Plus de 50 organismes accompagnés, en esthétique, coiffure, transport et métiers techniques.',
  url: 'https://www.linkedin.com/in/nathanael-dahomais-161577145',
}

const ARTICLES_SOURCE = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'combien-de-temps-creer-formation-en-ligne',
    titre: 'Combien de temps faut-il pour créer une formation en ligne ?',
    seoTitle: 'Combien de temps pour créer une formation en ligne ?',
    fil: 'Délai de création',
    description:
      'Préparation, tournage de 2 à 3 jours, montage de 3 à 5 semaines : le calendrier réel pour créer une formation en ligne et la mettre en vente.',
    categorie: 'Lancer son projet',
    publie: '2026-10-05',
    resume: [
      'Le tournage dure 2 à 3 jours en moyenne, dans votre centre. Plus la formation est longue, plus il dure.',
      'Le montage est livré sous 3 à 5 semaines ; le système de vente se construit en même temps.',
      'Votre formation est prête à vendre environ 30 jours après le tournage.',
    ],
    contenu: `
C’est l’une des premières questions que nous posent les dirigeants d’organismes de formation, juste avant « est-ce que c’est rentable ? ». La réponse dépend moins de la technique que de l’organisation : une formation bien préparée se tourne vite et se monte vite. Voici le déroulé d’un projet, étape par étape, avec les durées que nous constatons sur le terrain.

## Le calendrier en un coup d’œil

1. **Préparation** : le programme, le découpage en modules et le planning du tournage. Sa durée dépend surtout de votre agenda.
2. **Tournage** : 2 à 3 jours en moyenne, dans votre centre.
3. **Montage** : 3 à 5 semaines selon le volume de vidéos.
4. **Système de vente** : page de vente, paiement, plateforme et emails, construits pendant le montage.
5. **Lancement** : d’abord auprès de vos anciens élèves et de votre communauté, puis avec la publicité.

Au total, comptez environ un mois entre le dernier jour de tournage et la mise en vente.

## Étape 1 : préparer le programme

Une formation en ligne ne se filme pas au fil de l’eau. Avant de venir, nous construisons avec vous la liste des modules, l’ordre des techniques et ce qui doit être montré à l’écran à chaque moment. C’est ce travail qui évite les journées de tournage à rallonge et les modules à refaire.

Concrètement, on fixe ensemble :

- le découpage en modules courts, une compétence par module ;
- les gestes et démonstrations à filmer en gros plan ;
- le matériel, les produits et, si besoin, les modèles à prévoir le jour J ;
- les passages face caméra (introduction, explications, conclusion) et leur texte pour le prompteur.

Si vous avez déjà un programme ou un support de cours pour votre formation en présentiel, on part de là : c’est une excellente base.

## Étape 2 : le tournage, 2 à 3 jours en moyenne

Le tournage a lieu chez vous, dans votre centre, avec votre matériel. En moyenne, il dure deux à trois jours. La règle est simple : plus votre formation est longue et riche en techniques, plus le tournage prend de temps. Une formation courte sur une seule technique se tourne plus vite qu’un parcours complet avec plusieurs intervenants.

Nous venons avec plusieurs caméras, un retour vidéo pour chaque caméra, un prompteur, les micros et les lumières. Vous n’avez rien à gérer côté technique : votre seule mission, c’est de transmettre. Nous détaillons le déroulé dans notre article sur [le tournage d’une formation dans votre centre](/ressources/tournage-formation-video-centre).

## Étape 3 : le montage, 3 à 5 semaines

Le montage transforme des heures de rushes en modules clairs. Chaque vidéo est coupée, sous-titrée, et les points clés s’affichent à l’écran au moment où vous les dites. Selon le nombre de modules, le montage est livré sous 3 à 5 semaines.

C’est aussi l’étape où l’on vérifie la cohérence pédagogique : un module pour une notion, une progression logique, pas de redite. Une formation bien montée se suit sans se perdre, et c’est ce qui fait que vos élèves vont jusqu’au bout.

## Étape 4 : le système de vente, en parallèle

Pendant le montage, on prépare tout ce qui permet de vendre : la page de vente, le paiement en ligne, l’accès des élèves à la plateforme, les emails automatiques d’inscription et de relance. Les deux chantiers avancent en même temps : quand les vidéos sont prêtes, la formation peut être mise en vente.

## Étape 5 : le lancement

Les premières ventes viennent presque toujours des personnes qui vous connaissent déjà : vos anciens élèves, votre communauté sur les réseaux, toutes celles et ceux qui vous ont déjà demandé si vous formiez à distance. La publicité prend ensuite le relais pour trouver de nouveaux élèves chaque mois. Nous détaillons ces leviers dans [nos stratégies pour vendre une formation en ligne](/ressources/vendre-formation-en-ligne-strategies).

[[video:YagAOKhqOsQ|Combien de temps ça prend ? La réponse de Nathanaël en vidéo]]

## Ce qui rallonge vraiment les délais

Sur le terrain, ce n’est presque jamais la technique qui retarde un projet. Ce sont plutôt :

- **un programme pas encore arrêté** : on ne peut pas planifier le tournage d’une formation dont le contenu change encore ;
- **des modèles ou du matériel indisponibles le jour J** : une démonstration qui ne peut pas être filmée, c’est un créneau à reprogrammer ;
- **des validations qui traînent** : relire les modules montés au fur et à mesure fait gagner des semaines ;
- **plusieurs formations à la fois** : c’est tout à fait possible, mais le calendrier s’allonge en proportion.

## Le faire seul ou se faire accompagner ?

Vous pouvez créer votre formation en ligne vous-même. Il faudra alors choisir le matériel, apprendre à cadrer et à monter, configurer une plateforme, un paiement et des emails, puis apprendre à faire de la publicité. Chacune de ces étapes est faisable. Mises bout à bout, elles prennent souvent plusieurs mois, pendant lesquels vous continuez à faire tourner votre centre.

Se faire accompagner, c’est surtout raccourcir ce chemin : vous gardez votre temps pour ce que vous savez faire, transmettre.

## Et pour vos élèves, combien de temps dure la formation ?

C’est l’autre sens de la question. En ligne, la durée n’est plus imposée par un planning de salle : vos élèves avancent à leur rythme, module par module, et reviennent sur un geste autant de fois que nécessaire. Beaucoup suivent un module le soir ou un jour de fermeture. Vous pouvez aussi garder un temps en présentiel pour valider la pratique : c’est le format mixte, que nous détaillons dans [notre article sur l’efficacité pédagogique de la formation en ligne](/ressources/formation-en-ligne-efficace-pedagogie).

[[simulateur]]
`,
    faq: [
      {
        q: 'Quand puis-je commencer à vendre ma formation en ligne ?',
        a: 'Environ 30 jours après le tournage, une fois le montage livré et la page de vente prête. Vous pouvez annoncer la formation à votre communauté avant, pour préparer le lancement.',
      },
      {
        q: 'Peut-on filmer plusieurs formations en une seule fois ?',
        a: 'Oui. On regroupe les tournages pour limiter le temps passé hors de vos sessions. Le tournage et le montage durent alors plus longtemps, en proportion du nombre de modules.',
      },
      {
        q: 'Combien de modules faut-il prévoir ?',
        a: 'Il n’y a pas de nombre idéal : on découpe votre formation pour qu’un module corresponde à une notion ou à une technique. Des modules courts sont plus faciles à suivre et à revoir.',
      },
      {
        q: 'Qui s’occupe de la plateforme et du paiement ?',
        a: 'Nous. Page de vente, paiement, accès des élèves et emails automatiques : vous recevez une solution prête à l’emploi, et nous vous montrons comment la piloter.',
      },
    ],
    liees: ['tournage-formation-video-centre', 'formation-en-ligne-rentable', 'vendre-formation-en-ligne-strategies'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'formation-en-ligne-rentable',
    titre: 'Créer une formation en ligne, est-ce rentable ? Et combien de ventes espérer ?',
    seoTitle: 'Formation en ligne rentable ? Combien de ventes espérer',
    fil: 'Rentabilité',
    description:
      'Une formation en ligne se produit une fois et se vend sans limite de places. D’où viennent les ventes, comment les estimer et ce qui fait varier le résultat.',
    categorie: 'Rentabilité et vente',
    publie: '2026-10-05',
    resume: [
      'Une formation en ligne coûte surtout à produire : une fois tournée, elle se vend sans limite de places ni de dates.',
      'Les premières ventes viennent de votre base (anciens élèves, communauté). La publicité apporte ensuite des ventes chaque mois.',
      'Le résultat dépend de quatre facteurs : votre métier, la taille de votre base, votre prix et l’accompagnement proposé.',
    ],
    contenu: `
« Est-ce que ça vaut le coup ? » C’est la question que se posent tous les dirigeants d’organismes de formation avant de se lancer. Et c’est la bonne question : une formation en ligne est un investissement. Voici comment raisonner, chiffres à l’appui, avant de prendre votre décision.

## Pourquoi une formation en ligne peut être rentable

En présentiel, chaque session a un coût : la salle, le temps du formateur, des places limitées, des dates fixes. Pour gagner plus, il faut ouvrir plus de sessions.

Une formation en ligne fonctionne autrement :

- **elle se produit une fois** : le tournage et le montage sont un coût de départ, pas un coût par élève ;
- **elle se vend sans limite de places** : pour dix ou cent élèves, le travail de production est le même ;
- **elle se vend partout en France**, à des personnes qui ne pourraient pas venir dans votre centre ;
- **elle se vend en continu**, sans attendre la prochaine session.

C’est cette logique, un coût de départ et des ventes répétées, qui la rend rentable. À une condition : avoir des acheteurs. Toute la question est donc de savoir combien de ventes vous pouvez raisonnablement espérer.

## D’où viennent les ventes d’une formation en ligne

Dans les projets que nous accompagnons, les ventes viennent de quatre sources.

### 1. Vos anciens élèves, au lancement

Ce sont vos meilleurs premiers acheteurs. Ils vous connaissent, ils ont aimé votre façon de transmettre, et beaucoup veulent un perfectionnement, une nouvelle technique ou simplement revoir les gestes. Il suffit de pouvoir les recontacter : email, WhatsApp, SMS ou Instagram.

### 2. Votre communauté

Vos abonnés sur Instagram, TikTok, Facebook ou YouTube voient votre travail depuis des mois. Une partie d’entre eux attend justement de pouvoir se former avec vous, sans avoir à se déplacer.

### 3. Vos nouveaux élèves en présentiel

Proposer la version en ligne en complément de la formation en salle, pour préparer la pratique, réviser ou aller plus loin, apporte des ventes chaque mois sans effort commercial supplémentaire.

### 4. La publicité

Une fois votre base sollicitée, la publicité sur Facebook et Instagram amène de nouveaux élèves qui ne vous connaissaient pas. C’est le levier qui permet de vendre chaque mois, même avec une petite communauté. Voir [notre approche de la publicité pour les organismes de formation](/publicite).

## Un exemple chiffré, avec des hypothèses prudentes

Prenons un centre de formation en esthétique qui peut recontacter 300 anciennes élèves et compte 10 000 abonnés sur Instagram. Il vend sa formation en ligne 297 €.

Avec les hypothèses prudentes de notre simulateur :

- **anciennes élèves** : 3 à 5 % achètent au lancement, soit 9 à 15 ventes ;
- **communauté** : 0,05 à 0,1 % des abonnés achètent à l’annonce, soit 5 à 10 ventes.

Cela fait **14 à 25 ventes au lancement, soit environ 4 200 à 7 400 € de chiffre d’affaires**, avant toute publicité. Ensuite, les nouveaux élèves du présentiel, la communauté et la publicité apportent des ventes chaque mois.

> Ce ne sont pas des promesses, mais des ordres de grandeur volontairement bas. Le résultat réel dépend de votre métier, de votre prix et de la façon dont la formation est présentée et vendue.

## Ce qui fait varier le résultat

- **Votre métier.** Les formations où le geste se montre, comme les ongles, les cils, la coiffure ou les soins, se vendent particulièrement bien en vidéo. Les formations plus réglementées ou plus théoriques demandent un vrai travail de présentation.
- **La taille de votre base.** 300 anciens élèves joignables ne donnent pas le même lancement que 30. Si votre base est petite, la publicité devient le levier principal.
- **Le prix.** Plus le prix est élevé, moins il y a d’acheteurs, mais chaque vente rapporte plus. Une formation en ligne se vend généralement moins cher qu’en présentiel : sans salle ni date, elle s’adresse à beaucoup plus de monde.
- **L’accompagnement.** Un groupe privé, des corrections ou un coaching business (aider vos élèves à trouver leurs clients et à fixer leurs prix) augmentent la valeur de votre formation et permettent de la vendre plus cher.

## Ce que nous constatons chez nos clients

- **150 000 €** de chiffre d’affaires pour l’un de nos clients après la digitalisation de ses formations ;
- **plus de 30 000 €** pour un centre de formation en esthétique ;
- **10 formations en ligne vendues en 3 mois** par un autre client.

Ces résultats ne sont pas automatiques. Ils viennent d’une formation bien construite et d’un vrai système de vente derrière.

[[video:6xhAbe2xTQA|Est-ce que c’est rentable ? La réponse de Nathanaël en vidéo]]

## Quand ce n’est pas encore rentable

Une formation en ligne n’est pas une bonne idée dans tous les cas. Elle a peu de chances d’être rentable si :

- vous n’avez ni anciens élèves à recontacter, ni communauté, ni budget publicitaire pour vous faire connaître ;
- la formation n’apporte rien de plus que ce que l’on trouve gratuitement en ligne ;
- personne ne s’occupe de la vendre une fois qu’elle est en ligne.

Dans ces cas, mieux vaut d’abord construire votre audience. Le simulateur vous dira où vous en êtes.

## Estimez votre propre potentiel

Le plus simple pour savoir si c’est rentable pour vous, c’est de faire le calcul avec vos propres chiffres. Notre [simulateur gratuit](/simulateur) vous pose 13 questions sur vos élèves, vos abonnés et vos prix, et estime ce que vous pourriez vendre au lancement, puis chaque mois.

[[simulateur]]
`,
    faq: [
      {
        q: 'Une formation en ligne va-t-elle remplacer mon présentiel ?',
        a: 'Ce n’est pas le but. Elle touche des personnes qui ne peuvent pas venir et sert de complément à vos élèves en présentiel. Elle élargit votre clientèle sans retirer vos sessions.',
      },
      {
        q: 'Faut-il une grosse communauté pour vendre ?',
        a: 'Non. Les premières ventes viennent de vos anciens élèves, que vous connaissez déjà. Ensuite, la publicité amène de nouveaux élèves chaque mois, même avec une petite communauté.',
      },
      {
        q: 'À quel prix vendre ma formation en ligne ?',
        a: 'En général moins cher que votre présentiel : sans salle ni date, elle s’adresse à plus de monde. Le simulateur vous propose un prix conseillé à partir du prix de votre formation en salle.',
      },
      {
        q: 'En combien de temps mon investissement est-il remboursé ?',
        a: 'Cela dépend de votre prix et de votre base. Le simulateur calcule une estimation à partir de vos réponses, toujours sur l’hypothèse la plus basse.',
      },
    ],
    liees: ['vendre-formation-en-ligne-strategies', 'formation-en-ligne-qualiopi-cpf-financement-direct', 'combien-de-temps-creer-formation-en-ligne'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'vendre-formation-en-ligne-strategies',
    titre: 'Comment vendre une formation en ligne : 8 stratégies qui marchent pour les organismes de formation',
    seoTitle: 'Vendre une formation en ligne : 8 stratégies qui marchent',
    fil: 'Stratégies de vente',
    description:
      'Anciens élèves, réseaux sociaux, page de vente, publicité, emails : les 8 leviers que nous utilisons pour vendre les formations en ligne de nos clients.',
    categorie: 'Rentabilité et vente',
    publie: '2026-10-05',
    resume: [
      'Commencez par ceux qui vous connaissent déjà : vos anciens élèves et votre communauté.',
      'Montrez le geste : les extraits de votre formation sont votre meilleure publicité.',
      'Une page de vente claire, des témoignages et la publicité apportent ensuite des ventes chaque mois.',
    ],
    contenu: `
Une formation ne se vend pas toute seule parce qu’elle est en ligne. La plupart des formations qui « ne marchent pas » sont de bonnes formations que personne n’a vraiment vendues. Voici les leviers que nous mettons en place pour nos clients, dans l’ordre où nous les activons.

## 1. Lancer d’abord auprès de vos anciens élèves

Vos anciens élèves vous font déjà confiance. Avant toute publicité, présentez-leur la formation en avant-première, avec une offre de lancement limitée dans le temps : un bonus, une place dans un groupe privé, une session de questions en direct. Un message personnel sur WhatsApp ou par email fonctionne souvent mieux qu’une belle campagne.

## 2. Proposer la version en ligne à vos élèves en présentiel

Chaque élève qui s’inscrit en salle peut aussi acheter la version en ligne : pour préparer la pratique, réviser après la formation ou aller plus loin. Proposez-la au moment de l’inscription, ou intégrez-la à votre parcours. Ce sont des ventes chaque mois, sans effort commercial supplémentaire.

## 3. Montrer le geste sur les réseaux sociaux

Le tournage de votre formation produit des heures d’images. Utilisez-les : extraits de démonstration, avant et après, coulisses du tournage, réponses aux questions fréquentes. Sur Instagram ou TikTok, une vidéo de trente secondes qui montre votre savoir-faire convainc plus qu’un long texte, parce qu’elle montre ce que l’élève va apprendre.

## 4. Une page de vente qui répond aux vraies questions

Une personne qui hésite se pose toujours les mêmes questions : qu’est-ce que je saurai faire à la fin ? Est-ce adapté à mon niveau ? Combien de temps ça prend ? Et si je bloque ? Votre page de vente doit y répondre clairement :

- le résultat concret de la formation, en une phrase ;
- le programme, module par module ;
- un extrait vidéo, pour découvrir votre façon de transmettre ;
- des témoignages d’élèves, avec leurs réalisations ;
- ce qui est inclus : accès, supports, accompagnement ;
- une FAQ et, si possible, le paiement en plusieurs fois.

## 5. Faire parler vos élèves

Rien ne vend mieux qu’un élève satisfait. Demandez systématiquement un témoignage, des photos de réalisations, un avis Google. Partagez-les sur vos réseaux et sur votre page de vente. Le témoignage d’une élève de Lyon qui s’est formée à distance rassure toutes celles qui hésitent à cause de la distance.

## 6. La publicité sur Facebook et Instagram

Une fois votre base sollicitée, la publicité amène des élèves qui ne vous connaissaient pas. Pour un organisme de formation, la méthode tient en quelques lignes, mais elle demande de la rigueur :

- des vidéos courtes qui montrent le geste et le résultat ;
- un ciblage par centres d’intérêt et par métier ;
- plusieurs publicités testées en parallèle, pour garder celles qui vendent ;
- un suivi au coût par vente, et pas au nombre de clics.

C’est notre métier au quotidien : découvrez [notre offre de publicité pour les organismes de formation](/publicite).

## 7. Les emails et les relances automatiques

Beaucoup de personnes visitent la page de vente sans acheter tout de suite. Une série d’emails automatiques (un extrait gratuit, un témoignage, la réponse à une objection, un rappel avant la fin de l’offre) récupère une partie de ces ventes, sans que vous ayez à y penser.

## 8. Ajouter de l’accompagnement pour vendre plus cher

Une formation en ligne seule se compare facilement. Une formation avec un accompagnement devient unique : groupe privé, corrections du travail de vos élèves sur photo ou vidéo, sessions de questions en direct, coaching business pour les aider à lancer leur activité. Elle se vend plus cher, et surtout elle fait réussir vos élèves, ce qui nourrit vos futurs témoignages.

## Comment mettre en avant une formation en ligne face au présentiel ?

Ne présentez pas votre formation en ligne comme une version au rabais de votre présentiel. Présentez ce qu’elle apporte en plus : apprendre à son rythme, revoir chaque geste en gros plan autant de fois que nécessaire, se former sans quitter son activité ni payer de déplacement. Et si vous gardez une partie pratique en centre, présentez le format mixte comme le meilleur des deux mondes.

## Les erreurs qui coûtent des ventes

- attendre que la formation se vende parce qu’elle est en ligne ;
- annoncer la formation une seule fois, puis ne plus en parler ;
- une page de vente qui décrit le programme sans montrer le résultat ;
- arrêter la publicité au bout de quelques jours, avant d’avoir testé assez de publicités différentes.

Avant de choisir vos leviers, commencez par estimer ce que votre base actuelle pourrait déjà vous rapporter : c’est l’objet de notre article sur [la rentabilité d’une formation en ligne](/ressources/formation-en-ligne-rentable).

[[simulateur]]
`,
    faq: [
      {
        q: 'Faut-il beaucoup d’abonnés pour vendre une formation en ligne ?',
        a: 'Non. Quelques centaines d’anciens élèves joignables suffisent pour un premier lancement. La publicité prend ensuite le relais pour trouver de nouveaux élèves.',
      },
      {
        q: 'Combien de temps avant les premières ventes ?',
        a: 'Les premières ventes arrivent souvent dès le lancement auprès de votre base. Côté publicité, comptez 3 à 4 semaines de test avant d’identifier les publicités qui vendent le mieux.',
      },
      {
        q: 'Quel budget publicitaire prévoir ?',
        a: 'Il n’y a pas de minimum universel. On démarre avec un budget de test, on garde les publicités qui vendent, puis on augmente progressivement le budget.',
      },
      {
        q: 'Où héberger ma formation en ligne ?',
        a: 'Sur une plateforme privée, avec un accès personnel pour chaque élève. Nous la mettons en place avec le paiement et les emails automatiques.',
      },
    ],
    liees: ['formation-en-ligne-rentable', 'formation-en-ligne-efficace-pedagogie', 'formation-en-ligne-qualiopi-cpf-financement-direct'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'formation-en-ligne-efficace-pedagogie',
    titre: 'Formation en ligne : vos élèves apprennent-ils vraiment ?',
    seoTitle: 'Formation en ligne : les élèves apprennent-ils vraiment ?',
    fil: 'Pédagogie en ligne',
    description:
      'La crainte n°1 des formateurs : que leurs élèves n’apprennent pas vraiment en ligne. Ce qui fait progresser un élève, et comment le reproduire en vidéo.',
    categorie: 'Pédagogie',
    publie: '2026-10-05',
    resume: [
      'Ce n’est pas le canal qui fait apprendre, c’est la structure : des modules courts, de la pratique et des retours du formateur.',
      'En vidéo, le geste se voit de plus près qu’en salle et se revoit autant de fois que nécessaire.',
      'Pour les gestes qui se valident en vrai, le format mixte combine le meilleur des deux.',
    ],
    contenu: `
C’est une crainte que nous entendons dans presque tous nos rendez-vous : « Mes élèves ne vont pas vraiment apprendre en ligne. » Elle est légitime : vous tenez à la qualité de votre formation et à la réussite de vos élèves. Elle est même en partie fondée, car une formation en ligne mal construite, c’est une suite de vidéos que personne ne termine. Mais une formation en ligne bien conçue fait aussi bien que la salle, et parfois mieux.

## Ce qui fait vraiment apprendre un élève

Qu’on soit en salle ou devant un écran, un élève progresse grâce à trois choses :

1. **une explication claire**, découpée en étapes ;
2. **de la pratique**, répétée ;
3. **des retours** sur ce qu’il fait, pour corriger ses erreurs.

Le présentiel n’a pas le monopole de ces trois éléments. Une formation en ligne qui les intègre fonctionne. Une formation en ligne qui se limite au premier, des vidéos à regarder, ne fonctionne pas : c’est sans doute ce qui a donné mauvaise réputation au format.

## Ce que la vidéo fait mieux que la salle

- **Voir le geste de près.** En salle, vos élèves regardent par-dessus votre épaule, à plusieurs. En vidéo, chaque geste est filmé en gros plan et sous le bon angle, grâce à plusieurs caméras.
- **Revoir autant de fois que nécessaire.** Un élève qui n’a pas compris une étape n’ose pas toujours le dire. En ligne, il revient en arrière, ralentit, revoit le passage la veille de sa pratique.
- **Apprendre à son rythme.** Un module le soir, un autre un jour de fermeture : l’élève avance quand il est disponible, sans rien manquer.
- **Retenir l’essentiel.** Au montage, les points clés s’affichent à l’écran au moment où vous les dites, et chaque module se termine sur ce qu’il faut retenir.

## Comment construire une formation en ligne qui fait progresser

### Des modules courts, une notion par module

Un module qui traite une seule technique ou une seule notion se suit d’une traite et se retrouve facilement. Vos élèves savent toujours où ils en sont.

### Faire pratiquer entre les modules

Après chaque technique, un exercice à réaliser, sur modèle ou sur support d’entraînement. La vidéo montre, l’élève fait.

### Corriger sur photo ou sur vidéo

Vos élèves vous envoient une photo ou une courte vidéo de leur travail, et vous les corrigez dans un groupe privé, par message ou lors d’une session de questions en direct. C’est le retour du formateur, à distance.

### Suivre la progression

La plateforme indique quels modules chaque élève a terminés. Vous repérez ceux qui décrochent et vous les relancez. Pour les organismes certifiés Qualiopi, le référentiel qui s’applique à partir du 1er novembre 2026 renforce d’ailleurs les exigences de suivi des formations à distance.

## Le format mixte : le meilleur des deux

Pour certains gestes, rien ne remplace une validation en vrai, sur modèle, sous vos yeux. Dans ce cas, le format mixte est souvent la meilleure réponse :

- la théorie, l’hygiène, le matériel et les démonstrations se suivent en ligne, à l’avance ;
- le temps en centre est entièrement consacré à la pratique et à la correction.

Résultat : des élèves mieux préparés, un temps de salle mieux utilisé, et la possibilité de vendre la partie en ligne seule à ceux qui ne peuvent pas venir. Nous détaillons ce que cela donne pour chaque métier dans nos pages [esthétique et beauté](/creer-formation-en-ligne/esthetique-beaute), [coiffure](/creer-formation-en-ligne/coiffure), [VTC et taxi](/creer-formation-en-ligne/vtc-taxi) et [métiers techniques](/creer-formation-en-ligne/metiers-techniques).

## Quand la formation en ligne ne suffit pas seule

Certaines formations ne peuvent pas se faire entièrement à distance. Quand une certification impose une pratique encadrée ou un examen en présentiel, ou quand un geste mal exécuté présente un risque pour le client, la formation en ligne prépare et complète, mais ne remplace pas. Nous construisons l’offre avec vous en tenant compte de ces contraintes.

## La qualité, votre meilleur argument de vente

Une formation qui fait vraiment progresser ses élèves se vend mieux : les élèves qui réussissent envoient des photos de leurs réalisations, laissent des avis et recommandent votre formation. La pédagogie et la vente vont ensemble, et c’est pour cela que nous travaillons les deux en même temps. Pour la partie vente, voir [nos stratégies pour vendre une formation en ligne](/ressources/vendre-formation-en-ligne-strategies).

[[simulateur]]
`,
    faq: [
      {
        q: 'Une formation en ligne suffit-elle pour apprendre un geste technique ?',
        a: 'Pour la théorie, le matériel et la démonstration, oui. Pour valider la pratique, beaucoup de centres choisissent un format mixte : la vidéo prépare l’élève, la session en centre valide le geste.',
      },
      {
        q: 'Comment savoir si mes élèves suivent vraiment la formation ?',
        a: 'La plateforme indique les modules terminés par chaque élève. Vous pouvez relancer ceux qui décrochent et demander des exercices à rendre sur photo ou en vidéo.',
      },
      {
        q: 'Mes élèves peuvent-ils me poser des questions ?',
        a: 'Oui, si vous le prévoyez : groupe privé, messagerie ou sessions de questions en direct. C’est aussi ce qui fait la valeur de votre formation par rapport à une vidéo gratuite.',
      },
      {
        q: 'Une formation en ligne est-elle compatible avec Qualiopi ?',
        a: 'Oui, la formation à distance est prévue par le référentiel, avec des exigences de suivi propres. Et si vous vendez votre formation en direct, sans financement public ni mutualisé, la certification n’est pas obligatoire.',
      },
    ],
    liees: ['formation-en-ligne-qualiopi-cpf-financement-direct', 'tournage-formation-video-centre', 'vendre-formation-en-ligne-strategies'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'formation-en-ligne-qualiopi-cpf-financement-direct',
    titre: 'Qualiopi, CPF, OPCO : pourquoi vendre aussi votre formation en ligne en financement direct',
    seoTitle: 'Qualiopi, CPF : vendre sa formation en ligne en direct',
    fil: 'Qualiopi et CPF',
    description:
      'Reste à charge CPF en hausse, Qualiopi plus exigeant, dossiers OPCO : pourquoi de plus en plus d’organismes vendent aussi une formation en ligne en direct.',
    categorie: 'Financement',
    publie: '2026-10-05',
    resume: [
      'Le CPF coûte de plus en plus cher à l’apprenant : le reste à charge est passé de 100 € en 2024 à 150 € depuis avril 2026.',
      'Les financements publics et mutualisés imposent Qualiopi, des dossiers et des délais de paiement.',
      'Une formation en ligne payée directement par l’élève s’encaisse tout de suite et se développe sans dépendre d’un dossier.',
    ],
    contenu: `
Pendant des années, le CPF a été un formidable accélérateur pour les organismes de formation : l’élève ne payait rien, la formation se vendait presque seule. Ce modèle s’essouffle. Les règles changent chaque année, et presque toujours dans le même sens. Voici où on en est, et pourquoi la formation en ligne en financement direct devient un vrai relais de croissance.

> Article à jour au 5 octobre 2026. Les règles du CPF et de Qualiopi évoluent souvent : vérifiez toujours la réglementation en vigueur sur les sites officiels avant de prendre une décision.

## Le CPF n’est plus gratuit pour l’apprenant

Depuis le 2 mai 2024, le titulaire d’un CPF doit payer une participation forfaitaire pour chaque formation. Ce reste à charge augmente d’année en année :

- **100 €** à sa création, en mai 2024, puis revalorisé chaque année (**103,20 €** au 1er janvier 2026) ;
- **150 €** depuis le 2 avril 2026, avec le décret n° 2026-234 du 30 mars 2026.

Et ce n’est peut-être pas fini : le projet de loi de finances pour 2027, présenté le 1er octobre 2026, prévoit une majoration pouvant aller jusqu’à 200 € supplémentaires pour certaines formations. Le texte est encore en discussion au Parlement.

Certains publics restent exonérés, comme les demandeurs d’emploi ou les salariés dont la formation bénéficie d’un abondement de leur employeur. Mais pour un particulier qui finance sa formation avec son CPF, l’argument « vous n’avez rien à payer » a disparu.

La loi de finances pour 2026 a aussi plafonné les droits mobilisables pour certaines formations (bilan de compétences, certifications du répertoire spécifique, permis de conduire) et réservé le financement du permis voiture aux demandeurs d’emploi et aux salariés dont la formation est cofinancée.

## Côté organisme : Qualiopi et des dossiers de plus en plus lourds

Pour recevoir des fonds publics ou mutualisés (CPF, OPCO, France Travail, Régions), un organisme de formation doit être certifié Qualiopi. La certification demande des audits réguliers et beaucoup de documentation. Et elle se durcit : un nouveau référentiel national qualité s’applique aux audits réalisés à partir du 1er novembre 2026 (décret n° 2026-728 du 1er août 2026), avec des exigences renforcées, notamment sur la transparence de l’information, le suivi des formations à distance et la sous-traitance.

À cela s’ajoutent les dossiers de prise en charge, les délais de paiement des financeurs, les refus et les règles qui changent en cours d’année. Beaucoup de dirigeants passent aujourd’hui plus de temps sur l’administratif que sur la pédagogie.

## L’alternative : une formation en ligne payée en direct

Une formation en ligne vendue directement à l’élève, payée avec ses propres fonds, change la logique :

- **vous encaissez directement**, sans attendre le paiement d’un financeur ;
- **pas de dossier de prise en charge** à monter pour chaque élève ;
- **vous fixez votre prix et vos conditions** ;
- **vous maîtrisez votre trésorerie** : les ventes arrivent chaque mois, de façon plus régulière ;
- **vous pouvez grandir vite** : une formation en ligne se vend sans limite de places, partout en France.

Pour vendre une formation payée en direct, la certification Qualiopi n’est pas obligatoire : elle conditionne uniquement l’accès aux financements publics et mutualisés.

Et comme il n’y a ni salle ni date, la formation en ligne peut être proposée à un prix plus accessible qu’une session en présentiel. Le paiement en plusieurs fois rend l’achat encore plus simple, même sans financement.

## Garder vos financements, et ajouter une offre en ligne

Il ne s’agit pas de renoncer au CPF ou aux OPCO. Vos formations certifiantes et vos sessions financées gardent tout leur intérêt. La formation en ligne en financement direct vient à côté :

- elle touche les personnes qui n’ont plus de droits CPF, ou qui ne veulent pas les utiliser ;
- elle s’adresse aux professionnels déjà installés qui veulent se perfectionner ;
- elle sécurise votre chiffre d’affaires si les règles de financement changent encore.

En clair, vous ne dépendez plus d’une seule source de revenus. Pour savoir ce qu’une offre en ligne pourrait vous rapporter, voir [notre article sur la rentabilité d’une formation en ligne](/ressources/formation-en-ligne-rentable).

## Vendre en direct : les règles à respecter

Vendre en direct ne veut pas dire vendre sans cadre. Lorsqu’un particulier finance lui-même une formation professionnelle auprès d’un organisme de formation, le Code du travail prévoit un contrat de formation, un délai de rétractation et des règles de paiement (articles L6353-3 à L6353-7). Les règles applicables dépendent de la façon dont votre offre est construite : faites valider vos conditions générales de vente par un juriste ou par votre expert-comptable avant de vous lancer.

## Sources

- [Légifrance : décret n° 2026-234 du 30 mars 2026 relatif au montant de la participation obligatoire au CPF](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053742996)
- [Mon Compte Formation : les évolutions du CPF prévues par la loi de finances 2026](https://of.moncompteformation.gouv.fr/espace-public/loi-de-finances-2026-les-evolutions-concernant-le-cpf)
- [Mon Compte Formation : évolution des règles d’utilisation du CPF à compter du 2 octobre 2026](https://www.moncompteformation.gouv.fr/espace-public/evolution-des-regles-dutilisation-du-cpf-compter-du-2-octobre-2026)
- [Ministère du Travail : référentiel national qualité (Qualiopi)](https://travail-emploi.gouv.fr/referentiel-national-qualite-guide-de-lecture-qualiopi)
- [Légifrance : contrat de formation entre une personne physique et un organisme de formation](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006189927)

[[simulateur]]
`,
    faq: [
      {
        q: 'Faut-il être certifié Qualiopi pour vendre une formation en ligne ?',
        a: 'Non, si elle est payée directement par l’élève, ou par une entreprise sans fonds publics ni mutualisés. Qualiopi n’est obligatoire que pour accéder à des financements comme le CPF ou les OPCO.',
      },
      {
        q: 'Quel est le reste à charge du CPF en 2026 ?',
        a: '150 € depuis le 2 avril 2026, sauf exonérations (demandeurs d’emploi, ou salariés dont la formation bénéficie d’un abondement de l’employeur, notamment). Une majoration est envisagée dans le projet de loi de finances pour 2027.',
      },
      {
        q: 'Ma formation en ligne peut-elle être financée par le CPF ?',
        a: 'Seulement si elle prépare à une certification enregistrée (RNCP ou répertoire spécifique) et si votre organisme est certifié Qualiopi. Une formation de perfectionnement sans certification se vend en direct.',
      },
      {
        q: 'Comment rendre une formation en ligne accessible sans financement ?',
        a: 'Avec un prix adapté à un format sans salle ni date, et le paiement en plusieurs fois. Beaucoup d’élèves préfèrent payer en plusieurs mensualités plutôt que de monter un dossier.',
      },
    ],
    liees: ['formation-en-ligne-rentable', 'vendre-formation-en-ligne-strategies', 'formation-en-ligne-efficace-pedagogie'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tournage-formation-video-centre',
    titre: 'Tournage d’une formation vidéo dans votre centre : comment ça se passe ?',
    seoTitle: 'Tournage d’une formation vidéo : comment ça se passe ?',
    fil: 'Tournage',
    description:
      '2 à 3 jours en moyenne, plusieurs caméras, un retour vidéo par caméra, un prompteur : le déroulé d’un tournage de formation dans votre centre.',
    categorie: 'Lancer son projet',
    publie: '2026-10-05',
    resume: [
      'Le tournage a lieu dans votre centre, avec votre matériel : pas de studio, pas de fond vert.',
      'Il dure 2 à 3 jours en moyenne, selon la taille de votre formation.',
      'Plusieurs caméras, un retour vidéo par caméra et un prompteur : vous vous concentrez sur la transmission.',
    ],
    contenu: `
Filmer une formation, ce n’est pas poser un téléphone sur un trépied. Pour qu’un élève apprenne en vidéo, il doit voir chaque geste nettement, sous le bon angle, et entendre chaque explication clairement. Voici comment se déroule un tournage avec notre équipe, de la préparation au dernier plan.

## Pourquoi tourner dans votre centre

Nous tournons chez vous, pas en studio. Vos élèves découvrent votre environnement de travail, votre matériel et vos produits : c’est plus crédible et plus proche de ce qu’ils vivront en pratique. Et vous n’avez ni à vous déplacer, ni à transporter votre matériel.

## Avant le tournage : la préparation

Le tournage se prépare en amont, avec vous :

- **le programme** : le découpage en modules et l’ordre des techniques ;
- **le planning** : quel module, à quel moment, avec quel matériel ;
- **les modèles** : combien en prévoir selon les techniques à filmer ;
- **les textes face caméra** : les introductions et les explications clés, préparées pour le prompteur.

Une bonne préparation, c’est un tournage plus court, sans oubli, et un montage plus rapide.

## Combien de temps dure le tournage ?

Deux à trois jours en moyenne. La durée dépend directement de votre formation : plus elle est longue et riche en techniques, plus le tournage prend de temps. Une formation courte sur une seule technique se tourne plus vite qu’un parcours complet avec plusieurs intervenants. On fixe le planning avec vous avant de venir, pour que vous sachiez exactement à quoi vous attendre.

## Le matériel que nous apportons

- **Plusieurs caméras** : un plan large pour situer la scène, un plan serré sur les mains et le geste, un plan sur vous quand vous expliquez. Au montage, on passe de l’un à l’autre pour que l’élève voie toujours ce qui compte.
- **Un retour vidéo pour chaque caméra** : des écrans de contrôle montrent en direct ce que filme chaque caméra. On vérifie le cadrage et la netteté pendant la prise, et non après : pas de mauvaise surprise au montage.
- **Un prompteur** : pour les passages face caméra, votre texte défile devant l’objectif. Vous regardez l’élève dans les yeux sans avoir à apprendre par cœur.
- **Les micros et les lumières** : un micro-cravate pour une voix claire, même dans un atelier bruyant, et un éclairage qui rend chaque détail visible.

Vous n’avez rien à gérer côté technique : l’équipe, de deux à quatre personnes selon le projet, s’occupe de tout.

## Pas à l’aise devant la caméra ?

C’est le cas de la plupart de nos clients au début. En général, quelques prises suffisent pour oublier la caméra, surtout quand vous faites ce que vous faites tous les jours : montrer votre geste. On vous guide pendant le tournage, on refait les passages qui ne vous plaisent pas, et le montage garde vos meilleures prises. Pour les passages face caméra, le prompteur fait le reste.

[[video:ev5QO7O1uo4|Pas à l’aise face caméra ? La réponse de Nathanaël en vidéo]]

## Le jour J, étape par étape

1. **L’installation** : mise en place des caméras, des lumières et des retours vidéo dans votre espace de travail.
2. **Les démonstrations** : chaque technique est filmée en continu, avec vos explications, sous plusieurs angles à la fois.
3. **Les passages face caméra** : introduction de chaque module, conseils et erreurs à éviter, au prompteur.
4. **Les plans complémentaires** : détails du matériel, résultats finaux, ambiance de votre centre.

On avance module par module, en suivant le planning préparé ensemble.

## Après le tournage : montage et mise en ligne

Les rushes sont montés en modules courts, sous-titrés, avec les points clés à l’écran. Le montage est livré sous 3 à 5 semaines selon le volume. Pendant ce temps, on prépare la page de vente, le paiement et la plateforme : votre formation est prête à vendre environ 30 jours après le tournage. Pour le calendrier complet, voir [combien de temps faut-il pour créer une formation en ligne](/ressources/combien-de-temps-creer-formation-en-ligne).

Les vidéos vous appartiennent à 100 % : nous vous remettons les rushes et les vidéos montées à la livraison.

## Votre check-list avant le tournage

- le programme validé, module par module ;
- le matériel et les produits pour chaque technique, en quantité suffisante ;
- les modèles confirmés pour chaque créneau ;
- un espace de travail dégagé, avec un accès à l’électricité ;
- une tenue professionnelle, et une tenue de rechange ;
- vos textes d’introduction relus pour le prompteur.

[[video:fRIjNmgk0hE|Comment Expansion digitalise votre formation, en 1 minute]]

[[simulateur]]
`,
    faq: [
      {
        q: 'Faut-il prévoir des modèles pour le tournage ?',
        a: 'Oui, pour les techniques qui se pratiquent sur une personne. Nous vous indiquons à l’avance combien en prévoir selon le nombre de techniques à filmer, et nous organisons le planning avec vous.',
      },
      {
        q: 'Peut-on filmer dans un atelier bruyant ?',
        a: 'Oui. Nous utilisons des micros-cravates pour que votre voix reste claire malgré les machines, et certaines explications peuvent être enregistrées au calme.',
      },
      {
        q: 'Plusieurs formateurs peuvent-ils intervenir ?',
        a: 'Oui. On organise le planning pour que chaque intervenant tourne ses modules. Le tournage peut alors durer un peu plus longtemps.',
      },
      {
        q: 'À qui appartiennent les vidéos ?',
        a: 'À vous, à 100 %. Nous vous remettons les rushes et les vidéos montées à la livraison, pour que vous puissiez exploiter le contenu comme vous le souhaitez.',
      },
    ],
    liees: ['combien-de-temps-creer-formation-en-ligne', 'formation-en-ligne-efficace-pedagogie', 'formation-en-ligne-rentable'],
  },
]

export const ARTICLES = ARTICLES_SOURCE.map((a) => {
  const blocs = analyser(a.contenu)
  const mots = nombreDeMots(blocs) + nombreDeMots(a.faq.map((f) => ({ texte: `${f.q} ${f.a}` })))
  return {
    ...a,
    path: `${BASE_RESSOURCES}/${a.slug}`,
    maj: a.maj || a.publie,
    blocs,
    sommaire: blocs.filter((b) => b.type === 'h2'),
    mots,
    lecture: Math.max(3, Math.round(mots / 220)),
  }
})

export function articleParSlug(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null
}

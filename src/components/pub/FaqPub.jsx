const FAQS = [
  {
    q: 'Comment fonctionnent les 10 à 20% ?',
    a: "Nous prélevons un pourcentage du chiffre d'affaires généré exclusivement par nos campagnes publicitaires. Ce pourcentage est fixé dès l'audit (entre 10 et 20% selon votre marge et votre ticket moyen). Vous ne payez jamais sur votre CA organique ou via d'autres canaux.",
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: "Non. Notre offre n'a pas d'engagement minimum : vous pouvez arrêter à tout moment si vous n'êtes pas satisfait. Nous prenons le risque, pas vous.",
  },
  {
    q: 'Quel budget publicitaire minimum prévoir ?',
    a: "Nous recommandons un budget média minimum de 2 000 € / mois pour obtenir des données exploitables et commencer à scaler. En-dessous, le modèle au résultat devient moins pertinent pour les deux parties.",
  },
  {
    q: 'Qui produit les créas vidéo ?',
    a: "Notre équipe interne. On écrit les scripts, on tourne (en studio ou sur votre site), on monte, on décline. Vous n'avez rien à produire — sauf l'envie de voir votre CA décoller.",
  },
  {
    q: 'Sur quelles plateformes travaillez-vous ?',
    a: "Meta Ads (Facebook + Instagram) est notre canal principal. Selon votre cible, on active aussi TikTok Ads, YouTube Ads et Snapchat Ads. Le choix est fait pendant l'audit stratégique.",
  },
  {
    q: "Comment mesure-t-on le CA qui vient vraiment des pubs ?",
    a: "Via tracking attribution (Pixel Meta, CAPI, UTMs, intégration avec votre CRM/Stripe). On met en place le tracking dès le départ et vous avez accès au dashboard en temps réel — chaque euro attribué est traçable.",
  },
  {
    q: 'En combien de temps voit-on les premiers résultats ?',
    a: "Les premiers leads arrivent dès le lancement (J+7 à J+14 après l'audit). La phase de test des créas dure 3 à 4 semaines, puis on entre en phase de scaling. Les vrais résultats business se voient au 2ème mois.",
  },
  {
    q: 'Que se passe-t-il si les campagnes ne convertissent pas ?',
    a: "Si après 30 jours de campagne les résultats sont insuffisants, on itère sur la stratégie, les créas ou l'offre. Si après 60 jours rien ne décolle, on arrête la collaboration — vous n'avez rien payé, on a investi notre temps.",
  },
]

function FaqPub() {
  return (
    <section id="faq" className="faq">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Questions fréquentes</span>
        <h2 className="section-head__title">
          Tout ce que{' '}
          <span className="section-head__title-italic">vous vous demandez</span>
        </h2>
      </div>

      <div className="faq__inner">
        <div className="faq__list">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              className="faq-item"
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 60, 300)}ms` }}
            >
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
  )
}

export default FaqPub

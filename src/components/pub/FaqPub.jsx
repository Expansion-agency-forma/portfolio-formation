export const FAQS = [
  {
    q: 'Comment fonctionnent les 15 % ?',
    a: "Nous prélevons 15 % du chiffre d'affaires réellement encaissé grâce à nos campagnes publicitaires, mesuré par le tracking mis en place au démarrage. Une vente signée mais non payée ne vous coûte rien. Vous ne payez jamais sur votre CA organique ou via d'autres canaux. Le premier mois, des frais de mise en place de 1 500 € TTC couvrent l'audit, l'installation du tracking, le tournage et les créas de lancement.",
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: "Non. Nos offres n'ont pas d'engagement minimum : vous pouvez arrêter à tout moment si vous n'êtes pas satisfait.",
  },
  {
    q: 'Quel budget publicitaire minimum prévoir ?',
    a: "Nous recommandons un budget média minimum de 2 000 € / mois pour obtenir des données exploitables et commencer à scaler. Ce budget est payé directement aux plateformes (Meta, TikTok…) : il n'est pas inclus dans nos offres et nous ne le touchons jamais.",
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
    a: "Si après 30 jours de campagne les résultats sont insuffisants, on itère sur la stratégie, les créas ou l'offre. Si après 60 jours rien ne décolle, on arrête la collaboration : sans ventes, aucune commission ne vous est facturée.",
  },
  {
    q: 'Pourquoi des frais de mise en place ?',
    a: "Avant la première vente, il y a un vrai travail : audit de votre offre, installation du tracking (Pixel, CAPI, CRM), écriture des scripts, tournage, montage et paramétrage des campagnes. Les 1 500 € TTC couvrent ce temps, une seule fois. Ensuite, on n'est payés que sur le CA encaissé.",
  },
  {
    q: 'Offre au résultat ou forfait : laquelle choisir ?',
    a: "Vous voulez limiter votre risque et partager la croissance avec nous : l'offre au résultat. Vous générez déjà un gros volume et voulez un coût fixe : le forfait. On vous conseille la plus rentable pendant l'audit.",
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

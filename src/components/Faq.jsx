const FAQS = [
  {
    q: 'Combien de temps dure le tournage ?',
    a: "En général, une journée suffit pour une formation standard (8 à 12 modules). Pour les formations plus denses ou nécessitant plusieurs intervenants, nous planifions 2 à 3 journées de captation sur site.",
  },
  {
    q: "Qui s'occupe du matériel et de l'équipe ?",
    a: "Nous venons avec tout l'équipement nécessaire : caméras, micros, éclairages, prompteur si besoin. Une équipe de 2 à 4 personnes (réalisateur, cadreur, preneur de son) se déplace chez vous.",
  },
  {
    q: 'À qui appartiennent les vidéos finales ?',
    a: "Les rushes comme les vidéos montées vous appartiennent à 100%. Nous vous remettons tous les fichiers sources à la livraison, pour que vous puissiez exploiter le contenu comme vous le souhaitez.",
  },
  {
    q: 'Combien de temps entre le tournage et la mise en ligne ?',
    a: "Le montage est livré sous 3 à 5 semaines selon le volume. L'intégration au système de vente (landing page, tunnel, CRM) se fait en parallèle, pour une mise en ligne rapide.",
  },
  {
    q: 'Comment fonctionne la partie système de vente ?',
    a: "Nous concevons la page de vente, le tunnel d'inscription et nous connectons les outils (Stripe, Brevo, Notion…). Vous recevez une solution plug-and-play, avec une formation pour la piloter en autonomie.",
  },
  {
    q: 'Quels secteurs avez-vous déjà accompagnés ?',
    a: "Nous accompagnons principalement les métiers de la beauté (prothésie ongulaire, extension de cils, rehaussement, browlift, blanchiment dentaire) et de l'esthétique, mais aussi la formation commerciale et le bien-être. La méthode reste la même dès qu'il y a un savoir-faire à transmettre.",
  },
]

function Faq() {
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
                    <path
                      d="M7 2 V12 M2 7 H12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
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

export default Faq

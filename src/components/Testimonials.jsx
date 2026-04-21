const TESTIMONIALS = [
  {
    quote: "On a lancé 3 formations en ligne en 6 mois. Le tournage sur site change tout — nos apprenants sentent la qualité dès la première seconde.",
    name: 'Amélie R.',
    role: 'Fondatrice, Institut Beauté & Co',
    initials: 'AR',
  },
  {
    quote: "Fini les lives Zoom captés au smartphone. Le résultat est au niveau de ce qu'on voit sur les plateformes pros de formation.",
    name: 'Julien M.',
    role: "Directeur, école Auto Elite",
    initials: 'JM',
  },
  {
    quote: "Le système de vente livré avec est ce qui m'a le plus surprise. On n'a pas eu à toucher à Stripe ni à bricoler un tunnel.",
    name: 'Sarah L.',
    role: 'Formatrice indépendante',
    initials: 'SL',
  },
]

function Stars() {
  return (
    <span className="testimonial__stars" aria-label="5 étoiles sur 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 1 l2.09 4.26 L14.7 6 l-3.4 3.3 0.8 4.68 L8 11.77 L3.9 13.98 l0.8 -4.68 L1.3 6 l4.61-0.74z" />
        </svg>
      ))}
    </span>
  )
}

function Testimonials() {
  return (
    <section id="temoignages" className="testimonials">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Ils nous ont fait confiance</span>
        <h2 className="section-head__title">
          Ce qu'en{' '}
          <span className="section-head__title-italic">disent nos clients</span>
        </h2>
      </div>

      <div className="testimonials__inner">
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="testimonial"
              data-reveal
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <Stars />
              <blockquote className="testimonial__quote">{t.quote}</blockquote>
              <figcaption className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">{t.initials}</span>
                <span className="testimonial__meta">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

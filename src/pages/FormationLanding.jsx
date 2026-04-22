import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import KpiBand from '../components/KpiBand'
import Process from '../components/Process'
import Formations from '../components/Formations'
import CrossLinkPub from '../components/CrossLinkPub'
import Testimonials from '../components/Testimonials'
import Roi from '../components/Roi'
import Compare from '../components/Compare'
import Faq from '../components/Faq'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const NAV_ITEMS = [
  { href: '#formations', label: 'Nos réalisations' },
  { href: '#services', label: 'Comment ça marche' },
  { href: '#temoignages', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
]

function FormationLanding() {
  return (
    <>
      <Navbar
        items={NAV_ITEMS}
        crossLink={{ to: '/publicite', label: 'Publicité' }}
        cta={{
          href: 'https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone',
          label: 'Réserver un appel',
        }}
      />
      <Hero />
      <KpiBand />
      <Process />
      <Formations />
      <CrossLinkPub />
      <Testimonials />
      <Roi />
      <Compare />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}

export default FormationLanding

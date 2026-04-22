import Navbar from '../components/Navbar'
import HeroPub from '../components/pub/HeroPub'
import KpiBandPub from '../components/pub/KpiBandPub'
import ProcessPub from '../components/pub/ProcessPub'
import Creations from '../components/pub/Creations'
import TestimonialsPub from '../components/pub/TestimonialsPub'
import ResultsScrollPub from '../components/pub/ResultsScrollPub'
import ComparePub from '../components/pub/ComparePub'
import FaqPub from '../components/pub/FaqPub'
import CtaPub from '../components/pub/CtaPub'
import Footer from '../components/Footer'

const NAV_ITEMS = [
  { href: '#creations', label: 'Nos campagnes' },
  { href: '#services', label: 'Comment ça marche' },
  { href: '#temoignages', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
]

function PubLanding() {
  return (
    <>
      <Navbar
        items={NAV_ITEMS}
        crossLink={{ to: '/', label: 'Formation' }}
        cta={{
          href: 'https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone',
          label: 'Audit gratuit',
        }}
      />
      <HeroPub />
      <KpiBandPub />
      <ProcessPub />
      <Creations />
      <TestimonialsPub />
      <ResultsScrollPub />
      <ComparePub />
      <FaqPub />
      <CtaPub />
      <Footer />
    </>
  )
}

export default PubLanding

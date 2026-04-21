import Navbar from './components/Navbar'
import Hero from './components/Hero'
import KpiBand from './components/KpiBand'
import Process from './components/Process'
import Formations from './components/Formations'
import Testimonials from './components/Testimonials'
import Compare from './components/Compare'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'
import { useRevealOnScroll, useCounterAnimation } from './hooks/useScrollEffects'

function App() {
  useRevealOnScroll()
  useCounterAnimation()

  return (
    <>
      <Navbar />
      <Hero />
      <KpiBand />
      <Process />
      <Formations />
      <Testimonials />
      <Compare />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}

export default App

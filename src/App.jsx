import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import FormationLanding from './pages/FormationLanding'
import PubLanding from './pages/PubLanding'
import { useRevealOnScroll, useCounterAnimation } from './hooks/useScrollEffects'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  useRevealOnScroll()
  useCounterAnimation()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FormationLanding />} />
        <Route path="/publicite" element={<PubLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

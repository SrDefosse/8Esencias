
import { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Mezcal from './pages/mezcal/Mezcal'
import Process from './pages/process/Process'
import WhereToBuy from './pages/wheretobuy/WhereToBuy'
import Contact from './pages/contact/Contact'
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  // 🚀 Configurar ScrollSmoother de GSAP
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollSmoother)
    
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,        
      effects: true,      
      smoothTouch: 0.1,   
      normalizeScroll: true, 
    })

    return () => {
      if (smoother) smoother.kill()
    }
  }, [])
  
  return (
    <Router>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mezcal" element={<Mezcal />} />
                <Route path="/process" element={<Process />} />
                <Route path="/where-to-buy" element={<WhereToBuy />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

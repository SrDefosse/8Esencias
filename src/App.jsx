
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Mezcales from './pages/mezcales/Mezcales'
import Process from './pages/process/Process'
import WhereToBuy from './pages/wheretobuy/WhereToBuy'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mezcales" element={<Mezcales />} />
          <Route path="/process" element={<Process />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

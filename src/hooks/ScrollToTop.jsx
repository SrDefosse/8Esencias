import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  // Usa useLayoutEffect para ejecutar sincrónicamente después de las actualizaciones del DOM
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.get()

    if (smoother) {
      // Scroll instantáneo al inicio para máxima compatibilidad y UX
      smoother.scrollTo(0, false) 
    } else {
      //  fallback por si ScrollSmoother no está listo
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

export default ScrollToTop

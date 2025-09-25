import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScroll } from '../context/ScrollContext'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const smoother = useScroll()

  useLayoutEffect(() => {
    if (smoother) {
      smoother.scrollTo(0, false)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, smoother])

  return null
}

export default ScrollToTop

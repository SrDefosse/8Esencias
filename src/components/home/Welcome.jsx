import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Welcome = () => {
  const sectionRef = useRef(null)
  const linesRef = useRef([])
  const buttonContainerRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const elements = [...linesRef.current, buttonContainerRef.current].filter(Boolean)

      gsap.from(elements, {
        yPercent: 40,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 65%',
          scrub: false,
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const textLines = [
    'Bienvenido a Ocho Esencias.',
    'Estás por descubrir algo más que un mezcal.',
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-16 bg-[#464538] text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-5">
        {textLines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            <h2
              ref={(el) => {
                linesRef.current[index] = el
              }}
              className="text-4xl md:text-6xl font-semibold tracking-tight"
            >
              {line}
            </h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Welcome

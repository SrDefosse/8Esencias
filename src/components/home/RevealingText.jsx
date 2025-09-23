import { useState, useEffect, useMemo } from 'react'

const textContent = `
Mezcal Ocho Esencias nace del respeto por los procesos que toman tiempo.
Cada botella representa años de trabajo artesanal, desde el cultivo del agave hasta el momento en que se comparte un trago.
Creemos que el mezcal no sólo se bebe. Se honra.
Y cuando se abre una botella, se abre también una historia que merece ser contada.`

const RevealingText = () => {
  const tokens = useMemo(() => {
    const rawTokens = textContent.split(/(\s+)/)
    const processed = []

    rawTokens.forEach((token) => {
      if (token.includes('\n')) {
        token.split(/(\n)/).forEach((segment) => {
          if (segment === '') return
          processed.push(segment)
        })
      } else {
        processed.push(token)
      }
    })

    return processed
  }, [])

  const [revealedCount, setRevealedCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRevealedCount((current) => {
        if (current >= tokens.length) {
          clearInterval(timer)
          return current
        }
        return current + 1
      })
    }, 120)

    return () => clearInterval(timer)
  }, [tokens.length])

  return (
    <section className="py-24 px-6 md:px-16 bg-[#0B0D06] text-white">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Ritual sagrado en cada gota
        </h2>
        <div className="text-lg md:text-2xl leading-relaxed text-amber-100/90 whitespace-pre-wrap">
          {tokens.map((token, index) => {
            const isVisible = index < revealedCount
            if (token === '\n') {
              return (
                <span
                  key={`break-${index}`}
                  className={`block transition-all duration-500 ease-out ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-2'}`}
                >
                  {'\u00A0'}
                </span>
              )
            }

            return (
              <span
                key={`token-${index}`}
                className={`inline-block transition-all duration-500 ease-out ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-2'}`}
              >
                {token}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RevealingText

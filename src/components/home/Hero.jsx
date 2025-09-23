import Button from '../../components/ui/button'

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-end px-6 md:px-16 
      bg-[url('/home/hero-mobile-bg.png')] 
      md:bg-[url('/home/hero-bg.png')] 
      bg-cover bg-no-repeat bg-center 
      md:bg-center"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/70 to-neutral-950/20" />
      <div className="relative z-10 text-right w-full max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          8 Esencias
        </h1>
        <p className="text-lg md:text-2xl text-amber-100 mb-10 max-w-2xl ml-auto">
          Descubre la tradición milenaria del mezcal artesanal mexicano en cada gota
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button>
            Conoce Nuestros Mezcales
          </Button>
          <Button variant="outline">
            Nuestra Historia
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

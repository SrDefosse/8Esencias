import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const PERSPECTIVE = "1500px";

const TiltImage = ({ src, alt, className }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.5, 0, 0.5]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: PERSPECTIVE,
      }}
      className="flex items-center justify-center"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          backgroundImage: `url('${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className={`relative overflow-hidden shadow-2xl ${className}`}
      >
        <motion.div
          style={{
            opacity: sheenOpacity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/20"
        />
      </motion.div>
    </div>
  );
};

const Ritual = () => {


  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-16"
      style={{
        background: 'radial-gradient(circle, #634A26 0%, #AC8658 50%, #42341C 100%)'
      }}
    >
      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <div className="mb-16">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ color: '#FFFFFF' }}
          >
            RITUAL EN CADA GOTA
          </h1>
        </div>

        {/* Párrafos con diferentes tamaños */}
        <div className="space-y-24">

          {/* Bloque 1: Texto a la izquierda, Imagen a la derecha */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left space-y-6">
              <p
                className="text-xl md:text-2xl lg:text-3xl font-bold leading-loose"
                style={{ color: '#fef3c7' }}
              >
                Cada gota es el resultado de años de espera, dedicación y conexión con la tierra.
              </p>
              
              <p
                className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed"
                style={{ color: '#FFFFFF' }}
              >
                Desde la siembra del agave, que crece bajo el sol durante años, hasta el fuego que transforma su interior; desde el humo, el viento y la madera que le dan carácter, hasta la paciencia con la que fermenta y se destila.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <TiltImage 
                src="/mezcal/ritual1.png" 
                alt="Decoración" 
                className="aspect-[9/11] w-80 bg-transparent"
              />
            </div>
          </div>

          {/* Bloque 2: Imagen a la izquierda, Texto a la derecha */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 text-left md:text-right space-y-6">
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-loose"
                style={{ color: '#fef3c7' }}
              >
                Todo es parte de un ciclo. De un ritual.
              </p>
              
              <p
                className="text-lg md:text-xl lg:text-2xl font-normal leading-loose"
                style={{ color: '#FFFFFF' }}
              >
                Cada etapa carga una energía única que viaja, se transforma y permanece… hasta que se libera en el instante en que se destapa la botella de Ocho Esencias Mezcal.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <TiltImage 
                src="/mezcal/ritual2.png" 
                alt="Decoración" 
                className="aspect-[9/11] w-80 bg-transparent transform scale-x-[-1]"
              />
            </div>
          </div>
          
          {/* Párrafo final centrado */}
          <p
            className="text-lg md:text-xl lg:text-2xl font-medium leading-loose max-w-3xl mx-auto text-center"
            style={{ color: '#FFFFFF' }}
          >
            Ahí, en ese momento, es cuando todo lo que fue <br/> — campo, fuego, agua, tiempo, manos — <br/> se convierte en esencia compartiendo un ritual sagrado en cada gota
          </p>

        </div>

        {/* Línea decorativa final */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-0.5 w-16" style={{ background: 'linear-gradient(to right, transparent, #AC8658, transparent)' }}></div>
          <div className="mx-4 w-2 h-2 rounded-full" style={{ backgroundColor: '#fbbf24' }}></div>
          <div className="h-0.5 w-16" style={{ background: 'linear-gradient(to right, transparent, #AC8658, transparent)' }}></div>
        </div>
      </div>
    </section>
  )
}

export default Ritual

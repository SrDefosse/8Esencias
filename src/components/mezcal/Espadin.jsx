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

const Espadin = () => {
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
      className="relative w-full bg-[#42341C] pt-20"
      style={{
        backgroundImage: "url('/mezcal/mezcal-espadin-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 min-h-screen p-8 lg:p-16">
        <div
          style={{ perspective: PERSPECTIVE }}
          className="flex items-center justify-center"
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform,
              backgroundImage: "url('/mezcal/mezcal-espadin.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative aspect-[9/14] w-64 md:w-72 lg:w-80 overflow-hidden bg-zinc-950 shadow-2xl shadow-zinc-950"
          >
            <motion.div
              style={{ opacity: sheenOpacity }}
              className="absolute inset-0 bg-gradient-to-br from-zinc-300/50 via-zinc-300 to-zinc-300/50"
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-white max-w-xl w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Mezcal Espadín
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm lg:text-base mb-3 md:mb-4 lg:mb-6">
              <div className="bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
                <span className="font-semibold text-gray-300">Origen:</span>
                <span className="ml-1 md:ml-2 text-white">Oaxaca</span>
              </div>
              <div className="bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
                <span className="font-semibold text-gray-300">38% Vol. Alc.</span>
              </div>
            </div>
            <p className="text-xs md:text-sm lg:text-base mb-3 md:mb-4 lg:mb-6 leading-relaxed">
              Esta botella de 750ml te ofrece un mezcal suave y expresivo de
              agave espadín (Angustifolia), cultivado y cosechado de forma
              artesanal en Oaxaca, con un proceso que respeta los ciclos de la
              tierra y el tiempo que cada planta necesita para madurar.
            </p>
            <p className="text-xs md:text-sm lg:text-base mb-3 md:mb-4 lg:mb-6 leading-relaxed">
              Con notas ligeras de humo, cítricos y tierra húmeda, este mezcal
              es ideal para quienes buscan una experiencia auténtica y
              equilibrada. Su carácter noble y su perfil accesible lo hacen
              perfecto para tomar solo, compartir o acompañar con rodajas de
              naranja y sal de gusano.
            </p>
            <div className="grid grid-cols-1 gap-1.5 md:gap-2 text-xs md:text-sm lg:text-base backdrop-blur-sm">
              <div className="bg-white/5 rounded-lg px-3 md:px-4 py-2 md:py-3 border border-white/10 backdrop-blur-sm">
                <span className="font-semibold text-gray-300">Vista:</span>
                <span className="ml-1 md:ml-2 text-gray-200">
                  Cristalino con aspecto brillante.
                </span>
              </div>
              <div className="bg-white/5 rounded-lg px-3 md:px-4 py-2 md:py-3 border border-white/10 backdrop-blur-sm">
                <span className="font-semibold text-gray-300">Nariz:</span>
                <span className="ml-1 md:ml-2 text-gray-200">
                  Agave, tierra mojada, cítricos suaves y un ligero toque de
                  humo fresco.
                </span>
              </div>
              <div className="bg-white/5 rounded-lg px-3 md:px-4 py-2 md:py-3 border border-white/10 backdrop-blur-sm">
                <span className="font-semibold text-gray-300">Boca:</span>
                <span className="ml-1 md:ml-2 text-gray-200">
                  Equilibrio perfecto entre agave cocido, cítricos y herbal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Espadin;
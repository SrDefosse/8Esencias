import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button'

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const PERSPECTIVE = "1500px";

const MezcalCards = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/home/mezcal-card-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="relative min-h-[800px] bg-neutral-900 flex flex-col items-center justify-center"
    >
      <TiltShineCard />
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Mezcal Espadín
        </h2>
        <Link to="/mezcal">
          <Button 
            variant="filled" 
            color="AC8658"
            className="text-xl px-12 py-4"
          >
            Conocer más
          </Button>
        </Link>
      </div>
    </div>
  );
};

const TiltShineCard = () => {
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
          backgroundImage:
            "url('/mezcal/mezcal-espadin.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="relative aspect-[9/13] w-80 overflow-hidden bg-zinc-950 shadow-2xl shadow-zinc-950"
      >
        <motion.div
          style={{
            opacity: sheenOpacity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/30"
        />
      </motion.div>
    </div>
  );
};

export default MezcalCards;

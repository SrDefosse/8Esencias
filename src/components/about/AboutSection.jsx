export const AboutSection = () => {
  return (
    <>
      <div className="relative h-[400vh]">
        {CARDS.map((c, idx) => (
          <Card key={c.id} card={c} position={idx + 1} />
        ))}
      </div>
    </>
  );
};

const Card = ({ position, card }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${card.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: position,
      }}
      className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-4 text-white"
    >
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-lg md:text-xl">
        {card.description}
      </p>
    </div>
  );
};

const CARDS = [
  {
    id: 1,
    title: "Mezcal Artesanal",
    description:
      "Mezcal Ocho Esencias es 100% artesanal producido en Oaxaca, cuidando cada detalle, desde el cultivo hasta el producto final respetando los ciclos naturales del agave y los tiempos que requiere cada etapa",
    imgSrc: "/home/hero-bg.png",
  },
  {
    id: 2,
    title: "De Inicio a Fin",
    description:
      "Desde la siembra del agave hasta embotellar el mezcal, sucede todo un proceso de pasos únicos y esenciales en un periodo largo de tiempo a través de años. Pero la esencia final, la más importante, es la que se revela cuando se abre la botella. Esa es la octava esencia: el momento en el que todo cobra sentido",
    imgSrc: "/home/mezcal-card-bg.png",
  },
  {
    id: 3,
    title: "Honrando la Historia",
    description:
      "Nuestra misión es compartir el mezcal con el mundo honrando, cuidando y respetando la tierra, el tiempo y sobre todo a las personas que lo hacen posible. Porque detrás de cada botella hay años de historia, ciclos, paciencia, transformación y personas increíbles",
    imgSrc: "/mezcal/mezcal-espadin-bg.png",
  },
  {
    id: 4,
    title: "Ocho Esencias es Eso",
    description:
      "Una forma de entender el mezcal, y una manera de compartirlo",
    imgSrc: "/mezcal/ritual-bg.gif",
  },
];
import { TimelineWrapper } from "./TimelineWrapper"; 

export default function TimelineDemo() {
  
  const data = [
    {
      title: '1. Siembra del Agave',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Aquí empieza todo: la tierra se prepara, el clima observa y el ciclo natural se comienza a escuchar.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline1.webp"
              alt="Siembra del Agave en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2. Jima (Cosecha)',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Pasados 8 años de espera, maduras las plantas, llega el momento de la jima. Se retiran las pencas, conservando el corazón del agave. Este trabajo se caracteriza por su exigencia y por el inicio de la colaboración del maestro mezcalero interviniendo con su esencia.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline2.webp"
              alt="Jima o Cosecha del Agave en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '3. Cocción',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Las piñas de agave se cocinan en hornos tradicionales, usando leña y piedra. El fuego, la temperatura, el tiempo… estos tres se combinan para darle al mezcal ese sabor auténtico que honra la tradición.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline3.webp"
              alt="Cocción del Agave en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '4. Molienda',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Una vez cocidas, las piñas pasan por molienda. Tahona o molino artesanal. Lo que buscamos aquí es extraer todo el jugo que la tierra ofreció.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline4.webp"
              alt="Molienda del Agave en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '5. Fermentación',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Con paciencia, el jugo fermenta en tinas de madera bajo condiciones naturales. En ese silencio lento se forman aromas, sabores y se define el carácter del mezcal.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline5.webp"
              alt="Fermentación del Mezcal en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '6. Destilación',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Se realiza en alambiques de cobre y en ollas de barro, respetando los tiempos. Cada gota cuenta. Aquí se transforma lo fermentado en lo que se espera: mezcal vivo, con alma.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline6.webp"
              alt="Destilación del Mezcal en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '7. Embotellado',
      content: (
        <div>
          <p className="text-[#F8F7EA] text-xs md:text-sm font-normal mb-8">
            Finalmente, cuando todo está listo, se embotella. Cada botella es única, hecha limitada, con cuidados que aseguran el color, el aroma y la autenticidad que te caracteriza.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline7.webp"
              alt="Embotellado del Mezcal en 8 Esencias"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <TimelineWrapper data={data} />
    </div>
  )
}


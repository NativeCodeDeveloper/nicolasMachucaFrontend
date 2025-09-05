"use client"
import TextType from '@/componentes/TextType';
import FlowingMenu from "@/componentes/FlowingMenu";


export default function Portafolio() {
  const demoItems = [
    {
      link: "#",
      text: "Paginas Web",
      image: "",
    },
    {
      link: "#",
      text: "Paginas para Profesionales",
      image: "",
    },
    {
      link: "#",
      text: "Plataformas de E-Comerce",
      image: "",
    },

  ];
  return (
    
    <div>
      <br /><br /><br /><br /><br />

      <div className='block md:hidden'>
          <h1 className="text text-4xl md:text-5xl lg:text-7xl font-black justify-center px-8 mb-8">
        Nuestros Proyectos
      </h1>
      </div>

      <div className='hidden sm:block'>
        <TextType className='text text-2xl md:text-7xl font-black px-16 mb-16'
  text={["Conoce Nuestros Proyectos", "y Trabaja con Expertos"]}
  typingSpeed={100}
  pauseDuration={700}
  showCursor={true}
  cursorCharacter=">_"
/>
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>

      <div>
        
      </div>
    </div>
  );
}

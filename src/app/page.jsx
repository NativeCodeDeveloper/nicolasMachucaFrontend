"use client";
import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";
import ScrollReveal from "../componentes/ScrollReveal";
import Image from "next/image";
import BotonBlanco from "@/componentes/BotonBlanco";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div>
        <Portada></Portada>
      </div>
      <div
        className="bg-[url('/wall3.png')] bg-cover bg-center bg-no-repeat w-full grid grid-cols-1 md:grid-cols-5 items-center justify-center rounded-4xl min-h-[60vh] py-12"
      >
       <div className="col-span-4 self-center">
          <div className="mt-12">
            <h2 className="text-4xl md:text-6xl font-extrabold px-12 text-white tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">Acerca de</span>
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed px-12 mt-6 text-white/90">
              Soy un desarrollador en constante crecimiento, motivado por el aprendizaje continuo y la incorporación de nuevas tecnologías. 
              Cuento con <span className="font-semibold text-indigo-300">disponibilidad para trabajar de manera remota</span> y un alto interés en integrarme a proyectos de empresas donde pueda 
              aportar valor, colaborar en desafíos tecnológicos y seguir potenciando mis habilidades técnicas y profesionales. 
              Mi objetivo es crecer junto al equipo, aportar soluciones innovadoras y mantener siempre un compromiso con la excelencia.
            </p>
            <br />
            <br />
          </div>
          <div className="border-t border-white/10 mx-12 mt-12"></div>
          <div className="flex justify-center md:justify-end mr-6 mb-20">
            <Link href={"/comprar"}>
              <BotonBlanco contenido={"Contacto"} />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <Servicios></Servicios>
      </div>
      <br />
      <br />

      <div>
        <Portafolio></Portafolio>
      </div>

      <div
        className="bg-[url('/wallet.png')] bg-cover bg-center bg-no-repeat w-full grid grid-cols-1 md:grid-cols-5 items-center justify-center rounded-4xl min-h-[60vh] py-12 my-60"
      >
       <div className="col-span-4 self-center mt-8">
         <div className="mt-12">
           <h2 className="text-4xl md:text-6xl font-extrabold px-12 text-white tracking-tight">
             <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
               Otras Habilidades
             </span>
           </h2>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12 mt-8 text-white/90 text-lg md:text-2xl leading-relaxed">
             <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition">
               Administración de servidores Windows
             </li>
             <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition">
               Gestión y configuración de firewalls
             </li>
             <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition">
               Manejo general de consola en Linux
             </li>
             <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition">
               Despliegue de aplicativos en VPS y servicios serverless (Vercel, Railway, AWS Lambda)
             </li>
             <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition">
               Modelamiento y consultas en bases de datos relacionales
             </li>
             <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition">
               Gestión de bases de datos en SQL Server
             </li>
           </ul>
         </div>
       </div>
      </div>

      <div
        className="
       bg-[url('/morado1.png')] bg-cover 
      w-full 
      "
      >
        <SobreNosotros></SobreNosotros>
      </div>

      <div></div>
    </div>
  );
}

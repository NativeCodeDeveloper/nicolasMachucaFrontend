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
        className=" 
      bg-[url('/wall3.png')] bg-cover 
      w-full 
     
      grid grid-cols-1 md:grid-cols-5
      justify-center
      rounded-4xl
      "
      >
        <div className="col-span-4">
          <div className="mt-12">
            <h2 className="text-3xl md:text-6xl font-bold p-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
             Acerca <strong>de</strong> 
            </h2>
            <p className="text-2xl md:text-3xl   p-12">
      Soy un desarrollador en constante crecimiento, motivado por el aprendizaje continuo y la incorporación de nuevas tecnologías. Me interesa integrarme a un equipo de trabajo donde pueda aportar con mis conocimientos, colaborar en proyectos desafiantes y al mismo tiempo seguir potenciando mis habilidades técnicas y profesionales.

            </p>
            <br />
            <br />
          </div>
          <div className="flex justify-end mr-6 mb-20">
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
        className="      bg-[url('/wallet.png')] bg-cover 
      w-full 
     
      grid grid-cols-1 md:grid-cols-5
      justify-center
      rounded-4xl
      my-60
      "
      >
        <div className="col-span-4 mt-12">
          <div className="mt-12">
            <h2 className="text-3xl md:text-6xl font-bold p-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
             Otras <strong className="text-cyan-300">Habilidades</strong>{" "}
              
            </h2>
            <p className="text-2xl md:text-3xl   p-12">
<li>Administración de servidores Windows.</li>
<li>Gestión y configuración de firewalls.</li>
<li>Manejo general de consola en Linux.</li>
<li>Despliegue de aplicativos en VPS y servicios serverless (Vercel, Railway, AWS Lambda).</li>
<li>Modelamiento y consultas en bases de datos relacionales.</li>
<li>Gestión de bases de datos en SQL Server.</li>
            </p>
            <br />
            <br />
          </div>
          <div className="flex justify-end mr-6 mb-20">
            <Link href={"/soporte"}>
              <BotonBlanco contenido={"Plan de Soporte"} />
            </Link>
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

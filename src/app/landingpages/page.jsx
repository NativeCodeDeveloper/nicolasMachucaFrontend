"use client";

import Aurora from "@/componentes/Aurora";
import SplashCursor from "@/componentes/Splash";
import Image from "next/image";
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
import AccordionUsage from "@/componentes/Acordeon";
import BotonMui from "@/componentes/BotonMui";
import Threads from "@/componentes/Threads";
import BotonBlanco from "@/componentes/BotonBlanco";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <div>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <h1 className={`${michroma.className} titulosResponsive`}>
          Página Web Profesional
        </h1>
      </div>
      <br />

      <div
        className="
grid
grid-rows-1
gap-7
"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-16
        bg-[url('/landingFondo.png')] bg-cover">
          <div className=" px-10">
       
            <p className="textoNormalResponsive">
              Una sola página 100% optimizada, con diseño profesional y llamados
              a la acción claros. Ideal para captar nuevos pacientes o clientes
              sin rodeos.
            </p>
            <br />
            <br />
            <h2 className="tituloResponsive">Dirigido a</h2><br />
            <p className="textoNormalResponsive">
              Profesionales independientes y emprendedores, como: <br />
            </p><br />
            <ul className="textoNormalResponsive  pl-6 space-y-1">
              <li>Abogados y estudios jurídicos</li>
              <li>Médicos y especialistas en salud</li>
              <li>Matronas y centros de maternidad</li>
              <li>Kinesiólogos y terapeutas físicos</li>
              <li>Contadores y asesores financieros</li>
            </ul><br />
            <p className="textoNormalResponsive italic mt-2">
              Y cualquier otro profesional que busque potenciar su presencia digital.
            </p>
            <br />
            <br />
            <h4 className="tituloResponsive">Incluye:</h4><br />
            <div className="estiloPlanesCayan">
              <ul className="textoNormalResponsive">
                <li className="list-disc ">
                  Diseño profesional y elegante (Sección Única)
                </li>

                <li className="list-disc">Muestra toda tu información esencial</li>
                
                <li className="list-disc">
                  Diseño único según tus indicaciones con animaciones, imágenes,
                  videos, efectos.
                </li>
              
                <li className="list-disc">Responsive para móviles y tablets</li>
               
                <li className="list-disc">
                  Botón de contacto directo (WhatsApp, correo)
                </li>
                
                <li className="list-disc">
                  Desarrollo de Secciones Adicionales segun neceistes
                </li>
             
                <li className="list-disc">
                  Optimización para buscadores (SEO)
                </li>
                
                <li className="list-disc">
                  Alojamiento en Servidores y dominio por 1 año
                </li>
               
                <li className="list-disc">
                  Soporte ilimitado y acompañamiento Post-Venta
                </li>
               
                <li className="list-disc">3 Modificaciones al Año</li>
              
                <li className="list-disc">Sistema de Agendamiento</li>
              
                <h2 className="titulosResponsive">$99.000 CLP</h2>
              </ul>
              <Link href={'/comprar'}><BotonMui contenido={"Comprar"} /></Link>
              
            </div>
            <br />
            <br />
             
            <br />
            
            <br />
            <br />
          </div>

          <div className="">
            <Image
              height={900}
              width={500}
              src="/abogada.jpg"
              alt="foto landing"
              className="rounded-3xl hidden md:block "
            />
            

        
          </div>
        </div>
      </div>
    </div>
  );
}

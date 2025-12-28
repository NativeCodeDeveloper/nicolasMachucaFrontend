"use client";
import Image from "next/image";
import Threads from "@/componentes/Threads";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function SobreNosotros() {
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 p-10 bg-white/5 rounded-4xl shadow-xl backdrop-blur-md border border-white/10"
      >
        <div>
          <h1 className="titulosResponsive text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            Resumen Profesional
          </h1>
          <br />
          <p className="text-lg md:text-2xl leading-relaxed text-white/90">
            Cuento con experiencia en desarrollo Full Stack, integrando frontend, backend y despliegue en la nube. 
            Trabajo con tecnologías modernas como React, Next.js, TailwindCSS, Node.js, Express.js y bases de datos relacionales (MySQL, SQL Server), 
            priorizando siempre la <span className="font-semibold text-indigo-300">excelencia en la ejecución</span> y el cuidado de los detalles. 
            Además, complemento mi perfil con conocimientos en diseño UI y uso de frameworks como Material UI y Bootstrap, 
            lo que me permite entregar productos consistentes y de alta calidad.
          </p>
          <br />

          <br />
          <p className="text-lg md:text-2xl leading-relaxed text-white/90">
            También poseo habilidades en administración de servidores Windows, gestión de firewalls, uso de consola en Linux 
            y despliegue de aplicaciones en VPS y servicios serverless como Vercel, Railway y AWS Lambda. 
            Tengo conocimientos sólidos en modelamiento y consultas SQL, lo que me permite diseñar y optimizar soluciones basadas en datos 
            con un <span className="font-semibold text-indigo-300">enfoque orientado a la precisión y la eficiencia</span>.
          </p>
          <br />
          <br />
          <br />
        </div>
        <div >
          <Image 
            src="webstorm.svg"
            width={600}
            height={400}
            alt="Equipo de desarrollo trabajando en soluciones web"
            className="rounded-4xl w-200 h-auto object-cover"
          />

          <br /><br />

                    <Image
            src="/vscode.png"
            width={600}
            height={400}
            alt="Equipo de desarrollo trabajando en soluciones web"
            className="rounded-4xl w-200 h-auto object-cover"
          />
        </div>

      </div>

      <div className="grid grid-cols-1 gap-x-12 p-10 bg-white/5 rounded-4xl shadow-xl backdrop-blur-md border border-white/10 mt-12">



        <div>
          <p className="text-lg md:text-2xl leading-relaxed text-white/90">
            Mi objetivo es aportar a organizaciones que valoren la innovación y el detalle, 
            construyendo aplicaciones escalables y mejorando procesos tecnológicos. 
            Busco integrarme en proyectos multidisciplinarios, manteniendo siempre una mentalidad de 
            <span className="font-semibold text-indigo-300">aprendizaje continuo</span> y crecimiento profesional, 
            para superar expectativas y generar impacto real.
          </p>
        </div>
      </div>


      <div>
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          <h2 className={`${michroma.className} subtitulosResponsive`}>
           
          </h2>
        </div>
      </div>
    </div>
  );
}

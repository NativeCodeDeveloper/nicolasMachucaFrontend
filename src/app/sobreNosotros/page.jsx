"use client";
import Image from "next/image";
import Threads from "@/componentes/Threads";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function SobreNosotros() {
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-30 p-10 
     "
      >
        <div>
          <h1 className="titulosResponsive">Resumen Profesional</h1>
          <br />
          <p className="text-2xl md:text-3xl ">
            Cuento con experiencia en el desarrollo Full Stack, integrando
            frontend, backend y despliegue en la nube. Manejo tecnologías
            modernas como React, Next.js, TailwindCSS, Node.js, Express.js y
            bases de datos relacionales (MySQL, SQL Server), así como
            herramientas de diseño UI y frameworks como Material UI y Bootstrap.
          </p>
          <br />

          <br />
          <p className="text-2xl md:text-3xl">
            Además, poseo habilidades en administración de servidores Windows,
            gestión de firewalls, uso de consola en Linux, despliegue de
            aplicaciones en VPS y en servicios serverless como Vercel, Railway y
            AWS Lambda. Tengo conocimientos sólidos en modelamiento y consultas
            SQL, lo que me permite diseñar y optimizar soluciones basadas en
            datos.
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 p-10">
        <div>
                    <Image
            src="/teclado.jpg"
            width={600}
            height={400}
            alt="Equipo de desarrollo trabajando en soluciones web"
            className="rounded-4xl w-200 h-auto object-cover"
          />
        </div>

        <div>
          <p className="text-2xl md:text-3xl">
            Estoy interesado en aportar a una organización aportar a construir
            aplicaciones escalables, mejorar procesos tecnológicos y colaborar
            en proyectos multidisciplinarios, siempre con una mentalidad de
            aprendizaje continuo y crecimiento profesional.
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

"use client";

import CardLong from "@/componentes/CardLong";
import { Button } from "bootstrap";
import BotonMui from "@/componentes/BotonMui"

export default function Servicios() {
  const titulo1 = "Medify - Gestión Clínica";
  const descripcion1 =
    "Solución web para comercializar y operar sistemas de gestión clínica: agenda, pacientes, fichas y reportes. Frontend en React + Next.js con Tailwind CSS y MUI; backend Node.js (Express) con JavaScript y MySQL para persistencia y consultas optimizadas.";
  const imagen1 = "/paginasweb.jpg";

  const titulo2 = "JPA INGENIERÍA";
  const descripcion2 =
    "Plataforma web tipo landing page para una sociedad de ingeniería civil, enfocada en captación de clientes y presentación de servicios. Frontend con React, Bootstrap y Tailwind CSS; backend Node.js (Express) en JavaScript con MySQL para contacto, cotizaciones y administración básica.";
  const imagen2 = "/landing.jpg";

  const titulo3 = "Matrona Online";
  const descripcion3 =
    "Plataforma web multipágina para una sociedad profesional de matronas: blog de publicaciones, agenda médica, gestión de pacientes, fichas clínicas, reportes y agendamiento online con integración de pasarelas de pago. Desarrollada con Next.js + React, Tailwind CSS y Bootstrap en el frontend; backend en JavaScript con Node.js (Express) y MySQL para la gestión de datos y operaciones clínicas.";
  const imagen3 = "/ecomerce.jpg";



  const titulo5 = "Matrona Online";
  const descripcion5 =
    "Ofrecemos soluciones de desarrollo a medida según tus necesidades, ya sea una aplicación web, una intranet o un proyecto especial que requiera innovación.";
  const imagen5 = "/images/servicios/personalizado.jpg";

  return (
    <div className="
    grid grid-cols-1 p-12
    w-full
    bg-#1A0
    ">
      <h1 className="text text-4xl md:text-5xl lg:text-7xl font-black justify-center px-8 mb-8">
        Proyectos Destacados
      </h1>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      justify-items-center
      gap-8
      bg-g

      px-2 sm:px-4 md:px-2
      py-2 sm:py-6 md:py-6

      ">
        <div>
          <CardLong
            imagen={imagen1}
            titulo={titulo1}
            descripcion={descripcion1}
            pagina={"/paginasWeb"}
          ></CardLong>
        </div>

        <div>
          <CardLong
            imagen={imagen2}
            titulo={titulo2}
            descripcion={descripcion2}
            pagina={"/landingpages"}
          ></CardLong>
        </div>

        <div>
          <CardLong
            imagen={imagen3}
            titulo={titulo3}
            descripcion={descripcion3}
            pagina={"/eCommerce"}
          ></CardLong>
        </div>

  
      </div>

     <BotonMui  contenido={"otros"}></BotonMui>
    </div>
  );
}

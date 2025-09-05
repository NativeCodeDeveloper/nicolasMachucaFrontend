"use client";
import Aurora from "@/componentes/Aurora";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import Navbar from "@/componentes/Navbar";
import Orb from "@/componentes/Orbe";
import SplashCursor from "@/componentes/Splash";
import GooeyNav from "@/componentes/GooeyNav";
import ScrollVelocity from "@/componentes/InfiniteScroll";
import NavbarTai from "@/componentes/NavbarTai";
import BotonMui from "@/componentes/BotonMui";

export default function Contacto() {
  return (
    <div>
      <div>
        <Aurora />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center 
        bg-[url('/wall3.png')] bg-cover ">
        <div className="p-10">
          <h6
            className={`${michroma.className} text-3xl md:text-5xl justify-center`}
          >
            El primer paso hacia el futuro de tu negocio
          </h6>
          <br />
          <br />
          <h1 className="text-2xl md:text-4xl font-bold">
            Desarrollamos Aplicaciones Web para{" "}
            <strong className="text-purple-500 text-3xl md:text-5xl">
              Todo el Mundo
            </strong>
          </h1>
          <br />
          <h4 className="textoNormalResposivo">
            Únete a un equipo de desarrolladores experimentados. Transformamos
            ideas en productos reales, sin importar tu país ni huso horario.
          </h4>
          <br />
          <br />
                    <h1 className="textoNormalResposivo font-bold">
            Puedes contactarnos por correo electrónico, WhatsApp o
            llamando directamente a nuestro número de teléfono
          </h1>
          <br />
          <ul>
            <li className="textoBoldResponsivo text-purple-500">+56 9 3223 9282.</li>
            <li className="textoBoldResponsivo text-purple-500">
              nexiodev@nexiodevelopers.com
            </li>
          </ul><br /><br /><br />


                    <h6
            className={`${michroma.className} text-3xl md:text-4xl justify-center`}
          >
            Envianos un correo directo!
          </h6>

          <h5 className="textoBoldResponsivo">Cuéntanos tu proyecto</h5>
          <textarea
            className="textAreaMorado"
            name="proyectocliente"
            id="proyectocliente"
          ></textarea>

          <h5 className="textoBoldResponsivo">Nombre y apellido</h5>
          <input className="inputMorado" type="text" name="" id="" />

          <h5 className="textoBoldResponsivo">Email</h5>
          <input className="inputMorado" type="email" name="" id="" />

          <h5 className="textoBoldResponsivo">Teléfono / WhatsApp </h5>
          <input className="inputMorado" type="text" name="" id="" />

          <h5 className="textoBoldResponsivo">Empresa / Marca (opcional)</h5>
          <input className="inputMorado" type="text" name="" id="" />

          <h5 className="textoBoldResponsivo">País y huso horario</h5>
          <input className="inputMorado" type="text" name="" id="" />

          <h5 className="textoBoldResponsivo">
            Tipo de proyecto (obligatorio, select)
          </h5>
          <input className="inputMorado" type="text" name="" id="" />
          <br />
          <br />

          <BotonMui contenido={"Enviar Consulta"} />
        </div>

        <div className="p-8">

          <div className="my-14 flex">
                     <Image
              src={'/contacto1.png'}
              alt="contact1"
              height={800}
              width={650}
              className="rounded-4xl"/>    
 
          </div>

                    <div className="my-14 flex">
                     <Image
              src={'/contacto2.png'}
              alt="contact1"
              height={800}
              width={650}
              className="rounded-4xl hidden md:block"/>    
 
          </div>

          
        


        </div>
      </div>
    </div>
  );
}

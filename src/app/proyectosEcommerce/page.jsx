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
export default function ProyectosEcommerce() {
  return (
    <div>
      <div>
            <div>
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
              />
              <h1 className={`${michroma.className} titulosResponsive`}>
                Proyectos E - Commerce
              </h1>
            </div>
      </div>
    </div>
  );
}

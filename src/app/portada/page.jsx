"use client";
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
import Aurora from "@/componentes/Aurora";

export default function Portada() {
  return (
    <div>
      
      <div>
        <Aurora></Aurora>
      </div>

      <div>
                  <div className="flex justify-center ">
            <h6
              className={`${michroma.className} text-4xl md:text-6xl text-center`}
            >
             <strong> Nicolas Machuca</strong>
            </h6>
          </div><br />
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <h1
             className={`${michroma.className} text-4xl absolute `}
     
          >
         Desarrollador <p className="flex justify-center">Full Stack</p>
         
          </h1>
        </div>
        
      </div>

    
        <NavbarTai></NavbarTai>
   

      <div>
        <div>
          <div className="flex justify-center w-full">
            <GradientText
              colors={["#5227FF", "#40E0D0", "#5227FF"]}
              animationSpeed={3}
              showBorder={false}
              className=""
            >
              <h3 className="text-2xl md:text-3xl font-black text-center">
                  Frontend - UI Design &&  Backend
              </h3>
            </GradientText>
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="">
          <ScrollVelocity
            texts={[
           "React - Tailwind CSS - JavaScript - Next.js - Material UI - Express.js - Node.js - MySQL - SQL Server - HTML5 - CSS - Git - GitHub - ",
]}
            velocity={30}
            className="custom-scroll-text h-[7vh] text-base md:text-2xl"
          />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

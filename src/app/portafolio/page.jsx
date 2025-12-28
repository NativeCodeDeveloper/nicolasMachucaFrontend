"use client";
import { Michroma } from "next/font/google";
import Image from "next/image";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function Portafolio() {
  return (
    <div>
      <h1 className={`${michroma.className} text-4xl md:text-6xl px-10 pt-10 tracking-tight`}>Tecnologías & Stack</h1>
      <p className="px-10 pt-3 pb-8 text-white/80 max-w-3xl">Stack centrado en <span className="font-semibold">rendimiento</span>, <span className="font-semibold">escalabilidad</span> y <span className="font-semibold">UI/UX</span>. Estas son las herramientas con las que construyo productos de calidad, manteniendo código limpio y mantenible.</p>

      <div className="px-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Frontend</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li><strong>React.js</strong> – interfaces dinámicas y reactivas.</li>
              <li><strong>Next.js</strong> – SSR, rutas app router y SEO técnico.</li>
              <li><strong>Tailwind CSS</strong> – UI rápida y responsiva.</li>
              <li><strong>Componentes UI</strong> – diseño consistente y accesible.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Backend</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li><strong>Node.js</strong> – ejecución en servidor.</li>
              <li><strong>Express.js</strong> – APIs REST ligeras y escalables.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Bases de datos</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li><strong>MySQL</strong> – modelos relacionales (usuarios, agendas, fichas, reportes).</li>
              <li><strong>SQL Server</strong> – procedimientos almacenados y administración avanzada.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">

        <div className="place-items-center  border-2  w-120 md:w-100 h-50 border-purple-500 bg-purple-950 rounded-2xl text-center font-bold p-2 hover:bg-purple-900 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out overflow-hidden">
          <h1 className={`${michroma.className} text-2xl`}>
            {" "}
            <strong>React</strong>
          </h1>
          <Image
            src={"/react.png"}
            alt="react"
            width={150}
            height={100}
            className="object-contain mx-auto p-4"
          />
        </div>

        <div className="overflow-hidden place-items-center border-2 w-120 md:w-100 h-50 border-purple-500 bg-purple-950 rounded-2xl text-center font-bold p-2 hover:bg-purple-900 hover:rotate-3 transition-transform ease-in-out">
          <h1 className={`${michroma.className} text-2xl`}>
            {" "}
            <strong>Node.js</strong>
          </h1>
          <Image
            src={"/node.png"}
            alt="react"
            width={200}
            height={100}
            className="object-contain mx-auto p-4"
          />
        </div>

        <div className="place-items-center border-2 w-120 md:w-100 h-50 border-purple-500 bg-purple-950 rounded-2xl text-center font-bold p-2 hover:bg-purple-900 hover:animate-pulse duration-300 ease-in-out">
          <h1 className={`${michroma.className} text-2xl`}>
            {" "}
            <strong>JavaScript</strong>
          </h1>
          <Image
            src={"/js.png"}
            alt="react"
            width={150}
            height={150}
            className="object-contain mx-auto p-4"
          />
        </div>
      </div><br />

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        <div className="place-items-center overflow-hidden border-2 w-120 md:w-100 h-50 border-purple-500 bg-purple-950 rounded-2xl text-center font-bold p-2 hover:bg-purple-900 hover:translate-y-2.5 hover:scale-110 transition duration-500 ease-in-out">
          <h1 className={`${michroma.className} text-2xl`}>
            {" "}
            <strong>Tailwind CSS</strong>
          </h1>
          <Image
            src={"/tail.png"}
            alt="react"
            width={160}
            height={82}
            className="object-contain mx-auto p-4"
          />
        </div>

        <div className="overflow-hidden place-items-center border-2 w-120 md:w-100 h-50 border-purple-500 bg-purple-950 rounded-2xl text-center font-bold p-2 hover:bg-purple-900 hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition duration-300">
          <h1 className={`${michroma.className} text-2xl`}>
            {" "}
            <strong>Express.js</strong>
          </h1>
          <Image
            src={"/exp.png"}
            alt="react"
            width={360}
            height={100}
            className="object-contain mx-auto p-4"
          />
        </div>

        <div className="overflow-hidden place-items-center border-2 w-120 md:w-100 h-50 border-purple-500 bg-purple-950 rounded-2xl text-center font-bold p-2 hover:bg-purple-900 hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition duration-300">
          <h1 className={`${michroma.className} text-2xl`}>
            {" "}
            <strong>Next.js</strong>
          </h1>
          <Image
            src={"/logonex.svg"}
            alt="react"
            width={300}
            height={282}
            className="object-contain mx-auto p-4"
          />
        </div>
      </div>

      <div className="flex"></div>
    </div>
  );
}

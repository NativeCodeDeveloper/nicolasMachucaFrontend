"use client";
import Aurora from "@/componentes/Aurora";
import Image from "next/image";


export default function () {
  return (
    <div>
      <div>
        <Aurora />
      </div>

      <div
        className="bg-[url('/landingFondo.png')] bg-cover bg-center bg-no-repeat grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 px-6 md:px-10 py-16 rounded-3xl border border-white/10 backdrop-blur-md"
      >
        <div className="col-span-2 p-6 md:p-8">
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">Experiencia en TI & Desarrollo</span>
            </h3>
            <p className="mt-4 text-base md:text-lg text-white/90">
              Soporte e implementación TI en entornos críticos y desarrollo Full‑Stack orientado a rendimiento y mantenibilidad. Integración de datos, APIs y UI modernas con foco en calidad y detalle.
            </p>
          </div>

          {/* Highlights basados en el CV */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white/90">Valtek Diagnostic — Soporte/Implementación</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-white/85 space-y-1">
                <li>Administración de servidores Windows, IIS y SQL Server.</li>
                <li>Procedimientos almacenados y SQL optimizado.</li>
                <li>Despliegues, mantenimiento y monitoreo en on‑premise.</li>
                <li>Interoperabilidad con LIS y dispositivos clínicos.</li>
                <li>Diagnóstico de incidencias (VPN, redes y firewalls).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white/90">Freelance — Desarrollo Full‑Stack</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-white/85 space-y-1">
                <li>APIs REST con Node.js y Express.js.</li>
                <li>Modelado de bases de datos MySQL / SQL Server.</li>
                <li>Frontend con React, Next.js y Tailwind CSS.</li>
                <li>Mejoras de performance y SEO técnico.</li>
              </ul>
            </div>
          </div>

          {/* Tecnologías clave */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white/90">Stack principal</h4>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {['Next.js','React','Tailwind CSS','Node.js','Express.js','MySQL','SQL Server','API REST'].map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-white/85">{t}</span>
              ))}
            </div>
          </div>

          {/* CTA sin formulario */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:nicolasmachuca.dev@gmail.com" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300">
              Escribirme por correo
            </a>
            <a href="tel:+56932239282" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
              Llamar / WhatsApp
            </a>
          </div>

          <p className="mt-3 text-xs text-white/60">Respuesta en 24h • Disponible para trabajo remoto</p>
        </div>

        <div className="md:justify-self-start p-6 md:p-8">
          <Image
            alt="soporte"
            src={'/soporte.png'}
            height={500}
            width={320}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

"use client"
import Image from 'next/image';
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });



export default function Portafolio(){
  return(
    <div>
      <h1 className={`${michroma.className} py-10 text-4xl md:text-5xl text-center font-bold text-white`}>
        Proyectos & Casos (Freelance)
      </h1>
      <p className="max-w-2xl mx-auto mb-12 text-center text-white/80 text-lg">
        Soy un desarrollador freelance que lleva ideas a producción con foco en <span className="font-semibold">performance</span>, <span className="font-semibold">UI/UX</span> y <span className="font-semibold">mantenibilidad</span>. A continuación, algunos proyectos donde aporté valor real.
      </p>

      <section className="relative bg-neutral-900/40 ring-1 ring-white/10 rounded-4xl shadow-2xl backdrop-blur-sm px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="mb-12 md:mb-16 space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
            Cómo aporto valor en proyectos reales
          </h3>
          <p className="text-white/80 text-base md:text-lg">
            Trabajo de forma <span className="font-semibold text-indigo-300">remota</span> integrándome a equipos o liderando el desarrollo end-to-end. Me enfoco en flujos claros, código limpio y entregables medibles.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90 text-sm md:text-base">
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">+20 componentes UI reutilizables por proyecto</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">Mejoras de carga inicial &lt; 1s en landing</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">Integraciones: Next.js • Node/Express • SQL</li>
          </ul>
        </div>

        {/* Cards del portafolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Proyecto Denisse */}
          <a href="https://snowdream.vercel.app" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/snow.png"
                alt="Proyecto Denisse"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay negro difuminado y texto morado eléctrico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                <div className="relative h-full w-full flex items-end justify-center p-6">
                  <p className="text-white text-lg md:text-xl font-semibold text-center">
                    E-Commerce - SnowDreams
                    <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: diseño UI centrado en conversión, optimización de imágenes y critical CSS para mejorar tiempos de carga y tasa de conversión del checkout.</span>
                  </p>
                </div>
              </div>
            </div>
          </a>


            <a href="https://dennisbeltran.medifyclinic.cl" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                        src="/denis.png"
                        alt="Proyecto Denisse"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay negro difuminado y texto morado eléctrico */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative h-full w-full flex items-end justify-center p-6">
                            <p className="text-white text-lg md:text-xl font-semibold text-center">
                                Deniss Beltrán — Psicóloga / Agenda Online
                                <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: implementación de sistema de reservas accesible, optimización móvil de formularios y mejora de la experiencia de agendamiento.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>




            <a href="https://www.repuestosmacar.cl" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                        src="/macar.png"
                        alt="Proyecto Denisse"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay negro difuminado y texto morado eléctrico */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative h-full w-full flex items-end justify-center p-6">
                            <p className="text-white text-lg md:text-xl font-semibold text-center">
                                E-Commerce - MaCar Repuestos Automotrices
                                <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: catálogo escalable con búsqueda y filtros rápidos, optimización SEO técnico y reducción de peso de las páginas de producto.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>



            <a href="https://supletech-fronend.vercel.app" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                        src="/suple.png"
                        alt="Proyecto Denisse"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay negro difuminado y texto morado eléctrico */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative h-full w-full flex items-end justify-center p-6">
                            <p className="text-white text-lg md:text-xl font-semibold text-center">
                                E-Commerce - Suplementos Deportivos
                                <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: diseño orientado a conversión, integración con pasarelas de pago y optimización de recursos para mejorar el rendimiento en móviles.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>




            <a href="https://coco-fit-front-end-git-main-nativecodes-projects-fbcce9f5.vercel.app" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                        src="/coco.png"
                        alt="Proyecto Denisse"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay negro difuminado y texto morado eléctrico */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative h-full w-full flex items-end justify-center p-6">
                            <p className="text-white text-lg md:text-xl font-semibold text-center">
                                E-commerce - Ropa Deportiva
                                <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: implementación responsive completa, microinteracciones y optimización de carga de assets.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>




            <a href="https://runajoyas.cl" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/runa.png"
                    alt="Proyecto Denisse"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay negro difuminado y texto morado eléctrico */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                    <div className="relative h-full w-full flex items-end justify-center p-6">
                      <p className="text-white text-lg md:text-xl font-semibold text-center">
                        E-commerce - Joyeria Deportiva
                        <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: experiencia visual de producto, optimización de imágenes y mejora de accesibilidad para aumentar la conversión.</span>
                      </p>
                    </div>
                  </div>
                </div>
            </a>






            <a href="https://www.medifyclinic.cl" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                        src="/medify.png"
                        alt="Proyecto Denisse"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay negro difuminado y texto morado eléctrico */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative h-full w-full flex items-end justify-center p-6">
                            <p className="text-white text-lg md:text-xl font-semibold text-center">
                                Plataforma de Clínica Digital
                                <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: diseño de flujos de paciente, formularios seguros, integraciones con APIs y optimización de rendimiento en páginas críticas.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>


            <a href="https://jpaingenieriasolutions.cl" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                        src="/jpq.png"
                        alt="Proyecto Denisse"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay negro difuminado y texto morado eléctrico */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative h-full w-full flex items-end justify-center p-6">
                            <p className="text-white text-lg md:text-xl font-semibold text-center">
                                Landing Page Servicios de Ingeneiria
                                <span className="block text-sm font-normal text-white/90">Rol: Frontend • Aporte: landing optimizada para generación de leads, velocidad en móvil y soporte para campañas de marketing.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>

        </div>
      </section>
    </div>
  )
}
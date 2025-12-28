import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Trabajamos juntos?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-300">
            Desarrollo Full‑Stack con foco en rendimiento, mantenibilidad y UX. Trabajo remoto por proyecto.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Descargar CV
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Marca */}
          <div>
            <h3 className="text-base font-semibold text-white/90">Nicolás Machuca</h3>
            <p className="mt-2 text-sm text-gray-400">
              Desarrollador Full‑Stack — Next.js, Node.js, Express, MySQL/SQL Server.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:nicolasmachuca.dev@gmail.com" className="hover:text-white">
                  nicolasmachuca.dev@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+56932239282" className="hover:text-white">
                  +56 9 3223 9282
                </a>
              </li>
              <li className="text-gray-400">Valdivia, Chile</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-6.9c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V24h-4V8z" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1 .07 1.54 1.06 1.54 1.06.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.15-4.56-5 0-1.1.39-2 .98-2.7-.1-.26-.45-1.28.1-2.66 0 0 .85-.28 2.75 1.04.81-.23 1.68-.35 2.55-.35s1.74.12 2.55.35c1.89-1.32 2.74-1.04 2.74-1.04.55 1.38.21 2.4.1 2.66.61.7.98 1.6.98 2.7 0 3.86-2.34 4.73-4.57 4.98.36.31.69.94.69 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49 3.97-1.35 6.84-5.18 6.84-9.7C22 6.58 17.52 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Tecnologías */}
          <div>
            <h3 className="text-base font-semibold text-white/90">Tecnologías</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Next.js</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">React</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Node.js</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Express</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Tailwind CSS</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">MySQL</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">SQL Server</li>
              <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">API REST</li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-base font-semibold text-white/90">Recursos</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="/portafolio" className="hover:text-white">Portafolio</a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-white">Servicios</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">Blog / Artículos</a>
              </li>
              <li>
                <a href="/preguntas-frecuentes" className="hover:text-white">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Soporte / Legal */}
          <div>
            <h3 className="text-base font-semibold text-white/90">Soporte</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="/contacto" className="hover:text-white">Contacto</a>
              </li>
              <li>
                <a href="/politicas/privacidad" className="hover:text-white">Política de privacidad</a>
              </li>
              <li>
                <a href="/politicas/terminos" className="hover:text-white">Términos y condiciones</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Nicolás Machuca — Todos los derechos reservados.</p>
          <a href="/" className="inline-flex items-center gap-2 hover:text-white">
            Ir a Inicio
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5 12h12M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

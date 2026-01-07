"use client"
import * as React from 'react';
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const pages = [
  { label: 'Experiencia TI', href: '/soporte' },
  { label: 'GitHub', href: '/contacto' },
  { label: 'Skill', href: '/comprar' }
];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobile = () => setMobileOpen((v) => !v);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="/"
            className={`${michroma.className} text-sm sm:text-base tracking-widest text-white hover:text-indigo-300 transition-colors`}
            aria-label="Ir al inicio"
          >
            Full Stack
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {pages.map((page) => (
              <a
                key={page.label}
                href={page.href}
                onClick={closeMobile}
                className={`${michroma.className} text-white/80 hover:text-white transition-colors text-sm`}
              >
                {page.label}
              </a>
            ))}

          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={toggleMobile}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            {/* Icon */}
            <svg
              className={`h-6 w-6 ${mobileOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${mobileOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden border-t border-white/10 bg-black/80 backdrop-blur`}> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-1">
          {pages.map((page) => (
            <a
              key={page.label}
              href={page.href}
              onClick={closeMobile}
              className={`${michroma.className} block rounded-md px-3 py-2 text-white/90 hover:bg-white/5 hover:text-white`}
            >
              {page.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMobile}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveAppBar;
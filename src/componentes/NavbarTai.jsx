'use client'
import Link from 'next/link'
import BotoinMui from '@/componentes/BotonMui'

export default function NavbarTai() {
  const contratar = 'Stack'
  const proyectos = 'Proyectos'
  const servicios = 'Resumen'
  const contacto = 'Contacto'

  return (
    <div className="w-full p-6 text-base md:text-2xl font-bold">
      {/* Mobile: solo Contacto, perfectamente centrado */}
      <div className="md:hidden w-full flex justify-center">
        <Link href={'/contacto'} className="block">
          <BotoinMui contenido={contacto} />
        </Link>
      </div>

      {/* Desktop/Tablet: todos los botones centrados en fila */}
      <div className="hidden md:flex flex-row justify-center items-center gap-8">
        <Link href={'/comprar'} className="shrink-0">
          <BotoinMui contenido={contratar} />
        </Link>
        <Link href={'/contacto'} className="shrink-0">
          <BotoinMui contenido={contacto} />
        </Link>
        <Link href={'/portafolio'} className="shrink-0">
          <BotoinMui contenido={proyectos} />
        </Link>
        <Link href={'/servicios'} className="shrink-0">
          <BotoinMui contenido={servicios} />
        </Link>
      </div>
    </div>
  )
}
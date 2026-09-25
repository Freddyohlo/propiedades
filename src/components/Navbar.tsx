import { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/properties';

const NAV_LINKS = ['inicio', 'propiedades', 'servicios', 'contacto'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-none">Inmobiliaria</span>
              <span className="block text-xs font-semibold text-amber-500 leading-none tracking-widest uppercase">
                V Región
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm font-medium text-gray-600 hover:text-amber-500 transition-colors capitalize"
              >
                {link}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Contactar
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block text-sm font-medium text-gray-700 capitalize py-2"
              onClick={() => setOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg"
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
}

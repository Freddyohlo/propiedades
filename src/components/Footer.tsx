import { Home } from 'lucide-react';

const NAV = ['Inicio', 'Propiedades', 'Servicios', 'Contacto'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-base leading-none">Inmobiliaria</span>
                <span className="block text-xs font-semibold text-amber-400 leading-none tracking-widest uppercase">
                  V Región
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Tu aliado de confianza en el mercado inmobiliario de la V Región de Valparaíso.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>+56 9 9963 4314</li>
              <li>inmobiliariavregion5@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Inmobiliaria V Región. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

import { Search } from 'lucide-react';
import { stats } from '@/data/properties';

type HeroProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function Hero({ search, onSearchChange }: HeroProps) {
  function goToProperties() {
    document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <section id="inicio" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              V Región de Valparaíso
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Encuentra tu propiedad
              <span className="block text-amber-400"> ideal aquí</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Más de 15 años conectando personas con sus hogares en Valparaíso, Viña del Mar,
              Quilpué y toda la V Región.
            </p>

            <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Buscar por ciudad o tipo de propiedad..."
                  className="flex-1 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <button
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors text-sm"
                onClick={goToProperties}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-amber-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

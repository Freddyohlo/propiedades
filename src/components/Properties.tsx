import { useState } from 'react';
import { Bed, Bath, Square, MapPin, Star, Search, MessageCircle } from 'lucide-react';
import { properties, WHATSAPP_URL, type Operation } from '@/data/properties';

const FILTERS: Array<'Todos' | Operation> = ['Todos', 'Venta', 'Arriendo'];

type PropertiesProps = {
  search: string;
};

export default function Properties({ search }: PropertiesProps) {
  const [filter, setFilter] = useState<'Todos' | Operation>('Todos');
  const [hovered, setHovered] = useState<number | null>(null);

  const visible = properties.filter((p) => {
    const byOperation = filter === 'Todos' || p.operation === filter;
    const term = search.toLowerCase();
    const bySearch =
      search === '' ||
      p.title.toLowerCase().includes(term) ||
      p.location.toLowerCase().includes(term);
    return byOperation && bySearch;
  });

  return (
    <section id="propiedades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
            Nuestras propiedades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Propiedades disponibles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Encuentra la propiedad perfecta entre nuestra amplia selección en la V Región de
            Valparaíso.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === option
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-500'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div
                className="relative overflow-hidden h-52"
                onMouseEnter={() => setHovered(property.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {hovered === property.id && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 animate-fade-in">
                    <p className="text-white text-sm leading-relaxed text-center font-medium">
                      {property.description}
                    </p>
                  </div>
                )}

                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      property.operation === 'Venta'
                        ? 'bg-amber-500 text-white'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {property.operation}
                  </span>
                  {property.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-gray-800 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Destacado
                    </span>
                  )}
                  {property.sold && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
                      Vendida
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-900">{property.price}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {property.location}
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{property.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-100 pt-4">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-gray-400" /> {property.beds} dorm.
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-gray-400" /> {property.baths} baños
                    </span>
                  )}
                  {property.area > 0 && (
                    <span className="flex items-center gap-1.5 ml-auto">
                      <Square className="w-4 h-4 text-gray-400" /> {property.area} m²
                    </span>
                  )}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 border border-amber-500 text-amber-600 font-semibold text-sm rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-200"
                >
                  Consultar <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>No se encontraron propiedades con ese criterio.</p>
          </div>
        )}
      </div>
    </section>
  );
}

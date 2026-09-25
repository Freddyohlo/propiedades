import { Building2, Trees, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/properties';

const SERVICES = [
  {
    icon: Building2,
    title: 'Compra y Venta',
    description:
      'Asesoramiento completo en la compra y venta de propiedades residenciales y comerciales en la V Región.',
  },
  {
    icon: Trees,
    title: 'Arriendo',
    description:
      'Gestión integral de arriendos con contratos seguros, evaluación de arrendatarios y administración.',
  },
  {
    icon: MessageCircle,
    title: 'Tasaciones',
    description:
      'Tasaciones profesionales con criterios de mercado actualizados para obtener el valor real de tu propiedad.',
  },
];

export default function Services() {
  return (
    <>
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Lo que ofrecemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Nuestros servicios
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ofrecemos una gama completa de servicios inmobiliarios para ayudarte en cada etapa del
              proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3288100/pexels-photo-3288100.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
            Tu confianza es nuestra prioridad
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Somos una empresa inmobiliaria con más de 15 años de trayectoria en la V Región.
            Nuestro equipo de ejecutivas especializadas está siempre disponible para asesorarte de
            forma personalizada.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Habla con una ejecutiva ahora
          </a>
        </div>
      </section>
    </>
  );
}

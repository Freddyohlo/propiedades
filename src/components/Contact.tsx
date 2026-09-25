import { MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/properties';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Dirección', value: 'Región de Valparaíso' },
  { icon: Phone, label: 'Teléfono', value: '+56 9 9963 4314' },
  { icon: Mail, label: 'Email', value: 'contacto@inmobiliariavregion.cl' },
];

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Estamos para ayudarte
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Nuestro equipo de ejecutivas inmobiliarias está disponible para responder todas tus
              consultas y acompañarte en el proceso de compra, venta o arriendo.
            </p>

            <div className="space-y-5">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Enviar consulta</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
                  <input type="text" placeholder="Tu nombre" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono</label>
                  <input type="tel" placeholder="+56 9..." className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input type="email" placeholder="tu@email.com" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos qué tipo de propiedad buscas..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors text-sm"
              >
                Enviar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

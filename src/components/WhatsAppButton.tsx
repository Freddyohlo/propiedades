import { useState } from 'react';
import { Headphones } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/properties';

export default function WhatsAppButton() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showCard && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-56 animate-pulse-once">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Headphones className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Ejecutiva disponible</p>
              <p className="text-xs text-green-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                En línea ahora
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Contáctanos por WhatsApp y recibe atención inmediata.
          </p>
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl px-5 py-3.5 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contacto con una ejecutiva vía WhatsApp"
      >
        <div className="relative flex-shrink-0">
          <Headphones className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-200 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-200 rounded-full" />
        </div>
        <span className="text-sm font-semibold whitespace-nowrap">Habla con una ejecutiva</span>
      </a>
    </div>
  );
}

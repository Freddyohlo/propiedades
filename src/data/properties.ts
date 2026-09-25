export type Operation = 'Venta' | 'Arriendo';

export type Property = {
  id: number;
  title: string;
  type: string;
  operation: Operation;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  featured: boolean;
  sold?: boolean;
  description: string;
};

export const WHATSAPP_NUMBER = '56999634314';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, me gustaría obtener más información sobre sus propiedades.',
)}`;

export const properties: Property[] = [
  {
    id: 1,
    title: 'Propiedad Independiente Villa Alemana',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 160.0',
    location: 'Villa Alemana, Paradero 11',
    beds: 4,
    baths: 2,
    area: 178.78,
    image: '/image/id1.jpg',
    featured: true,
    description:
      'Sólida propiedad de dos niveles con conectividad de primer nivel. Ubicación priviliegada a solo una cuadra del nodo principal de transporte, cocina estilo americano, bodega funcional.',
  },
  {
    id: 2,
    title: 'Villa Alemana - Casa Principal y Cabaña',
    type: 'Casa',
    operation: 'Venta',
    price: 'UF 9.490',
    location: 'Villa Alemana - Peñablanca',
    beds: 3,
    baths: 2,
    area: 540,
    image: '/image/id2.jpg',
    featured: true,
    description:
      'Increíble propiedad con casa principal (150m2) y cabaña independiente (48m2). Ideal para familia extendida o para generar ingresos extras, piscina y quincho, pozo operativo, Árboles frutales.',
  },
  {
    id: 3,
    title: 'Reñaca Mar II - Edmundo Eluchans',
    type: 'Departamento',
    operation: 'Venta',
    price: 'UF 7.000',
    location: 'Reñaca - Edificio Eluchans',
    beds: 2,
    baths: 2,
    area: 79.2,
    image: '/image/id3.jpg',
    featured: false,
    description:
      'El equilibrio perfecto entre Deporte, relajo y mar. Vive a solo pasos de la playa con infraestructura de clase mundial, cocina amoblada, acceso a sauna.',
  },
  {
    id: 4,
    title: 'Quilpué - Oportunidad El Sol/Retiro',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 123.0',
    location: 'Quilpué - El Sol/Retiro',
    beds: 3,
    baths: 1,
    area: 500,
    image: '/image/id4.jpg',
    featured: true,
    description:
      'Propiedad con amplio potencial con casa principal (75m2) y cabaña prefabricada (40m2), Patio techado.',
  },
  {
    id: 5,
    title: 'Arriendo Depto en Quilpué',
    type: 'Departamento',
    operation: 'Arriendo',
    price: 'A 340 + MG +HON',
    location: 'Sector Belloto Sur / Calle Serena',
    beds: 2,
    baths: 1,
    area: 0,
    image: '/image/id5.jpg',
    featured: false,
    description:
      'Cuarto piso, excelente ubicación, 2 dormitorios con closet, 1 baño, cocina semiamoblada, amplio living y comedor.',
  },
  {
    id: 6,
    title: 'Oportunidad Terreno Rebajado',
    type: 'Terreno',
    operation: 'Venta',
    price: 'M 125.0',
    location: 'El Rincón de Peñablanca',
    beds: 0,
    baths: 0,
    area: 2.444,
    image: '/image/id6.jpg',
    featured: false,
    description:
      'Ubicada en barrio consolidado, uso habitacional y comercial, Conectividad estrategicaa solo minutos de la salida Troncal Sur, Strip center y Tortas de mamá. Doble acceso independiente por el rincón y por los Arrayanes, ideal para proyectos.',
  },
  {
    id: 7,
    title: 'Parcela Con Rol Propio En Los Coligues',
    type: 'Terreno',
    operation: 'Venta',
    price: 'M 150.0',
    location: 'Quilpué - Sector Los Perales',
    beds: 3,
    baths: 2,
    area: 0,
    image: '/image/id7.jpg',
    featured: false,
    description:
      'Terreno con gran quincho, piscina y vista al valle. A 25 minutos de Quilpué y 18 minutos de Villa Alemana, Conectividad a solo 10 minutos de la salida Orozco para entrar al Troncal Sur - Ruta Santiago - Viña - Valparaíso. Pozo propio + APR + Luz eléctrica',
  },
  {
    id: 8,
    title: 'Propiedad En Excelente Ubicación',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 125.0',
    location: 'Valparaíso',
    beds: 4,
    baths: 2,
    area: 230,
    image: '/image/id8.jpg',
    featured: true,
    sold: true,
    description:
      'Terreno con construcción 127 m2 sólidos, cuenta con pozo operativo, Doble cocina - bodega y patio techado con árboles frutales. Estacionamiento con capacidad para 3 vehículos. Excelente plusvalía con conectividad a estación de metro, Cesfam, Gimnasio municipal, colegios y Liceos',
  },
  {
    id: 9,
    title: 'Oportunidad Única Rebajada',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 124.0',
    location: 'Villa Alemana',
    beds: 3,
    baths: 1,
    area: 127,
    image: '/image/id9.jpg',
    featured: true,
    description:
      'Ubicación privilegiada a metros de estación, supermercado y gimnasio. Barrio tranquilo y residencial, Estacionamiento para 2 o 3 vehículos, Precio conversable al contado',
  },
  {
    id: 10,
    title: 'Condominio Hacienda Limache',
    type: 'Parcelas',
    operation: 'Venta',
    price: 'M 38.0',
    location: 'Calle San Alfonso',
    beds: 0,
    baths: 0,
    area: 5.1,
    image: '/image/id10.jpg',
    featured: false,
    description:
      'Exclusivas parcelas con rol propio, factibilidad de luz y agua GC $40.000, se acepta crédito hipotecario',
  },
  {
    id: 11,
    title: 'Oportunidad Única Parcelas',
    type: 'Parcelas',
    operation: 'Venta',
    price: 'M 62.0',
    location: 'Sector laureles - Limache',
    beds: 0,
    baths: 0,
    area: 5.545,
    image: '/image/id11.jpg',
    featured: false,
    description:
      'Terrenos con factibilidad de luz y fácil acceso, parcelas con pozo propio, excelente oportunidad para inversión familiar o proyectos de plusvalía',
  },
  {
    id: 12,
    title: 'Arriendo con Compromiso de Compraventa',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 198.0',
    location: 'Condel con Octava - Quilpué',
    beds: 3,
    baths: 2,
    area: 90,
    image: '/image/id12.jpg',
    featured: false,
    description:
      '90m2 construidos, estacionamiento techado para 2 vehículos, portón automático y espacio para quincho',
  },
  {
    id: 13,
    title: 'Oportunidad Única Propiedad Esquina',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 380.0',
    location: 'Covadonga con Lautaro - Quilpué',
    beds: 4,
    baths: 1,
    area: 158,
    image: '/image/id13.jpg',
    featured: false,
    description:
      'Atención inversionistas y profesionales, ubicación de alta jerarquía ideal para uso comercial, institucional o habitacional, garage con luz, agua y portón corredizo',
  },
  {
    id: 14,
    title: 'Arriendo Comercial ',
    type: 'Oficina',
    operation: 'Arriendo',
    price: 'M 1.151.0',
    location: 'Centro Villa Alemana',
    beds: 4,
    baths: 2,
    area: 90,
    image: '/image/id14.jpg',
    featured: false,
    description:
      'Haz que tu negocio destaque, espacio en segundo nivel con ubicación estratégica y máxima visibilidad en pleno corazón comercial, incluye estacionamiento privado y bodega',
  },
  {
    id: 15,
    title: 'Escapada de Lujo Lliu Lliu Limache',
    type: 'Casa',
    operation: 'Arriendo',
    price: '200.000 diario',
    location: 'Valles de Trinidad - Limache',
    beds: 5,
    baths: 3,
    area: 5000,
    image: '/image/id15.jpg',
    featured: false,
    description:
      'Casa de 250 m2 para 10 personas, parcela equipada con piscina exterior e interior, áreas de juegos para niños, Quincho totalmente equipado, Lugar perfecto para celebraciones o descanso',
  },
  {
    id: 16,
    title: 'Casa con Potencial Belloto Norte',
    type: 'Casa',
    operation: 'Venta',
    price: 'UF 6.550',
    location: 'Belloto Norte - Quilpué',
    beds: 4,
    baths: 1,
    area: 846,
    image: '/image/id16.jpg',
    featured: false,
    description:
      'Casa de 132 m2 a solo 3 cuadras del metro, cuenta con pozo, chimenea y estacionamiento para 10 vehículos, excelente plusvalía y potencial ',
  },
  {
    id: 17,
    title: 'Gran Oportunidad, Propiedad Sólida Villa Alemana',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 125.0 + 2% Ho',
    location: 'Villa Alemana',
    beds: 3,
    baths: 2,
    area: 0,
    image: '/image/id17.jpg',
    featured: false,
    description:
      'Estructura sólida y mixta, amplio patio con pozo propio, a pasos de servicios de salud, comercio y transporte',
  },
  {
    id: 18,
    title: 'Chalet Estilo Americano',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 259.0',
    location: 'Peñablanca',
    beds: 3,
    baths: 2,
    area: 365,
    image: '/image/id18.jpg',
    featured: true,
    description:
      'Casa independiente 120 m2 contruidos con piscina privada, quincho y estacionamiento para 2 vehículos, Ubicación estrategica',
  },
  {
    id: 19,
    title: 'Oportunidad Estratégica Centro Villa Alemana',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 240.0',
    location: 'Villa Alemana',
    beds: 4,
    baths: 2,
    area: 217,
    image: '/image/id19.jpg',
    featured: false,
    description:
      'Construcción sólida e independiente 126 m2 construidos rodeada de un entorno comercial consolidado con bodega y estacionamiento para 2 vehículos',
  },
  {
    id: 20,
    title: 'Arriendo Depto. Remodelado en Villanelo',
    type: 'Departamento',
    operation: 'Arriendo',
    price: '750.000 + GC 145.000',
    location: 'Villanelo - Viña del Mar',
    beds: 3,
    baths: 2,
    area: 100,
    image: '/image/id20.jpg',
    featured: false,
    description:
      'Edificio exclusivo de solo 8 pisos a pasos del centro de Viña del Mar, cuenta con piscina, portón automático y excelente conectividad a servicios',
  },
  {
    id: 21,
    title: 'Acogedora Casa con Amplio Terreno',
    type: 'Casa',
    operation: 'Venta',
    price: 'M 149.0',
    location: 'Camilo Henríquez - Quilpué',
    beds: 3,
    baths: 2,
    area: 307,
    image: '/image/id21.jpg',
    featured: false,
    description:
      'Excelente oportunidad de inversión en barrio residencial con ubicación estratégica, cuenta con pozo y garaje cerrado para 2 vehículos',
  },
  {
    id: 22,
    title: 'Se Arrienda Local Comercial en el Mejor Punto de Peñablanca',
    type: 'Local',
    operation: 'Arriendo',
    price: 'UF 25 + mes de garantía + Honorarios',
    location: 'Peñablanca',
    beds: 2,
    baths: 2,
    area: 40,
    image: '/image/id22.jpg',
    featured: false,
    description:
      'Local con ubicación estratégica para cualquier tipo de negocio, cuenta con 3 estacionamiento privados, seguridad de 2 cortinas metalicas',
  },
];

export const stats = [
  { value: '+50', label: 'Propiedades vendidas' },
  { value: '+10', label: 'Años de experiencia' },
  { value: '+100', label: 'Clientes satisfechos' },
  { value: '98%', label: 'Tasa de satisfacción' },
];

# 🏠 Inmobiliaria V Región

Landing page inmobiliaria para la **V Región de Valparaíso**. Muestra el catálogo de
propiedades en venta y arriendo, los servicios de la corretaje y los canales de
contacto, con WhatsApp como vía principal.

**Demo en vivo:** https://inmobiliariavregion.surge.sh/

## ✨ Qué incluye

- **Hero con buscador** por ciudad o tipo de propiedad.
- **Indicadores** de la empresa (propiedades vendidas, años de experiencia, etc.).
- **Catálogo de 22 propiedades** con filtro por operación (Venta / Arriendo) y
  búsqueda por texto.
- **Tarjetas de propiedad** con precio, ubicación, dormitorios, baños y superficie;
  la descripción aparece al pasar el cursor. Se marcan las destacadas y las vendidas.
- **Servicios**: compra y venta, arriendo y tasaciones.
- **Contacto** con formulario y acceso directo a WhatsApp.
- **Botón flotante de WhatsApp** con aviso de ejecutiva disponible.

## 🛠️ Tecnologías

| Tecnología | Rol |
| --- | --- |
| **React 18** + **TypeScript** | Interfaz |
| **Vite** | Build y servidor de desarrollo |
| **Tailwind CSS** | Estilos |
| **lucide-react** | Iconografía |

Sitio **100 % estático**: no tiene backend ni base de datos. Los datos de las
propiedades viven en `src/data/properties.ts` y el contacto se resuelve por
WhatsApp.

## 🚀 Puesta en marcha

```bash
git clone https://github.com/Freddyohlo/propiedades.git
cd propiedades
npm install
npm run dev
```

Abre http://localhost:5173

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificación de tipos |

## 📁 Estructura

```
index.html                    HTML raíz (SEO y Open Graph)
src/
  App.tsx                     Composición de la página
  main.tsx                    Punto de entrada
  index.css                   Tailwind y estilos base
  data/properties.ts          Datos de las 22 propiedades, stats y WhatsApp
  components/
    Navbar.tsx                Navegación fija con menú móvil
    Hero.tsx                  Portada con buscador + indicadores
    Properties.tsx            Catálogo con filtros y búsqueda
    Services.tsx              Servicios y sección de confianza
    Contact.tsx               Datos de contacto y formulario
    Footer.tsx                Pie de página
    WhatsAppButton.tsx        Botón flotante de WhatsApp
public/
  image/id1..id22.jpg         Fotografías de las propiedades
  favicon.svg
```

## ✏️ Cómo actualizar el contenido

Todo el contenido editable está en **`src/data/properties.ts`**:

- `properties` — el catálogo. Cada propiedad tiene `title`, `price`, `location`,
  `beds`, `baths`, `area`, `image`, `featured` y `sold`.
- `stats` — los cuatro indicadores del inicio.
- `WHATSAPP_NUMBER` — el número de contacto.

Para agregar una propiedad: añade un objeto al array y deja la foto en
`public/image/`.

## 📝 Notas

- El **formulario de contacto no envía nada por sí solo**: todos los botones
  abren WhatsApp con un mensaje predefinido. Si se necesita envío real, hay que
  conectar un servicio (Formspree, Supabase, un endpoint propio).
- Los precios están en el formato original del cliente (`M 160.0` = millones,
  `UF 9.490`, montos de arriendo en pesos).

## 📄 Licencia

Uso personal. Todos los derechos reservados.

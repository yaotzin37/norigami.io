# 🍣 Norigami - Menú Digital

Plataforma web responsiva para visualizar y gestionar el menú de **Norigami**. Incluye imágenes optimizadas en WebP, validación automática de datos y soporte para múltiples dispositivos.

## ✨ Características

- 📱 **Responsivo**: Diseño mobile-first con breakpoints para tablet y desktop
- 🖼️ **Imágenes optimizadas**: WebP con variantes de calidad (low/med/high) según ancho de viewport
- 🔍 **Validación automática**: Tests Jest y script de validación para integridad de datos
- 📦 **Menú estructurado**: JSON con categorías, precios y descripciones
- 🎨 **Estilos modulares**: CSS reutilizable con variables personalizables
- 🛠️ **Scripts útiles**: Importación de menús, compresión de imágenes, generación de WebP
- 📚 **Bien documentado**: Guías en `docs/` para todas las características

## 🚀 Quick Start

### Requisitos
- **Node.js** 14+ y npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/yaotzin37/norigami.io.git
cd norigami.io

# Instalar dependencias
npm install

# Ver comandos disponibles
npm run

# Validar estructura del menú
npm run validate:menu

# Ejecutar tests
npm test
```

## 📋 Comandos Disponibles

### Menú
```bash
npm run import:menu -- import_data          # Importar JSON desde carpeta
npm run validate:menu                       # Validar estructura y archivos del menú
```

### Imágenes
```bash
npm run compress:images                     # Optimizar SVG y raster (backup automático)
npm run generate:webp                       # Generar WebP desde originales
npm run generate:webp:variants              # Generar variantes WebP (low/med/high)
npm run attach:webp                         # Enlazar WebP en menu.json
npm run attach:webp:variants                # Enlazar variantes en menu.json
```

### Testing
```bash
npm test                                    # Ejecutar toda la suite Jest
npm test -- menu.test.js                    # Ejecutar solo tests de menú
npm test -- --coverage                      # Ver cobertura de tests
```

## 📁 Estructura del Proyecto

```
norigami.io/
├── README.md                          # Este archivo
├── package.json                       # Dependencias y scripts
├── jest.config.js                     # Configuración de tests
│
├── src/
│   ├── index.html                     # Página principal
│   ├── 404.html                       # Página de error
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── menu/                  # Imágenes de platillos
│   │   │   │   ├── yakimeshi/
│   │   │   │   ├── sushi/
│   │   │   │   ├── antojitos/
│   │   │   │   ├── combos/
│   │   │   │   └── platillos-calientes/
│   │   │   ├── branding/              # Logo, favicon
│   │   │   ├── icons/                 # Íconos personalizados
│   │   │   └── hero/                  # Imágenes hero/banner
│   │   ├── fonts/                     # Fuentes (Playfair, Poppins)
│   │   └── illustrations/             # Gráficos personalizados
│   │
│   ├── styles/
│   │   ├── main.css                   # Entrada principal
│   │   ├── variables.css              # Colores, tipografía, etc.
│   │   ├── responsive.css             # Media queries
│   │   ├── animations.css             # Animaciones
│   │   ├── components/                # Estilos de componentes
│   │   │   ├── header.css
│   │   │   ├── menu-card.css
│   │   │   ├── cart.css
│   │   │   ├── footer.css
│   │   │   └── buttons.css
│   │   └── sections/                  # Secciones específicas
│   │       ├── hero.css
│   │       ├── menu-section.css
│   │       ├── filter-section.css
│   │       └── info-section.css
│   │
│   ├── scripts/
│   │   ├── main.js                    # Script principal
│   │   ├── cart.js                    # Carrito
│   │   ├── filter.js                  # Filtrado de categorías
│   │   ├── search.js                  # Búsqueda
│   │   ├── notifications.js           # Sistema de notificaciones
│   │   ├── api/                       # Integraciones
│   │   │   ├── whatsapp.js
│   │   │   ├── payment.js
│   │   │   └── app-sheet.js
│   │   └── utils/
│   │       ├── helpers.js
│   │       └── validators.js
│   │
│   ├── data/
│   │   ├── menu.json                  # Menú con imágenes y variantes
│   │   ├── categories.json            # Categorías
│   │   ├── extras.json                # Agregados/extras
│   │   └── config.json                # Configuración del restaurante
│   │
│   ├── templates/
│   │   ├── header.html                # Logo responsivo
│   │   ├── menu-card.html             # Tarjeta de platillo
│   │   ├── cart-sidebar.html          # Carrito
│   │   └── footer.html                # Pie de página
│   │
│   └── pages/
│       ├── about.html                 # Sobre nosotros
│       ├── contact.html               # Contacto
│       ├── gallery.html               # Galería
│       └── events.html                # Eventos/charolas
│
├── scripts/
│   ├── import-menu.js                 # Importar JSON → menu.json
│   ├── compress-images.js             # SVGO + Sharp
│   ├── generate-webp.js               # Generar .webp
│   ├── generate-webp-variants.js      # Variantes (low/med/high)
│   ├── attach-webp-to-menu.js         # Enlazar WebP
│   ├── attach-webp-variants-to-menu.js # Enlazar variantes
│   ├── validate-menu.js               # Validar estructura
│   ├── deploy.sh                      # Deploy script
│   └── README_IMPORT.md               # Guía de importación
│
├── tests/
│   ├── unit/
│   │   └── menu.test.js               # Tests de menu.json (58 tests)
│   └── integration/
│
├── backup/
│   ├── menu-backup-YYYY-MM-DD.json    # Backups automáticos
│   ├── images-YYYY-MM-DD/             # Backup de imágenes
│   └── webp-variants-YYYY-MM-DD/      # Backup de variantes
│
├── dist/                              # Build / producción (generado)
│   ├── index.html
│   ├── assets/
│   └── favicon.ico
│
├── docs/
│   ├── PROJECT_SETUP.md               # Guía de instalación
│   ├── MENU_STRUCTURE.md              # Estructura de menu.json
│   ├── RESPONSIVE_IMAGES.md           # Imágenes responsivas y WebP
│   ├── API_INTEGRATION.md             # APIs (WhatsApp, Pagos, AppSheet)
│   ├── DEPLOYMENT.md                  # Deploy
│   ├── CONTRIBUTING.md                # Cómo contribuir
│   └── SCREENSHOTS/                   # Capturas de pantalla
│
└── import_data/                       # Carpeta para importar menús
    └── sample-import.json
```

## 🖼️ Sistema de Imágenes

Cada item en `menu.json` incluye:

```json
{
  "id": "yakimeshi-1",
  "name": "Yakimeshi de pollo",
  "images": ["/src/assets/images/menu/yakimeshi/yakimeshi-1.svg"],
  "imagesWebp": ["/src/assets/images/menu/yakimeshi/yakimeshi-1.webp"],
  "imagesWebpVariants": {
    "low": ["/src/assets/images/menu/yakimeshi/yakimeshi-1-low.webp"],    // 60% calidad, <480px
    "med": ["/src/assets/images/menu/yakimeshi/yakimeshi-1-med.webp"],    // 80% calidad, <768px
    "high": ["/src/assets/images/menu/yakimeshi/yakimeshi-1-high.webp"]   // 90% calidad, >768px
  }
}
```

Las plantillas usan `<picture>` para servir automáticamente según ancho de viewport:

```html
<picture>
  <source media="(max-width: 480px)" srcset="path-to-low.webp" type="image/webp">
  <source media="(max-width: 768px)" srcset="path-to-med.webp" type="image/webp">
  <source srcset="path-to-high.webp" type="image/webp">
  <img src="path-to-original.svg" alt="Item">
</picture>
```

Ver [docs/RESPONSIVE_IMAGES.md](docs/RESPONSIVE_IMAGES.md) para más detalles.

## 📊 Validación y Tests

La suite Jest valida automáticamente:
- ✅ Campos requeridos (`id`, `name`, `price`, `category`)
- ✅ Arrays de imágenes y variantes
- ✅ Existencia de archivos en disco
- ✅ Referencias válidas a categorías

```bash
npm test                    # Ejecutar todos (58 tests)
npm run validate:menu       # Script rápido sin Jest
```

## 🔄 Flujo Típico de Importación

1. Prepara JSON en `import_data/` (ver [scripts/README_IMPORT.md](scripts/README_IMPORT.md))
2. Ejecuta: `npm run import:menu -- import_data`
3. Genera WebP: `npm run generate:webp` y `npm run generate:webp:variants`
4. Enlaza al menú: `npm run attach:webp` y `npm run attach:webp:variants`
5. Valida: `npm test` y `npm run validate:menu`
6. Commit y Push

Los backups se crean automáticamente en `backup/`.

## 📚 Documentación

- [PROJECT_SETUP.md](docs/PROJECT_SETUP.md) — Instalación y configuración
- [MENU_STRUCTURE.md](docs/MENU_STRUCTURE.md) — Estructura de `menu.json`
- [RESPONSIVE_IMAGES.md](docs/RESPONSIVE_IMAGES.md) — Imágenes responsivas
- [API_INTEGRATION.md](docs/API_INTEGRATION.md) — WhatsApp, Pagos, AppSheet
- [DEPLOYMENT.md](docs/DEPLOYMENT.md) — Guía de deploy
- [CONTRIBUTING.md](docs/CONTRIBUTING.md) — Cómo contribuir

## 💡 Ejemplos de Uso

### Renderizar menú (Vanilla JS)

```javascript
import menu from './src/data/menu.json';

function renderMenuCard(item) {
  const { id, name, price, images, imagesWebp, imagesWebpVariants } = item;
  
  return `
    <article class="menu-card" data-id="${id}">
      <picture class="menu-card__picture">
        ${imagesWebpVariants?.low?.[0] ? `<source media="(max-width: 480px)" srcset="${imagesWebpVariants.low[0]}" type="image/webp">` : ''}
        ${imagesWebpVariants?.med?.[0] ? `<source media="(max-width: 768px)" srcset="${imagesWebpVariants.med[0]}" type="image/webp">` : ''}
        ${imagesWebp?.[0] ? `<source srcset="${imagesWebp[0]}" type="image/webp">` : ''}
        <img src="${images[0]}" alt="${name}" loading="lazy">
      </picture>
      <h3>${name}</h3>
      <p class="price">$${(price/100).toFixed(2)} MXN</p>
    </article>
  `;
}

// Renderizar todos
const menuHTML = menu.map(renderMenuCard).join('');
document.getElementById('menu-container').innerHTML = menuHTML;
```

### Filtrar por categoría

```javascript
const sushi = menu.filter(item => item.category === 'sushi');
```

## 🎯 Variables CSS Personalizables

Edita `src/styles/variables.css`:

```css
:root {
  --color-primary: #e63946;      /* Rojo (botones, títulos) */
  --color-accent: #2a9d8f;       /* Verde (precios) */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Poppins', sans-serif;
}
```

## 📄 Licencia

MIT (ver [LICENSE](LICENSE))

## 👥 Contribuir

Ver [CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

**¿Preguntas?** Abre un issue en GitHub o consulta la documentación en `docs/`.

# Plantillas Responsivas con Variantes WebP

Las plantillas están actualizadas para servir imágenes responsivas usando `<picture>` y variantes WebP según ancho de viewport y resolución.

## menu-card.html

Usa variantes WebP por breakpoint:
- **Mobile (≤480px)**: `imagesWebpVariants.low` (calidad 60) — más ligera
- **Tablet (≤768px)**: `imagesWebpVariants.med` (calidad 80) — intermedia
- **Desktop (>768px)**: `imagesWebp` (calidad 90) — máxima

Fallback a SVG original si el navegador no soporta WebP.

```html
<picture class="menu-card__picture">
  <source media="(max-width: 480px)" srcset="path-to-low.webp" type="image/webp">
  <source media="(max-width: 768px)" srcset="path-to-med.webp" type="image/webp">
  <source srcset="path-to-high.webp" type="image/webp">
  <img src="path-to-original.svg" alt="Item name">
</picture>
```

### Ventajas
- **Rendimiento**: Descarga menor en mobile
- **Compatibilidad**: Fallback a SVG para navegadores antiguos
- **Flexibilidad**: Cada item en `menu.json` tiene sus propías variantes

## header.html

Logo responsivo:
- **Mobile**: `logo-norigami-low.webp` (más pequeña, menos bandwidth)
- **Desktop**: `logo-norigami-high.webp` (máxima calidad)
- **Fallback**: `logo-norigami.svg`

## Uso en JavaScript

Si estás usando un framework (Vue, React, etc.), puedes mapear directamente:

```javascript
// Ejemplo con un menú renderizado dinámicamente
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
      <div class="menu-card__content">
        <h3 class="menu-card__title">${name}</h3>
        <div class="menu-card__price">$${(price/100).toFixed(2)}</div>
      </div>
    </article>
  `;
}
```

## CSS

Los estilos incluyen:
- `aspect-ratio: 1` para mantener proporciones cuadradas en imágenes
- `object-fit: cover` para adaptar imágenes sin distorsión
- Hover effect con sombra y transform
- Media queries para mobile, tablet, desktop

Personalizables en `src/styles/components/menu-card.css` y `header.css`.

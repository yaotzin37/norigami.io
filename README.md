# norigami.io
proyecto norigami y tortas
🍣 Norigami - Sitio Web de Restaurante Japonés
Sitio web completo para el restaurante japonés Norigami, con menú interactivo, imágenes de platillos y diseño responsive.

🌟 Características
✨ Diseño moderno y elegante.
📱 Totalmente responsivo (móvil, tableta, escritorio)
🍜 Menú interactivo con categorías
🖼️ Imágenes de alta calidad para cada platillo
🎯 Navegación suave entre secciones
🏷️ Insignias de picante y vegetariano
💅 Animaciones sutiles y transiciones
♿ Accesible y compatible con WCAG AA
🛠️ Tecnologías Utilizadas
Next.js 16 - Framework de React con App Router
TypeScript - Tipado estático
Tailwind CSS 4 - Framework de CSS utilitario
shadcn/ui - Componentes UI de alta calidad
Lucide React - Iconos vectoriales
📁 Estructura del Proyecto

norigami/
├── public/
│   └── images/
│       ├── menu/           # Imágenes de platillos
│       └── restaurant-hero.png
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globales
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página principal
│   ├── components/
│   │   ├── Navbar.tsx      # Navegación
│   │   ├── Footer.tsx      # Footer
│   │   ├── MenuItemCard.tsx  # Tarjeta de platillo
│   │   └── MenuSection.tsx   # Sección de categoría
│   └── lib/
│       └── menu-data.ts    # Datos del menú
└── README.md
🚀 Instalación y Desarrollo Local
Clonar el repositorio:
intento

git clone https://github.com/tu-usuario/norigami.git
cd norigami
Instalar dependencias:
intento

bun install
Iniciar servidor de desarrollo:
intento

bun run dev
Abrir en el navegador:

http://localhost:3000
📤 Despliegue en páginas de GitHub
Opción 1: Usar acciones de GitHub (Recomendado)
Crear el archivo :.github/workflows/deploy.yml
yaml

name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Build
        run: bun run build
        env:
          NODE_ENV: production

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
Configurar :next.config.js
JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/norigami', // Reemplaza con tu nombre de repositorio
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/norigami', // Reemplaza con tu nombre de repositorio
}

export default nextConfig
Activar páginas de GitHub en tu repositorio:
Ve a Configuración → Páginas
En "Construcción e implementación", selecciona "Acciones de GitHub"
Hacer push de los cambios:
intento

git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
Opción 2: Manual con gh-pages
Instalar gh-pages:
intento

bun add -D gh-pages
Agregar script de deploy en :package.json
JSON

{
  "scripts": {
    "deploy": "bun run build && bunx gh-pages -d out -b gh-pages"
  }
}
Construir y desplegar:
intento

bun run deploy
Activar páginas de GitHub:
Ve a Configuración → Páginas
En "Fuente", selecciona ramagh-pages
Opción 3: Desde la rama principal
Configurar :next.config.js
JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/norigami', // Reemplaza con tu nombre de repositorio
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/norigami', // Reemplaza con tu nombre de repositorio
}

export default nextConfig
Construir el sitio:
intento

bun run build
Mover el contenido de a la raíz del repositorio:out/
intento

mv out/* .
mv out/.gitignore .
rm -rf out
Hacer commit y push:
intento

git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
Activar páginas de GitHub:
Ve a Configuración → Páginas
En "Fuente", seleccionaDeploy from a branch
Seleccione rama y carpetamain/ (root)
⚙️ Configuración Importante
next.config.js
Para GitHub Pages, necesitas esta configuración mínima:

JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
Nota: Si tu repositorio NO es el repositorio principal de tu cuenta, agrega y :basePathassetPrefix

JavaScript

basePath: '/norigami',
assetPrefix: '/norigami',
Importante sobre Imágenes
GitHub Pages tiene limitaciones con la optimización de imágenes de Next.js, por eso usamos . Las imágenes ya están optimizadas manualmente en el proyecto.unoptimized: true

📝 Personalización
Cambiar Imágenes
Las imágenes del menú están en . Para cambiar una imagen:public/images/menu/

Coloca tu nueva imagen en la carpeta
Actualiza la ruta ensrc/lib/menu-data.ts
Asegúrese de que el nombre del archivo coincida
Editar el Menú
El menú se define en . Puedes agregar, eliminar o modificar platillos:src/lib/menu-data.ts

mecanografiado

{
  id: "unique-id",
  name: "Nombre del Platillo",
  nameEn: "English Name",
  description: "Descripción del platillo",
  price: 15.00,
  image: "/images/menu/your-image.png",
  category: "sushi",
  spicy: true,      // Opcional: badge de picante
  vegetarian: true  // Opcional: badge de vegetariano
}
Cambiar colores
Los colores están definidos en Tailwind CSS. Los colores principales son:

Rojo principal: ,text-red-600bg-red-600
Hover del rojo:hover:bg-red-700
Fondo gris claro:bg-gray-50
Texto oscuro:text-gray-900
🎨 Secciones del Sitio
1. Sección de héroes
Logo del restaurante con caracteres japoneses
Estadísticas (años de experiencia, calificación, platillos)
Botones CTA (Ver Menú, Reservar Mesa)
2. Navegación de Categorías
Barra pegajosa que se muestra al hacer scroll
Categorías: Entradas, Sushi, Platos Principales, Postres, Bebidas
Indicador de categoría activa
3. Menú Completo
Tarjetas de platillos con:
Imagen de alta calidad
Nombre en español e inglés
Descripción detallada
Precio
Insignias de picante y vegetariano
4. Sección "Nosotros"
Historia del restaurante
Valores y compromiso
Estadísticas visuales
5. Sección "Contacto"
Dirección
Teléfono
Correo electrónico
Botón de reserva
6. Pie de página
Información del restaurante
Horarios de apertura
Redes sociales
Derechos de autor
🌐 Vista previa
El sitio web está optimizado para verse bien en todos los dispositivos:

Móvil (< 768px): Menú hamburguesa, columnas simples
Tablet (768px - 1024px): Grid de 2 columnas, navegación horizontal
Escritorio (> 1024px): Grid de 3-4 columnas, navegación completa
📱 Capturas de pantalla
Sección héroe con imagen del restaurante
Grid de platillos del menú
Tarjetas de platillos con efectos de desplazamiento
Sección de contacto
🤝 Contribución
Si deseas mejorar el sitio web:

Fork el repositorio
Crea una rama para tu característica ( )git checkout -b feature/AmazingFeature
Commit tus cambios ( )git commit -m 'Add some AmazingFeature'
Empujar a la rama ( )git push origin feature/AmazingFeature
Abre una solicitud de extracción
📄 Licencia
Este proyecto está bajo la Licencia MIT.

👨‍🍳 Sobre Norigami
Norigami es un restaurante japonés auténtico que combina tradición y modernidad. Nuestros chefs, formados en las mejores escuelas de cocina de Japón, preparan cada platillo con pasión y dedicación, utilizando ingredientes frescos de la más alta calidad.

Desarrollado con ❤️ utilizando Next.js, Tailwind CSS y shadcn/ui
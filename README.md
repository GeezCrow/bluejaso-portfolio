# artist-portfolio

Portfolio personal con estética de "escritorio retro" — cada sección es una
ventana tipo archivo (`profile.cfg`, `bio.txt`, `links.lnk`, `gallery.zip`).
Dos tabs: presentación y galería.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que te dé Vite (normalmente http://localhost:5173).

## Estructura

```
src/
  data/
    artist.js      → datos personales, bio, redes, amigos (EDITAR AQUÍ)
    gallery.js      → piezas de arte: título, tag, tamaño en grid (EDITAR AQUÍ)
  components/
    Moth.jsx         → ícono decorativo SVG reutilizable
    Window.jsx       → wrapper de "ventana" retro
    WindowChrome.jsx → barra de título de la ventana (_ / ✕)
    TagPill.jsx      → etiqueta de categoría (original/fanart/oc/sketch)
    tabs/
      PresentationTab.jsx
      GalleryTab.jsx
  styles/
    theme.css        → todos los tokens de color/tipografía y reglas visuales
  App.jsx            → tabs + layout general
  main.jsx           → entry point de React
```

## Para reemplazar con datos reales

1. **`src/data/artist.js`** — alias, pronombres, signo, bio, redes sociales, amigos.
2. **`src/data/gallery.js`** — cada pieza tiene `title`, `tag` (`original` /
   `fanart` / `oc` / `sketch`), `colSpan`/`rowSpan` (tamaño en el grid de 4
   columnas) y un campo `image`. Por ahora `image: null` muestra un ícono de
   polilla como placeholder — cuando tengas las imágenes reales, pon la ruta
   ahí (ej. `image: "/img/moth-queen.png"`, guardando los archivos en
   `public/img/`).

## Paleta y tipografía (en `theme.css`)

- Fondo: `#0d1f1c` · Panel: `#16302b` · Acento menta: `#9ddbc4`
- Acento óxido: `#c9555a` · Crema (ventanas claras): `#ede7d3`
- Display: `VT323` · Cuerpo: `Space Mono` · Metadata: `IBM Plex Mono`

## Notas

- El grid de galería usa `colSpan`/`rowSpan` manual por pieza (igual patrón
  que en geezgalery): ajusta esos números en `gallery.js` para controlar qué
  piezas se ven más grandes.
- En mobile (≤640px) la galería colapsa a una columna y el grid de
  presentación también pasa a una sola columna.
- El lightbox se abre al hacer click en cualquier pieza de la galería.

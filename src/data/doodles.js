// Posiciones de los doodles sueltos por zona. x/y en % relativo al contenedor
// padre (que debe tener position: relative). Edita a mano para mover/quitar.
//
// Mantén esto disperso, no denso — 2-4 doodles por zona es suficiente.
// El objetivo es "alguien dejó garabatos en el margen", no ruido visual.

export const HEADER_DOODLES = [
  { type: "star", x: 78, y: 8, size: 26, rotate: -8, color: "#8fcbff" },
  { type: "sparkle", x: 14, y: 65, size: 16, rotate: 6, color: "#ffd966" },
  { type: "swoosh", x: 4, y: 10, size: 34, rotate: 4, color: "#7a9abf" },
];

export const PORTRAIT_DOODLES = [
  { type: "scribbleCircle", x: 70, y: 4, size: 32, rotate: -4, color: "#ffd966" },
  { type: "sparkle", x: 6, y: 78, size: 14, rotate: -10, color: "#8fcbff" },
];

export const FOOTER_DOODLES = [
  { type: "wave", x: 50, y: 90, size: 40, rotate: 0, color: "#7a9abf" },
];

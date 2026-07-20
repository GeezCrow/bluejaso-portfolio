// Doodles sueltos tipo "dibujado a mano" para decorar el fondo del sitio.
// Cada uno es un trazo simple en stroke (no fill), pensado para verse bien
// sobre el gradiente pastel sin competir con el contenido.
//
// Uso: <Doodle type="star" className="doodle doodle--header-1" />

const PATHS = {
  // estrella de 4 puntas, trazo grueso tipo marcador
  star: (
    <path
      d="M16 2 C16.5 9 17 14 24 16 C17 18 16.5 23 16 30 C15.5 23 15 18 8 16 C15 14 15.5 9 16 2 Z"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  // swoosh / garabato curvo, trazo fino tipo boligrafo
  swoosh: (
    <path
      d="M2 14 C8 4, 18 2, 26 9 C30 12.5, 24 17, 18 14 C13 11.5, 16 6, 22 7"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  ),
  // linea ondulada corta, trazo fino
  wave: (
    <path
      d="M2 8 Q 8 2, 14 8 T 26 8 T 38 8"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  ),
  // garabato circular tipo "ok" o enfasis, trazo medio
  scribbleCircle: (
    <path
      d="M18 4 C26 4 30 10 29 16 C28 23 21 27 14 25 C6 23 4 15 8 9 C10 6 14 4 18 5"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
  ),
  // par de rayitas tipo "sparkle" pequeño
  sparkle: (
    <g strokeWidth="1.2" strokeLinecap="round">
      <path d="M6 2 L6 11" />
      <path d="M1 6.5 L11 6.5" />
      <path d="M14 9 L14 13" />
      <path d="M12 11 L16 11" />
    </g>
  ),
};

const VIEWBOX = {
  star: "0 0 32 32",
  swoosh: "0 0 32 20",
  wave: "0 0 40 16",
  scribbleCircle: "0 0 36 32",
  sparkle: "0 0 18 14",
};

export default function Doodle({ type = "star", className = "", style }) {
  return (
    <svg
      viewBox={VIEWBOX[type]}
      className={`doodle ${className}`}
      style={style}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {PATHS[type]}
    </svg>
  );
}

import illuga from "../assets/illuga.png"
import nyon from "../assets/nyona-jaso.png"
import ai from "../assets/oc-ai.png"
import oc from "../assets/oc.png"
import original from "../assets/original-character.png"
import tignari from "../assets/tignari.png"

// Reemplaza con las piezas reales. colSpan/rowSpan controlan el tamaño en el
// grid de escritorio (4 columnas). En mobile (<=640px) todo se vuelve 1x1.
export const GALLERY = [
  { id: 1, title: "illuga - genshin impact", tag: "fanart", image: illuga,size: "lg", x: 13, y: 4, rotate: -6, z: 3 },
  { id: 2, title: "nyon - ranfren", tag: "fanart", image: nyon, size: "lg", x: 38, y: 4, rotate: 8, z: 2 },
  { id: 3, title: "oc: ai", tag: "oc", image: ai, size: "lg", x: 62, y: 4, rotate: 5, z: 2 },
  { id: 5, title: "naoto & ichisen", tag: "oc", image: oc, size: "lg", x: 12, y: 44, rotate: 4, z: 3 },
  { id: 6, title: "two characters", tag: "comission", image: original,size: "lg", x: 36, y: 44, rotate: -4, z: 5 },
  { id: 8, title: "tignari - genshin impact", tag: "fanart", image: tignari,  size: "lg", x: 62, y: 44, rotate: 7, z: 2 },
];

// Tags disponibles y su color asociado (ver styles/theme.css → .tag--*)
export const TAGS = ["original", "fanart", "oc", "sketch"];

export const SIZE_WIDTH = {
  sm: 160,
  md: 210,
  lg: 270,
};

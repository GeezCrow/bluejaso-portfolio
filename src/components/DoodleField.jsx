import Doodle from "./Doodle";

// Renderiza un conjunto de doodles posicionados absolutamente. El padre debe
// tener position: relative (o este componente debe envolver el área en uno).
export default function DoodleField({ items = [] }) {
  return (
    <div className="doodle-field" aria-hidden="true">
      {items.map((d, i) => (
        <Doodle
          key={i}
          type={d.type}
          className="doodle-field__item"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            transform: `rotate(${d.rotate}deg)`,
            color: d.color,
          }}
        />
      ))}
    </div>
  );
}

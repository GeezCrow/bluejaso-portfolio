import { useState } from "react";
import PresentationTab from "./components/tabs/PresentationTab";
import GalleryTab from "./components/tabs/GalleryTab";
import DoodleField from "./components/DoodleField";
import { ARTIST } from "./data/artist";
import { HEADER_DOODLES } from "./data/doodles";
import "./styles/theme.css";

export default function App() {
  const [tab, setTab] = useState("presentation");

  return (
    <div className="page">
      {/* Filtro SVG oculto: da el temblor "dibujado a mano" a los bordes de
          las ventanas (.window { filter: url(#sketchy-edge) } en theme.css).
          Muy sutil a propósito — no debe afectar la legibilidad. */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="sketchy-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <header className="site-head">
        <DoodleField items={HEADER_DOODLES} />
        <h1 className="site-head__title">{ARTIST.alias}</h1>
        <p className="site-head__sub">fanart &amp; originals · est. always tired</p>
      </header>

      <nav className="tabs" role="tablist" aria-label="Sections">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "presentation"}
          className={`tab-btn ${tab === "presentation" ? "tab-btn--active" : ""}`}
          onClick={() => setTab("presentation")}
        >
          presentación
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "gallery"}
          className={`tab-btn ${tab === "gallery" ? "tab-btn--active" : ""}`}
          onClick={() => setTab("gallery")}
        >
          galería
        </button>
      </nav>

      {tab === "presentation" ? <PresentationTab /> : <GalleryTab />}
    </div>
  );
}

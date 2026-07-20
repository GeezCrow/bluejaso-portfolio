import { useState } from "react";
import { createPortal } from "react-dom";
import Window from "../Window";
import WindowChrome from "../WindowChrome";
import Moth from "../Moth";
import TagPill from "../TagPill";
import { GALLERY, SIZE_WIDTH } from "../../data/gallery";

function Lightbox({ art, onClose }) {
  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="lightbox__panel">
        <WindowChrome
          filename={`${art.title}.png`}
          accent="cream"
          closable
          onClose={onClose}
        />
        <div className="lightbox__body">
          <div className="lightbox__art">
            {art.image ? (
              <img src={art.image} alt={art.title} className="lightbox__img" />
            ) : (
              <Moth className="lightbox__moth" />
            )}
          </div>
          <div className="lightbox__meta">
            <h3>{art.title}</h3>
            <TagPill tag={art.tag} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function GalleryTab() {
  const [active, setActive] = useState(null);

  return (
    <Window filename="gallery.zip" accent="mint" className="span-2">
      <div className="corkboard">
        {GALLERY.map((art) => (
          <button
            key={art.id}
            type="button"
            className="polaroid"
            style={{
              left: `${art.x}%`,
              top: `${art.y}%`,
              "--rotate": `${art.rotate}deg`,
              "--w": `${SIZE_WIDTH[art.size]}px`,
              zIndex: art.z,
            }}
            onClick={() => setActive(art)}
          >
            <span className="polaroid__tape" aria-hidden="true" />
            <span className="polaroid__photo">
              {art.image ? (
                <img src={art.image} alt={art.title} className="polaroid__img" />
              ) : (
                <Moth className="polaroid__moth" />
              )}
            </span>
            <span className="polaroid__caption">
              <span className="polaroid__title">{art.title}.png</span>
              <TagPill tag={art.tag} />
            </span>
          </button>
        ))}
      </div>

      {active && <Lightbox art={active} onClose={() => setActive(null)} />}
    </Window>
  );
}
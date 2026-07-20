import Window from "../Window";
import Moth from "../Moth";
import DoodleField from "../DoodleField";
import { ARTIST } from "../../data/artist";
import { PORTRAIT_DOODLES } from "../../data/doodles";

export default function PresentationTab() {
  return (
    <div className="grid grid--presentation">
      <Window filename="profile.cfg" accent="mint" className="profile-window">
        <img
          src="img/profile-corner.webp"
          alt=""
          className="corner-art corner-art--profile"
        />
        <div className="profile-head profile-head--compact">
          <p className="handle">{ARTIST.realHandle}</p>
        </div>
        <ul className="meta-list">
          <li>
            <span className="meta-list__k">pronouns</span>
            <span className="meta-list__v">{ARTIST.pronouns}</span>
          </li>
          <li>
            <span className="meta-list__k">type</span>
            <span className="meta-list__v">{ARTIST.mbti}</span>
          </li>
          <li>
            <span className="meta-list__k">lang</span>
            <span className="meta-list__v">{ARTIST.langs}</span>
          </li>
        </ul>
      </Window>

      <div className="portrait-slot" aria-hidden={!ARTIST.portraitImage}>
        <DoodleField items={PORTRAIT_DOODLES} />
        {ARTIST.portraitImage ? (
          <img
            src={ARTIST.portraitImage}
            alt={`Retrato de ${ARTIST.alias}`}
            className="portrait-slot__img"
          />
        ) : (
          <Moth className="portrait-slot__placeholder" />
        )}
      </div>

      <Window filename="links.lnk" accent="mint">
        <ul className="link-list">
          {ARTIST.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} className="link-row">
                <span className="link-row__label">{s.label}</span>
                <span className="link-row__value">{s.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Window>

      <Window filename="fandoms.bat" accent="rust">
                <img
          src="img/bio-corner.webp"
          alt=""
          className="corner-art corner-art--bio"
        />
        <div className="friends-grid">
          {ARTIST.friends.map((f) => (
            <div className="friend-chip" key={f.name}>
              <span className="friend-chip__emoji" aria-hidden="true">
                {f.emoji}
              </span>
              <span className="friend-chip__name">{f.name}</span>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
}

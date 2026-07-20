import WindowChrome from "./WindowChrome";

export default function Window({ filename, accent = "mint", children, className = "", closable, onClose }) {
  return (
    <div className={`window window--${accent} ${className}`}>
      <WindowChrome filename={filename} accent={accent} closable={closable} onClose={onClose} />
      <div className="window__body">{children}</div>
    </div>
  );
}

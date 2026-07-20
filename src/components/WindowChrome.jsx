export default function WindowChrome({ filename, accent = "mint", onClose, closable = false }) {
  return (
    <div className={`win-bar win-bar--${accent}`}>
      <span className="win-bar__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="win-bar__name">{filename}</span>
      <span className="win-bar__controls" aria-hidden="true">
        <button
          type="button"
          className="win-btn"
          tabIndex={closable ? 0 : -1}
          onClick={closable ? onClose : undefined}
          aria-label={closable ? "close" : undefined}
        >
          {closable ? "✕" : "_"}
        </button>
      </span>
    </div>
  );
}

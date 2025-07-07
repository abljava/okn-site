import { createPortal } from "react-dom";

export default function FullscreenMapPortal({ children, onClose }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "90vw",
          height: "90vh",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden"
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 10000,
            background: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Закрыть
        </button>
      </div>
    </div>,
    document.body
  );
} 
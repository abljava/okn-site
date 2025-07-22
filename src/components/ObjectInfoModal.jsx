import React from "react";

export default function ObjectInfoModal({ feature, onClose }) {
  if (!feature) return null;
  const { id, number, fid, name, description, image } =
    feature.properties || {};
  const [currentImgIdx, setCurrentImg] = React.useState(0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: 12,
          padding: 32,
          minWidth: 320,
          maxWidth: 480,
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "#eee222",
            border: "none",
            borderRadius: 6,
            padding: "4px 12px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <div className="flex gap-5">
          {id !== undefined && (
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
              id: {id}
            </div>
          )}
          {number !== undefined && (
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
              number: {number}
            </div>
          )}
        </div>

        {/* Заголовок и описание */}
        <h2 style={{ marginTop: 0 }}>{name}</h2>
        <p>{description}</p>
        
        {/* Слайдер изображений */}
        {Array.isArray(image) && image.length > 1 ? (
          <div
            style={{ position: "relative", maxWidth: "100%", marginTop: 16 }}
          >
            <button
              onClick={() =>
                setCurrentImg((idx) => (idx - 1 + image.length) % image.length)
              }
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
              }}
              aria-label="Предыдущее фото"
            >
              &#8592;
            </button>
            <img
              src={image[currentImgIdx]}
              alt={name}
              style={{
                maxWidth: "100%",
                borderRadius: 8,
                display: "block",
                margin: "0 auto",
              }}
            />
            <button
              onClick={() => setCurrentImg((idx) => (idx + 1) % image.length)}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
              }}
              aria-label="Следующее фото"
            >
              &#8594;
            </button>
            <div style={{ textAlign: "center", marginTop: 8, color: "#888" }}>
              {currentImgIdx + 1} / {image.length}
            </div>
          </div>
        ) : (
          image && (
            <img
              src={Array.isArray(image) ? image[0] : image}
              alt={name}
              style={{ maxWidth: "100%", borderRadius: 8, marginTop: 16 }}
            />
          )
        )}
      </div>
    </div>
  );
}

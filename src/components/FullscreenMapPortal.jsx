import { createPortal } from "react-dom";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

export default function FullscreenMapPortal({ children, onClose }) {
  const testPolygon = [
    [43.116265, 131.882393],
    [43.116800, 131.885000],
    [43.115900, 131.887200],
    [43.114900, 131.885800],
    [43.115400, 131.883000],
    [43.116265, 131.882393],
  ];

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
        <MapContainer center={[43.116265, 131.882393]} zoom={16} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polygon positions={testPolygon} color="blue" />
        </MapContainer>
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
          x
        </button>
      </div>
    </div>,
    document.body
  );
} 
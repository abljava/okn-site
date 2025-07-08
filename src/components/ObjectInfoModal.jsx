import React from "react";

export default function ObjectInfoModal({ feature, onClose }) {
  if (!feature) return null;
  const { name, description, image } = feature.properties || {};
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }} onClick={onClose}>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        padding: 32,
        minWidth: 320,
        maxWidth: 480,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        position: "relative"
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "#eee",
          border: "none",
          borderRadius: 6,
          padding: "4px 12px",
          cursor: "pointer"
        }}>×</button>
        <h2 style={{marginTop:0}}>{name}</h2>
        <p>{description}</p>
        {image && <img src={image} alt={name} style={{maxWidth: "100%", borderRadius: 8, marginTop: 16}} />}
      </div>
    </div>
  );
} 
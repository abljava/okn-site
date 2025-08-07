import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";

function dmsToDecimal(dmsStr) {
  dmsStr = dmsStr.replace(/"/g, "");
  const [lonStr, latStr] = dmsStr.split(/\t|;/).map((s) => s.trim());
  if (!lonStr || !latStr) {
    console.error("Некорректная строка координат:", dmsStr);
    return null;
  }
  const lonMatch = lonStr.match(/(\d+)[^\d]+(\d+)'([\d,\\.]+)/);
  if (!lonMatch) {
    console.error("Не удалось распарсить долготу:", lonStr);
    return null;
  }
  const lonSeconds = Number(lonMatch[3].replace(",", "."));
  const lon =
    Number(lonMatch[1]) + Number(lonMatch[2]) / 60 + lonSeconds / 3600;
  const latMatch = latStr.match(/(\d+)[^\d]+(\d+)'([\d,\\.]+)/);
  if (!latMatch) {
    console.error("Не удалось распарсить широту:", latStr);
    return null;
  }
  const latSeconds = Number(latMatch[3].replace(",", "."));
  const lat =
    Number(latMatch[1]) + Number(latMatch[2]) / 60 + latSeconds / 3600;
  return [lat, lon];
}

function MapComponent() {
  const [polygonCoords, setPolygonCoords] = useState([]);

  useEffect(() => {
    fetch("/assets/coords.csv")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line && /[0-9]+'/.test(line));
        // console.log("Строки из файла:", lines);
        const points = lines.map((line) => dmsToDecimal(line)).filter(Boolean);
        setPolygonCoords(points);
        // console.log("Загруженные координаты:", points);
      });
  }, []);

  return (
    <MapContainer
      center={polygonCoords[0] || [43.1155, 131.8855]}
      zoom={20}
      style={{ height: "1000px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {polygonCoords.length > 0 && (
        <Polygon positions={polygonCoords} color="blue" />
      )}
      <Marker position={[43.1155, 131.8855]}>
        <Popup>Здесь ваш маркер!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;

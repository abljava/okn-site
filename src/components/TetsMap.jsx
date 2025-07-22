import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function TestMap() {
  return (
    <MapContainer center={[43.1155, 131.8855]} zoom={13} style={{ height: "1200px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.1155, 131.8855]}>
        <Popup>Тестовый попап</Popup>
      </Marker>
    </MapContainer>
  );
}
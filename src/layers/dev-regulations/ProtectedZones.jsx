import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ProtectedZones({ layerColor = "#000" }) {
  return (
    <GeoJsonLayer
      url="/test-data/dev-regulations/protected_zones.geojson"
      style={{
        color: layerColor,
        weight: 2,
        fillColor: layerColor,
        fillOpacity: 0.3,
        opacity: 1,
      }}
    />
  );
}

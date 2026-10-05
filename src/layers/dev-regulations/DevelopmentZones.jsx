import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function DevelopmentZones({ layerColor = "#000" }) {
  return (
    <GeoJsonLayer
      url="/test-data/dev-regulations/development_zones.geojson"
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

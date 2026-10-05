import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function LandscapeZones({ layerColor = "#000" }) {
  return (
    <GeoJsonLayer
      url="/test-data/dev-regulations/lanscape_zones.geojson"
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

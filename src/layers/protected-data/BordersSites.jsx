import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function BordersSites({ layerColor = "#2776bb" }) {
  return (
    <GeoJsonLayer
      url="/data/13_borders_sites.geojson"
      style={{
        color: layerColor,
        weight: 1,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
    />
  );
}

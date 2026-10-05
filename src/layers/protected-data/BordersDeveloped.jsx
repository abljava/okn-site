import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewBordersDeveloped({ layerColor = "#0000ff" }) {
  return (
    <GeoJsonLayer
      url="/data/7_borders_developed.geojson"
      style={{
        color: layerColor,
        weight: 2,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
        dashArray: "5, 5",
      }}
    />
  );
}

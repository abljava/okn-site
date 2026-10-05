import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNBorders({ layerColor = "#000" }) {
  return (
    <GeoJsonLayer
      url="/data/1_borders.geojson"
      style={{
        color: layerColor,
        weight: 3,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
        dashArray: "10, 10",
      }}
    />
  );
}

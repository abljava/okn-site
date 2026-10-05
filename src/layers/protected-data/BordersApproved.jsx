import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewBordersApproved({ layerColor = "#ff0000" }) {
  return (
    <GeoJsonLayer
      url="/data/6_borders_approved.geojson"
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

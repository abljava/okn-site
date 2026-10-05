import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNSoviet({ layerColor = "#75eb73" }) {
  return (
    <GeoJsonLayer
      url="/data/9_valued_development_soviet.geojson"
      style={{
        color: "#000",
        weight: 1,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
    />
  );
}

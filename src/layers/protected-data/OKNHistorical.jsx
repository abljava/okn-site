import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNHistorical({ layerColor = "#a866ea" }) {
  return (
    <GeoJsonLayer
      url="/data/8_valued_development_XIX_XX.geojson"
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

import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNRegional({
  onFeatureClick,
  layerColor = "#f85e5b",
}) {
  return (
    <GeoJsonLayer
      url="/data/numbered/3_okn_regional.geojson"
      style={{
        color: "#000",
        weight: 1,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
      onFeatureClick={onFeatureClick}
      interactive
      numberedOnly
      bufferMeters={3}
    />
  );
}

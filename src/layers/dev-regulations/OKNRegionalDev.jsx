import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNRegionalDev({
  onFeatureClick,
  layerColor = "#f85e5b",
  pane,
}) {
  return (
    <GeoJsonLayer
      url="/data/numbered/okn_regional_dev.geojson"
      pane={pane}
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

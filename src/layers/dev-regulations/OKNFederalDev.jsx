import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNFederalDev({
  onFeatureClick,
  layerColor = "#ea66c9",
  pane,
}) {
  return (
    <GeoJsonLayer
      url="/data/numbered/2_okn_federal.geojson"
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
      pane={pane}
    />
  );
}

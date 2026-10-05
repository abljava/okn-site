import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNIdentified({
  onFeatureClick,
  layerColor = "#ffb266",
}) {
  return (
    <GeoJsonLayer
      url="/data/5_okn_identified.geojson"
      style={{
        color: "#000",
        weight: 1,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
      onFeatureClick={onFeatureClick}
      interactive
      bufferMeters={3}
      tooltip="plaintext_2"
    />
  );
}

import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function OKNIdentifiedDev({
  onFeatureClick,
  layerColor = "#f85e5b",
}) {
  return (
    <GeoJsonLayer
      url="/data/5_okn_identified.geojson"
      style={{
        color: "#000",
        weight: 2,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
      onFeatureClick={onFeatureClick}
      interactive
      numberedOnly
      bufferMeters={15}
    />
  );
}

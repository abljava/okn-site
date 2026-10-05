import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewOKNFederal({
  onFeatureClick,
  layerColor = "#ea66c9",
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
    />
  );
}

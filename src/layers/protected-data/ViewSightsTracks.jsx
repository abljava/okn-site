import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewSightsTracks({ layerColor = "#dd3700" }) {
  return (
    <GeoJsonLayer
      url="/data/12_viewsights_tracks.geojson"
      style={{
        color: layerColor,
        weight: 2,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
    />
  );
}

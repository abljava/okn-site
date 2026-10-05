import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewNatureLandscape({ layerColor = "#cbe8bc" }) {
  return (
    <GeoJsonLayer
      url="/data/11_nature_landscape.geojson"
      style={{
        color: "#658256",
        weight: 1,
        fillColor: layerColor,
        fillOpacity: 0.6,
        opacity: 1,
      }}
    />
  );
}

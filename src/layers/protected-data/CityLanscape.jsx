import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function ViewCityLanscape({ layerColor = "#80d4a2" }) {
  return (
    <GeoJsonLayer
      url="/data/10_valued_city_landscape.geojson"
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

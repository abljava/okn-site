import GeoJsonLayer from "../shared/GeoJsonLayer";

export default function HistoricalPlan({ layerColor = "#7f8f97" }) {
  return (
    <GeoJsonLayer
      url="/data/15_historical_plan.geojson"
      style={{
        color: layerColor,
        weight: 10,
        fillColor: layerColor,
        fillOpacity: 0.8,
        opacity: 1,
      }}
    />
  );
}

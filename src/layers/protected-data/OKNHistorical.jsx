import GeoJsonLayer from "../shared/GeoJsonLayer";
import valuedBuildings from "../../data/valuedBuildings.json";

export default function ViewOKNHistorical({
  onFeatureClick,
  layerColor = "#a866ea",
  pane,
}) {
  return (
    <GeoJsonLayer
      url="/data/8_valued_development_XIX_XX.geojson"
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
      featureProps={valuedBuildings["8"]}
    />
  );
}

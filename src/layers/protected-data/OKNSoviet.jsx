import GeoJsonLayer from "../shared/GeoJsonLayer";
import valuedBuildings from "../../data/valuedBuildings.json";

export default function ViewOKNSoviet({
  onFeatureClick,
  layerColor = "#75eb73",
  pane,
}) {
  return (
    <GeoJsonLayer
      url="/data/9_valued_development_soviet.geojson"
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
      featureProps={valuedBuildings["9"]}
    />
  );
}

import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function LayerRT({ layerColor = "#000", pane }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/rt.geojson"
      pointsUrl="/test-data/dev-regulations/rt_point.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
      pane={pane}
    />
  );
}

import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function LayerRPL({ layerColor = "#000", pane }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/rpl_polygon.geojson"
      pointsUrl="/test-data/dev-regulations/rpl_point.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
      pane={pane}
    />
  );
}

import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function LayerROKN({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/rokn_polygon.geojson"
      pointsUrl="/test-data/dev-regulations/rokn_point.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

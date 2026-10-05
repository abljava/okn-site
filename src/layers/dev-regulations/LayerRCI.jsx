import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function LayerRCI({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/rci.geojson"
      pointsUrl="/test-data/dev-regulations/rci_points.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

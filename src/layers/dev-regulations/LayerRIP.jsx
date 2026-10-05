import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function LayerRIP({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/rip.geojson"
      pointsUrl="/test-data/dev-regulations/rip_point.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

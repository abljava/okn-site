import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function Layer1({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/p1_l.geojson"
      pointsUrl="/test-data/dev-regulations/p1_p.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

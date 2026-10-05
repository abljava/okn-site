import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function Layer2({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/p2_l.geojson"
      pointsUrl="/test-data/dev-regulations/p2_p.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

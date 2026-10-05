import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function Layer3({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/p3_l.geojson"
      pointsUrl="/test-data/dev-regulations/p3_p.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

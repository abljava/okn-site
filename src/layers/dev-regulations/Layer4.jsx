import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function Layer4({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/p4_l.geojson"
      pointsUrl="/test-data/dev-regulations/p4_p.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

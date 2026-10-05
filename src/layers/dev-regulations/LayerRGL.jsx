import LabeledLineLayer from "../shared/LabeledLineLayer";

export default function LayerRGL({ layerColor = "#000" }) {
  return (
    <LabeledLineLayer
      linesUrl="/test-data/dev-regulations/rgl.geojson"
      pointsUrl="/test-data/dev-regulations/rgl_point.geojson"
      layerColor={layerColor}
      dashArray="8, 8"
    />
  );
}

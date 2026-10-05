import { buffer } from "@turf/turf";

function hasNumber(feature) {
  return Boolean(feature?.properties?.Text || feature?.properties?.number);
}

function isValidGeometry(feature) {
  if (!feature?.geometry) return false;
  if (feature.geometry.type !== "MultiPolygon") return true;

  return feature.geometry.coordinates.every((polygon) =>
    polygon.every((ring) =>
      ring.every(
        (coord) =>
          Array.isArray(coord) &&
          coord.length === 2 &&
          typeof coord[0] === "number" &&
          typeof coord[1] === "number"
      )
    )
  );
}

function toBuffer(feature, meters) {
  try {
    const buffered = buffer(feature, meters, { units: "meters" });
    if (!buffered) return null;
    buffered.properties = { ...feature.properties };
    return buffered;
  } catch {
    return null;
  }
}

export function bufferNumberedFeatures(geojson, meters = 3) {
  if (!geojson?.features) return null;

  const features = geojson.features
    .filter((feature) => isValidGeometry(feature) && hasNumber(feature))
    .map((feature) => toBuffer(feature, meters))
    .filter(Boolean);

  return { type: "FeatureCollection", features };
}

export function bufferLineStrings(geojson, meters = 3) {
  if (!geojson?.features) return null;

  const features = geojson.features
    .filter((feature) => feature.geometry?.type === "LineString")
    .map((feature) => toBuffer(feature, meters))
    .filter(Boolean);

  return { type: "FeatureCollection", features };
}

export function filterNumberedFeatures(geojson) {
  if (!geojson?.features) return geojson;
  return {
    type: "FeatureCollection",
    features: geojson.features.filter(hasNumber),
  };
}

export function bindNumberTooltip(feature, layer, onFeatureClick) {
  if (!hasNumber(feature)) return;
  if (onFeatureClick) {
    layer.on({
      click: () => onFeatureClick(feature),
    });
  }
  const number = feature.properties.Text || feature.properties.number;
  layer.bindTooltip(`№ ${number}`, {
    permanent: false,
    direction: "top",
  });
}

export function bindPlaintextTooltip(feature, layer, onFeatureClick) {
  if (onFeatureClick) {
    layer.on({
      click: () => onFeatureClick(feature),
    });
  }
  if (feature.properties?.plaintext_2) {
    layer.bindTooltip(`№ ${feature.properties.plaintext_2}`, {
      permanent: false,
      direction: "top",
    });
  }
}

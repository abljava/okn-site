export const REGIME_FILL_PANE = "regime-fills";
export const REGIME_OBJECT_PANE = "regime-objects";

const PANE_Z_INDEX = {
  [REGIME_FILL_PANE]: 420,
  [REGIME_OBJECT_PANE]: 460,
};

export function ensureMapPane(map, name) {
  if (!name || map.getPane(name)) return;
  const pane = map.createPane(name);
  const zIndex = PANE_Z_INDEX[name];
  if (zIndex != null) pane.style.zIndex = String(zIndex);
}

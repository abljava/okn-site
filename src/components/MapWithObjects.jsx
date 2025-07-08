import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import ObjectInfoModal from "./ObjectInfoModal";

export default function MapWithObjects() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/data/objects.geojson")
      .then(res => res.json())
      .then(setGeojsonData);
  }, []);

  function onEachFeature(feature, layer) {
    layer.on({
      click: () => {
        console.log("Клик по объекту:", feature);
        setSelectedFeature(feature);
      }
    });
  }

  return (
    <>
      <MapContainer center={[43.116265, 131.882393]} zoom={14} style={{ height: "600px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geojsonData && <GeoJSON
          data={geojsonData}
          onEachFeature={onEachFeature}
          style={() => ({
            color: "blue",
            weight: 2,
            fillColor: "cyan",
            fillOpacity: 0.4,
            opacity: 1
          })}
        />}
      </MapContainer>
      <ObjectInfoModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
    </>
  );
}
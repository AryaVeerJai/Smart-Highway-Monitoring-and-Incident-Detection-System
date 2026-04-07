import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import API from "../services/api";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [incidents, setIncidents] = useState([]);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const inc = await API.get("/incidents");
    const cam = await API.get("/cameras");

    setIncidents(inc.data);
    setCameras(cam.data);

    console.log("Incidents:", inc.data);
    console.log("Cameras:", cam.data);
  };

  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Cameras */}
      {cameras
        .filter((cam) => cam && cam.lat && cam.lng)
        .map((cam) => (
            <Marker key={cam._id} position={[cam.lat, cam.lng]}>
            <Popup>📷 {cam.name}</Popup>
            </Marker>
        ))}

      {/* Incidents */}
      {incidents
        .filter((inc) => inc && inc.lat && inc.lng)
        .map((inc) => (
            <Marker key={inc._id} position={[inc.lat, inc.lng]}>
            <Popup>
                🚨 {inc.type} <br />
                Severity: {inc.severity}
            </Popup>
            </Marker>
        ))}
    </MapContainer>
  );
};

export default MapView;
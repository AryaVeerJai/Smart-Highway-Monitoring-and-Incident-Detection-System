import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    incidents: 0,
    cameras: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const inc = await API.get("/incidents");
    const cam = await API.get("/cameras");

    setStats({
      incidents: inc.data.length,
      cameras: cam.data.length
    });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>🚨 Incidents: {stats.incidents}</div>
      <div>📷 Cameras: {stats.cameras}</div>
    </div>
  );
};

export default Dashboard;
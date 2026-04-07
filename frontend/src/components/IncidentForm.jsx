import { useState } from "react";
import API from "../services/api";

const IncidentForm = ({ refresh }) => {
  const [form, setForm] = useState({
    type: "",
    lat: "",
    lng: "",
    severity: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/incidents", form);
    alert("Incident Reported!");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type" onChange={(e) => setForm({...form, type: e.target.value})} />
      <input placeholder="Latitude" onChange={(e) => setForm({...form, lat: e.target.value})} />
      <input placeholder="Longitude" onChange={(e) => setForm({...form, lng: e.target.value})} />
      <input placeholder="Severity" onChange={(e) => setForm({...form, severity: e.target.value})} />
      <button type="submit">Report Incident</button>
    </form>
  );
};

export default IncidentForm;
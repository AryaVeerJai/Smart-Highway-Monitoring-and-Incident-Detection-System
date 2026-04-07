import MapView from "./components/MapView";
import Dashboard from "./components/Dashboard";
import IncidentForm from "./components/IncidentForm";

function App() {
  return (
    <div>
      <h1>Smart Highway Monitoring System</h1>

      <Dashboard />
      <IncidentForm />
      <MapView />
    </div>
  );
}

export default App;
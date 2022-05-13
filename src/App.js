import './App.css';
import { useEffect } from "react";
import Router from "./Utilities/router";
import ProtectedRoute from "./Utilities/protectedRoute";

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

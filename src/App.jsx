import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default App;

"use client";
import { useState } from "react";

import Sidebar from "../../components/sidebar";
import Dashboard from "../../components/dashboard";
import MapPage from "../../components/mapPage";
import Reports from "../../components/report";
import Settings from "../../components/settings";


export default function Page() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex">
      <Sidebar active={active} setActive={setActive} />

      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        {active === "Dashboard" && <Dashboard />}
        {active === "Map" && <MapPage />}
        {active === "Reports" && <Reports />}
        {active === "Settings" && <Settings />}
      </main>
    </div>
  );
}

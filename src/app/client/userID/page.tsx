"use client";
import { useState } from "react";

import Sidebar from "@/app/components/sidebar";
import Dashboard from "@/app/components/dashboard";
import MapPage from "@/app/components/mapPage";
import Reports from "@/app/components/report";
import Settings from "@/app/components/settings";
import Children from "@/app/components/children";


export default function Page() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active={active} setActive={setActive}/>

      <main className="flex-1 p-6 bg-gray-200 min-h-screen overflow-y-auto">
        {active === "Dashboard" && <Dashboard />}
        {active === "Children" && <Children/>}
        {active === "Map" && <MapPage />}
        {active === "Reports" && <Reports />}
        {active === "Settings" && <Settings />}
      </main>
    </div>
  );
}

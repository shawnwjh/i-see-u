"use client"

import { useState } from "react";
import Nav from "@/components/Nav"
import Dashboard from "@/components/Dashboard";

function Display({ name }: { name: string }) {
  if (name == "dashboard") {
    return (
      <Dashboard />
    )
  }
  return (
    <div>Others</div>
  )
}

export default function Home() {

  const [display, setDisplay] = useState("dashboard");
  const currentComponent = (data) => {
    setDisplay(data);
  }

  return (
    <div className="flex flex-col">
      <div>
        <Nav showComponent={currentComponent}/>
      </div>
      <div>
        <Display name={display} />
      </div>
    </div>
  );
}

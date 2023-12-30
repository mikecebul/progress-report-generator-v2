import React from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen dark bg-background text-primary">
      <h1 className="text-3xl font-semibold">Generate Progress Reports</h1>
      <p className="pt-1">
        Start by uploading client information and attendance.
      </p>
      <Button className="mt-8">Generate Reports</Button>
    </div>
  );
}

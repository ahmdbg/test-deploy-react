"use client";
import React from "react";
import { Boxes } from "../ui/Background-boxes";
import { cn } from "../../utils/cn"; // Pastikan path ini sesuai dengan struktur folder kamu
import AboutSection from "./AboutSection";

export default function BackgroundBoxesDemo() {
  return (
    <div
      className="h-[1000px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-[#00171f]   z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="my-auto py-6">

      <AboutSection />
      </div>
    </div>
  );
}

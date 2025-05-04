import React from "react";
import { Vortex } from "../ui/vortex";

export function VortexDemo() {
    return (
        <div className="rounded-md h-[30rem] overflow-hidden pt-[10vh]">
            <Vortex
                backgroundColor="#000000"
                particleCount={200} // bisa diatur sesuai keinginan
                baseSpeed={0.2}
                rangeSpeed={1.8}
                baseRadius={1}
                rangeRadius={2.5}
                rangeY={120}
                baseHue={200}
                className="flex flex-col items-center justify-center px-4 md:px-8 py-6 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    About Us
                </h2>
                
            </Vortex>
        </div>
    );
}

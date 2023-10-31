"use client";

import { useGesture } from "@use-gesture/react";
import BoxCanvas from "./canvas/boxCanvas";
import EffectCanvas from "./effects/effectCanvas";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      {/* <BoxCanvas /> */}
      <EffectCanvas />
    </main>
  );
}

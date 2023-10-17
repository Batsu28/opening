"use client";
import { Canvas } from "@react-three/fiber";
import Effect1Scene from "./effect1/scene";
import { Stats } from "@react-three/drei";
import ModelScene from "./modelTest/scene";

const EffectCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      {/* <Effect1Scene /> */}
      <ModelScene />
      <Stats />
    </Canvas>
  );
};

export default EffectCanvas;

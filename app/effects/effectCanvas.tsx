"use client";
import { Canvas } from "@react-three/fiber";
import Effect1Scene from "./effect1/scene";

import Stage from "./stage";
import Effects from "../canvas/godray/godray";
import Lights from "../canvas/lights";

const EffectCanvas = () => {
  return (
    <Canvas camera={{ position: [2, 2, 3] }}>
      <ambientLight intensity={1} />
      <Stage />
      <Effect1Scene />
      {/* <Effects /> */}
      {/* <FakeEyeModel rotation={[0, Math.PI / 1.2, 0]} /> */}
    </Canvas>
  );
};

export default EffectCanvas;

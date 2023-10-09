"use client";

import { Canvas } from "@react-three/fiber";
import BoxMesh from "./boxMesh/boxMesh";
import { Suspense } from "react";
import { CameraControls, OrbitControls, Stats } from "@react-three/drei";
import Effects from "./godray/godray";
import Lights from "./lights";

const BoxCanvas = () => {
  return (
    <Canvas camera={{ position: [0, -15, -15] }}>
      <ambientLight intensity={1} />
      <Lights />
      <group>
        <BoxMesh />
        <Effects />
      </group>
      <Stats />
      {/* <OrbitControls /> */}
      {/* <CameraControls /> */}
    </Canvas>
  );
};

export default BoxCanvas;

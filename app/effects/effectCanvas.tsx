"use client";
import { Canvas } from "@react-three/fiber";
import Effect1Scene from "./effect1/scene";
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { FakeEyeModel } from "./modelTest/RobotModel";

const EffectCanvas = () => {
  return (
    <Canvas camera={{ position: [2, 2, 3] }}>
      <ambientLight intensity={1} />
      <group position={[0, 0, 0]}>
        <fog attach="fog" args={["black", 20, 50]} />
        <Grid
          cellSize={1}
          sectionColor={"green"}
          cellColor={"green"}
          fadeStrength={1}
          fadeDistance={50}
          cellThickness={2}
          infiniteGrid
        />
        <axesHelper position={[0, 0.5, 0]} args={[1]} />
      </group>
      <Effect1Scene />
      {/* <FakeEyeModel rotation={[0, Math.PI / 1.2, 0]} /> */}
      <Stats />
      <OrbitControls minDistance={2} maxDistance={20} />
      <Environment preset="lobby" />
    </Canvas>
  );
};

export default EffectCanvas;

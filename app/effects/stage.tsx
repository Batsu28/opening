import { Environment, Grid, OrbitControls, Stats } from "@react-three/drei";
import { DoubleSide } from "three";

const Stage = () => {
  const count = 50;
  return (
    <group position={[0, 0, 0]}>
      <fog attach="fog" args={["black", 20, 40]} />
      <axesHelper position={[0, 1, 0]} args={[1]} />

      {/* <Grid
        cellSize={1}
        sectionColor={"green"}
        cellColor={"green"}
        fadeStrength={2}
        fadeDistance={count}
        cellThickness={3}
        infiniteGrid
      /> */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[count + 1, count + 1]} />
        <meshStandardMaterial color={"black"} />
      </mesh> */}
      <points position={[0, 1, 0]}>
        <sphereGeometry args={[40, 120, 40]} />
        <pointsMaterial size={0.01} sizeAttenuation={true} side={DoubleSide} />
      </points>
      <Stats />
      <OrbitControls minDistance={2} maxDistance={40} />
      <Environment preset="lobby" />
    </group>
  );
};

export default Stage;

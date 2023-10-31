import { Environment, Grid, OrbitControls, Stats } from "@react-three/drei";

const Stage = () => {
  return (
    <group position={[0, 0, 0]}>
      <fog attach="fog" args={["black", 20, 40]} />
      <Grid
        cellSize={1}
        sectionColor={"green"}
        cellColor={"green"}
        fadeStrength={2}
        fadeDistance={50}
        cellThickness={3}
        infiniteGrid
      />
      <axesHelper position={[0, 0.1, 0]} args={[1]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[51, 51]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <points position={[0, 1, 0]}>
        <sphereGeometry args={[60, 240, 60]} />
        <pointsMaterial size={0.01} sizeAttenuation={true} />
      </points>
      <Stats />
      <OrbitControls minDistance={2} maxDistance={20} />
      <Environment preset="lobby" />
    </group>
  );
};

export default Stage;

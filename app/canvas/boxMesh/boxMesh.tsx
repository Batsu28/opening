import { Instance, Instances } from "@react-three/drei";
import { BoxSetting } from "./position";
import { Vector3 } from "three";
import { MathUtils } from "three/src/math/MathUtils.js";

const BoxInstance = ({ position }: any) => {
  return <Instance position={position} scale={1} color={"black"} />;
};

const BoxMesh = () => {
  const positions = BoxSetting();
  return (
    <group position={[-6, -13.5, -6]}>
      <Instances limit={positions.length} range={positions.length}>
        <boxGeometry />
        <meshStandardMaterial />
        <group>
          {positions.map((position, i) => (
            <BoxInstance position={position} key={i} />
          ))}
        </group>
      </Instances>
    </group>
  );
};

export default BoxMesh;

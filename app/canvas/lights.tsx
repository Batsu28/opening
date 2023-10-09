import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {
  const spotRef = useRef<any>();
  const spotRef1 = useRef<any>();
  useHelper(spotRef, PointLightHelper);
  useHelper(spotRef1, PointLightHelper);

  return (
    <>
      <pointLight
        color={"blue"}
        intensity={50}
        distance={50}
        decay={0}
        position={[0, 15, -20]}
        ref={spotRef}
      />
      <pointLight
        color={"aqua"}
        intensity={50}
        distance={50}
        decay={0}
        position={[0, -5, -18]}
        ref={spotRef1}
      />
    </>
  );
};
export default Lights;

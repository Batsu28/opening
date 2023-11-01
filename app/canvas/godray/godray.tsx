import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef, useRef } from "react";
import { Resizer, KernelSize, BlendFunction } from "postprocessing";
import { DoubleSide } from "three";

const GodrayPlane = forwardRef<any>(function Sun(_props, forwardRef) {
  return (
    <mesh
      position={[0, 4.3, 0]}
      ref={forwardRef}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial side={DoubleSide} />
    </mesh>
  );
});

function Effects() {
  const sunRef = useRef<any>();
  const { size } = useThree();
  return (
    <>
      <GodrayPlane ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.NORMAL}
            samples={60}
            density={0.96}
            decay={0.93}
            weight={1}
            exposure={0.6}
            clampMax={1}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer>
      )}
    </>
  );
}

export default Effects;

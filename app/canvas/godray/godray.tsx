import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef, useRef } from "react";
import { Resizer, KernelSize, BlendFunction } from "postprocessing";

const GodrayPlane = forwardRef<any>(function Sun(_props, forwardRef) {
  return (
    <mesh position={[0, 0, -6.35]} ref={forwardRef} rotation={[Math.PI, 0, 0]}>
      <planeGeometry args={[13, 40]} />
      <meshBasicMaterial transparent />
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
            blendFunction={BlendFunction.NEGATION}
            samples={100}
            density={1}
            decay={0.9}
            weight={1}
            exposure={0.5}
            clampMax={1}
            width={size.width}
            height={size.height}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer>
      )}
    </>
  );
}

export default Effects;

import { extend, useFrame, useThree } from "@react-three/fiber";
import { Shader } from "./shader";
import { useRef } from "react";
import { Vector2 } from "three";

const Effect1Scene = () => {
  const ref = useRef<any>();
  const { size } = useThree();

  console.log(ref.current);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.uniforms.iTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <shader iResolution={new Vector2(size.width, size.height)} />
    </mesh>
  );
};

extend({ Shader });
export default Effect1Scene;

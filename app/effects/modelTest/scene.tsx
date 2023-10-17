import { extend, useFrame, useThree } from "@react-three/fiber";
import { Shader } from "./shader";
import { useRef } from "react";
import { Vector2 } from "three";
import { useGLTF } from "@react-three/drei";

const ModelScene = () => {
  const ref = useRef<any>();
  const { size } = useThree();
  const model: any = useGLTF("/robotModel.glb");

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.uniforms.iTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref} scale={[0.1, 0.1, 0.1]}>
      {model?.nodes.map((node: any) => (
        <primitive object={node} key={node.name} />
      ))}
      <meshBasicMaterial />
      {/* <shader iResolution={new Vector2(size.width, size.height)} /> */}
    </mesh>
  );
};

extend({ Shader });
export default ModelScene;

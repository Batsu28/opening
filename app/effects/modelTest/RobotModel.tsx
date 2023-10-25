import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Shader } from "./shader";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Vector2 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function FakeEyeModel(props: any) {
  const meshRef = useRef<any>();
  const { size } = useThree();
  const { nodes, materials, animations }: any = useGLTF("/robotModel.glb");
  const { actions }: any = useAnimations(animations, meshRef);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // meshRef.current.material.uniforms.iTime.value = clock.getElapsedTime();
    }
  });

  console.log(nodes, "node");
  // meshRef.current && console.log(meshRef.current.material, "ref");

  return (
    // <mesh
    //   ref={meshRef}
    //   dispose={null}
    //   scale={100}
    //   rotation={[-Math.PI / 2, 0, Math.PI / 4]}
    //   position={[0, 0.5, 0]}
    //   geometry={nodes.Head_3.geometry}
    // >
    //   {/* <shader /> */}
    //   <meshStandardMaterial color={"grey"} />
    // </mesh>
    <group scale={100}>
      <primitive object={nodes.Head}></primitive>
    </group>
  );
}

extend({ Shader });
useGLTF.preload("/robotModel.glb");

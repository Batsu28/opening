import { extend, useFrame, useThree } from "@react-three/fiber";
import { Shader } from "./shader";
import { useMemo, useRef } from "react";
import { Color, Vector2, Vector3 } from "three";
import {
  Box,
  Edges,
  Instance,
  Instances,
  Point,
  Points,
} from "@react-three/drei";

const Effect1Scene = () => {
  const ref = useRef<any>();
  const { size } = useThree();
  const positions = useMemo(() => {
    let PositionArr = [];
    for (let x = 0; x < 50; x++) {
      for (let y = 0; y < 50; y++) {
        PositionArr.push(new Vector3(x, 0, y));
      }
    }
    return PositionArr;
  }, []);

  console.log(ref.current);

  useFrame(({ clock }) => {
    if (ref.current) {
      // ref.current.material.uniforms.iTime.value = clock.getElapsedTime();
    }
  });

  return (
    <Points limit={2500} range={2500}>
      <group position={[-24.5, 0.5, -24.5]} rotation={[0, 0, 0]}>
        {positions.map((position, i) => (
          <group key={i}>
            <Box position={position} scale={0.9}>
              {/* <meshStandardMaterial
                // color={new Color(Math.random(), Math.random(), 0)}
                color={"blue"}
              /> */}
              <shader />
              <Edges scale={1} threshold={1} color="black" />
            </Box>
          </group>
        ))}
      </group>
    </Points>
  );
};

extend({ Shader });
export default Effect1Scene;

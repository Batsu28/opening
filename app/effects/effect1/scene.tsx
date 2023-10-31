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
    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 36; y++) {
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
    // <Instances ref={ref} position={[0, 1, 0]}>
    //   {/* <planeGeometry args={[10, 10]} /> */}
    //   <Point />
    //   {/* <pointsMaterial size={1} /> */}
    //   {/* <shader iResolution={new Vector2(size.width, size.height)} /> */}
    //   {positions.map((position, index) => (
    //     <group key={index} position={position}>
    //       <Instance color={"red"} />
    //     </group>
    //   ))}
    // </Instances>
    <Points limit={1000} range={1000}>
      <group position={[-4, 0.5, 4]} rotation={[0, 1, 0]}>
        {positions.map((position, i) => (
          <group>
            <Box position={position}>
              <pointsMaterial
                // color={new Color(Math.random(), Math.random(), 0)}
                color={"blue"}
              />
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

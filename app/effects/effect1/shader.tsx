import { shaderMaterial } from "@react-three/drei";
import { Vector2 } from "three";

const Shader = shaderMaterial(
  {
    iResolution: new Vector2(),
    iTime: 0,
    iMouse: new Vector2(),
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;

    void main() {
        // gl_PointSize = 0.5;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  // fragment shader
  /*glsl*/ `
    uniform vec2 iResolution;
    uniform float iTime;
    uniform vec2 iMouse;
    varying vec2 vUv;

    void main() {
        gl_FragColor = vec4(1.0, 0.9, .0, 1.0); 
    }
    `
);

export { Shader };

import { shaderMaterial } from "@react-three/drei";
import { Vector2 } from "three";

const Shader = shaderMaterial(
  {
    iResolution: null,
    iTime: 0,
    metalness: 0.4,
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  // fragment shader
  /*glsl*/ `
    uniform vec2 iResolution;
    uniform float iTime;
    uniform float metalness;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec3 color1 = vec3(0.8, 0.9, 0.8);
      vec3 color2 = vec3(0.2, 0.2, 0.2);

      vec3 destColor = mix(color1, color2, metalness);

      gl_FragColor = vec4(destColor, 1.0);
  }
    `
);

export { Shader };

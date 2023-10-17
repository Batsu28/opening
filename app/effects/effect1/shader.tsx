import { shaderMaterial } from "@react-three/drei";
import { Vector2 } from "three";

const Shader = shaderMaterial(
  {
    iResolution: null,
    iTime: 0,
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  // fragment shader
  /*glsl*/ `
    uniform vec2 iResolution;
    uniform float iTime;
    varying vec2 vUv;

    void main() {
      vec3 yColor = vec3(0.9, 0.5, 0.3);

      vec2 p = (vec2(gl_FragCoord.yx)  - iResolution.yx);
      p *= sin(iTime / 20.0);

      float d = sin(iTime * 0.005 + 3.14) / 1.0;

      float h = 0.3 / abs(p.x * d);

      vec3 destColor = yColor * h;
      gl_FragColor = vec4(destColor, 1.0);
  }

    `
);

// const Shader = shaderMaterial(
//   {
//     iResolution: null,
//     iTime: 0,
//   },
//   // vertex shader
//   /*glsl*/ `
//     varying vec2 vUv;

//     void main() {
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//     `,
//   // fragment shader
//   /*glsl*/ `
//     uniform vec2 iResolution;
//     uniform float iTime;
//     varying vec2 vUv;

//     float noise(vec3 p) //Thx to Las^Mercury
// {
// 	vec3 i = floor(p);
// 	vec4 a = dot(i, vec3(1., 57., 21.)) + vec4(0., 57., 21., 78.);
// 	vec3 f = cos((p-i)*acos(-1.))*(-.5)+.5;
// 	a = mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)), f.x);
// 	a.xy = mix(a.xz, a.yw, f.y);
// 	return mix(a.x, a.y, f.z);
// }

// float sphere(vec3 p, vec4 spr)
// {
// 	return length(spr.xyz-p) - spr.w;
// }

// float flame(vec3 p)
// {
// 	float d = sphere(p*vec3(1.,.5,1.), vec4(.0,-1.,.0,1.));
// 	return d + (noise(p+vec3(.0,iTime*2.,.0)) + noise(p*3.)*.5)*.25*(p.y) ;
// }

// float scene(vec3 p)
// {
// 	return min(100.-length(p) , abs(flame(p)) );
// }

// vec4 raymarch(vec3 org, vec3 dir)
// {
// 	float d = 0.0, glow = 0.0, eps = 0.02;
// 	vec3  p = org;
// 	bool glowed = false;

// 	for(int i=0; i<64; i++)
// 	{
// 		d = scene(p) + eps;
// 		p += d * dir;
// 		if( d>eps )
// 		{
// 			if(flame(p) < .0)
// 				glowed=true;
// 			if(glowed)
//        			glow = float(i)/64.;
// 		}
// 	}
// 	return vec4(p,glow);
// }

// void main()
// {
// 	vec2 v = -1.0 + 2.0 * gl_FragCoord.xy / iResolution.xy;
// 	v.x *= iResolution.x/iResolution.y;

// 	vec3 org = vec3(0., -2., 4.);
// 	vec3 dir = normalize(vec3(v.x*1.6, -v.y, -1.5));

// 	vec4 p = raymarch(org, dir);
// 	float glow = p.w;

// 	vec4 col = mix(vec4(1.,.5,.1,1.), vec4(0.1,.5,1.,1.), p.y*.02+.4);

// 	gl_FragColor = mix(vec4(0.), col, pow(glow*2.,4.));

// }
//     `
// );

export { Shader };

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
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  // fragment shader
  /*glsl*/ `
    uniform vec2 iResolution;
    uniform float iTime;
    uniform vec2 iMouse;
    varying vec2 vUv;

    float Hash3d(vec3 uv)
{
    float f = uv.x + uv.y * 37.0 + uv.z * 521.0;
    return fract(cos(f*3.333)*100003.9);
}
float mixP(float f0, float f1, float a)
{
    return mix(f0, f1, a*a*(3.0-2.0*a));
}
const vec2 zeroOne = vec2(0.0, 1.0);
float noise(vec3 uv)
{
    vec3 fr = fract(uv.xyz);
    vec3 fl = floor(uv.xyz);
    float h000 = Hash3d(fl);
    float h100 = Hash3d(fl + zeroOne.yxx);
    float h010 = Hash3d(fl + zeroOne.xyx);
    float h110 = Hash3d(fl + zeroOne.yyx);
    float h001 = Hash3d(fl + zeroOne.xxy);
    float h101 = Hash3d(fl + zeroOne.yxy);
    float h011 = Hash3d(fl + zeroOne.xyy);
    float h111 = Hash3d(fl + zeroOne.yyy);
    return mixP(
        mixP(mixP(h000, h100, fr.x), mixP(h010, h110, fr.x), fr.y),
        mixP(mixP(h001, h101, fr.x), mixP(h011, h111, fr.x), fr.y)
        , fr.z);
}

float PI=3.14159265;
#define clamp(a) clamp(a, 0.0, 1.0)
#define ZERO_TRICK max(0, -int(iTime))

float Density(vec3 p)
{
    float final = noise(p*0.06125);
    float other = noise(p*0.06125 + 1234.567);
    other -= 0.5;
    final -= 0.5;
    final = 0.1/(abs(final*final*other));
    final += 0.5;
    return final*0.0001;
}

void main()
{
	vec2 uv = gl_FragCoord.xy/iResolution.xy * 2.0 - 1.0;

	vec3 camUp=vec3(0,1,0);

	vec3 camLookat=vec3(0,0.0,0);

	float mx = iMouse.x/iResolution.x*PI*2.0 + iTime * 0.01;
	float my = -iMouse.y/iResolution.y*10.0 + sin(iTime * 0.03)*0.2+0.2;
	vec3 camPos=vec3(cos(my)*cos(mx),sin(my),cos(my)*sin(mx))*(200.2); 

	vec3 camVec=normalize(camLookat - camPos);//vpn
	vec3 sideNorm=normalize(cross(camUp, camVec));	// u
	vec3 upNorm=cross(camVec, sideNorm);//v
	vec3 worldFacing=(camPos + camVec);//vcv
	vec3 worldPix = worldFacing + uv.x * sideNorm * (iResolution.x/iResolution.y) + uv.y * upNorm;//scrCoord
	vec3 relVec = normalize(worldPix - camPos);//scp

	float t = 0.0;
	float inc = 0.02;
	float maxDepth = 70.0;
	vec3 pos = vec3(0,0,0);
    float density = 0.0;
    for (int i = int(ZERO_TRICK); i < 37; i++)	
    {
        if ((t > maxDepth)) break;
        pos = camPos + relVec * t;
        float temp = Density(pos);

        inc = 1.9 + temp*0.05;	
        density += temp * inc;
        t += inc;
    }

	vec3 finalColor = vec3(0.01,0.1,1.0)* density*0.2;

  gl_FragColor = vec4(min(max(finalColor, vec3(0.0)), vec3(1.0)), 1.0); 
}
    `
);

export { Shader };

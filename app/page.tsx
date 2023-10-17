import BoxCanvas from "./canvas/boxCanvas";
import EffectCanvas from "./effects/effectCanvas";
import ModelScene from "./effects/modelTest/scene";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      {/* <BoxCanvas /> */}
      <EffectCanvas />
    </main>
  );
}

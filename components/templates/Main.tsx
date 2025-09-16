import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useRef } from "react";

function Model() {
  const { scene } = useGLTF("/animate/new-avatar-me.glb");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  scene.traverse((child) => {
    if (child.name.toLowerCase().includes("Hand")) {
      child.parent?.remove(child);
    }
  });

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(t * 0.2) * 0.6;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.2}
      position={[0.8, -0.06, 0]}
    />
  );
}

export default function Viewer() {
  return (
    <div className="w-screen h-dvh bg-[#0A0A0A] p-5 flex flex-col">
      <div className="w-full h-auto aspect-[1394/237] relative p-5">
        <Image
          src="/images/hsirish.svg"
          fill
          alt="hsirish"
          quality={100}
          priority
        />
      </div>
      <div className="w-[384px] mt-40">
        <p className="text-2xl text-white font-neue-haas font-semibold">
          Front End Developer
        </p>
        <p className="text-xl text-white font-neue-haas mt-4 font-[400] italic">
          Cada línea de código es como una estrella; pequeña, distante, pero
          juntas crean un cielo cálido que guía a quienes lo miran.
        </p>
      </div>

      <div className="absolute top-0 left-0 w-screen h-dvh">
        <Canvas camera={{ position: [0, 0, 1], fov: 30 }}>
          {/* Pencahayaan */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 5, 20]} />

          <Suspense fallback={null}>
            {/* Center bikin model selalu ditaruh tepat di tengah */}
            <Center position={[0.001, 0, 0]}>
              <Model />
            </Center>
          </Suspense>

          <OrbitControls
            enableDamping
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
}

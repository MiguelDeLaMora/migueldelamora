import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";

function WobbleBall() {
  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh scale={2.4} position={[1.8, 0, 0]}>
        <sphereGeometry args={[1, 128, 128]} />
        {/* Material “wobbling” + reflective feel */}
        <MeshWobbleMaterial
          color="#444684"
          factor={0.8}     // wobble amount
          speed={1.6}      // wobble speed
          roughness={0.15}
          metalness={0.35}
          envMapIntensity={1.2}
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

export default function WobbleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 70 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[8, 8, 5]} intensity={1.2} />
        <pointLight position={[-8, -8, -2]} intensity={0.7} color="#444684" />

        {/* Esto es lo que hace que se vea “pro”: el entorno */}
        <Environment preset="city" />

        <WobbleBall />

        {/* opcional (puedes quitarlo): */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
        />
      </Suspense>
    </Canvas>
  );
}
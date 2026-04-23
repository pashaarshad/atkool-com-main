"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 1500;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 30;
      pos[i3 + 2] = (Math.random() - 0.5) * 15;

      // Mix of blue and gold particles
      if (Math.random() > 0.8) {
        col[i3] = 0.96;
        col[i3 + 1] = 0.62;
        col[i3 + 2] = 0.04;
      } else {
        col[i3] = 0.23 + Math.random() * 0.2;
        col[i3 + 1] = 0.51 + Math.random() * 0.15;
        col[i3 + 2] = 0.96;
      }
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[4, 1, -3]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#3B82F6"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.3 + 1) * 0.4;
  });

  return (
    <mesh ref={meshRef} position={[-4, -1, -2]}>
      <torusGeometry args={[1, 0.05, 16, 60]} />
      <meshStandardMaterial
        color="#F59E0B"
        transparent
        opacity={0.2}
        emissive="#F59E0B"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function ParticleBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#3B82F6" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#F59E0B" />
        <Particles />
        <FloatingGeometry />
        <FloatingRing />
      </Canvas>
    </div>
  );
}

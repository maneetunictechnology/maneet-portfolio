"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function MetallicSculpture() {
  const meshRef = useRef(null);
  const outerRingRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Continuous slow hypnotic rotation
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.28;

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x -= delta * 0.12;
      outerRingRef.current.rotation.z += delta * 0.15;
    }

    // Smooth mouse parallax lerp
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 8;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      meshRef.current.rotation.y + targetX * 0.05,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      meshRef.current.rotation.x - targetY * 0.05,
      0.05
    );
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Dynamic studio lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={2.2} color="#FFFFFF" />
      <pointLight position={[-10, -5, -5]} intensity={2.8} color="#C7FF4A" />
      <pointLight position={[5, -8, 8]} intensity={1.5} color="#88AAFF" />
      <spotLight
        position={[0, 8, 4]}
        intensity={3}
        angle={0.6}
        penumbra={0.8}
        color="#F5F5F0"
      />

      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.2}>
        {/* Core Organic Chrome Sculpture */}
        <mesh ref={meshRef} scale={1.45} castShadow receiveShadow>
          <torusKnotGeometry args={[1.15, 0.42, 140, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#E4E4E7"
            metalness={0.96}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.08}
            reflectivity={0.9}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Orbiting Subtle Metallic Gyro Ring */}
        <mesh ref={outerRingRef} scale={2.4}>
          <torusGeometry args={[1.3, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#C7FF4A"
            metalness={0.9}
            roughness={0.2}
            emissive="#C7FF4A"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
}

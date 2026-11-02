"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { Database } from "lucide-react";

export default function DatabaseCluster3D({ position = [0, 0, 0] }) {
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.8;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.6;
  });

  return (
    <group position={position}>
      <Float speed={2.0} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Stacked Cylindrical Storage Platters */}
        <group position={[0, -0.1, 0]}>
          {/* Base Platter */}
          <mesh position={[0, -0.22, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.12, 32]} />
            <meshPhysicalMaterial
              color="#101812"
              metalness={0.9}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>

          {/* Glowing Green Data Light Barrier 1 */}
          <mesh position={[0, -0.14, 0]}>
            <cylinderGeometry args={[0.44, 0.44, 0.02, 32]} />
            <meshStandardMaterial
              color="#47A248"
              emissive="#47A248"
              emissiveIntensity={1.8}
            />
          </mesh>

          {/* Middle Platter */}
          <mesh position={[0, -0.04, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.12, 32]} />
            <meshPhysicalMaterial
              color="#101812"
              metalness={0.9}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>

          {/* Glowing Green Data Light Barrier 2 */}
          <mesh position={[0, 0.04, 0]}>
            <cylinderGeometry args={[0.44, 0.44, 0.02, 32]} />
            <meshStandardMaterial
              color="#C6FF3F"
              emissive="#C6FF3F"
              emissiveIntensity={2.0}
            />
          </mesh>

          {/* Top Platter */}
          <mesh position={[0, 0.14, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.12, 32]} />
            <meshPhysicalMaterial
              color="#101812"
              metalness={0.9}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>
        </group>

        {/* Orbiting Query Rings */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[0.55, 0.012, 16, 48]} />
          <meshStandardMaterial
            color="#47A248"
            emissive="#47A248"
            emissiveIntensity={1.5}
          />
        </mesh>
        <mesh ref={ring2Ref} rotation={[-Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[0.62, 0.01, 16, 48]} />
          <meshStandardMaterial
            color="#C6FF3F"
            emissive="#C6FF3F"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Label */}
        <Html distanceFactor={8} center position={[0, -0.55, 0]}>
          <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#47A248]/50 text-[9px] font-mono text-[#47A248] tracking-wider uppercase select-none flex items-center gap-1 shadow-[0_0_12px_rgba(71,162,72,0.3)]">
            <Database size={9} />
            <span>MongoDB Cluster</span>
          </div>
        </Html>
      </Float>
    </group>
  );
}

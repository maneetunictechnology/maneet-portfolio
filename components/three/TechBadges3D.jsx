"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { GitBranch, Activity, Database, Server, Zap } from "lucide-react";

export default function TechBadges3D({ isExploded }) {
  const reactGroupRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const nextGroupRef = useRef(null);

  // Animated rotation of the 3D React Atom rings
  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 1.4;
    if (ring2Ref.current) ring2Ref.current.rotation.z += delta * 1.1;
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 1.6;

    if (nextGroupRef.current) {
      nextGroupRef.current.rotation.y += delta * 0.5;
    }
  });

  const explosionOffset = isExploded ? 1.6 : 1.0;

  return (
    <group>
      {/* 1. React 3D Atomic Orbit Model (Left) */}
      <group
        position={[-2.45 * explosionOffset, 0.75 * explosionOffset, 0.5]}
        ref={reactGroupRef}
      >
        <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
          {/* Central Cyan Glowing Nucleus */}
          <mesh>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshStandardMaterial
              color="#61DAFB"
              emissive="#61DAFB"
              emissiveIntensity={2.2}
              roughness={0.1}
            />
          </mesh>

          {/* Atom Orbit 1 */}
          <mesh ref={ring1Ref}>
            <torusGeometry args={[0.42, 0.012, 16, 64]} />
            <meshStandardMaterial
              color="#61DAFB"
              emissive="#61DAFB"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Atom Orbit 2 (Rotated 60 deg) */}
          <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
            <torusGeometry args={[0.42, 0.012, 16, 64]} />
            <meshStandardMaterial
              color="#61DAFB"
              emissive="#61DAFB"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Atom Orbit 3 (Rotated 120 deg) */}
          <mesh ref={ring3Ref} rotation={[-Math.PI / 3, -Math.PI / 6, 0]}>
            <torusGeometry args={[0.42, 0.012, 16, 64]} />
            <meshStandardMaterial
              color="#61DAFB"
              emissive="#61DAFB"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Label */}
          <Html distanceFactor={9} center position={[0, -0.65, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#61DAFB]/40 text-[9px] font-mono text-[#61DAFB] tracking-wider uppercase select-none shadow-[0_0_12px_rgba(97,218,251,0.3)]">
              React.js
            </div>
          </Html>
        </Float>
      </group>

      {/* 2. Next.js 3D Emblem (Right) */}
      <group
        position={[2.45 * explosionOffset, 0.7 * explosionOffset, 0.4]}
        ref={nextGroupRef}
      >
        <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.7}>
          {/* Dark Glass Disc */}
          <mesh>
            <cylinderGeometry args={[0.4, 0.4, 0.08, 36]} />
            <meshPhysicalMaterial
              color="#111116"
              metalness={0.9}
              roughness={0.12}
              clearcoat={1}
              reflectivity={1}
            />
          </mesh>

          {/* Outer Electric Lime Energy Halo */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.46, 0.014, 16, 48]} />
            <meshStandardMaterial
              color="#C6FF3F"
              emissive="#C6FF3F"
              emissiveIntensity={1.5}
            />
          </mesh>

          <Html distanceFactor={9} center position={[0, -0.65, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white tracking-wider uppercase select-none shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              Next.js 14
            </div>
          </Html>
        </Float>
      </group>

      {/* 3. JavaScript 3D Badge (Bottom Left) */}
      <group
        position={[-2.1 * explosionOffset, -1.25 * explosionOffset, 0.6]}
      >
        <Float speed={2.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh rotation={[0, 0.2, 0]}>
            <boxGeometry args={[0.65, 0.65, 0.08]} />
            <meshPhysicalMaterial
              color="#1A180E"
              metalness={0.8}
              roughness={0.2}
              clearcoat={0.9}
            />
          </mesh>
          {/* Glowing Gold JS Rim */}
          <mesh rotation={[0, 0.2, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.04]} />
            <meshStandardMaterial
              color="#F7DF1E"
              emissive="#F7DF1E"
              emissiveIntensity={1.2}
              wireframe
            />
          </mesh>

          <Html distanceFactor={9} center position={[0, 0, 0.08]}>
            <div className="font-bold font-mono text-[#F7DF1E] text-sm select-none">
              JS
            </div>
          </Html>
        </Float>
      </group>

      {/* 4. Node.js 3D Hexagon (Bottom Right) */}
      <group
        position={[2.25 * explosionOffset, -1.25 * explosionOffset, 0.5]}
      >
        <Float speed={2.6} rotationIntensity={0.4} floatIntensity={0.7}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.38, 0.38, 0.08, 6]} />
            <meshPhysicalMaterial
              color="#0F1810"
              metalness={0.85}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>

          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.02, 6]} />
            <meshStandardMaterial
              color="#539E43"
              emissive="#539E43"
              emissiveIntensity={1.4}
              wireframe
            />
          </mesh>

          <Html distanceFactor={9} center position={[0, -0.55, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#539E43]/40 text-[9px] font-mono text-[#539E43] tracking-wider uppercase select-none">
              Node.js
            </div>
          </Html>
        </Float>
      </group>

      {/* 5. MongoDB Floating Node (Top Center-Back) */}
      <group
        position={[0.2 * explosionOffset, 2.15 * explosionOffset, -0.4]}
      >
        <Float speed={2.0} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh>
            <octahedronGeometry args={[0.35, 0]} />
            <meshPhysicalMaterial
              color="#0D1F10"
              metalness={0.8}
              roughness={0.1}
              emissive="#47A248"
              emissiveIntensity={1.1}
              clearcoat={1}
            />
          </mesh>

          <Html distanceFactor={9} center position={[0, -0.5, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#47A248]/40 text-[9px] font-mono text-[#47A248] tracking-wider uppercase select-none flex items-center gap-1">
              <Database size={10} />
              <span>MongoDB</span>
            </div>
          </Html>
        </Float>
      </group>

      {/* 6. Floating Telemetry / API Response Card (Top Left) */}
      <group
        position={[-2.15 * explosionOffset, 1.95 * explosionOffset, -0.3]}
      >
        <Float speed={2.4} rotationIntensity={0.2} floatIntensity={0.5}>
          <Html distanceFactor={9} center>
            <div className="p-2.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] select-none font-mono text-[9px] w-[145px]">
              <div className="flex items-center justify-between text-text-muted mb-1 pb-1 border-b border-white/10">
                <span className="flex items-center gap-1 text-accent">
                  <Activity size={10} />
                  <span>API METRICS</span>
                </span>
                <span className="text-accent font-bold">200 OK</span>
              </div>
              <div className="text-text-secondary flex justify-between">
                <span>Latency:</span>
                <span className="text-white">12ms</span>
              </div>
              <div className="text-text-secondary flex justify-between">
                <span>Protocol:</span>
                <span className="text-accent">HTTP/2</span>
              </div>
            </div>
          </Html>
        </Float>
      </group>

      {/* 7. Floating GitHub Activity Card (Top Right) */}
      <group
        position={[2.15 * explosionOffset, 1.95 * explosionOffset, -0.3]}
      >
        <Float speed={2.1} rotationIntensity={0.2} floatIntensity={0.5}>
          <Html distanceFactor={9} center>
            <div className="p-2.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] select-none font-mono text-[9px] w-[145px]">
              <div className="flex items-center justify-between text-text-muted mb-1.5 pb-1 border-b border-white/10">
                <span className="flex items-center gap-1 text-[#4ADE80]">
                  <GitBranch size={10} />
                  <span>GIT ACTIVITY</span>
                </span>
                <span className="text-text-muted">main</span>
              </div>
              {/* Mini commit heatmap grid */}
              <div className="flex items-center gap-1 justify-between">
                <div className="w-2.5 h-2.5 rounded-sm bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3F]/30" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3F]/60" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3F]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3F]/80" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3F]" />
              </div>
              <div className="text-[8px] text-text-muted mt-1 text-right">
                Active commits
              </div>
            </div>
          </Html>
        </Float>
      </group>
    </group>
  );
}

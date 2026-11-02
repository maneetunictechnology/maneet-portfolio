"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import TechIcon from "@/components/ui/TechIcon";

export default function TechStackOrbit3D() {
  const reactRingsRef = useRef(null);

  useFrame((state, delta) => {
    if (reactRingsRef.current) {
      reactRingsRef.current.rotation.z += delta * 1.2;
    }
  });

  return (
    <group>
      {/* 1. React.js 3D Atom Orbital (Left) */}
      <group position={[-2.65, 0.55, 0.6]}>
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh>
            <sphereGeometry args={[0.12, 20, 20]} />
            <meshStandardMaterial
              color="#61DAFB"
              emissive="#61DAFB"
              emissiveIntensity={2.0}
            />
          </mesh>

          <group ref={reactRingsRef}>
            <mesh>
              <torusGeometry args={[0.38, 0.012, 16, 48]} />
              <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.9} />
            </mesh>
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[0.38, 0.012, 16, 48]} />
              <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.9} />
            </mesh>
            <mesh rotation={[-Math.PI / 3, 0, 0]}>
              <torusGeometry args={[0.38, 0.012, 16, 48]} />
              <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.9} />
            </mesh>
          </group>

          <Html distanceFactor={8} center position={[0, -0.55, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#61DAFB]/40 text-[9px] font-mono text-[#61DAFB] select-none shadow-[0_0_12px_rgba(97,218,251,0.25)] flex items-center gap-1">
              <span>React.js</span>
            </div>
          </Html>
        </Float>
      </group>

      {/* 2. Next.js 3D Emblem (Top Right) */}
      <group position={[2.55, 0.8, 0.5]}>
        <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh>
            <cylinderGeometry args={[0.34, 0.34, 0.06, 32]} />
            <meshPhysicalMaterial
              color="#101015"
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.38, 0.012, 16, 48]} />
            <meshStandardMaterial
              color="#C6FF3F"
              emissive="#C6FF3F"
              emissiveIntensity={1.5}
            />
          </mesh>

          <Html distanceFactor={8} center position={[0, -0.55, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white select-none shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              Next.js 14
            </div>
          </Html>
        </Float>
      </group>

      {/* 3. JavaScript 3D Badge (Bottom Left) */}
      <group position={[-2.3, -1.25, 0.7]}>
        <Float speed={2.6} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh rotation={[0, 0.25, 0]}>
            <boxGeometry args={[0.55, 0.55, 0.06]} />
            <meshPhysicalMaterial
              color="#16150D"
              metalness={0.8}
              roughness={0.15}
              clearcoat={0.9}
            />
          </mesh>
          <mesh rotation={[0, 0.25, 0]}>
            <boxGeometry args={[0.58, 0.58, 0.02]} />
            <meshStandardMaterial
              color="#F7DF1E"
              emissive="#F7DF1E"
              emissiveIntensity={1.2}
              wireframe
            />
          </mesh>

          <Html distanceFactor={8} center position={[0, 0, 0.06]}>
            <div className="font-bold font-mono text-[#F7DF1E] text-xs select-none">
              JS
            </div>
          </Html>
        </Float>
      </group>

      {/* 4. Node.js 3D Hexagon (Bottom Right) */}
      <group position={[2.35, -1.25, 0.6]}>
        <Float speed={2.4} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.32, 0.32, 0.06, 6]} />
            <meshPhysicalMaterial
              color="#0E160F"
              metalness={0.85}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.35, 0.35, 0.02, 6]} />
            <meshStandardMaterial
              color="#539E43"
              emissive="#539E43"
              emissiveIntensity={1.4}
              wireframe
            />
          </mesh>

          <Html distanceFactor={8} center position={[0, -0.48, 0]}>
            <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#539E43]/40 text-[9px] font-mono text-[#539E43] select-none">
              Node.js
            </div>
          </Html>
        </Float>
      </group>

      {/* 5. Tailwind CSS Badge (Bottom Center-Left) */}
      <group position={[-1.1, -1.85, 0.75]}>
        <Float speed={2.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <Html distanceFactor={8} center>
            <div className="px-2.5 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-[#38BDF8]/40 text-[9px] font-mono text-[#38BDF8] flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.25)] select-none">
              <TechIcon name="tailwind" className="w-3.5 h-3.5" color="#38BDF8" />
              <span>Tailwind CSS</span>
            </div>
          </Html>
        </Float>
      </group>

      {/* 6. REST API Endpoint Badge (Bottom Center-Right) */}
      <group position={[1.15, -1.85, 0.7]}>
        <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <Html distanceFactor={8} center>
            <div className="px-2.5 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-[#A855F7]/40 text-[9px] font-mono text-[#A855F7] flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.25)] select-none">
              <TechIcon name="restapi" className="w-3.5 h-3.5" color="#A855F7" />
              <span>REST APIs</span>
            </div>
          </Html>
        </Float>
      </group>

      {/* 7. HTML5 & CSS3 Tag Cloud (Top Left) */}
      <group position={[-2.4, 1.85, 0.3]}>
        <Float speed={2.1} rotationIntensity={0.2} floatIntensity={0.4}>
          <Html distanceFactor={8} center>
            <div className="flex items-center gap-1.5 select-none">
              <div className="px-2 py-0.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#E34F26]/40 text-[9px] font-mono text-[#E34F26] flex items-center gap-1">
                <TechIcon name="html5" className="w-3 h-3" color="#E34F26" />
                <span>HTML5</span>
              </div>
              <div className="px-2 py-0.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#1572B6]/40 text-[9px] font-mono text-[#1572B6] flex items-center gap-1">
                <TechIcon name="css3" className="w-3 h-3" color="#1572B6" />
                <span>CSS3</span>
              </div>
            </div>
          </Html>
        </Float>
      </group>
    </group>
  );
}

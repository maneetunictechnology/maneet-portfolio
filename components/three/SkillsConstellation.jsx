"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { TECHNICAL_SKILLS } from "@/lib/skills-data";

function ConstellationGraph({ activeSkillId, onSelectSkill }) {
  const groupRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Generate connection line coordinates
  const { linePositions, lineColors } = useMemo(() => {
    const skillMap = new Map();
    TECHNICAL_SKILLS.forEach((s) => skillMap.set(s.id, s));

    const positions = [];
    const colors = [];

    const processedPairs = new Set();

    TECHNICAL_SKILLS.forEach((skill) => {
      skill.connections.forEach((targetId) => {
        const target = skillMap.get(targetId);
        if (!target) return;

        const pairKey = [skill.id, targetId].sort().join("---");
        if (processedPairs.has(pairKey)) return;
        processedPairs.add(pairKey);

        // Start point
        positions.push(...skill.coords);
        // End point
        positions.push(...target.coords);

        const c1 = new THREE.Color(skill.brandColor);
        const c2 = new THREE.Color(target.brandColor);

        colors.push(c1.r, c1.g, c1.b);
        colors.push(c2.r, c2.g, c2.b);
      });
    });

    return {
      linePositions: new Float32Array(positions),
      lineColors: new Float32Array(colors),
    };
  }, []);

  // Ambient Star Dust Particles
  const { particlePositions, particleColors } = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      colors[i * 3] = 0.78;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 0.29; // Lime tint
    }

    return {
      particlePositions: positions,
      particleColors: colors,
    };
  }, []);

  // Animation Loop with smooth mouse parallax
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow ambient rotation
    groupRef.current.rotation.y += delta * 0.08;

    // Gentle mouse tilt
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 10;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      groupRef.current.rotation.y + targetX * 0.05,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY * 0.4,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      {/* Ambient background particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleColors.length / 3}
            array={particleColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>

      {/* Neural Connection Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.38}
          linewidth={1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 3D Nodes */}
      {TECHNICAL_SKILLS.map((skill) => {
        const isHovered = hoveredNode === skill.id;
        const isSelected = activeSkillId === skill.id;

        return (
          <group key={skill.id} position={skill.coords}>
            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
              {/* Outer Pulsing Ring */}
              <mesh scale={isHovered || isSelected ? 1.6 : 1.2}>
                <ringGeometry args={[0.18, 0.22, 32]} />
                <meshBasicMaterial
                  color={skill.brandColor}
                  transparent
                  opacity={isHovered || isSelected ? 0.9 : 0.25}
                  side={THREE.DoubleSide}
                />
              </mesh>

              {/* Central Glowing Sphere */}
              <mesh
                scale={isHovered || isSelected ? 1.35 : 1}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHoveredNode(skill.id);
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  setHoveredNode(null);
                  document.body.style.cursor = "";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelectSkill) onSelectSkill(skill.id);
                }}
              >
                <sphereGeometry args={[0.13, 24, 24]} />
                <meshStandardMaterial
                  color={skill.brandColor}
                  emissive={skill.brandColor}
                  emissiveIntensity={isHovered || isSelected ? 1.8 : 0.8}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>

              {/* Floating 3D HTML Label */}
              <Html distanceFactor={8} center position={[0, -0.32, 0]}>
                <button
                  onClick={() => onSelectSkill && onSelectSkill(skill.id)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-md border flex items-center gap-1.5 whitespace-nowrap select-none ${
                    isHovered || isSelected
                      ? "bg-black/90 border-accent text-accent shadow-[0_0_15px_rgba(199,255,74,0.4)] scale-110"
                      : "bg-black/60 border-white/15 text-text-secondary hover:text-white"
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: skill.brandColor }}
                  />
                  <span>{skill.name}</span>
                </button>
              </Html>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

export default function SkillsConstellation({ activeSkillId, onSelectSkill }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#C7FF4A" />
        <ConstellationGraph
          activeSkillId={activeSkillId}
          onSelectSkill={onSelectSkill}
        />
      </Canvas>
    </div>
  );
}

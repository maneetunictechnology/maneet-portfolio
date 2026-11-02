"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import LiveCodeEditor from "./LiveCodeEditor";
import TechBadges3D from "./TechBadges3D";

export default function DeveloperWorkspace({ isExploded, onExplosionEnd }) {
  const masterGroupRef = useRef(null);
  const editorMeshRef = useRef(null);
  const mouseLightRef = useRef(null);
  const particlesRef = useRef(null);

  // Scroll tracking state
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (window.innerHeight || 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D Neural Connection Lines connecting tech icons to central code editor
  const { linePositions, lineColors } = useMemo(() => {
    // End point is the central code editor (approx bounds)
    const endpoints = [
      { from: [-2.45, 0.75, 0.5], to: [-0.9, 0.4, 0] }, // React -> Editor
      { from: [2.45, 0.7, 0.4], to: [0.9, 0.3, 0] },   // Next.js -> Editor
      { from: [-2.1, -1.25, 0.6], to: [-0.7, -0.6, 0] }, // JS -> Editor
      { from: [2.25, -1.25, 0.5], to: [0.7, -0.6, 0] }, // Node -> Editor
      { from: [0.2, 2.15, -0.4], to: [0.1, 0.9, 0] },  // Mongo -> Editor
      { from: [-2.15, 1.95, -0.3], to: [-0.6, 0.8, 0] }, // API -> Editor
      { from: [2.15, 1.95, -0.3], to: [0.6, 0.8, 0] },  // Git -> Editor
    ];

    const pos = [];
    const col = [];

    endpoints.forEach(({ from, to }) => {
      // Create a smooth 3D bezier curve
      const p0 = new THREE.Vector3(...from);
      const p3 = new THREE.Vector3(...to);
      const mid = new THREE.Vector3().addVectors(p0, p3).multiplyScalar(0.5);
      mid.z += 0.4; // Arch outward

      const curve = new THREE.QuadraticBezierCurve3(p0, mid, p3);
      const points = curve.getPoints(24);

      for (let i = 0; i < points.length - 1; i++) {
        pos.push(points[i].x, points[i].y, points[i].z);
        pos.push(points[i + 1].x, points[i + 1].y, points[i + 1].z);

        // Electric lime glow gradient
        col.push(0.77, 1.0, 0.25);
        col.push(0.22, 0.74, 0.97);
      }
    });

    return {
      linePositions: new Float32Array(pos),
      lineColors: new Float32Array(col),
    };
  }, []);

  // Ambient Coding Particles (representing data packets & floating syntax tokens)
  const { particlePositions, particleVelocities } = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

      velocities.push({
        vx: (Math.random() - 0.5) * 0.15,
        vy: 0.1 + Math.random() * 0.2,
        vz: (Math.random() - 0.5) * 0.15,
        baseX: positions[i * 3],
        baseY: positions[i * 3 + 1],
      });
    }

    return { particlePositions: positions, particleVelocities: velocities };
  }, []);

  // Mouse inertia coordinates
  const currentRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const pulseFactor = useRef(0);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // 1. Smooth Mouse Parallax Rotation
    targetRotation.current.y = (pointer.x * Math.PI) / 6;
    targetRotation.current.x = (-pointer.y * Math.PI) / 8;

    currentRotation.current.y = THREE.MathUtils.lerp(
      currentRotation.current.y,
      targetRotation.current.y,
      0.06
    );
    currentRotation.current.x = THREE.MathUtils.lerp(
      currentRotation.current.x,
      targetRotation.current.x,
      0.06
    );

    // Dynamic mouse-following 3D light
    if (mouseLightRef.current) {
      mouseLightRef.current.position.x = THREE.MathUtils.lerp(
        mouseLightRef.current.position.x,
        pointer.x * 5,
        0.08
      );
      mouseLightRef.current.position.y = THREE.MathUtils.lerp(
        mouseLightRef.current.position.y,
        pointer.y * 5,
        0.08
      );
    }

    // 2. Scroll Integration
    const scrollEffect = scrollRef.current;
    const scrollTilt = scrollEffect * Math.PI * 0.4;
    const scrollLift = scrollEffect * 0.6;

    if (masterGroupRef.current) {
      masterGroupRef.current.rotation.y = currentRotation.current.y + time * 0.05 + scrollTilt;
      masterGroupRef.current.rotation.x = currentRotation.current.x;
      masterGroupRef.current.position.y = -scrollLift;
    }

    // 3. Shockwave / Code Burst Dynamics
    if (isExploded) {
      pulseFactor.current = THREE.MathUtils.lerp(pulseFactor.current, 1, 0.14);
      if (pulseFactor.current > 0.95 && onExplosionEnd) {
        onExplosionEnd();
      }
    } else {
      pulseFactor.current = THREE.MathUtils.lerp(pulseFactor.current, 0, 0.05);
    }

    // 4. Central Code Editor Gentle Floating & Breathing Scale
    if (editorMeshRef.current) {
      const scaleMultiplier = 1 + pulseFactor.current * 0.18;
      editorMeshRef.current.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
    }

    // 5. Ambient Particles Drift
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const count = particlePositions.length / 3;

      for (let i = 0; i < count; i++) {
        const vel = particleVelocities[i];
        positions[i * 3 + 1] += delta * vel.vy * (1 + pulseFactor.current * 2);

        // Wrap around vertically
        if (positions[i * 3 + 1] > 4.5) {
          positions[i * 3 + 1] = -4.5;
        }

        // Slight wave oscillation
        positions[i * 3] = vel.baseX + Math.sin(time * 1.5 + i) * 0.15;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={masterGroupRef} position={[0, 0, 0]}>
      {/* Studio Studio Key Light */}
      <directionalLight position={[6, 8, 5]} intensity={2.2} color="#FFFFFF" />

      {/* Mouse Tracking Point Light with Electric Lime Glow */}
      <pointLight
        ref={mouseLightRef}
        position={[0, 0, 4]}
        intensity={3.0}
        color="#C6FF3F"
        distance={12}
      />

      {/* Ambient Cool Fill Light */}
      <pointLight position={[-6, -4, -3]} intensity={2.0} color="#38BDF8" />
      <ambientLight intensity={0.5} />

      {/* 3D Neural Data Connection Lines */}
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
          opacity={0.42}
          linewidth={1.5}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Ambient Code Particle Dust */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#C6FF3F"
          transparent
          opacity={0.65}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Surrounding 3D Tech Badges */}
      <TechBadges3D isExploded={isExploded} />

      {/* Central Floating Holographic Code Editor */}
      <group ref={editorMeshRef}>
        <Float speed={2.0} rotationIntensity={0.2} floatIntensity={0.6}>
          {/* Glass Slab Backing Mesh */}
          <mesh position={[0, 0, -0.04]}>
            <boxGeometry args={[3.2, 2.5, 0.08]} />
            <meshPhysicalMaterial
              color="#0A0A10"
              metalness={0.8}
              roughness={0.12}
              transmission={0.4}
              transparent
              opacity={0.85}
              clearcoat={1}
              reflectivity={0.9}
            />
          </mesh>

          {/* Glowing Neon Lime Edge Bevel */}
          <mesh position={[0, 0, -0.04]}>
            <boxGeometry args={[3.24, 2.54, 0.06]} />
            <meshStandardMaterial
              color="#C6FF3F"
              emissive="#C6FF3F"
              emissiveIntensity={1.2}
              wireframe
            />
          </mesh>

          {/* Interactive HTML Live Code Editor & Terminal */}
          <Html
            transform
            distanceFactor={5.5}
            position={[0, 0, 0.03]}
            className="select-none pointer-events-none"
          >
            <LiveCodeEditor />
          </Html>
        </Float>
      </group>
    </group>
  );
}

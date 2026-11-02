"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function LiquidChromeInstallation({ isShockwave, onShockwaveEnd }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const satellitesGroupRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseLightRef = useRef(null);

  const { viewport } = useThree();

  // Scroll tracking state
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (window.innerHeight || 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Energy Particles Data
  const { particlePositions, particleVelocities, particleScales } = useMemo(() => {
    const count = 220;
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Golden spiral distribution around sphere/torus
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.2 + Math.random() * 1.8;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.7; // Slightly flattened
      positions[i * 3 + 2] = radius * Math.cos(phi);

      velocities.push({
        angle: theta,
        speed: 0.2 + Math.random() * 0.4,
        radius: radius,
        baseY: positions[i * 3 + 1],
      });

      scales[i] = 0.5 + Math.random() * 1.2;
    }

    return {
      particlePositions: positions,
      particleVelocities: velocities,
      particleScales: scales,
    };
  }, []);

  // Floating Satellites Data
  const satellites = useMemo(() => {
    return [
      { id: 1, basePos: [2.3, 0.8, 0.6], scale: 0.18, speed: 0.7, type: "octa" },
      { id: 2, basePos: [-2.1, -1.1, 0.8], scale: 0.22, speed: 0.5, type: "ico" },
      { id: 3, basePos: [1.8, -1.6, -0.9], scale: 0.16, speed: 0.9, type: "dodeca" },
      { id: 4, basePos: [-1.9, 1.4, -0.7], scale: 0.2, speed: 0.6, type: "octa" },
      { id: 5, basePos: [0.3, 2.2, 1.1], scale: 0.15, speed: 0.8, type: "ico" },
    ];
  }, []);

  // Mouse inertia values
  const currentRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const pulseFactor = useRef(0);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // 1. Mouse Tracking with Smooth Inertia
    targetRotation.current.y = (pointer.x * Math.PI) / 3.5;
    targetRotation.current.x = (-pointer.y * Math.PI) / 4.5;

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

    // Dynamic mouse light tracking in 3D space
    if (mouseLightRef.current) {
      mouseLightRef.current.position.x = THREE.MathUtils.lerp(
        mouseLightRef.current.position.x,
        pointer.x * 6,
        0.08
      );
      mouseLightRef.current.position.y = THREE.MathUtils.lerp(
        mouseLightRef.current.position.y,
        pointer.y * 6,
        0.08
      );
    }

    // 2. Scroll Integration
    const scrollEffect = scrollRef.current;
    const scrollRotation = scrollEffect * Math.PI * 0.8;
    const scrollLift = scrollEffect * 0.8;

    if (groupRef.current) {
      groupRef.current.rotation.y = currentRotation.current.y + time * 0.12 + scrollRotation;
      groupRef.current.rotation.x = currentRotation.current.x + scrollEffect * 0.2;
      groupRef.current.position.y = -scrollLift;
    }

    // 3. Shockwave Pulse Dynamics
    if (isShockwave) {
      pulseFactor.current = THREE.MathUtils.lerp(pulseFactor.current, 1, 0.14);
      if (pulseFactor.current > 0.95 && onShockwaveEnd) {
        onShockwaveEnd();
      }
    } else {
      pulseFactor.current = THREE.MathUtils.lerp(pulseFactor.current, 0, 0.05);
    }

    // 4. Core Deformation & Rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * (0.2 + pulseFactor.current * 0.8);
      coreRef.current.rotation.z += delta * (0.15 + pulseFactor.current * 0.6);

      // Organic subtle breathing scale
      const breathing = 1 + Math.sin(time * 2) * 0.03 + pulseFactor.current * 0.35;
      coreRef.current.scale.set(breathing, breathing, breathing);

      // Emissive energy surge on hover or shockwave
      const emissiveSurge = 0.1 + pulseFactor.current * 2.8 + Math.abs(pointer.x) * 0.15;
      if (coreRef.current.material) {
        coreRef.current.material.emissiveIntensity = emissiveSurge;
      }
    }

    // 5. Concentric Ring Rotations (Counter-axial)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * (0.35 + pulseFactor.current * 1.5);
      ring1Ref.current.rotation.y -= delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * (0.4 + pulseFactor.current * 1.2);
      ring2Ref.current.rotation.z += delta * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * (0.2 + pulseFactor.current * 0.9);
      ring3Ref.current.rotation.z -= delta * 0.3;
    }

    // 6. Floating Satellites Orbiting
    if (satellitesGroupRef.current) {
      satellitesGroupRef.current.rotation.y -= delta * (0.18 + pulseFactor.current * 0.7);
    }

    // 7. Undulating Energy Particles Wave
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const count = particlePositions.length / 3;

      for (let i = 0; i < count; i++) {
        const vel = particleVelocities[i];
        vel.angle += delta * (vel.speed + pulseFactor.current * 1.2);

        const currentRadius = vel.radius * (1 + pulseFactor.current * 0.45);
        positions[i * 3] = currentRadius * Math.cos(vel.angle);
        positions[i * 3 + 1] = vel.baseY + Math.sin(time * 2.5 + i) * 0.25;
        positions[i * 3 + 2] = currentRadius * Math.sin(vel.angle);
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Studio Key Light */}
      <directionalLight position={[8, 10, 6]} intensity={2.8} color="#FFFFFF" />

      {/* Dynamic Mouse-Following Point Light with Electric Lime Hue */}
      <pointLight
        ref={mouseLightRef}
        position={[0, 0, 4]}
        intensity={3.5}
        color="#C7FF4A"
        distance={14}
      />

      {/* Atmospheric Rim Lights */}
      <pointLight position={[-8, -5, -4]} intensity={2.5} color="#88AAFF" />
      <pointLight position={[6, -7, 6]} intensity={2.0} color="#C7FF4A" />
      <ambientLight intensity={0.45} />

      {/* Swirling Lime Energy Particles Cloud */}
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
          size={0.055}
          color="#C7FF4A"
          transparent
          opacity={0.75}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Core Liquid Chrome Sculpture */}
        <mesh ref={coreRef} scale={1.2} castShadow receiveShadow>
          <torusKnotGeometry args={[1.08, 0.38, 180, 36, 2, 3]} />
          <meshPhysicalMaterial
            color="#FAFAFA"
            metalness={0.98}
            roughness={0.06}
            clearcoat={1.0}
            clearcoatRoughness={0.04}
            reflectivity={1.0}
            emissive="#C7FF4A"
            emissiveIntensity={0.12}
            envMapIntensity={2.2}
          />
        </mesh>

        {/* Inner Concentric Energy Ring (Electric Lime) */}
        <mesh ref={ring1Ref} scale={2.1}>
          <torusGeometry args={[1.15, 0.016, 24, 120]} />
          <meshStandardMaterial
            color="#C7FF4A"
            emissive="#C7FF4A"
            emissiveIntensity={1.4}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Middle Chrome Gyro Ring */}
        <mesh ref={ring2Ref} scale={2.6} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.25, 0.022, 24, 120]} />
          <meshPhysicalMaterial
            color="#E2E8F0"
            metalness={0.96}
            roughness={0.08}
            clearcoat={1.0}
          />
        </mesh>

        {/* Outer Fine Geometric Ring */}
        <mesh ref={ring3Ref} scale={3.1} rotation={[0, Math.PI / 3, Math.PI / 4]}>
          <torusGeometry args={[1.35, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#C7FF4A"
            emissiveIntensity={0.6}
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* Orbiting Geometric Satellites */}
        <group ref={satellitesGroupRef}>
          {satellites.map((sat) => (
            <mesh key={sat.id} position={sat.basePos} scale={sat.scale}>
              {sat.type === "octa" ? (
                <octahedronGeometry args={[1, 0]} />
              ) : sat.type === "ico" ? (
                <icosahedronGeometry args={[1, 0]} />
              ) : (
                <dodecahedronGeometry args={[1, 0]} />
              )}
              <meshPhysicalMaterial
                color="#F8FAFC"
                metalness={0.95}
                roughness={0.08}
                clearcoat={1.0}
                emissive="#C7FF4A"
                emissiveIntensity={0.25}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

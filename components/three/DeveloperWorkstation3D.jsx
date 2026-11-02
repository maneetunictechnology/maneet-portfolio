"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import MonitorScreenContent from "./MonitorScreenContent";
import SecondaryScreenContent from "./SecondaryScreenContent";
import DatabaseCluster3D from "./DatabaseCluster3D";
import TechStackOrbit3D from "./TechStackOrbit3D";

export default function DeveloperWorkstation3D({ isExploded, onExplosionEnd }) {
  const workstationGroupRef = useRef(null);
  const monitorRef = useRef(null);
  const secondaryScreenRef = useRef(null);
  const mouseLightRef = useRef(null);
  const particlesRef = useRef(null);

  // Scroll tracking
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (window.innerHeight || 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D Animated API Connection Lines
  const { linePositions, lineColors } = useMemo(() => {
    // Endpoints connecting auxiliary elements to the main monitor
    const paths = [
      { from: [-2.65, 0.55, 0.6], to: [-1.4, 0.2, 0] },   // React -> Monitor
      { from: [2.55, 0.8, 0.5], to: [1.4, 0.3, 0] },     // Next.js -> Monitor
      { from: [0.2, 2.15, -0.5], to: [0, 1.1, 0] },      // Database -> Monitor
      { from: [2.4, 0.2, -0.4], to: [1.4, -0.2, 0] },    // Secondary Screen -> Monitor
      { from: [-2.3, -1.25, 0.7], to: [-1.2, -0.7, 0] }, // JS -> Monitor
      { from: [2.35, -1.25, 0.6], to: [1.2, -0.7, 0] },  // Node -> Monitor
    ];

    const pos = [];
    const col = [];

    paths.forEach(({ from, to }) => {
      const p0 = new THREE.Vector3(...from);
      const p3 = new THREE.Vector3(...to);
      const mid = new THREE.Vector3().addVectors(p0, p3).multiplyScalar(0.5);
      mid.z += 0.35;

      const curve = new THREE.QuadraticBezierCurve3(p0, mid, p3);
      const pts = curve.getPoints(24);

      for (let i = 0; i < pts.length - 1; i++) {
        pos.push(pts[i].x, pts[i].y, pts[i].z);
        pos.push(pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);

        col.push(0.77, 1.0, 0.25); // Lime
        col.push(0.22, 0.74, 0.97); // Cyan
      }
    });

    return {
      linePositions: new Float32Array(pos),
      lineColors: new Float32Array(col),
    };
  }, []);

  // Ambient Digital Data Particles
  const { particlePositions, particleVelocities } = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      velocities.push({
        vy: 0.12 + Math.random() * 0.25,
        baseX: positions[i * 3],
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

    // 1. Mouse Parallax Rotation
    targetRotation.current.y = (pointer.x * Math.PI) / 6.5;
    targetRotation.current.x = (-pointer.y * Math.PI) / 8.5;

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

    // Dynamic light follows mouse
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
    const scrollTilt = scrollEffect * Math.PI * 0.35;
    const scrollLift = scrollEffect * 0.7;

    if (workstationGroupRef.current) {
      workstationGroupRef.current.rotation.y = currentRotation.current.y + time * 0.04 + scrollTilt;
      workstationGroupRef.current.rotation.x = currentRotation.current.x;
      workstationGroupRef.current.position.y = -scrollLift;
    }

    // 3. Shockwave Burst
    if (isExploded) {
      pulseFactor.current = THREE.MathUtils.lerp(pulseFactor.current, 1, 0.14);
      if (pulseFactor.current > 0.95 && onExplosionEnd) {
        onExplosionEnd();
      }
    } else {
      pulseFactor.current = THREE.MathUtils.lerp(pulseFactor.current, 0, 0.05);
    }

    // 4. Secondary Screen subtle independent parallax
    if (secondaryScreenRef.current) {
      secondaryScreenRef.current.rotation.y = -0.38 + pointer.x * 0.1;
      secondaryScreenRef.current.position.z = -0.4 + pointer.y * 0.1;
    }

    // 5. Particles Float
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const count = particlePositions.length / 3;

      for (let i = 0; i < count; i++) {
        const vel = particleVelocities[i];
        positions[i * 3 + 1] += delta * vel.vy * (1 + pulseFactor.current * 2);

        if (positions[i * 3 + 1] > 4.5) {
          positions[i * 3 + 1] = -4.5;
        }

        positions[i * 3] = vel.baseX + Math.sin(time * 1.5 + i) * 0.12;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={workstationGroupRef} position={[0, 0, 0]}>
      {/* Studio Studio Key Lighting */}
      <directionalLight position={[6, 8, 5]} intensity={2.4} color="#FFFFFF" />

      {/* Dynamic Mouse Point Light with Neon Lime Glow */}
      <pointLight
        ref={mouseLightRef}
        position={[0, 0, 4]}
        intensity={3.2}
        color="#C6FF3F"
        distance={12}
      />

      {/* Ambient Cool Fill Light */}
      <pointLight position={[-6, -4, -3]} intensity={2.0} color="#38BDF8" />
      <ambientLight intensity={0.5} />

      {/* 3D Animated API Connection Lines */}
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
          opacity={0.45}
          linewidth={1.5}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Ambient Digital Code Particles */}
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

      {/* 3D Database Storage Cluster (Top) */}
      <DatabaseCluster3D position={[0.2, 2.15, -0.5]} />

      {/* Surrounding Technology Badges Orbit */}
      <TechStackOrbit3D />

      {/* MAIN 3D FOCAL POINT: Large Floating Computer Monitor */}
      <group ref={monitorRef} position={[0, -0.15, 0]}>
        <Float speed={2.0} rotationIntensity={0.15} floatIntensity={0.4}>
          {/* Rear Ambient Bias Glow Panel */}
          <mesh position={[0, 0.05, -0.1]}>
            <planeGeometry args={[3.7, 2.5]} />
            <meshBasicMaterial
              color="#C6FF3F"
              transparent
              opacity={0.06}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          {/* Monitor Chassis (Bezel & Rear Casing) */}
          <mesh position={[0, 0.05, -0.04]}>
            <boxGeometry args={[3.55, 2.38, 0.1]} />
            <meshPhysicalMaterial
              color="#101016"
              metalness={0.92}
              roughness={0.12}
              clearcoat={1}
              reflectivity={0.9}
            />
          </mesh>

          {/* Glowing Lime Monitor Frame Accent */}
          <mesh position={[0, 0.05, -0.04]}>
            <boxGeometry args={[3.58, 2.41, 0.08]} />
            <meshStandardMaterial
              color="#C6FF3F"
              emissive="#C6FF3F"
              emissiveIntensity={1.3}
              wireframe
            />
          </mesh>

          {/* Monitor Chin Power LED */}
          <mesh position={[0, -1.08, 0.05]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color="#C6FF3F" />
          </mesh>

          {/* Monitor Floating Stand Arm */}
          <group position={[0, -1.35, -0.1]}>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.07, 0.5, 16]} />
              <meshPhysicalMaterial
                color="#1A1A22"
                metalness={0.95}
                roughness={0.1}
                clearcoat={1}
              />
            </mesh>
            {/* Monitor Base Foot */}
            <mesh position={[0, -0.25, 0.08]} rotation={[-0.1, 0, 0]}>
              <boxGeometry args={[1.3, 0.03, 0.6]} />
              <meshPhysicalMaterial
                color="#121218"
                metalness={0.95}
                roughness={0.15}
              />
            </mesh>
          </group>

          {/* Monitor Screen Surface: Live Code Editor */}
          <Html
            transform
            distanceFactor={5.2}
            position={[0, 0.05, 0.06]}
            className="select-none pointer-events-none"
          >
            <MonitorScreenContent />
          </Html>
        </Float>
      </group>

      {/* SECONDARY 3D SCREEN: Angled GitHub Activity Monitor */}
      <group
        ref={secondaryScreenRef}
        position={[2.45, 0.2, -0.4]}
        rotation={[0, -0.38, 0]}
      >
        <Float speed={2.2} rotationIntensity={0.12} floatIntensity={0.3}>
          {/* Secondary Screen Chassis */}
          <mesh position={[0, 0, -0.03]}>
            <boxGeometry args={[1.9, 1.8, 0.06]} />
            <meshPhysicalMaterial
              color="#101016"
              metalness={0.9}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0, 0, -0.03]}>
            <boxGeometry args={[1.92, 1.82, 0.04]} />
            <meshStandardMaterial
              color="#C6FF3F"
              emissive="#C6FF3F"
              emissiveIntensity={0.8}
              wireframe
            />
          </mesh>

          {/* Secondary Screen Content */}
          <Html
            transform
            distanceFactor={5.6}
            position={[0, 0, 0.04]}
            className="select-none pointer-events-none"
          >
            <SecondaryScreenContent />
          </Html>
        </Float>
      </group>
    </group>
  );
}

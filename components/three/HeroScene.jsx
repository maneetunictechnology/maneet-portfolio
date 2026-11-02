"use client";

import { Suspense, useState, useEffect, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DeveloperWorkstation3D from "./DeveloperWorkstation3D";
import FallbackSculpture from "./FallbackSculpture";
import { MousePointer, RotateCcw } from "lucide-react";

function isWebGLSupported() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    setHasWebGL(isWebGLSupported());
  }, []);

  const triggerExplosion = useCallback(() => {
    setIsExploded(true);
  }, []);

  const handleExplosionEnd = useCallback(() => {
    setIsExploded(false);
  }, []);

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  if (!mounted || !hasWebGL) {
    return <FallbackSculpture />;
  }

  return (
    <div
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none group/scene"
      onDoubleClick={triggerExplosion}
    >
      <Suspense fallback={<FallbackSculpture />}>
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6.3], fov: 42 }}
        >
          {/* Orbit Controls with clamped angles to prevent unwanted flipping */}
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.65}
            dampingFactor={0.06}
            enableDamping={true}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.8}
            maxAzimuthAngle={Math.PI / 3.5}
            minAzimuthAngle={-Math.PI / 3.5}
          />

          <DeveloperWorkstation3D
            isExploded={isExploded}
            onExplosionEnd={handleExplosionEnd}
          />
        </Canvas>
      </Suspense>

      {/* Bottom Interaction Indicator */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/75 backdrop-blur-md text-[10px] font-mono text-text-secondary shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
          <MousePointer size={12} className="text-accent animate-bounce" />
          <span className="hidden sm:inline">
            3D DEVELOPER WORKSPACE &bull; DRAG TO ROTATE &bull; DOUBLE-CLICK TO BURST
          </span>
          <span className="sm:hidden">
            3D WORKSPACE &bull; DRAG TO EXPLORE
          </span>
        </div>

        {/* Reset View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleReset();
          }}
          className="pointer-events-auto flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-white/10 bg-black/75 hover:bg-black/90 hover:border-accent text-[10px] font-mono text-text-secondary hover:text-accent transition-colors shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          title="Reset Camera Orientation"
        >
          <RotateCcw size={11} />
          <span>RESET</span>
        </button>
      </div>
    </div>
  );
}

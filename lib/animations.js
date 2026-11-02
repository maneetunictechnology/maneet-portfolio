/**
 * GSAP Animation System Helpers
 * Safe for Next.js SSR / StrictMode with proper cleanup
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export const registerGsapPlugins = () => {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
};

/**
 * Magnetic button interaction
 */
export const createMagneticEffect = (element, strength = 0.35) => {
  if (!element || typeof window === "undefined") return () => {};

  // Check for fine pointer (desktop mouse)
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

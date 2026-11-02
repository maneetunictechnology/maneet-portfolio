"use client";

import { useEffect, useRef } from "react";
import { createMagneticEffect } from "@/lib/animations";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as: Component = "button",
  ...props
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;
    const cleanup = createMagneticEffect(el, strength);
    return cleanup;
  }, [strength]);

  return (
    <Component
      ref={buttonRef}
      className={`inline-flex items-center justify-center transition-colors will-change-transform ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

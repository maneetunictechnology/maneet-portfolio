"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TechIcon from "@/components/ui/TechIcon";
import { ArrowUpRight, GitFork } from "lucide-react";

export default function SkillCard({
  skill,
  isSelected,
  onSelect,
  allSkillsMap,
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt limits: -10 to +10 degrees
    const rX = ((y - centerY) / centerY) * -9;
    const rY = ((x - centerX) / centerX) * 9;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Circular progress ring calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (skill.proficiency.level / 100) * circumference;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative will-change-transform"
      style={{ perspective: 1200 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect && onSelect(skill.id)}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.1s ease-out, border-color 0.3s ease"
            : "transform 0.5s ease-out, border-color 0.3s ease",
          borderColor: isSelected
            ? skill.brandColor
            : isHovered
            ? "rgba(199, 255, 74, 0.4)"
            : "rgba(255, 255, 255, 0.08)",
          boxShadow: isSelected
            ? `0 0 35px ${skill.glowColor}`
            : isHovered
            ? `0 15px 35px -10px rgba(0,0,0,0.8), 0 0 25px ${skill.glowColor}`
            : "0 10px 30px -10px rgba(0,0,0,0.5)",
        }}
        className={`relative h-full p-6 sm:p-7 rounded-2xl bg-[#121216]/90 backdrop-blur-xl border flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-300 select-none group ${
          isSelected ? "bg-[#181820]" : ""
        }`}
      >
        {/* Dynamic Interactive Mouse Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.08) 0%, transparent 65%)`,
          }}
        />

        {/* Ambient Top Glow in Technology Brand Color */}
        <div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-60"
          style={{ backgroundColor: skill.brandColor }}
        />

        {/* Top Header: Tech Icon, Name & Progress Gauge */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-5">
            {/* Tech Logo with floating badge */}
            <div className="flex items-center gap-3.5">
              <div
                className="w-13 h-13 p-3 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/20"
                style={{
                  boxShadow: isHovered ? `0 0 20px ${skill.glowColor}` : "none",
                }}
              >
                <TechIcon
                  name={skill.iconName}
                  className="w-7 h-7"
                  color={skill.brandColor}
                />
              </div>

              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block mb-0.5">
                  {skill.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary tracking-tight transition-colors group-hover:text-accent">
                  {skill.name}
                </h3>
              </div>
            </div>

            {/* Glowing Circular Proficiency Ring Indicator */}
            <div className="relative flex items-center justify-center shrink-0">
              <svg className="w-13 h-13 -rotate-90">
                {/* Track circle */}
                <circle
                  cx="26"
                  cy="26"
                  r={radius}
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="3.5"
                />
                {/* Progress circle */}
                <circle
                  cx="26"
                  cy="26"
                  r={radius}
                  fill="transparent"
                  stroke={skill.brandColor}
                  strokeWidth="3.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                  style={{
                    filter: isHovered
                      ? `drop-shadow(0 0 6px ${skill.brandColor})`
                      : "none",
                  }}
                />
              </svg>
              {/* Inner score / level */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[11px] font-mono font-bold text-text-primary">
                  {skill.proficiency.level}
                </span>
              </div>
            </div>
          </div>

          {/* Proficiency Stage & Indicator Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: skill.brandColor }}
            />
            <span className="text-xs font-mono text-text-secondary font-medium">
              {skill.proficiency.indicator}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.02] text-text-muted ml-auto">
              {skill.proficiency.stage}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary font-light leading-relaxed mb-5">
            {skill.shortDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/5 bg-white/[0.02] text-text-muted group-hover:border-white/10 group-hover:text-text-secondary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Footer: Ecosystem Connections */}
        <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-mono">
            <GitFork size={13} className="text-accent" />
            <span>Connects:</span>
            <div className="flex items-center gap-1">
              {skill.connections.slice(0, 3).map((connId) => {
                const target = allSkillsMap?.get(connId);
                if (!target) return null;
                return (
                  <span
                    key={connId}
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: target.brandColor }}
                    title={target.name}
                  />
                );
              })}
              {skill.connections.length > 3 && (
                <span className="text-[9px] text-text-muted">
                  +{skill.connections.length - 3}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-text-muted group-hover:text-accent transition-colors">
            <span>Explore</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  SKILL_CATEGORIES,
  TECHNICAL_SKILLS,
} from "@/lib/skills-data";
import SkillCard from "@/components/sections/SkillCard";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import ConstellationFallback from "@/components/three/ConstellationFallback";
import {
  Search,
  X,
  Layers,
  Sparkles,
  GitGraph,
  Grid,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Dynamic import with SSR false for 3D Three.js Constellation
const SkillsConstellation = dynamic(
  () => import("@/components/three/SkillsConstellation"),
  {
    ssr: false,
    loading: () => <ConstellationFallback />,
  }
);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSkillId, setActiveSkillId] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'constellation' | 'split'
  const sectionRef = useRef(null);

  // Map for fast lookups
  const skillsMap = useMemo(() => {
    const map = new Map();
    TECHNICAL_SKILLS.forEach((s) => map.set(s.id, s));
    return map;
  }, []);

  // Filter skills based on Category and Search Query
  const filteredSkills = useMemo(() => {
    return TECHNICAL_SKILLS.filter((skill) => {
      // Category match
      const matchesCategory =
        activeCategory === "all" ||
        skill.category === activeCategory ||
        skill.categories.includes(activeCategory);

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.shortDesc.toLowerCase().includes(query) ||
        skill.tags.some((t) => t.toLowerCase().includes(query)) ||
        skill.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Selected skill details
  const activeSkill = activeSkillId ? skillsMap.get(activeSkillId) : null;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 sm:py-36 bg-[#0B0B0F] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      {/* Futuristic Background Grid Coordinate Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            tag="AI Architecture &amp; Stack"
            title="TECHNICAL"
            highlight="SKILLS ECOSYSTEM."
            subtitle="An interactive, multi-dimensional matrix of modern frontend engineering, asynchronous backend services, and NoSQL document modeling."
            className="mb-0 md:mb-0"
          />

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(199,255,74,0.3)]"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              <Grid size={14} />
              <span>Cards Grid</span>
            </button>

            <button
              onClick={() => setViewMode("constellation")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                viewMode === "constellation"
                  ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(199,255,74,0.3)]"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              <GitGraph size={14} />
              <span>3D Constellation</span>
            </button>
          </div>
        </div>

        {/* Filter Bar: Categories + Real-time Search */}
        <div className="mb-10 sm:mb-14 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04] border border-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 rounded-full bg-accent shadow-[0_0_20px_rgba(199,255,74,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Real-time Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted">
              <Search size={15} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, hooks, APIs..."
              className="w-full pl-10 pr-9 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 focus:bg-white/[0.06] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* 3D Constellation Mode Display */}
        {viewMode === "constellation" && (
          <div className="relative mb-12 rounded-3xl border border-white/10 bg-[#0E0E14] overflow-hidden">
            {/* Top HUD Bar */}
            <div className="p-4 sm:p-6 border-b border-white/10 bg-black/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="uppercase text-text-primary font-bold">
                  3D SKILL CONSTELLATION GRAPH
                </span>
                <span className="hidden sm:inline text-text-muted">
                  &bull; Click nodes to inspect &amp; explore connections
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-accent">
                <Sparkles size={13} />
                <span>DRAG &amp; ROTATE 3D SPACE</span>
              </div>
            </div>

            {/* 3D Canvas Container */}
            <div className="w-full h-[460px] sm:h-[540px] md:h-[620px] relative">
              <SkillsConstellation
                activeSkillId={activeSkillId}
                onSelectSkill={(id) => setActiveSkillId(id)}
              />
            </div>
          </div>
        )}

        {/* Active Skill Inspector HUD (When a node or card is selected) */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mb-10 p-6 sm:p-8 rounded-3xl border border-accent/40 bg-[#15151D] shadow-[0_0_35px_rgba(199,255,74,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0"
                  style={{
                    boxShadow: `0 0 25px ${activeSkill.glowColor}`,
                  }}
                >
                  <TechIcon
                    name={activeSkill.iconName}
                    className="w-8 h-8"
                    color={activeSkill.brandColor}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-2xl font-heading font-extrabold text-text-primary">
                      {activeSkill.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-white/10 text-accent bg-accent/10">
                      {activeSkill.proficiency.stage}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary max-w-2xl font-light">
                    {activeSkill.shortDesc}
                  </p>
                </div>
              </div>

              {/* Connected Technologies Pill Cluster */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-stretch md:self-auto shrink-0">
                <div className="text-xs font-mono text-text-muted">
                  <span className="block mb-1 sm:mb-0 sm:inline sm:mr-2">
                    Neural Links:
                  </span>
                  <div className="inline-flex flex-wrap gap-1.5">
                    {activeSkill.connections.map((connId) => {
                      const target = skillsMap.get(connId);
                      if (!target) return null;
                      return (
                        <button
                          key={connId}
                          onClick={() => setActiveSkillId(connId)}
                          className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 hover:border-accent hover:text-white text-[11px] flex items-center gap-1.5 transition-colors"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: target.brandColor }}
                          />
                          <span>{target.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => setActiveSkillId(null)}
                  className="p-2 rounded-full border border-white/10 bg-white/5 text-text-secondary hover:text-white transition-colors self-end sm:self-auto"
                  aria-label="Close active skill inspector"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skill Cards Grid View */}
        {viewMode !== "constellation" && (
          <div>
            {filteredSkills.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredSkills.map((skill) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      isSelected={activeSkillId === skill.id}
                      onSelect={(id) => {
                        setActiveSkillId(activeSkillId === id ? null : id);
                      }}
                      allSkillsMap={skillsMap}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="py-20 text-center rounded-3xl border border-white/10 bg-white/[0.02]">
                <Layers className="w-12 h-12 text-text-muted mx-auto mb-4" />
                <h4 className="text-xl font-heading font-bold text-text-primary mb-2">
                  No matching technologies found
                </h4>
                <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
                  Try adjusting your search query or selecting a different category from above.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-5 py-2.5 rounded-full bg-accent text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#bbf63c] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Technology Ecosystem Stats & Summary */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0E0E14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-text-primary">
                Configurable &amp; Production-Focused Architecture
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary font-light">
                All proficiencies and technological connections are structured inside an extensible data module.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-text-muted">
            <div className="text-center sm:text-right">
              <span className="text-lg font-bold text-accent font-heading block">
                10+
              </span>
              <span className="uppercase text-[10px] tracking-wider">
                Active Technologies
              </span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="text-center sm:text-right">
              <span className="text-lg font-bold text-text-primary font-heading block">
                MERN &amp; Next.js
              </span>
              <span className="uppercase text-[10px] tracking-wider">
                Core Synergy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

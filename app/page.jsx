"use client";

import { useState } from "react";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-[#F5F5F0]">
      {/* Interactive Cinematic Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Main Navigation */}
      <Navbar />

      {/* Cinematic Fullscreen Hero */}
      <Hero ready={preloaderDone} />

      {/* About Section */}
      <About />

      {/* Skills & Technologies Section */}
      <Skills />

      {/* Selected Featured Works */}
      <Projects />

      {/* Learning & Exploration Journey */}
      <Journey />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

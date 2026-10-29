import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-accent/30 selection:text-primary">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Landmarks */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail, Heart, FileText } from 'lucide-react';
import { personalInfo } from '@/lib/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080A0E] border-t border-border/80 py-12 relative text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-8 border-b border-border/60">
          {/* Col 1: Wordmark & Bio */}
          <div className="md:col-span-2 space-y-3">
            <Link
              href="/#home"
              className="group inline-flex items-center space-x-2 text-primary font-mono text-lg font-bold tracking-tight"
            >
              <span className="text-accent">&lt;</span>
              <span className="tracking-wider group-hover:text-accent transition-colors">{personalInfo.name}</span>
              <span className="text-secondaryAccent">/&gt;</span>
            </Link>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-md">
              BCA student &amp; aspiring web developer focused on building modern web applications, e-commerce platforms, and practical digital solutions.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-[#11151D] border border-border text-secondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Email Maneet"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#11151D] border border-border text-secondary hover:text-primary hover:border-border transition-colors"
                aria-label="Maneet's GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#11151D] border border-border text-secondary hover:text-primary hover:border-accent/40 transition-colors"
                  aria-label="Maneet's LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              <Link
                href="/resume"
                className="p-2 rounded-lg bg-[#11151D] border border-border text-secondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-primary transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-primary transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-primary transition-colors">
                  Education &amp; Background
                </Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-primary transition-colors">
                  Development Journey
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Case Studies & Projects */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
              Case Studies
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/projects/mikumantra" className="hover:text-accent transition-colors flex items-center space-x-1">
                  <span>MikuMantra E-Commerce</span>
                  <span className="text-[10px] text-secondaryAccent font-mono">(Live)</span>
                </Link>
              </li>
              <li>
                <Link href="/projects/ai-crm" className="hover:text-accent transition-colors">
                  AI-Powered CRM
                </Link>
              </li>
              <li>
                <Link href="/projects/product-distribution" className="hover:text-accent transition-colors">
                  Product Distribution
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/resume"
                  className="inline-flex items-center space-x-1 text-accent font-semibold hover:underline"
                >
                  <span>Print-Friendly Resume</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-secondary/70 gap-4">
          <p>
            &copy; {currentYear} Maneet. Developed with Next.js, React &amp; Tailwind CSS.
          </p>

          <Link
            href="/#home"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/10 text-xs font-mono text-secondary hover:text-white hover:border-white/20 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

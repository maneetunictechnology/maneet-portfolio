'use client';

import Link from 'next/link';
import { ArrowLeft, Printer, Download, Mail, Github, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData } from '@/lib/portfolio-data';

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const primaryProject = projectsData.find((p) => p.isPrimary) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.isPrimary);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-primary py-10 px-4 sm:px-6">
      {/* Top Action Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto mb-8 no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center space-x-3">
          <a
            href={personalInfo.resumePdfUrl}
            download="Maneet_Resume.pdf"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent text-[#0B0D12] text-xs font-bold hover:bg-[#A3B2FF] transition-all shadow-md shadow-accent/20"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#151A24] text-primary border border-border hover:border-accent text-xs font-semibold transition-all"
          >
            <Printer className="w-4 h-4 text-secondary" />
            <span>Print View</span>
          </button>
        </div>
      </div>

      {/* Resume Document Container (Optimized for Screen and Print) */}
      <div className="max-w-4xl mx-auto bg-[#11151D] text-primary print:bg-white print:text-black p-8 sm:p-12 rounded-2xl border border-border print:border-none shadow-2xl print:shadow-none print-container">
        {/* Header Section */}
        <header className="border-b border-border/80 print:border-gray-300 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary print:text-black">
                {personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent print:text-gray-800 mt-1">
                {personalInfo.role} • {personalInfo.educationStatus}
              </p>
            </div>

            <div className="text-xs font-mono text-secondary print:text-gray-600 space-y-1 sm:text-right">
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:underline flex items-center sm:justify-end space-x-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personalInfo.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center sm:justify-end space-x-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/maneetunictechnology/maneet-jwell11</span>
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <p className="text-xs sm:text-sm text-secondary print:text-gray-700 leading-relaxed mt-4">
            BCA student and aspiring web developer with hands-on experience building full-stack web applications, e-commerce platforms, and database architectures. Solid practical foundation in modern JavaScript, React, Next.js, Node.js, and MongoDB, backed by working deployed projects and continuous problem-solving.
          </p>
        </header>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent print:text-black font-bold border-b border-border/60 print:border-gray-300 pb-1 mb-3">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
            <div>
              <span className="font-bold text-primary print:text-black">{educationData.degree}</span>
              <span className="text-secondary print:text-gray-600 block sm:inline sm:ml-2">
                • {educationData.institution}
              </span>
            </div>
            <span className="text-xs font-mono text-secondaryAccent print:text-gray-700 font-semibold mt-1 sm:mt-0">
              {educationData.status}
            </span>
          </div>
          <p className="text-xs text-secondary print:text-gray-600 mt-1">
            Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Web Technologies.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent print:text-black font-bold border-b border-border/60 print:border-gray-300 pb-1 mb-3">
            Technical Skills (Verified)
          </h2>
          <div className="space-y-2 text-xs sm:text-sm">
            <div>
              <span className="font-semibold text-primary print:text-black">Frontend:</span>{' '}
              <span className="text-secondary print:text-gray-700">
                HTML5, CSS3, JavaScript (ES6+), React, Next.js (App Router), Tailwind CSS
              </span>
            </div>
            <div>
              <span className="font-semibold text-primary print:text-black">Backend:</span>{' '}
              <span className="text-secondary print:text-gray-700">
                Node.js, RESTful API Development, Server Route Handlers, Session Authentication
              </span>
            </div>
            <div>
              <span className="font-semibold text-primary print:text-black">Database:</span>{' '}
              <span className="text-secondary print:text-gray-700">
                MongoDB (Document modeling, CRUD operations, atomic stock management)
              </span>
            </div>
            <div>
              <span className="font-semibold text-primary print:text-black">Tools &amp; Workflow:</span>{' '}
              <span className="text-secondary print:text-gray-700">
                Git, GitHub, Vercel Deployment, Capacitor (Mobile Packaging)
              </span>
            </div>
          </div>
        </section>

        {/* Selected Featured Projects */}
        <section className="space-y-5">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent print:text-black font-bold border-b border-border/60 print:border-gray-300 pb-1 mb-3">
            Selected Practical Projects
          </h2>

          {/* Project 1: MikuMantra */}
          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-bold text-sm sm:text-base text-primary print:text-black">
                  {primaryProject.title}
                </span>
                <span className="text-xs text-accent print:text-gray-800 ml-2 font-mono">
                  [Primary Project]
                </span>
              </div>
              <div className="text-xs font-mono text-secondary print:text-gray-600 flex items-center space-x-2 mt-0.5 sm:mt-0">
                {primaryProject.demoUrl && (
                  <a
                    href={primaryProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-secondaryAccent print:text-blue-700"
                  >
                    miku-mantra.vercel.app
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-secondary print:text-gray-600 font-mono">
              Technologies: {primaryProject.technologies.join(', ')}
            </p>

            <ul className="list-disc list-inside space-y-1 text-xs text-secondary print:text-gray-700 leading-relaxed">
              <li>
                Engineered full-stack jewellery e-commerce application using Next.js App Router and MongoDB.
              </li>
              <li>
                Implemented product catalog with multi-category filters, image zoom, and related item recommendations.
              </li>
              <li>
                Built client-side shopping cart &amp; wishlist persistence with session cookie authentication.
              </li>
              <li>
                Designed coupon discount engine (AURELIA10, WELCOME2000), cash-on-delivery flow, and Razorpay Mock payment verification.
              </li>
              <li>
                Integrated automated order number generation (&apos;AUR-XXXXXXXX&apos;), status tracking, and transactional inventory decrement.
              </li>
              <li>
                Developed protected administrative dashboard with sales metrics and product inventory management.
              </li>
              <li>
                Configured Capacitor to package frontend into native Android APK packages.
              </li>
            </ul>
          </div>

          {/* Project 2: AI-Powered CRM */}
          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <span className="font-bold text-sm sm:text-base text-primary print:text-black">
                AI-Powered CRM (Prototype &amp; Architecture)
              </span>
              <span className="text-xs font-mono text-secondary print:text-gray-600">
                Next.js, React, Node.js, MongoDB
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-secondary print:text-gray-700 leading-relaxed">
              <li>
                Designed architectural blueprint and data schemas for lead qualification and sales pipeline progression.
              </li>
              <li>
                Modeled MongoDB documents to store company profile attributes, interaction records, and lead scoring logic.
              </li>
            </ul>
          </div>

          {/* Project 3: Product Distribution Platform */}
          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <span className="font-bold text-sm sm:text-base text-primary print:text-black">
                Product Distribution Platform (Exploration)
              </span>
              <span className="text-xs font-mono text-secondary print:text-gray-600">
                React, Node.js, MongoDB
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-secondary print:text-gray-700 leading-relaxed">
              <li>
                Constructed centralized product information schemas to unify product attributes across diverse marketplace channels.
              </li>
              <li>
                Built prototype transformation logic formatting master records into channel-compliant JSON and CSV syndication feeds.
              </li>
            </ul>
          </div>
        </section>

        {/* Development Philosophy / Availability */}
        <section className="mt-8 pt-4 border-t border-border/80 print:border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-secondary print:text-gray-600 gap-2">
            <div>
              <span className="font-bold text-primary print:text-black">Availability:</span> Web Development Employment &amp; Freelance Inquiries
            </div>
            <div>
              <span className="font-mono">{personalInfo.email}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

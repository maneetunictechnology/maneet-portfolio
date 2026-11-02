export const DEVELOPER_PROFILE = {
  name: "MANEET",
  role: "Frontend Developer",
  tagline: "I build modern and interactive web experiences.",
  description:
    "I am a growing frontend developer passionate about creating modern, visually engaging and interactive digital experiences. I enjoy transforming ideas into beautiful websites using modern frontend technologies, creative animations and thoughtful user experiences.",
  email: "mohanmanish740@gmail.com",
  github: "https://github.com/maneetunictechnology/maneet-portfolio",
  status: "Available for frontend roles & creative projects",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS_DATA = [
  {
    name: "HTML",
    category: "Markup & Structure",
    level: "Semantic & Accessible",
    description:
      "Crafting accessible, semantic page structures, SEO landmarks, and compliant modern HTML5 standards.",
    icon: "code",
    color: "#E34F26",
    highlight: "Semantic HTML5",
  },
  {
    name: "CSS",
    category: "Styling & Architecture",
    level: "Responsive & Modern",
    description:
      "Designing responsive layouts, CSS Grid, Flexbox, custom properties, animations, and fluid typography.",
    icon: "palette",
    color: "#1572B6",
    highlight: "Fluid Grid Systems",
  },
  {
    name: "JavaScript",
    category: "Core Language",
    level: "Modern ES6+",
    description:
      "Async programming, DOM manipulation, closures, event systems, and dynamic interactive client logic.",
    icon: "terminal",
    color: "#F7DF1E",
    highlight: "ES6+ Logic & Async",
  },
  {
    name: "React",
    category: "UI Architecture",
    level: "Component Systems",
    description:
      "Component hierarchy, state management, custom hooks, virtual DOM optimization, and modular UI engineering.",
    icon: "atom",
    color: "#61DAFB",
    highlight: "Hooks & Component Trees",
  },
  {
    name: "Next.js",
    category: "Frontend Framework",
    level: "App Router & SSR",
    description:
      "Server and Client components, file-system routing, image optimization, API routes, and web vitals tuning.",
    icon: "zap",
    color: "#FFFFFF",
    highlight: "App Router & Web Vitals",
  },
  {
    name: "Tailwind CSS",
    category: "Utility Design System",
    level: "Design Token Mastery",
    description:
      "Rapid responsive UI creation, custom theme tokens, dark mode design, and clean utility architectures.",
    icon: "wind",
    color: "#38BDF8",
    highlight: "Rapid Design Systems",
  },
  {
    name: "GSAP",
    category: "Motion & Animation",
    level: "Cinematic Choreography",
    description:
      "ScrollTrigger orchestration, timeline sequencing, smooth scrubbing, text reveals, and micro-interactions.",
    icon: "sparkles",
    color: "#C7FF4A",
    highlight: "ScrollTrigger Timelines",
  },
];

export const PROJECTS_DATA = [
  {
    id: "mikumantra",
    number: "01",
    title: "MIKUMANTRA",
    category: "Jewellery E-commerce Website",
    tagline: "Elegance crafted with modern web engineering",
    description:
      "A modern jewellery e-commerce experience focused on product presentation, shopping interactions and a polished user interface.",
    details:
      "Engineered an end-to-end jewellery showcase and shopping platform. Built with Next.js and Tailwind CSS, featuring high-fidelity product imagery, dynamic product detail views, responsive cart workflows, and elegant luxury aesthetics.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB"],
    heroImage: "/projects/mikumantra/hero.png",
    gallery: [
      "/projects/mikumantra/product-1.jpg",
      "/projects/mikumantra/product-2.jpg",
      "/projects/mikumantra/product-3.jpg",
    ],
    github: "https://github.com/maneetunictechnology/maneet-jwell11",
    liveDemo: "https://miku-mantra.vercel.app/",
    verifiedKeyFeatures: [
      "Dynamic luxury product showcase with responsive gallery",
      "Interactive cart, filtering, and structured catalogue browsing",
      "Polished luxury design system with dark gold accents",
      "Next.js App Router performance and image optimization",
    ],
  },
];

export const JOURNEY_MILESTONES = [
  {
    year: "FOUNDATIONS",
    title: "HTML & CSS Architecture",
    description:
      "Mastered semantic HTML5 markup, responsive layouts, CSS Grid, Flexbox, and core design principles to build rock-solid web page structures.",
    badge: "Structural Core",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    year: "LOGIC",
    title: "Modern JavaScript (ES6+)",
    description:
      "Developed deep fluency in asynchronous programming, promises, DOM manipulation, functional programming patterns, and interactive user logic.",
    badge: "Language Mastery",
    technologies: ["ES6+", "Async / Await", "DOM API"],
  },
  {
    year: "COMPONENTS",
    title: "React Ecosystem & Hooks",
    description:
      "Transitioned into component-driven architecture, declarative UI paradigms, custom hooks, reusable design patterns, and application state workflows.",
    badge: "Frontend Architecture",
    technologies: ["React", "Custom Hooks", "State Management"],
  },
  {
    year: "PRODUCTION",
    title: "Next.js & Full-Stack Interfaces",
    description:
      "Adopted Next.js App Router, combining server-rendered speed with client interactivity, optimized assets, API routes, and full-stack project building.",
    badge: "Framework & Performance",
    technologies: ["Next.js", "App Router", "SSR", "Tailwind CSS"],
  },
  {
    year: "EXPERIENCES",
    title: "Cinematic Motion & GSAP",
    description:
      "Exploring high-end creative development: orchestrating GSAP ScrollTrigger animations, smooth scrolling, interactive 3D WebGL scenes, and Awwwards-inspired digital storytelling.",
    badge: "Creative Developer",
    technologies: ["GSAP", "ScrollTrigger", "Three.js", "Lenis"],
  },
];

export * from "./skills-data";

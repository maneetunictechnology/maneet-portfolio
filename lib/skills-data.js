/**
 * Futuristic Technical Skills Architecture Data
 * Configurable, expandable, and structured for 3D Constellation & Glassmorphism UI
 */

export const SKILL_CATEGORIES = [
  { id: "all", label: "Full Ecosystem", count: 10, icon: "network" },
  { id: "frontend", label: "Frontend Development", count: 6, icon: "layout" },
  { id: "backend", label: "Backend Development", count: 3, icon: "server" },
  { id: "database", label: "Database Management", count: 1, icon: "database" },
  { id: "fullstack", label: "Full-Stack Development", count: 4, icon: "layers" },
];

export const TECHNICAL_SKILLS = [
  // --- FRONTEND DEVELOPMENT ---
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    categories: ["frontend"],
    brandColor: "#E34F26",
    secondaryColor: "#F16529",
    glowColor: "rgba(227, 79, 38, 0.4)",
    iconName: "html5",
    shortDesc:
      "Semantic architecture, accessible document outlines, modern web standards, and SEO landmarks.",
    proficiency: {
      stage: "Core Mastery",
      level: 90,
      indicator: "Semantic & Standards",
    },
    tags: ["Semantic HTML", "WAI-ARIA", "DOM Tree", "SEO Architecture"],
    connections: ["css3", "javascript"],
    coords: [-2.2, 1.2, 0.4],
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    categories: ["frontend"],
    brandColor: "#1572B6",
    secondaryColor: "#33A9DC",
    glowColor: "rgba(21, 114, 182, 0.4)",
    iconName: "css3",
    shortDesc:
      "Modern CSS Grid, Flexbox, responsive fluid typography, custom properties, and keyframe motion.",
    proficiency: {
      stage: "High Fluency",
      level: 88,
      indicator: "Responsive & Modern",
    },
    tags: ["CSS Grid", "Flexbox", "Keyframes", "Custom Properties"],
    connections: ["html5", "tailwind", "javascript"],
    coords: [-2.4, -0.4, 0.6],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    categories: ["frontend"],
    brandColor: "#38BDF8",
    secondaryColor: "#0EA5E9",
    glowColor: "rgba(56, 189, 248, 0.4)",
    iconName: "tailwind",
    shortDesc:
      "Design tokens, JIT utility compilation, dark mode styling, and custom responsive layouts.",
    proficiency: {
      stage: "Production Ready",
      level: 92,
      indicator: "Design Systems & JIT",
    },
    tags: ["Utility-First", "Dark Mode", "Custom Themes", "Fluid Spacing"],
    connections: ["css3", "react", "nextjs"],
    coords: [-1.4, -1.5, 0.2],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    categories: ["frontend", "fullstack"],
    brandColor: "#F7DF1E",
    secondaryColor: "#E5C50B",
    glowColor: "rgba(247, 223, 30, 0.4)",
    iconName: "javascript",
    shortDesc:
      "Modern ES6+ syntax, asynchronous programming, closures, event delegation, and reactive client logic.",
    proficiency: {
      stage: "Core Mastery",
      level: 86,
      indicator: "ES6+ & Async/Await",
    },
    tags: ["ES6+", "Promises & Async", "DOM Events", "Functional Logic"],
    connections: ["html5", "css3", "react", "nodejs"],
    coords: [-0.6, 0.6, 0.8],
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    categories: ["frontend", "fullstack"],
    brandColor: "#61DAFB",
    secondaryColor: "#00B4D8",
    glowColor: "rgba(97, 218, 251, 0.4)",
    iconName: "react",
    shortDesc:
      "Declarative UI architecture, functional components, custom hooks, virtual DOM, and reactive state.",
    proficiency: {
      stage: "High Fluency",
      level: 88,
      indicator: "Hooks & Architecture",
    },
    tags: ["Custom Hooks", "State Lifecycle", "Component Trees", "JSX"],
    connections: ["javascript", "tailwind", "nextjs", "nodejs"],
    coords: [0.4, 1.4, 0.3],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    categories: ["frontend", "fullstack"],
    brandColor: "#FFFFFF",
    secondaryColor: "#A1A1AA",
    glowColor: "rgba(255, 255, 255, 0.35)",
    iconName: "nextjs",
    shortDesc:
      "App Router, Server & Client Components, dynamic API routes, image optimization, and SSR/SSG.",
    proficiency: {
      stage: "Production Ready",
      level: 85,
      indicator: "App Router & SSR",
    },
    tags: ["App Router", "Server Components", "API Routes", "Core Vitals"],
    connections: ["react", "tailwind", "nodejs", "mongodb"],
    coords: [0.8, -0.2, 0.5],
  },

  // --- BACKEND DEVELOPMENT ---
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    categories: ["backend", "fullstack"],
    brandColor: "#539E43",
    secondaryColor: "#68A063",
    glowColor: "rgba(83, 158, 67, 0.4)",
    iconName: "nodejs",
    shortDesc:
      "Asynchronous server runtime, modular package management, request dispatching, and middleware.",
    proficiency: {
      stage: "Actively Building",
      level: 80,
      indicator: "Server Runtime & APIs",
    },
    tags: ["Async I/O", "Express Logic", "Event Loop", "Modular Code"],
    connections: ["javascript", "react", "restapi", "backend-integration", "mongodb"],
    coords: [1.8, 0.9, -0.4],
  },
  {
    id: "restapi",
    name: "REST API Development",
    category: "backend",
    categories: ["backend", "fullstack"],
    brandColor: "#A855F7",
    secondaryColor: "#C084FC",
    glowColor: "rgba(168, 85, 247, 0.4)",
    iconName: "restapi",
    shortDesc:
      "Architecting clean RESTful endpoints, status codes, payload validation, and JSON serialization.",
    proficiency: {
      stage: "Building & Expanding",
      level: 82,
      indicator: "HTTP Architecture",
    },
    tags: ["CRUD Endpoints", "Status Codes", "Data Serialization", "Request Validation"],
    connections: ["nodejs", "backend-integration", "mongodb"],
    coords: [2.3, -0.6, -0.2],
  },
  {
    id: "backend-integration",
    name: "Backend Integration",
    category: "backend",
    categories: ["backend", "fullstack"],
    brandColor: "#3B82F6",
    secondaryColor: "#60A5FA",
    glowColor: "rgba(59, 130, 246, 0.4)",
    iconName: "integration",
    shortDesc:
      "Connecting frontend client states with server endpoints, error handling, auth flow, and async fetches.",
    proficiency: {
      stage: "Production Ready",
      level: 84,
      indicator: "Full-Flow Data Wiring",
    },
    tags: ["Async Fetching", "Error Handling", "Auth Workflows", "Payload Mapping"],
    connections: ["nodejs", "restapi", "nextjs", "mongodb"],
    coords: [1.2, -1.6, -0.3],
  },

  // --- DATABASE ---
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    categories: ["database", "fullstack"],
    brandColor: "#47A248",
    secondaryColor: "#52B753",
    glowColor: "rgba(71, 162, 72, 0.45)",
    iconName: "mongodb",
    shortDesc:
      "NoSQL document storage, collection schema design, CRUD operations, indexing, and Mongoose modeling.",
    proficiency: {
      stage: "Core Fluency",
      level: 82,
      indicator: "Document Schema & CRUD",
    },
    tags: ["Collections", "Document Modeling", "CRUD Queries", "Mongoose"],
    connections: ["nodejs", "restapi", "backend-integration", "nextjs"],
    coords: [0.1, -1.8, -0.5],
  },
];

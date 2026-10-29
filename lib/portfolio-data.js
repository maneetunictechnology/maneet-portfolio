/**
 * Centralized Portfolio Configuration for Maneet
 * All personal details, educational background, skills, and projects
 * are maintained here for easy updates and honesty in representation.
 */

export const personalInfo = {
  name: "Maneet",
  role: "Aspiring Web Developer",
  status: "BCA Student (Currently Pursuing)",
  educationDegree: "Bachelor of Computer Applications (BCA)",
  educationStatus: "Currently Pursuing",
  institution: "University / BCA Program",
  email: "mohanmanish740@gmail.com",
  github: "https://github.com/maneetunictechnology/maneet-jwell11",
  linkedin: null, // Not provided; no button displayed
  primaryGoals: "Secure entry-level web development jobs and freelance clients",
  resumePdfUrl: "/resume/Maneet_Resume.pdf",

  hero: {
    greeting: "HELLO, I'M MANEET",
    headline: "Building Digital Experiences That Matter.",
    subheadline:
      "I'm a BCA student and aspiring web developer passionate about building modern websites, e-commerce experiences, and practical digital applications using contemporary web technologies.",
    primaryCta: "Explore My Projects",
    secondaryCta: "Contact Me",
    githubCta: "GitHub Profile",
    resumeCta: "Download Resume",
  },

  about: {
    title: "About Me",
    badge: "Honest & Practical",
    intro:
      "I'm currently pursuing my Bachelor of Computer Applications and building practical skills in modern web development. I enjoy turning ideas into functional digital experiences, exploring frontend and backend technologies, and developing projects that solve real problems. My projects span e-commerce, CRM workflows, and product distribution concepts.",
    interests: [
      "Building responsive web applications",
      "Creating user-friendly interfaces",
      "Developing practical e-commerce workflows",
      "Learning backend development and databases",
      "Improving website performance and reliability",
    ],
    philosophy: [
      {
        title: "Practical Code Over Fluff",
        description:
          "I prioritize building functional, working applications that solve tangible problems rather than showcasing superficial vanity metrics.",
      },
      {
        title: "Solid Modern Web Foundations",
        description:
          "Focused on clean semantic HTML, responsive CSS layouts, modern JavaScript, and scalable React/Next.js architectures.",
      },
      {
        title: "Continuous Growth Mindset",
        description:
          "Actively expanding my knowledge through BCA coursework, hands-on debugging, backend integration, and rigorous testing.",
      },
    ],
  },
};

export const skillsData = {
  groups: [
    {
      category: "Frontend",
      description: "User interfaces, responsive layouts, and client-side application logic.",
      skills: [
        {
          name: "HTML",
          level: "Semantic Markup",
          description: "Accessible structures, semantic HTML5 tags, accessible forms, SEO landmarks.",
        },
        {
          name: "CSS",
          level: "Responsive Design",
          description: "Flexbox, CSS Grid, custom utility styling, Tailwind CSS, animations & responsive breakpoints.",
        },
        {
          name: "JavaScript",
          level: "Core & ES6+",
          description: "Modern JavaScript, asynchronous logic (Promises/async-await), DOM events, array methods.",
        },
        {
          name: "React",
          level: "Component Architecture",
          description: "Functional components, custom hooks, state management, lifecycle handling, interactive UIs.",
        },
        {
          name: "Next.js",
          level: "App Router & Full-Stack",
          description: "Server & client components, dynamic routing, API route handlers, server-side data fetching.",
        },
      ],
    },
    {
      category: "Backend",
      description: "Server runtime, REST API routing, and backend business logic.",
      skills: [
        {
          name: "Node.js",
          level: "Runtime & APIs",
          description: "Server execution environment, RESTful API endpoints, request validation, middleware flows.",
        },
      ],
    },
    {
      category: "Database",
      description: "Document databases, schema design, and data persistence.",
      skills: [
        {
          name: "MongoDB",
          level: "Document Database",
          description: "Collections, document schemas, CRUD operations, query filtering, and atomic updates.",
        },
      ],
    },
  ],
  learningRoadmap: [
    { name: "TypeScript", note: "Type safety & scalable application architecture" },
    { name: "Docker", note: "Containerized environments & reproducible setups" },
    { name: "Cloud Deployment", note: "CI/CD pipelines, container hosting & cloud storage" },
  ],
};

export const projectsData = [
  {
    id: "mikumantra",
    slug: "mikumantra",
    isPrimary: true,
    title: "MikuMantra E-Commerce Website",
    tagline: "Full-Stack Jewellery & Gifting E-Commerce Platform",
    badge: "Primary Featured Project",
    statusText: "Completed & Deployed Full-Stack Project",
    shortDescription:
      "MikuMantra is an e-commerce project focused on gifting, jewellery, and lifestyle products, designed to deliver a modern and engaging online shopping experience.",
    demoUrl: "https://miku-mantra.vercel.app/",
    githubUrl: "https://github.com/maneetunictechnology/maneet-jwell11",
    heroImage: "/projects/mikumantra/hero.png",
    gallery: [
      "/projects/mikumantra/hero.png",
      "/projects/mikumantra/product-1.jpg",
      "/projects/mikumantra/product-2.jpg",
      "/projects/mikumantra/product-3.jpg",
    ],
    technologies: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS", "Razorpay (Mock)", "Capacitor"],
    overview:
      "MikuMantra is a full-featured e-commerce platform built to provide an elegant, mobile-first shopping experience for luxury jewellery and lifestyle gifts. The application pairs a high-performance Next.js frontend with a robust MongoDB backend, featuring verified flows for catalog browsing, user authentication, persistent carts, coupon discounts, order tracking, and administrative store management.",
    problem:
      "Online jewellery and gifting shoppers expect smooth visual browsing, instant search, responsive image galleries, persistent carts, and transparent checkout options. Store operators need an administrative dashboard to manage inventory, update product listings, review orders, and moderate customer feedback without database tampering.",
    solution:
      "Engineered an integrated web application leveraging Next.js App Router and MongoDB. Designed atomic state transitions for product stock decrementing, implemented secure cookie session authentication, created dual checkout pathways (COD & Razorpay Mock), and built a full administrative back-office with dashboard metrics.",
    verifiedFeatures: [
      {
        title: "Product Catalog & Detail Pages",
        detail:
          "Dynamic browsing with multi-category filters (Diamond, Gemstone, Enamel), detail view with high-resolution imagery, zoom features, and related item recommendations.",
      },
      {
        title: "Responsive Shopping Experience",
        detail:
          "Mobile-first, touch-friendly UI styled with Tailwind CSS, supporting seamless navigation across desktop screens, tablets, and smartphones.",
      },
      {
        title: "Cart & Wishlist State Management",
        detail:
          "Persistent client shopping cart with instant quantity updates, subtotal calculations, and synchronized wishlist state.",
      },
      {
        title: "User Authentication & Profile Management",
        detail:
          "Secure register, login, session cookie persistence, customer profile editing, and role-based permissions (User vs. Admin).",
      },
      {
        title: "Automated Order Processing & Stock Decrement",
        detail:
          "Automated order number generation (format 'AUR-XXXXXXXX-XXX'), stock deduction on placement, order history, and status tracking.",
      },
      {
        title: "Coupons Engine & Dual Payment Methods",
        detail:
          "Validated promotional discount coupons (percentage & flat discounts like AURELIA10 / WELCOME2000), Cash on Delivery (COD), and mock Razorpay payment verification.",
      },
      {
        title: "Product & Inventory Administration",
        detail:
          "Protected admin dashboard displaying live order metrics, revenue figures, user counts, and full CRUD operations for product catalogs and customer reviews.",
      },
      {
        title: "Mobile App Compilation (Capacitor)",
        detail:
          "Integrated Capacitor configurations for mobile packaging, compiling the Next.js frontend into native Android packages (app-debug.apk and Mikumantra.apk).",
      },
    ],
    challenges: [
      {
        challenge: "Inventory Synchronization & Concurrency",
        resolution:
          "Ensured atomic stock checks during checkout so stock quantities decrement only upon confirmed order creation, avoiding overselling.",
      },
      {
        challenge: "Image Loading & Layout Shifts",
        resolution:
          "Used Next.js optimized image components with explicit aspect ratios, preventing layout shifts during heavy media loading.",
      },
      {
        challenge: "Role-Based Route Protection",
        resolution:
          "Built server-side session checks in route handlers to enforce administrative privileges on dashboard and inventory mutation endpoints.",
      },
    ],
    futurePlans: [
      "Integration with live production Razorpay credentials and automated refund webhooks.",
      "Automated logistics integration with real-time courier tracking APIs.",
      "Customer-facing self-service return & exchange request portal.",
    ],
  },
  {
    id: "ai-crm",
    slug: "ai-crm",
    isPrimary: false,
    title: "AI-Powered CRM",
    tagline: "Intelligent Lead Management & Qualification Architecture",
    badge: "Prototype & Architecture",
    statusText: "Functional Prototype & Architectural System",
    shortDescription:
      "A project exploring website research, lead management, lead qualification, and structured recommendations.",
    demoUrl: null, // Non-clickable / honest representation
    githubUrl: null, // Unreleased repo
    heroImage: "/projects/ai-crm/hero.svg",
    gallery: [],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    overview:
      "A software architecture and prototype project designed to simplify sales prospecting. The project models an automated workflow where incoming lead domains are captured, systematically evaluated against customizable qualification criteria, and prioritized for sales outreach.",
    problem:
      "Sales development reps spend hours manually visiting prospect websites, copying details into spreadsheets, and struggling to objectively prioritize high-intent leads over low-converting contacts.",
    solution:
      "Constructed a structured CRM data model and pipeline interface. Designed lead qualification logic that evaluates business parameters, logs interaction stages, and organizes recommended next steps for sales representatives.",
    verifiedFeatures: [
      {
        title: "Lead Pipeline Workflow",
        detail:
          "Structured pipeline progression model (New Lead -> Researched -> Qualified -> Proposal -> Closed) with clear stage indicators.",
      },
      {
        title: "Lead Schema & Data Modeling",
        detail:
          "MongoDB document structures configured for storing company domain, contact roles, industry tags, and interaction histories.",
      },
      {
        title: "Qualification Scoring Engine (Prototype)",
        detail:
          "Rule-based qualification scoring calculating a fit score based on target criteria, company scale, and technology alignment.",
      },
      {
        title: "Interaction Activity Logging",
        detail:
          "Chronological notes and task scheduling interface for logging calls, email touchpoints, and scheduled follow-ups.",
      },
    ],
    challenges: [
      {
        challenge: "Standardizing Heterogeneous Lead Information",
        resolution:
          "Created flexible JSON schema attributes allowing arbitrary company metadata without breaking relational pipeline views.",
      },
      {
        challenge: "Balancing Automated Scoring with Human Judgment",
        resolution:
          "Designed override controls so sales reps can adjust automated qualification scores with manual verification notes.",
      },
    ],
    futurePlans: [
      "Connect automated web scrapers and LLM APIs to summarize company offerings automatically.",
      "Integrate two-way email tracking and automated follow-up scheduling.",
    ],
  },
  {
    id: "product-distribution",
    slug: "product-distribution",
    isPrimary: false,
    title: "Product Distribution Platform",
    tagline: "Multi-Channel Catalog & Syndication Engine",
    badge: "Exploration & Schema Design",
    statusText: "Data Schema & Workflow Exploration",
    shortDescription:
      "A project focused on product catalog organization and marketplace-oriented product content and distribution workflows.",
    demoUrl: null,
    githubUrl: null,
    heroImage: "/projects/product-distribution/hero.svg",
    gallery: [],
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
    overview:
      "An exploratory e-commerce infrastructure project focused on solving product data fragmentation. It investigates how a centralized catalog can transform single product entries into compliant data formats for various third-party marketplaces.",
    problem:
      "Merchants selling across diverse platforms face differing image requirements, attribute taxonomies, and title formats, leading to labor-intensive manual listing errors and stale inventory.",
    solution:
      "Explored a centralized Product Information Management (PIM) architecture that stores clean master records and applies transformation rules to produce marketplace-ready payloads.",
    verifiedFeatures: [
      {
        title: "Master Catalog Data Modeling",
        detail:
          "Centralized schema capturing universal SKU details, base pricing, multi-angle imagery, and comprehensive technical specifications.",
      },
      {
        title: "Attribute Mapping & Transformation Rules",
        detail:
          "Exploratory transformation logic to convert unified attributes into channel-specific requirements (character limits, tag hierarchies).",
      },
      {
        title: "Syndication Payload Formatter",
        detail:
          "Structured generation of marketplace export feeds (JSON and CSV formats) aligned with target platform specifications.",
      },
      {
        title: "Data Completeness Validation",
        detail:
          "Validation rules ensuring required fields (SKU, title, category ID, price) are present before export generation.",
      },
    ],
    challenges: [
      {
        challenge: "Handling Diverse Category Taxonomies",
        resolution:
          "Devised a hierarchical category mapping structure mapping internal store categories to disparate external taxonomy trees.",
      },
    ],
    futurePlans: [
      "Direct API integrations with marketplace vendor APIs for one-click catalog publishing.",
      "Real-time webhook listeners for inventory level synchronization across channels.",
    ],
  },
];

export const educationData = {
  degree: "Bachelor of Computer Applications (BCA)",
  status: "Currently Pursuing",
  institution: "University / BCA Program",
  overview:
    "Pursuing a formal education in computer applications with a curriculum concentrated on software engineering fundamentals, database management, algorithms, and application development.",
  highlights: [
    "Core focus on Data Structures, Algorithms, Object-Oriented Programming, and Web Technologies.",
    "Applying academic foundations directly to full-stack project development and practical problem solving.",
    "Active self-directed learning in modern JavaScript ecosystems, Next.js, and database architectures.",
  ],
};

export const journeyMilestones = [
  {
    period: "BCA Foundations",
    title: "Academic Studies & Programming Core",
    description:
      "Enrolled in Bachelor of Computer Applications, establishing a strong foundation in computer science principles, algorithmic thinking, data structures, and database management systems (DBMS).",
    badge: "Computer Science Core",
  },
  {
    period: "Frontend Focus",
    title: "Modern Web & React Ecosystem",
    description:
      "Dove deep into modern web standards: mastering semantic HTML5, responsive CSS layout systems with Tailwind CSS, core JavaScript (ES6+), and React's component-driven architecture with hooks.",
    badge: "Frontend Architecture",
  },
  {
    period: "Full-Stack Development",
    title: "Node.js & MongoDB Integration",
    description:
      "Expanded beyond the browser: learned backend server concepts with Node.js, built RESTful endpoints, and integrated MongoDB document storage for dynamic, data-driven applications.",
    badge: "Backend & Data",
  },
  {
    period: "Project Execution",
    title: "Building & Deploying MikuMantra",
    description:
      "Engineered an end-to-end e-commerce platform using Next.js App Router and MongoDB. Successfully implemented authentication, dynamic product catalog, cart/wishlist, coupon validation, order management, and Capacitor Android compilation.",
    badge: "Production Milestone",
  },
  {
    period: "Current & Forward",
    title: "Prototyping & Professional Availability",
    description:
      "Currently exploring CRM workflows and product distribution systems while actively seeking web development employment and freelance client opportunities.",
    badge: "Open For Opportunities",
  },
];

export const contactInfo = {
  heading: "Have a Project in Mind?",
  supportingText: "I'm open to suitable web development opportunities, collaborations, and freelance projects.",
  email: "mohanmanish740@gmail.com",
  github: "https://github.com/maneetunictechnology/maneet-jwell11",
  availabilityStatus: "Available for Web Development Roles & Freelance Projects",
  invitationText:
    "Whether you are hiring for an entry-level / junior web developer position, looking for a motivated developer for your team, or need a clean, functional web application built for your business, I'd love to connect.",
  responseTime: "Replies typically within 24 hours",
};

"use client";

export default function TechIcon({ name, className = "w-6 h-6", color }) {
  switch (name) {
    case "html5":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#E34F26" }}
        >
          <path d="M4 3l1.8 17 6.2 2 6.2-2 1.8-17H4z" />
          <path d="M7.5 7.5h9l-.4 4.5H8m8 3.5l-4 1.2-4-1.2-.2-2" />
        </svg>
      );
    case "css3":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#1572B6" }}
        >
          <path d="M4 3l1.8 17 6.2 2 6.2-2 1.8-17H4z" />
          <path d="M8 8h8l-.3 3.5H8.3l.3 4 3.4 1 3.4-1 .3-3" />
        </svg>
      );
    case "tailwind":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#38BDF8" }}
        >
          <path d="M6 12c.5-2.5 2-4 4.5-4 3 0 3.5 2.5 5 2.5 1.5 0 2.5-1 3-2.5-.5 2.5-2 4-4.5 4-3 0-3.5-2.5-5-2.5-1.5 0-2.5 1-3 2.5z" />
          <path d="M3 17c.5-2.5 2-4 4.5-4 3 0 3.5 2.5 5 2.5 1.5 0 2.5-1 3-2.5-.5 2.5-2 4-4.5 4-3 0-3.5-2.5-5-2.5-1.5 0-2.5 1-3 2.5z" />
        </svg>
      );
    case "javascript":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#F7DF1E" }}
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 16v-4a1 1 0 0 1 1-1h1" />
          <path d="M14 16c1.5 0 2-.8 2-1.8 0-1.8-2.2-1.3-2.2-2.4 0-.8.6-1.3 1.8-1.3.8 0 1.4.3 1.8.8" />
        </svg>
      );
    case "react":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#61DAFB" }}
        >
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "nextjs":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#FFFFFF" }}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M9 16V8l8 9.5" />
          <path d="M15 8v4" />
        </svg>
      );
    case "nodejs":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#539E43" }}
        >
          <path d="M12 2l8 4.6v9.2l-8 4.6-8-4.6V6.6L12 2z" />
          <path d="M12 7v10" />
          <path d="M7.5 9.5l4.5 2.5 4.5-2.5" />
        </svg>
      );
    case "restapi":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#A855F7" }}
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5l7 7" />
          <path d="M15.5 7.5l-7 7" />
          <path d="M9 6h6" />
        </svg>
      );
    case "integration":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#3B82F6" }}
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          <path d="M8 12h8" />
        </svg>
      );
    case "mongodb":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color: color || "#47A248" }}
        >
          <path d="M12 2C8 7 6 11 6 15a6 6 0 0 0 12 0c0-4-2-8-6-13z" />
          <path d="M12 2v20" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

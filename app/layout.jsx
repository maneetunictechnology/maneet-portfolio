import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata = {
  metadataBase: new URL("https://maneet-portfolio.vercel.app"),
  title: "MANEET — Frontend Developer | Creative Web Experiences",
  description:
    "I am a growing frontend developer passionate about creating modern, visually engaging and interactive digital experiences. I build modern and interactive web experiences through code, creativity and motion.",
  keywords: [
    "Maneet",
    "Frontend Developer",
    "Creative Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Three.js",
    "Web Portfolio",
  ],
  authors: [{ name: "MANEET", url: "https://github.com/maneetunictechnology/maneet-portfolio" }],
  creator: "MANEET",
  openGraph: {
    title: "MANEET — Frontend Developer | Creative Web Experiences",
    description:
      "I build modern and interactive web experiences through code, creativity and motion.",
    url: "https://maneet-portfolio.vercel.app",
    siteName: "MANEET Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MANEET — Frontend Developer",
    description:
      "I build modern and interactive web experiences through code, creativity and motion.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F0] font-sans antialiased selection:bg-accent selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

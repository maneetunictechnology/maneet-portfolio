import './globals.css';
import { personalInfo } from '@/lib/portfolio-data';

export const metadata = {
  metadataBase: new URL('https://maneet-portfolio.vercel.app'),
  title: {
    default: 'Maneet | Web Developer — BCA Student Portfolio',
    template: '%s | Maneet — Web Developer',
  },
  description:
    'Portfolio of Maneet, an aspiring Web Developer and BCA student specializing in React, Next.js, Node.js, and MongoDB. Explore real-world projects like MikuMantra E-Commerce.',
  keywords: [
    'Maneet',
    'Web Developer',
    'BCA Student',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'MikuMantra',
    'JavaScript',
    'Node.js',
    'MongoDB',
    'Junior Developer',
    'Freelance Web Developer',
  ],
  authors: [{ name: 'Maneet', url: 'https://github.com/maneetunictechnology/maneet-jwell11' }],
  creator: 'Maneet',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maneet-portfolio.vercel.app',
    title: 'Maneet | Web Developer — BCA Student Portfolio',
    description:
      'Explore projects, technical skills, and development journey of Maneet, an aspiring web developer building modern digital solutions.',
    siteName: 'Maneet Portfolio',
    images: [
      {
        url: '/projects/mikumantra/hero.png',
        width: 1200,
        height: 630,
        alt: 'Maneet Portfolio - MikuMantra Project Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maneet | Web Developer — BCA Student Portfolio',
    description:
      'Explore projects, technical skills, and development journey of Maneet, an aspiring web developer.',
    images: ['/projects/mikumantra/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0B0D12',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    email: personalInfo.email,
    url: 'https://maneet-portfolio.vercel.app',
    sameAs: [personalInfo.github].filter(Boolean),
    knowsAbout: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Web Development'],
    description: personalInfo.about.intro,
  };

  return (
    <html lang="en" className="dark scroll-smooth scroll-pt-24">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-primary selection:bg-accent/30 selection:text-primary antialiased">
        {children}
      </body>
    </html>
  );
}

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://maneet-portfolio.vercel.app/sitemap.xml',
  };
}

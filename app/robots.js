export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://maneet-portfolio.vercel.app/sitemap.xml",
  };
}

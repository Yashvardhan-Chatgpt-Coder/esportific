import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/coming-soon"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Claude-Web",
          "anthropic-ai",
          "ClaudeBot",
          "Google-Extended",
          "PerplexityBot",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "cohere-ai",
          "FacebookBot",
        ],
        allow: "/",
        disallow: ["/api/", "/coming-soon"],
      },
    ],
    sitemap: "https://esportific.com/sitemap.xml",
    host: "https://esportific.com",
  };
}

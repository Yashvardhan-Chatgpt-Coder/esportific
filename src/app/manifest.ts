import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Esportific – Esports Tournament Software",
    short_name: "Esportific",
    description:
      "All-in-one esports tournament software to manage teams, calculate match points, and download standings graphics.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ef3050",
    icons: [
      {
        src: "/Brand/new-logo - Copy.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

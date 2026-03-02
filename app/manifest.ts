import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amin Goni — Web Developer Portfolio",
    short_name: "Amin Goni",
    description:
      "Portfolio of Amin Goni, a fullstack web developer building scalable and efficient web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#3a7bd5",
    icons: [
      {
        src: "/img/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

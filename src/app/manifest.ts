import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ShadMinimal - Modern Next.js 16 UI Kit & Dashboard",
    short_name: "ShadMinimal",
    description: "Pixel-perfect Next.js 16 & shadcn/ui dashboard kit with 7+ templates and dynamic presets.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#00A76F",
    icons: [
      {
        src: "/assets/icons/workspaces/logo-1.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/assets/icons/workspaces/logo-1.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}

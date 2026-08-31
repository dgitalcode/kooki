import type { MetadataRoute } from "next";
import { birthdayConfig } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: birthdayConfig.title,
    short_name: birthdayConfig.shortTitle,
    description: "واحد الحكاية صغيرة معمولة من Abdo لـ Kooki ❤️",
    start_url: "/",
    display: "standalone",
    background_color: "#08070A",
    theme_color: "#08070A",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Sans_Arabic } from "next/font/google";
import { birthdayConfig } from "@/data/config";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-arabic",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: birthdayConfig.title,
  description: "واحد الحكاية صغيرة معمولة من Abdo لـ Kooki ❤️",
  applicationName: birthdayConfig.shortTitle,
  robots: { index: false, follow: false },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: birthdayConfig.shortTitle,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#08070A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoSansArabic.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Amiri, Noto_Naskh_Arabic } from "next/font/google";
import { birthdayConfig } from "@/data/config";
import "./globals.css";

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
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
      className={`${notoNaskh.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}

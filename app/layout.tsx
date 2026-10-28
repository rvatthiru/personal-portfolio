import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://personal-portfolio-eight-mocha-95.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thirunarayanan Raman | Making numbers decisive",
  description:
    "Senior Analyst, Sales Strategy & Operations at Vibrant America: planning, forecast cadence, attribution and CRM signals, and the career in data that led there.",
  openGraph: {
    title: "Thirunarayanan Raman | Making numbers decisive",
    description:
      "Watch a career in data unfold: from Power BI dashboards to a governed commercial analytics stack at Vibrant America.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Thirunarayanan Raman | Making numbers decisive",
    description: "A career in data, told as a story.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

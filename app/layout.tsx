import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thirunarayanan Raman | Data Analytics & Data Science Portfolio",
  description: "Portfolio of a Data Analytics, Business Intelligence, and Data Science professional with 4 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          {children}
        </div>
      </body>
    </html>
  );
}

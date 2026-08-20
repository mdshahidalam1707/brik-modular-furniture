import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRIK — Build Your Space",
  description: "BRIK is a premium modular furniture system designed to evolve with the way you live.",
  openGraph: {
    title: "BRIK — Build Your Space",
    description: "BRIK is a premium modular furniture system designed to evolve with the way you live.",
    type: "website",
    locale: "en_US",
    siteName: "BRIK",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRIK — Build Your Space",
    description: "BRIK is a premium modular furniture system designed to evolve with the way you live.",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

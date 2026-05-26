import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "UnbiaslyAI — The trust layer for India's information",
  description:
    "India's first AI-powered news and content platform built for 900M+ internet users. Every story comes with a 60-word summary, visible source, and Indic-language framing analysis — so you decide what to believe.",
  openGraph: {
    title: "UnbiaslyAI — The trust layer for India's information",
    description:
      "AI-verified news and content for India. 60-word summaries, visible sources, native Indic-language framing analysis.",
    url: "https://unbiasly.ai",
    siteName: "UnbiaslyAI",
    type: "website",
  },
  metadataBase: new URL("https://unbiasly.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts are loaded via <link> rather than next/font to keep the build
          environment-agnostic. next/font's Google Fonts fetch can fail in
          sandboxed CI environments — using <link> is just as fast in Next 14
          with `preconnect` and `display=swap`.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,500;1,9..144,600&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-paper text-ink antialiased grain">
        <Providers>
          <div className="min-h-screen flex flex-col relative z-0">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

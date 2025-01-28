import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Providers from "./providers";
import Navbar from "@/components/custom/Navbar";

const inter = Merriweather({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unbiasly AI",
  description: "Unbiasly AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-none" >
        <Providers>
          <Navbar />
          <main className="bg-black relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>

    </html>
  )
}

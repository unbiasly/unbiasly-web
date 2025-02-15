import type { Metadata } from "next";
import Footer from "@/components/custom/footer";
import './globals.css'
import { Providers } from "./providers";
import Navbar from "@/components/custom/Navbar";

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
        <body className="min-h-screen flex flex-col bg-black">
            <Providers>
                <Navbar /> 
                <main className="flex-1 relative overflow-hidden">
                    {children}
                </main>
                <Footer />
            </Providers>
        </body>
    </html>
  )
}

import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/custom/footer";
import Providers from "./providers";
import Navbar from "@/components/custom/Navbar";
import { Poppins } from "next/font/google";
const inter = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

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
      {/* <body className="overscroll-none" > */}
      <body className={`${inter.className} overscroll-none`}
 >

        <Providers>
          <Navbar />
          <main className=" relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>

    </html>
  )
}

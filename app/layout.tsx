import type { Metadata } from "next";
import Footer from "@/components/custom/footer";
import './globals.css'
import { Providers } from "./providers";
import Navbar from "@/components/custom/Navbar";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
      <body className={`${inter.className} overscroll-none min-h-screen flex flex-col bg-black`}
 >

        <Providers>
          <Navbar />
          <main className="flex-1 relative overflow-hidden">
            {children}
            <Toaster
                position="top-right"
                reverseOrder={true}
                toastOptions={{
                // Define default options
                className: "",
                // icon: "👏",
                duration: 3000,
                style: {
                    background: "#333",
                    color: "#fff",
                    // border: "1px solid #d9d9d9",
                    padding: "16px",
                },
                iconTheme: {
                    primary: "#000",
                    secondary: "#fff",
                },
                }}
            />
          </main>
          <Footer />
        </Providers>
      </body>

    </html>
  )
}

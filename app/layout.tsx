import type { Metadata } from "next";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { jura } from "@/fonts/jura";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { PostHogProvider } from "./providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Srinivas",
  description: "Personal Portfolio of Srinivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.className} antialiased`}>
        <MaxWidthWrapper>
          <Navbar />
          {children}
          <Footer />
        </MaxWidthWrapper>
        <Analytics />
      </body>
    </html>
  );
}

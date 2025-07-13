import type { Metadata } from "next";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { jura } from "@/fonts/jura";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Srinivas",
  description: "Personal Portfolio of Srinivas",
  openGraph: {
    title: "Srinivas",
    description: "Personal Portfolio of Srinivas",
    url: "https://nivas-portfolio-v2.vercel.app/",
    siteName: "Srinivas Portfolio",
    images: [
      {
        url: "https://nivas-portfolio-v2.vercel.app//api/og",
        width: 1200,
        height: 630,
        alt: "Srinivas Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  }
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

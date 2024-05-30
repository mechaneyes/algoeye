import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Weitzenberg",
  description: "Try to find me.",
  url: "https://nysee.nyc/",
  type: "website",
  images: "https://nysee.nyc/images/noOrdinaryMonkey.jpg",
  openGraph: {
    images: "https://nysee.nyc/images/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mechaneyes",
    title: "Ray Weitzenberg",
    description: "Try to find me.",
    image: "https://nysee.nyc/images/twitter-card.png",
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, NYSEE, NYC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👁️</text></svg>"
        />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

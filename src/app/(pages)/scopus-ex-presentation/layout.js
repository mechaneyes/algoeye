import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Present Ex Machina",
  description: "Presenting Scopus Ex Machina",
  url: "https://nysee.nyc/",
  type: "website",
  images: "https://nysee.nyc/images/og-presentation.png",
  openGraph: {
    images: "https://nysee.nyc/images/og-presentation.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mechaneyes",
    title: "Present Ex Machina",
    description: "Presenting Scopus Ex Machina",
    image: "https://nysee.nyc/images/og-presentation.png",
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, NYSee, NYC, Sacto, Sacramento, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

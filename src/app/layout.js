import { Analytics } from "@vercel/analytics/react";
import "@/app/styles/globals.css";
import "@/app/styles/styles.scss";

export const metadata = {
  title: "Algorithmic Eye",
  description: "A Growing Web of Watchers",
  url: "https://algorithmiceye.com/",
  type: "website",
  images: "https://algorithmiceye.com/images/og-scopus-ex-machina.png",
  openGraph: {
    images: "https://algorithmiceye.com/images/og-scopus-ex-machina.png",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@mechaneyes",
  //   title: "Algorithmic Eye",
  //   description: "A Growing Web of Watchers",
  //   image: "https://algorithmiceye.com/images/twitter-card.png",
  // },
  robots: "index, follow",
  keywords:
    "Algorithmic Eye, surveillance, facial recognition, zine, art, Ray Weitzenberg, photographer, artist, technologist, Brooklyn, NYC, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

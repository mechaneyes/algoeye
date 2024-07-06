import { Analytics } from "@vercel/analytics/react";
import "@/app/styles/globals.css";

export const metadata = {
  title: "NYSee",
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
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, NYSee, NYC, Sacto, Sacramento, ",
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

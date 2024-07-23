import { Analytics } from "@vercel/analytics/react";
import "@/app/styles/styles.scss";

export const metadata = {
  title: "Algoeye: Encrypted Resistance",
  description: "Algoeye One - A Guide to Digital Self-Defense",
  url: "https://algoeye.net/sheet-one",
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, NYSee, NYC, ",
};

export default function RootLayout({ children }) {
  return (
    <section>
      {children}
      <Analytics />
    </section>
  );
}

import { Analytics } from "@vercel/analytics/react";
import "@/app/styles/styles.scss";

export const metadata = {
  title: "Algoeye: Encrypted Resistance",
  description: "Algoeye Dev Mode",
  url: "https://nysee.nyc/sheet-one",
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, NYSee, NYC, Sacto, Sacramento, ",
};

export default function RootLayout({ children }) {
  return (
    <section>
      {children}
      <Analytics />
    </section>
  );
}

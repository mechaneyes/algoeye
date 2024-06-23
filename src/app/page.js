"use client";

import Link from "next/link";
import Image from "next/image";

import "@/app/styles/styles.scss";

export default function Home() {
  return (
    <div className="gossamer gossamer--home">
      <Image
        src="/images/gossamer-poster-2.jpg"
        width={1245}
        height={1920}
        className="gossamer-img gossamer-img--poster"
        alt="Gossamer Poster 3.6.2"
      />
      <Link href="/gossamer">
        <div className="gossamer__link">Gossamer v Risograph</div>
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page page--sheet-one">
      <div className="header header--sheet-one">
        <h1>Algoeye</h1>
        <h2>A Growing Web of Watchers</h2>
      </div>

      <article className="project project--sheet-one">
        <Image
          src="/images/sheet-one-page-1.jpg"
          width={1920}
          height={1080}
          className="project__img project__img--sheet-one-1"
          alt="Scopus Ex Machina Presentation Cover"
        />
        <Image
          src="/images/sheet-one-page-2.jpg"
          width={1920}
          height={1080}
          className="project__img project__img--sheet-one-2"
          alt="Scopus Ex Machina Presentation Cover"
        />
      </article>
    </div>
  );
}

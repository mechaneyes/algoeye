"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page page--sheet-one">
      <div className="header header--sheet-one">
        <h1>Algoeye</h1>
        <h2>A Guide to Digital Self-Defense</h2>
      </div>

      <article className="project project--sheet-one">
        <Image
          src="/images/sheet-one-page-3.jpg"
          width={695}
          height={900}
          className="project__img project__img--sheet-one-3"
          alt="Draft for Algoeye One's Cover"
        />
        <Image
          src="/images/sheet-one-page-1.jpg"
          width={695}
          height={900}
          className="project__img project__img--sheet-one-1"
          alt="Draft for Algoeye One's Cover"
        />
        <Image
          src="/images/sheet-one-page-2.jpg"
          width={695}
          height={900}
          className="project__img project__img--sheet-one-2"
          alt="Draft for Algoeye One's Cover"
        />
      </article>
    </div>
  );
}

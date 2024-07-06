"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1>Algorithmic Eye</h1>
        <Link href="/">
          <h2>Ray Weitzenberg</h2>
          <h4>@mechaneyes</h4>
        </Link>
        <p>Algorithmic Eye</p>
      </div>

      <article className="project">
        <Link href="/scopus-ex-presentation">
          <Image
            src="/images/scopus-ex-machina-presentation-cover.png"
            width={1920}
            height={1080}
            className="project__img project__img--sem"
            alt="Scopus Ex Machina Presentation Cover"
          />
          <div className="project__description">
            <h2>Scopus Ex Machina: Initial Ideas Presentation</h2>
            <p className="project__date">2024.07.01</p>
            <p>Scopus Ex Machina is my final project.</p>
            <p>
              I presented my initial thoughts on the project to the class via
              this slide deck.
            </p>
          </div>
        </Link>
      </article>
    </div>
  );
}

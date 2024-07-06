"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1>NYSee.nyc</h1>
        <h2>Ray Weitzenberg</h2>
        <p>
          NYSee collects projects I&apos;ve produced at RisoLAB during the
          summer of 2024.
        </p>
      </div>

      <article className="homepage__article">
        <Link href="/scopus-ex-presentation">
          <Image
            src="/images/scopus-ex-machina-presentation-cover.png"
            width={1920}
            height={1080}
            className="homepage__img homepage__img--sem"
            alt="Scopus Ex Machina Presentation Cover"
          />
          <div className="link-description">
            <h4>Scopus Ex Machina: Initial Ideas Presentation</h4>
            <h5>2024.07.01</h5>
            <p>Scopus Ex Machina is my final project.</p>
            <p>
              I presented my initial thoughts on the project to the class via
              this slide deck.
            </p>
          </div>
        </Link>
      </article>
      <article className="homepage__article">
        <Link href="/gossamer">
          <Image
            src="/images/gossamer-poster-2.jpg"
            width={1245}
            height={1920}
            className="homepage__img homepage__img--gossamer"
            alt="Gossamer Poster 3.6.2"
          />
          <div className="link-description">
            <h4>Single Sheet Zine: Gossamer</h4>
            <h5>2024.06.21</h5>
          </div>
        </Link>
      </article>
    </div>
  );
}

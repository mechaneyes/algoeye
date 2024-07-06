"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1>Algorithmic Eye</h1>
        <h2>A Growing Web of Watchers</h2>
        <Link href="/">
          <p>
            Ray Weitzenberg &nbsp; <span>@mechaneyes</span>
          </p>
        </Link>
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
            <p>
              Scopus Ex Machina is a zine investigating the surging surveillance
              aparatus with sights trained squarely on you and me.
            </p>
            <p>
              I presented my initial thoughts on the project at RisoLAB via this
              slide deck.
            </p>
          </div>
        </Link>
      </article>
    </div>
  );
}

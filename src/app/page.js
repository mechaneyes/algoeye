"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1>Algoeye</h1>
        <h2>Encrypted Resistance</h2>
      </div>

      <article className="project">
        <Image
          src="/images/issue0.5.0-cover-1920.jpg"
          width={1920}
          height={1441}
          className="project__img"
          alt="qr code for NYSee.nyc"
        />
        <h2>Design+Color Study</h2>
        <div className="project__description project__description--no-date">
          <p>Experimenting for Issue 0.5.0</p>
        </div>
      </article>

      <article className="project">
        <Link href="/scopus-ex-presentation">
          <Image
            src="/images/scopus-ex-machina-presentation-cover.png"
            width={1920}
            height={1080}
            className="project__img project__img--sem"
            alt="Scopus Ex Machina Presentation Cover"
          />
          <h2>Scopus Ex Machina: Initial Ideas Presentation</h2>
        </Link>
        <div className="project__description">
          <p className="project__date">2024.07.01</p>
          <p>
            Scopus Ex Machina is a zine investigating the surging surveillance
            aparatus with its sights trained squarely on you and me.
          </p>
          <p>
            I presented my initial thoughts on the project at RisoLAB via this
            slide deck.
          </p>
        </div>
      </article>
    </div>
  );
}

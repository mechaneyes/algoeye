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
      <article className="project">
        <Link href="/no-ordinary-duotone">
          <Image
            src="/images/no-ordinary-duotone-001-1.1.0.jpg"
            width={1245}
            height={1920}
            className="project__img"
            alt="Gossamer Poster 3.6.2"
          />
          <div className="project__description">
            <h4>No Ordinary Duotone</h4>
            <h5>2024.06.25</h5>
            <p>
              For this first duotone project, I used a photo I shot at the
              wonderful No Ordinary Monkey !!! After Party many moons ago ... on
              2005.09.16.
            </p>
            <p>
              The only thing I added to the image was the separation then
              printing of the 2 layers, Mint and Sky Blue. The wild-ish effects
              all happened in camera, leveraging a slightly longer shutter speed
              to collect the subject lit from behind with a strobe.
            </p>
          </div>
        </Link>
      </article>
      <article className="project">
        <Link href="/gossamer">
          <Image
            src="/images/gossamer-poster-2.jpg"
            width={1245}
            height={1920}
            className="project__img project__img--gossamer"
            alt="Gossamer Poster 3.6.2"
          />
          <div className="project__description">
            <h4>Single Sheet Zine: Gossamer</h4>
            <h5>2024.06.21</h5>
          </div>
        </Link>
      </article>
    </div>
  );
}

"use client";

import Image from "next/image";

import "@/app/styles/styles.scss";

export default function Home() {
  return (
    <div className="gossamer">
      <div className="hero">
        <Image
          src="/images/gossamer-poster-2.jpg"
          width={1245}
          height={1920}
          className="gossamer-img gossamer-img--hero gossamer-img--poster"
          alt="Gossamer Poster 3.6.2"
        />
        <div className="hero__copy">
          <h1>Gossamer</h1>
          <h3>2003 - 2024</h3>
          <p>
            Gossamer is a project I started in 2003 while at Parsons. I
            completely misunderstood the assignment, which was to bring in
            something other than a negative to print from.
          </p>
          <p>
            Rifiling through my stuff, the only thing I found was a harinet that
            was holding some other photo gear. This seamed like a stretch, but
            at that point I didn't have anything to loose.
          </p>
          <p>From that, Gossamer was born.</p>
        </div>
      </div>
      <Image
        src="/images/gossamer-spread.jpg"
        width={1670}
        height={1080}
        className="gossamer-img gossamer-img--spread"
        alt="Gossamer Spread"
      />
      <Image
        src="/images/gossamer-poster-1.jpg"
        width={1245}
        height={1920}
        className="gossamer-img gossamer-img--poster"
        alt="Gossamer Poster"
      />
    </div>
  );
}

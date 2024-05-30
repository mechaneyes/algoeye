import { NextResponse } from "next/server";

export const runtime = "edge";

export default function Icon() {
  const emoji = "👁️"; // Choose your desired emoji here
  const size = 80;
  const viewBox = `0 0 ${size} ${size}`;

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="${size}">
        ${emoji}
      </text>
    </svg>
  `;

  return new NextResponse(svgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}

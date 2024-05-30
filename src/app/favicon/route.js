import { ImageResponse } from "next/og";

export default function Favicon() {
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <text x="50" y="50" font-size="80" text-anchor="middle">👁️</text>
    </svg>
  `;

  return new ImageResponse(Buffer.from(svgString, "utf-8"), {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable", // Aggressive caching for a static favicon
    },
  });
}

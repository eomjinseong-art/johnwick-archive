import { ImageResponse } from "next/og";

export const alt = "존 윅 아카이브";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const text = "존 윅 아카이브2014–2025 · 작품 배우 세계관 차량 키아누 리브스";
  const font = await fetch(`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(text)}`)
    .then((r) => r.text())
    .then((css) => css.match(/src: url\((.+?)\)/)?.[1])
    .then((url) => (url ? fetch(url).then((r) => r.arrayBuffer()) : null))
    .catch(() => null);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "#0B0B0D", color: "#ECE8DF", padding: "72px", fontFamily: "NotoKR" }}>
        <div style={{ color: "#B3261E", fontSize: 28, letterSpacing: 6 }}>JOHN WICK ARCHIVE</div>
        <div style={{ marginTop: 24, fontSize: 76, color: "#C9A45A" }}>존 윅 아카이브</div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#9C9A94" }}>2014–2025 · 작품 배우 세계관 차량 키아누 리브스</div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: "NotoKR", data: font, weight: 700 }] : [] },
  );
}

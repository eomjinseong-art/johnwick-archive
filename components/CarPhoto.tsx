import { carImage } from "@/lib/car-images";

/** 위키미디어 커먼스의 같은 차종 사진. 영화에 쓰인 실제 차량은 아닙니다. */
export function CarPhoto({ slug, alt, variant = "card" }: { slug: string; alt: string; variant?: "card" | "hero" }) {
  const img = carImage(slug);
  if (!img) return null;
  if (variant === "card") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={img.src} alt={alt} width={img.w} height={img.h} loading="lazy" className="aspect-[16/10] w-full rounded-md border border-line bg-ink object-cover" />
    );
  }
  return (
    <figure className="mt-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={alt} width={img.w} height={img.h} className="max-h-[480px] w-full rounded-lg border border-line bg-ink object-cover" />
      <figcaption className="mt-2 text-[11px] leading-5 text-muted">
        같은 차종 참고 사진이며 영화에 쓰인 차량은 아닙니다. 사진{" "}
        <a className="underline" href={img.pageUrl} target="_blank" rel="noopener noreferrer">{img.author || "Wikimedia Commons"}</a>
        {" · "}
        {img.licenseUrl ? (
          <a className="underline" href={img.licenseUrl} target="_blank" rel="noopener noreferrer">{img.license}</a>
        ) : (
          img.license
        )}
        {" · Wikimedia Commons"}
      </figcaption>
    </figure>
  );
}

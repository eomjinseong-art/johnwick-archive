import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { FAN_SITE_DISCLAIMER, SISTER_SITES, sisterUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <CoupangBanner />
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <h2 className="text-xs tracking-[0.2em] text-gold">함께 보면 좋은 사이트</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SISTER_SITES.map((site) => (
            <a key={site.url} href={sisterUrl(site.url)} className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-gold/60 hover:text-gold">
              {site.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <h2 className="font-serif text-xs tracking-[0.22em] text-gold">비공식 팬사이트</h2>
        <div className="mt-3 max-w-3xl space-y-3">
          <p>{FAN_SITE_DISCLAIMER}</p>
          <p>
            본문은 공개 자료(위키백과, IMCDb 등)를 참고해 한국어로 새로 쓴 글입니다. 영화 스틸과 포스터는 쓰지 않습니다.{" "}
            <Link href="/credits" className="underline decoration-line underline-offset-4 hover:text-gold">출처와 이미지 정보</Link>
          </p>
          <p>줄거리에는 결말이 포함되어 있습니다. 권리자의 요청이 있으면 해당 내용을 고치거나 삭제합니다.</p>
        </div>
      </div>
    </footer>
  );
}

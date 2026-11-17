import { CoupangCard } from "@/components/CoupangCard";
import { FilmChip, PageTitle } from "@/components/ui";
import { world } from "@/data/world";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "세계관", description: "콘티넨탈 호텔, 하이 테이블, 금화, 마커, 파문, 루스카 로마 등 존 윅 세계관 용어 정리.", path: "/world" });

export default function WorldPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageTitle kicker="THE WORLD" title="세계관" sub="킬러들의 호텔과 규칙, 화폐와 맹세. 영화에서 직접 나오는 설정만 모았습니다." />
      <nav className="mb-8 flex flex-wrap gap-2 text-xs">
        {world.map((w) => <a key={w.slug} href={`#${w.slug}`} className="rounded-full border border-line px-3 py-1 text-muted hover:text-gold">{w.term}</a>)}
      </nav>
      <div className="space-y-6">
        {world.map((w, i) => (
          <div key={w.slug}>
            <section id={w.slug} className="scroll-mt-24 rounded-lg border border-line bg-card p-5">
              <h2 className="font-serif text-xl text-gold">{w.term} <span className="text-xs font-normal text-muted">{w.en}</span></h2>
              <div className="mt-2 space-y-2 text-sm leading-7 text-paper/90">{w.text.map((t, j) => <p key={j}>{t}</p>)}</div>
              <div className="mt-3 flex flex-wrap gap-1">{w.films.map((f) => <FilmChip key={f} slug={f} />)}</div>
            </section>
            {i === 4 ? <CoupangCard /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

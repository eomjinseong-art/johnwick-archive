import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { FilmChip, PageTitle } from "@/components/ui";
import { characters, GROUP_ORDER } from "@/data/characters";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "배우·캐릭터", description: "존 윅 시리즈의 주요 인물과 배우. 존 윅, 윈스턴, 샤론, 바워리 킹, 케인, 이브 마카로, 코맥 오코너까지.", path: "/characters" });

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <PageTitle kicker="CAST" title="배우·캐릭터" sub={`영화 4편, 《발레리나》, 《더 콘티넨탈》의 주요 인물 ${characters.length}명. 이름 옆 작품 표시를 누르면 해당 작품으로 갑니다.`} />
      <nav className="mb-6 flex flex-wrap gap-2 text-xs">
        {GROUP_ORDER.map((g) => <a key={g} href={`#g-${g}`} className="rounded-full border border-line px-3 py-1 text-muted hover:text-gold">{g}</a>)}
      </nav>
      {GROUP_ORDER.map((g, gi) => {
        const list = characters.filter((c) => c.group === g);
        if (!list.length) return null;
        return (
          <section key={g} id={`g-${g}`} className="mt-10 scroll-mt-24">
            <h2 className="font-serif text-xl text-gold">{g}</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {list.map((c) => (
                <li key={c.slug} id={c.slug} className="scroll-mt-24 rounded-lg border border-line bg-card p-4">
                  <p className="font-semibold">{c.name} <span className="text-xs font-normal text-muted">{c.nameEn}</span></p>
                  <p className="text-sm text-gold/90">{c.actor} <span className="text-xs text-muted">({c.actorEn})</span></p>
                  <p className="mt-2 text-sm leading-6 text-muted">{c.desc}</p>
                  {c.note ? <p className="mt-2 text-xs leading-5 text-muted/80">※ {c.note}</p> : null}
                  {c.slug === "john-wick" ? <Link href="/keanu" className="mt-2 inline-block text-xs text-gold underline">키아누 리브스 전기 →</Link> : null}
                  <div className="mt-3 flex flex-wrap gap-1">{c.films.map((f) => <FilmChip key={f} slug={f} />)}</div>
                </li>
              ))}
            </ul>
            {gi === 2 ? <CoupangCard /> : null}
          </section>
        );
      })}
    </div>
  );
}

import { NadooAd } from "@/components/NadooAd";
import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { cars } from "@/data/cars";
import { characters } from "@/data/characters";
import { films } from "@/data/films";
import { world } from "@/data/world";
import { pageMetadata } from "@/lib/seo";
import { SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({ title: "존 윅 아카이브", description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

export default function Home() {
  const heroCars = cars.filter((c) => c.hero);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-2xl border border-line bg-[radial-gradient(ellipse_at_top,#2a0f0f,transparent_60%)] px-6 py-12 sm:px-10">
        <p className="text-xs tracking-[0.3em] text-blood">JOHN WICK ARCHIVE</p>
        <h1 className="mt-3 font-serif text-4xl text-gold sm:text-5xl">존 윅 아카이브</h1>
        <p className="mt-4 text-lg text-paper">{SITE_TAGLINE}</p>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <Link href="/films" className="rounded-full bg-gold px-4 py-2 font-semibold text-bg hover:bg-gold/90">작품 {films.length}편</Link>
          <Link href="/cars" className="rounded-full border border-gold/60 px-4 py-2 text-gold hover:bg-gold/10">영화 속 차량 {cars.length}대</Link>
          <Link href="/keanu" className="rounded-full border border-line px-4 py-2 text-paper hover:border-gold/60">키아누 리브스 전기</Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">작품</h2>
          <Link href="/films" className="text-sm text-muted hover:text-gold">전체 보기 →</Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((f) => (
            <Link key={f.slug} href={`/films/${f.slug}`} className="block rounded-lg border border-line bg-card p-4 transition hover:border-gold/70">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-serif text-2xl text-gold tabular-nums">{f.year}</span>
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-muted">{f.kind}</span>
              </div>
              <h3 className="mt-2 font-semibold text-paper">{f.titleKo}</h3>
              <p className="text-xs text-muted">{f.titleEn}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{f.logline}</p>
            </Link>
          ))}
        </div>
      </section>

      <CoupangCard />

      <NadooAd inline />
      <section className="mt-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">존 윅의 차</h2>
          <Link href="/cars" className="text-sm text-muted hover:text-gold">차량 {cars.length}대 →</Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {heroCars.map((c) => (
            <Link key={c.slug} href={`/cars/${c.slug}`} className="block rounded-lg border border-line bg-card p-4 hover:border-gold/70">
              <p className="text-[11px] tracking-wider text-blood">{c.role}</p>
              <h3 className="mt-1 font-semibold">{c.nameKo}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{c.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <Link href="/world" className="block rounded-xl border border-line bg-card p-6 hover:border-gold/70">
          <p className="text-xs tracking-[0.2em] text-blood">세계관</p>
          <h2 className="mt-2 font-serif text-2xl text-gold">콘티넨탈과 하이 테이블</h2>
          <p className="mt-2 text-sm leading-6 text-muted">금화, 마커, 파문, 루스카 로마까지 {world.length}개 항목으로 정리했습니다.</p>
        </Link>
        <Link href="/characters" className="block rounded-xl border border-line bg-card p-6 hover:border-gold/70">
          <p className="text-xs tracking-[0.2em] text-blood">배우·캐릭터</p>
          <h2 className="mt-2 font-serif text-2xl text-gold">{characters.length}명의 인물</h2>
          <p className="mt-2 text-sm leading-6 text-muted">존 윅부터 윈스턴, 샤론, 케인, 이브, 코맥까지 배우와 함께 모았습니다.</p>
        </Link>
      </section>

      <section className="mt-12 rounded-xl border border-gold/40 bg-card p-6">
        <p className="text-xs tracking-[0.2em] text-blood">KEANU REEVES</p>
        <h2 className="mt-2 font-serif text-2xl text-gold">키아누 리브스 전기</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">베이루트에서 태어나 토론토에서 자란 아이스하키 골키퍼 소년이 네오와 존 윅이 되기까지. 생애, 대표작, 배우 밖의 이야기를 정리했습니다.</p>
        <Link href="/keanu" className="mt-4 inline-block text-sm text-gold underline">전기 읽기 →</Link>
      </section>
    </div>
  );
}

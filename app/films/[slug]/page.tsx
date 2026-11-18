import Link from "next/link";
import { notFound } from "next/navigation";
import { CoupangCard } from "@/components/CoupangCard";
import { cars } from "@/data/cars";
import { characters } from "@/data/characters";
import { filmBySlug, films } from "@/data/films";
import { pageMetadata } from "@/lib/seo";

/** 건 아카이브(gun-archive.vercel.app)의 같은 영화 페이지 slug */
const GUN_FILM: Record<string, string> = {
  "john-wick": "john-wick",
  "chapter-2": "john-wick-chapter-2",
  "chapter-3-parabellum": "john-wick-chapter-3",
  "chapter-4": "john-wick-chapter-4",
};

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = filmBySlug(slug);
  if (!film) return {};
  return pageMetadata({ title: `${film.titleKo} (${film.year})`, description: `${film.logline} ${film.plot[0]}`, path: `/films/${film.slug}` });
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = filmBySlug(slug);
  if (!film) notFound();
  const cast = characters.filter((c) => c.films.includes(film.slug));
  const filmCars = cars.filter((c) => c.appearances.some((a) => a.film === film.slug));
  const idx = films.findIndex((f) => f.slug === film.slug);
  const prev = films[idx - 1];
  const next = films[idx + 1];
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs tracking-[0.22em] text-blood">{film.kind} · {film.timeline}</p>
      <h1 className="mt-2 font-serif text-3xl text-gold sm:text-4xl">{film.titleKo}</h1>
      <p className="mt-1 text-sm text-muted">{film.titleEn} · {film.year}</p>
      <p className="mt-4 text-lg leading-8">{film.logline}</p>

      <dl className="mt-6 grid gap-x-6 gap-y-2 rounded-lg border border-line bg-card p-4 text-sm sm:grid-cols-2">
        <div><dt className="text-xs text-muted">미국 공개</dt><dd>{film.usRelease}</dd></div>
        <div><dt className="text-xs text-muted">국내 개봉</dt><dd>{film.krRelease ?? "극장 개봉 없음 (해외 프라임 비디오 공개)"}</dd></div>
        <div><dt className="text-xs text-muted">감독</dt><dd>{film.director}</dd></div>
        <div><dt className="text-xs text-muted">각본</dt><dd>{film.writer}</dd></div>
        {film.runtime ? <div><dt className="text-xs text-muted">상영 시간</dt><dd>{film.runtime}</dd></div> : null}
      </dl>

      <section className="mt-10">
        <h2 className="font-serif text-xl">줄거리 <span className="text-xs text-muted">(결말 포함)</span></h2>
        <div className="mt-3 space-y-4 leading-8 text-paper/90">
          {film.plot.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">주요 장면</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {film.scenes.map((s) => (
            <li key={s.title} className="rounded-lg border border-line bg-card p-4">
              <p className="font-semibold text-gold">{s.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CoupangCard />

      <section>
        <h2 className="font-serif text-xl">배우·캐릭터</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {cast.map((c) => (
            <li key={c.slug} className="rounded border border-line px-3 py-2 text-sm">
              <Link href={`/characters#${c.slug}`} className="text-paper hover:text-gold">{c.name}</Link>
              <span className="text-muted"> — {c.actor}</span>
            </li>
          ))}
        </ul>
      </section>

      {filmCars.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl">이 작품의 차량</h2>
          <ul className="mt-3 space-y-2">
            {filmCars.map((c) => (
              <li key={c.slug} className="rounded border border-line px-3 py-2 text-sm">
                <Link href={`/cars/${c.slug}`} className="font-semibold text-gold hover:underline">{c.nameKo}</Link>
                <p className="mt-1 text-muted">{c.appearances.find((a) => a.film === film.slug)?.text}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {GUN_FILM[film.slug] ? (
        <section className="mt-10 rounded-lg border border-line bg-card p-4 text-sm">
          <h2 className="font-serif text-lg">이 작품의 권총</h2>
          <p className="mt-1 text-muted">존이 쓴 권총과 그 역사는 자매 사이트 건 아카이브에 정리했습니다.</p>
          <a href={`https://gun-archive.vercel.app/films/${GUN_FILM[film.slug]}?utm_source=johnwick-archive&utm_medium=film-page&utm_campaign=archive-network`} className="mt-2 inline-block rounded-full border border-gold/50 px-3 py-1 text-gold hover:bg-gold/10">건 아카이브 · {film.titleKo} 속 권총 →</a>
        </section>
      ) : null}

      <p className="mt-10 text-xs text-muted">
        참고: <a className="underline" href={film.wiki} target="_blank" rel="noopener noreferrer">Wikipedia</a>
        {film.imcdb ? <> · <a className="underline" href={film.imcdb} target="_blank" rel="noopener noreferrer">IMCDb 차량 목록</a></> : null}
      </p>

      <nav className="mt-8 flex justify-between gap-4 border-t border-line pt-4 text-sm">
        {prev ? <Link href={`/films/${prev.slug}`} className="text-muted hover:text-gold">← {prev.titleKo}</Link> : <span />}
        {next ? <Link href={`/films/${next.slug}`} className="text-muted hover:text-gold">{next.titleKo} →</Link> : <span />}
      </nav>
    </article>
  );
}

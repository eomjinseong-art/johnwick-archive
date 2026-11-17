import Link from "next/link";
import { notFound } from "next/navigation";
import { CarPhoto } from "@/components/CarPhoto";
import { CoupangCard } from "@/components/CoupangCard";
import { carBySlug, cars } from "@/data/cars";
import { filmBySlug } from "@/data/films";
import { pageMetadata } from "@/lib/seo";
import { SISTER, sisterUrl } from "@/lib/site";

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = carBySlug(slug);
  if (!car) return {};
  return pageMetadata({ title: `${car.nameKo} — 존 윅 속 차량`, description: car.summary, path: `/cars/${car.slug}` });
}

export default async function CarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = carBySlug(slug);
  if (!car) notFound();
  const others = cars.filter((c) => c.slug !== car.slug && c.hero).slice(0, 6);
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/cars" className="text-xs text-muted hover:text-gold">← 영화 속 차량</Link>
      <p className="mt-4 text-xs tracking-[0.22em] text-blood">{car.kind} · {car.maker} · {car.role}</p>
      <h1 className="mt-2 font-serif text-3xl text-gold sm:text-4xl">{car.nameKo}</h1>
      <p className="mt-1 text-sm text-muted">{car.nameEn}</p>
      <CarPhoto slug={car.slug} alt={`${car.nameEn} (같은 차종 참고 사진)`} variant="hero" />
      <p className="mt-4 text-lg leading-8">{car.summary}</p>

      <section className="mt-10">
        <h2 className="font-serif text-xl">등장 장면</h2>
        <ol className="mt-3 space-y-3">
          {car.appearances.map((a) => {
            const f = filmBySlug(a.film);
            return (
              <li key={a.film} className="rounded-lg border border-line bg-card p-4">
                <Link href={`/films/${a.film}`} className="font-semibold text-gold hover:underline">{f?.titleKo} ({f?.year})</Link>
                <p className="mt-1 text-sm leading-7 text-paper/90">{a.text}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {car.notes.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl">알아 두면 좋은 점</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">{car.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </section>
      ) : null}

      <CoupangCard />

      <section>
        <h2 className="font-serif text-xl">자매 사이트에서 더 보기</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {car.sister.map((s) => (
            <li key={s.site + s.path}>
              <a href={sisterUrl(SISTER[s.site].url, "car-page", s.path)} className="inline-block rounded-full border border-gold/50 px-3 py-1 text-gold hover:bg-gold/10">
                {SISTER[s.site].label} · {s.label} →
              </a>
            </li>
          ))}
          {(["bond", "mi"] as const).map((k) => (
            <li key={k}><a href={sisterUrl(SISTER[k].url, "car-page", "/cars")} className="inline-block rounded-full border border-line px-3 py-1 text-muted hover:text-gold">{SISTER[k].label} 차량</a></li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">출처</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted">
          {car.sources.map((s) => <li key={s.url}><a href={s.url} className="underline" target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        </ul>
      </section>

      <section className="mt-10 border-t border-line pt-6">
        <h2 className="font-serif text-lg">다른 주요 차량</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {others.map((o) => <Link key={o.slug} href={`/cars/${o.slug}`} className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:text-gold">{o.nameKo}</Link>)}
        </div>
      </section>
    </article>
  );
}

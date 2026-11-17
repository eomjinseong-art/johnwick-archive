import Link from "next/link";
import { filmBySlug } from "@/data/films";

export function PageTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <header className="mb-8">
      {kicker ? <p className="text-xs tracking-[0.22em] text-blood">{kicker}</p> : null}
      <h1 className="mt-2 font-serif text-3xl text-gold sm:text-4xl">{title}</h1>
      {sub ? <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{sub}</p> : null}
    </header>
  );
}

export function FilmChip({ slug }: { slug: string }) {
  const film = filmBySlug(slug);
  if (!film) return null;
  return (
    <Link href={`/films/${film.slug}`} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted hover:border-gold/60 hover:text-gold">
      {film.titleKo}
    </Link>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-xl text-paper">{children}</h2>;
}

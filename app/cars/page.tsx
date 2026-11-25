import { NadooAd } from "@/components/NadooAd";
import Link from "next/link";
import { CarPhoto } from "@/components/CarPhoto";
import { CoupangCard } from "@/components/CoupangCard";
import { FilmChip, PageTitle } from "@/components/ui";
import { cars } from "@/data/cars";
import { films } from "@/data/films";
import { pageMetadata } from "@/lib/seo";
import { SISTER, sisterUrl } from "@/lib/site";

export const metadata = pageMetadata({ title: "영화 속 차량", description: "존 윅의 1969 머스탱 마하 1, 1970 셰벨 SS, 2011 닷지 차저, 4편 1971 플리머스 쿠다, 발레리나의 셸비 GT350까지 시리즈 속 차량 정리.", path: "/cars" });

export default function CarsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <PageTitle kicker="CARS & BIKES" title="영화 속 차량" sub={`시리즈에 나온 차량 ${cars.length}종. IMCDb(인터넷 영화 차량 데이터베이스) 기록과 자동차 매체 기사로 확인한 것만 적었습니다.`} />

      {films.map((f, i) => {
        const list = cars.filter((c) => c.appearances.some((a) => a.film === f.slug));
        if (!list.length) return null;
        return (
          <section key={f.slug} className="mt-10">
            <h2 className="font-serif text-xl"><Link href={`/films/${f.slug}`} className="text-gold hover:underline">{f.titleKo}</Link> <span className="text-xs text-muted">{f.year}</span></h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {list.map((c) => (
                <li key={c.slug}>
                  <Link href={`/cars/${c.slug}`} className="block h-full rounded-lg border border-line bg-card p-4 hover:border-gold/70">
                    <CarPhoto slug={c.slug} alt={`${c.nameEn} (같은 차종 참고 사진)`} />
                    <p className="mt-3 text-[11px] tracking-wider text-blood">{c.kind} · {c.role}</p>
                    <p className="mt-1 font-semibold">{c.nameKo}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{c.appearances.find((a) => a.film === f.slug)?.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
            {i === 1 ? <CoupangCard /> : null}
          </section>
        );
      })}

      <p className="mt-10 text-xs leading-6 text-muted">차량 사진은 위키미디어 커먼스에 공개 라이선스로 올라온 같은 차종 사진입니다. 영화에 쓰인 차량이 아니며, 작가와 라이선스는 각 차량 페이지와 <Link href="/credits" className="underline">출처</Link> 페이지에 적었습니다.</p>

      <NadooAd inline />
      <section className="mt-12 rounded-xl border border-line bg-card p-5">
        <h2 className="font-serif text-xl text-gold">다른 영화 속 차량 아카이브</h2>
        <p className="mt-2 text-sm text-muted">모델별 자세한 이야기와 다른 영화 속 명차는 자매 사이트에서 이어집니다.</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {Object.values(SISTER).map((s) => (
            <li key={s.url}><a href={sisterUrl(s.url, "cars-page", s.url.includes("motors") ? "/" : "/cars")} className="rounded-full border border-line px-3 py-1 text-muted hover:border-gold/60 hover:text-gold">{s.label}</a></li>
          ))}
        </ul>
      </section>
      <div className="mt-6 flex flex-wrap gap-1">{films.map((f) => <FilmChip key={f.slug} slug={f.slug} />)}</div>
    </div>
  );
}

import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { PageTitle } from "@/components/ui";
import { films } from "@/data/films";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "작품", description: "존 윅 영화 4편과 스핀오프 영화 《발레리나》, TV 시리즈 《더 콘티넨탈》의 개봉일·감독·줄거리.", path: "/films" });

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <PageTitle kicker="FILMS & SERIES" title="작품" sub="본편 영화 4편과 스핀오프 영화 1편, TV 미니시리즈 1편. 줄거리에는 결말이 들어 있습니다." />
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-card text-xs text-muted">
            <tr><th className="px-3 py-2">작품</th><th className="px-3 py-2">구분</th><th className="px-3 py-2">미국 개봉</th><th className="px-3 py-2">국내 개봉</th><th className="px-3 py-2">감독</th></tr>
          </thead>
          <tbody>
            {films.map((f) => (
              <tr key={f.slug} className="border-t border-line align-top">
                <td className="px-3 py-3"><Link href={`/films/${f.slug}`} className="font-semibold text-gold hover:underline">{f.titleKo}</Link><div className="text-xs text-muted">{f.titleEn}</div></td>
                <td className="px-3 py-3 text-muted">{f.kind}<div className="text-xs">{f.timeline}</div></td>
                <td className="px-3 py-3">{f.usRelease}</td>
                <td className="px-3 py-3">{f.krRelease ?? "—"}</td>
                <td className="px-3 py-3 text-muted">{f.director}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CoupangCard />
      <section>
        <h2 className="font-serif text-xl">이야기 순서로 보기</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-muted">
          <li>《더 콘티넨탈》 — 1970년대, 젊은 윈스턴 이야기</li>
          <li>《존 윅》 → 《존 윅 - 리로드》 → 《존 윅 3: 파라벨룸》 (세 편이 거의 이어진 시간)</li>
          <li>《발레리나》 — 3편과 4편 사이</li>
          <li>《존 윅 4》</li>
        </ol>
      </section>
    </div>
  );
}

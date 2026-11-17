import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { PageTitle } from "@/components/ui";
import { keanuFacts, keanuFilms, keanuLife } from "@/data/keanu";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "키아누 리브스 전기",
  description: "존 윅을 연기한 키아누 리브스의 생애와 대표작. 베이루트 출생, 토론토 성장, 매트릭스의 네오, 존 윅, 밴드 도그스타와 ARCH 모터사이클까지.",
  path: "/keanu",
});

export default function KeanuPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <PageTitle kicker="BIOGRAPHY" title="키아누 리브스" sub="존 윅을 연기한 배우. 1964년 베이루트에서 태어나 토론토에서 자랐고, 네오와 존 윅으로 두 번 액션 영화의 얼굴이 됐다." />

      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/keanu-reeves-tiff-2025.jpg" alt="2025년 토론토 국제영화제의 키아누 리브스" width={240} height={300} className="w-full rounded-lg border border-line object-cover" />
          <figcaption className="mt-2 text-[11px] leading-5 text-muted">
            2025년 토론토 국제영화제. 사진{" "}
            <a className="underline" href="https://commons.wikimedia.org/wiki/File:Keanu_Reeves_at_TIFF_2025_02_(Cropped).jpg" target="_blank" rel="noopener noreferrer">Gabriel Hutchinson</a>,{" "}
            <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          </figcaption>
        </figure>
        <dl className="grid content-start gap-2 rounded-lg border border-line bg-card p-4 text-sm">
          {keanuFacts.map((f) => (
            <div key={f.label} className="grid grid-cols-[72px_1fr] gap-2"><dt className="text-muted">{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>
      </div>

      {keanuLife.map((sec, i) => (
        <section key={sec.title} className="mt-10">
          <h2 className="font-serif text-xl text-gold">{sec.title}</h2>
          <div className="mt-3 space-y-3 leading-8 text-paper/90">{sec.text.map((t, j) => <p key={j}>{t}</p>)}</div>
          {i === 2 ? <CoupangCard /> : null}
        </section>
      ))}

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">대표 필모그래피</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-card text-xs text-muted"><tr><th className="px-3 py-2">연도</th><th className="px-3 py-2">작품</th><th className="px-3 py-2">역할</th></tr></thead>
            <tbody>
              {keanuFilms.map((f) => (
                <tr key={f.year + f.title} className={`border-t border-line ${f.jw ? "bg-blood/10" : ""}`}>
                  <td className="px-3 py-2 tabular-nums text-muted">{f.year}</td>
                  <td className="px-3 py-2">{f.title}</td>
                  <td className="px-3 py-2 text-muted">{f.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted">붉은 줄은 존 윅 시리즈입니다. <Link href="/films" className="underline">작품 보기</Link></p>
      </section>

      <section className="mt-10 rounded-lg border border-line bg-card p-4 text-sm leading-7 text-muted">
        <h2 className="font-serif text-lg text-paper">함께 보기</h2>
        <ul className="mt-2 list-disc pl-5">
          <li><Link href="/characters#john-wick" className="underline">존 윅 캐릭터</Link></li>
          <li><Link href="/cars/yamaha-mt09" className="underline">3편의 야마하 MT-09</Link> — 오토바이 마니아 키아누</li>
          <li><a href="https://tinalinkeom.vercel.app/keanu?utm_source=johnwick-archive&utm_medium=keanu&utm_campaign=archive-network" className="underline">티나 허브의 키아누 리브스 전기</a> — 더 긴 인생 이야기와 출연작</li>
          <li><a href="https://nadoo-people.vercel.app/?utm_source=johnwick-archive&utm_medium=keanu&utm_campaign=archive-network" className="underline">나두인물</a> — 영화로 만나는 실존 인물 이야기</li>
        </ul>
        <p className="mt-3 text-xs">참고: <a className="underline" href="https://en.wikipedia.org/wiki/Keanu_Reeves" target="_blank" rel="noopener noreferrer">Wikipedia — Keanu Reeves</a></p>
      </section>
    </article>
  );
}

import { PageTitle } from "@/components/ui";
import { films } from "@/data/films";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "출처", description: "존 윅 아카이브가 참고한 자료와 이미지 출처.", path: "/credits" });

const EXTRA = [
  { label: "Wikipedia — Keanu Reeves", url: "https://en.wikipedia.org/wiki/Keanu_Reeves" },
  { label: "위키백과 — 존 윅 (프랜차이즈)", url: "https://ko.wikipedia.org/wiki/%EC%A1%B4_%EC%9C%85" },
  { label: "SlashGear — The Most Iconic Vehicles From The John Wick Franchise", url: "https://www.slashgear.com/2238567/john-wick-car-models-most-iconic-vehicles/" },
  { label: "TopSpeed — John Wick's Epic Muscle Car Collection", url: "https://www.topspeed.com/a-deep-dive-into-john-wicks-epic-muscle-car-collection/" },
  { label: "Driving.ca — John Wick's killer rides", url: "https://driving.ca/auto-news/entertainment/john-wick-killer-rides" },
  { label: "Screen Rant — John Wick 3 motorcycle", url: "https://screenrant.com/john-wick-3-movie-motorcycle-cost/" },
];

export default function CreditsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageTitle title="출처" sub="개봉일·감독·출연진은 각 작품의 위키백과 정보와 국내 개봉 기록을, 차량은 IMCDb와 자동차 매체 기사를 기준으로 했습니다. 줄거리와 설명은 한국어로 새로 썼습니다." />
      <section>
        <h2 className="font-serif text-xl">작품별 자료</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
          {films.map((f) => (
            <li key={f.slug}>
              {f.titleKo} — <a className="underline" href={f.wiki} target="_blank" rel="noopener noreferrer">Wikipedia</a>
              {f.imcdb ? <> · <a className="underline" href={f.imcdb} target="_blank" rel="noopener noreferrer">IMCDb</a></> : null}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-xl">그 밖의 자료</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
          {EXTRA.map((e) => <li key={e.url}><a className="underline" href={e.url} target="_blank" rel="noopener noreferrer">{e.label}</a></li>)}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-xl">이미지</h2>
        <p className="mt-2 text-sm leading-7 text-muted">포스터와 영화 스틸은 쓰지 않습니다. 키아누 리브스 사진: Gabriel Hutchinson, 위키미디어 공용, CC BY-SA 4.0.</p>
      </section>
    </div>
  );
}

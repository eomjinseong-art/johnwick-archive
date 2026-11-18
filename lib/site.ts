export const SITE_NAME = "존 윅 아카이브";
export const SITE_TAGLINE = "2014년 《존 윅》부터 《발레리나》와 《더 콘티넨탈》까지";
export const SITE_SUB =
  "영화 4편과 스핀오프 영화·TV 시리즈, 배우와 캐릭터, 콘티넨탈 호텔과 하이 테이블 세계관, 영화 속 차량, 키아누 리브스 전기를 모았습니다.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://johnwick-archive.vercel.app";

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

/** Abacus visitor counter. One hit per browser per local day; test traffic is excluded. */
export const ABACUS_NAMESPACE = "johnwick-archive";
export const ABACUS_KEY = "visits";
export const ABACUS_STORAGE_KEY = "johnwick-archive:visits:day";
export const PROD_HOSTS = ["johnwick-archive.vercel.app"];

export const FAN_SITE_DISCLAIMER =
  "존 윅 아카이브는 영화를 좋아하는 팬이 만든 비공식 팬사이트입니다. 라이온스게이트, 서밋 엔터테인먼트, 썬더 로드, 87일레븐, 배우·제작진과 어떤 관계도 없으며, '존 윅(John Wick)'과 영화 제목·상표는 각 권리자의 것입니다.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/films", label: "작품" },
  { href: "/characters", label: "배우·캐릭터" },
  { href: "/world", label: "세계관" },
  { href: "/cars", label: "영화 속 차량" },
  { href: "/keanu", label: "키아누 리브스" },
  { href: "/credits", label: "출처" },
] as const;

function utm(base: string, path = "/", medium = "footer") {
  const url = new URL(path, base);
  url.searchParams.set("utm_source", "johnwick-archive");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "archive-network");
  return url.toString();
}

export const SISTER = {
  usa: { label: "미국차 컬렉션 아카이브", url: "https://usa-motors.vercel.app" },
  british: { label: "영국차 아카이브", url: "https://british-motors.vercel.app" },
  italian: { label: "이탈리아차 아카이브", url: "https://italian-motors.vercel.app" },
  ff: { label: "분노의 질주 아카이브", url: "https://ff-archive.vercel.app" },
  bond: { label: "007 본드 아카이브", url: "https://bond-archive-two.vercel.app" },
  mi: { label: "미션 임파서블 아카이브", url: "https://mi-archive.vercel.app" },
} as const;

export type SisterKey = keyof typeof SISTER;

export const SISTER_SITES = [
  SISTER.usa,
  SISTER.british,
  SISTER.italian,
  SISTER.ff,
  SISTER.bond,
  SISTER.mi,
  { label: "건 아카이브 (영화 속 권총)", url: "https://gun-archive.vercel.app" },
  { label: "영화 체크리스트", url: "https://movie-checklist-sigma.vercel.app" },
  { label: "나두인물", url: "https://nadoo-people.vercel.app" },
  { label: "나두 허브", url: "https://tinalinkeom.vercel.app" },
] as const;

export function sisterUrl(url: string, medium = "footer", path = "/") {
  return utm(url, path, medium);
}

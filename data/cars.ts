import type { SisterKey } from "@/lib/site";

export type CarAppearance = { film: string; text: string };
export type SisterLink = { site: SisterKey; path: string; label: string };

export type Car = {
  slug: string;
  nameKo: string;
  nameEn: string;
  kind: "자동차" | "오토바이";
  maker: string;
  role: string;
  hero?: boolean;
  summary: string;
  appearances: CarAppearance[];
  notes: string[];
  sister: SisterLink[];
  sources: { label: string; url: string }[];
};

const IMCDB = {
  jw1: { label: "IMCDb — John Wick (2014)", url: "https://www.imcdb.org/movie.php?id=2911666" },
  jw2: { label: "IMCDb — John Wick: Chapter 2", url: "https://www.imcdb.org/movie.php?id=4425200" },
  jw3: { label: "IMCDb — John Wick: Chapter 3", url: "https://www.imcdb.org/movie.php?id=6146586" },
  jw4: { label: "IMCDb — John Wick: Chapter 4", url: "https://www.imcdb.org/movie.php?id=10366206" },
  ballerina: { label: "IMCDb — Ballerina (2025)", url: "https://www.imcdb.org/movie.php?id=7181546" },
  continental: { label: "IMCDb — The Continental (2023)", url: "https://www.imcdb.org/m6486762.html" },
};
const SLASHGEAR = { label: "SlashGear — The Most Iconic Vehicles From The John Wick Franchise", url: "https://www.slashgear.com/2238567/john-wick-car-models-most-iconic-vehicles/" };
const TOPSPEED = { label: "TopSpeed — John Wick's Muscle Car Collection", url: "https://www.topspeed.com/a-deep-dive-into-john-wicks-epic-muscle-car-collection/" };
const DRIVING = { label: "Driving.ca — John Wick's killer rides", url: "https://driving.ca/auto-news/entertainment/john-wick-killer-rides" };

export const cars: Car[] = [
  {
    slug: "ford-mustang-mach1-1969",
    nameKo: "1969 포드 머스탱 마하 1",
    nameEn: "1969 Ford Mustang Mach 1",
    kind: "자동차",
    maker: "포드",
    role: "존의 차 · 모든 일의 시작",
    hero: true,
    summary: "이오세프 일당이 훔쳐 간 존의 검은 머스탱. 강아지 데이지와 함께 1편의 복수를 부른 차다.",
    appearances: [
      { film: "john-wick", text: "주유소에서 이오세프가 이 차를 ‘보스 429’라 부르며 팔라고 하고, 그날 밤 존의 집에서 훔쳐 간다. 아우렐리오의 정비소는 차 주인이 존인 걸 알고 작업을 거절한다." },
      { film: "chapter-2", text: "오프닝에서 존이 아브람 타라소프의 창고에 들어가 되찾는다. 창고를 빠져나오며 차로 들이받고 들이받히다 엉망이 되고, 아우렐리오가 수리를 맡는다." },
    ],
    notes: [
      "극중 대사로는 ‘보스 429’로 불리지만, 자동차 매체들은 실제 촬영 차가 마하 1이라고 짚는다. 보스 429는 매우 비싼 희소 모델이라 비슷한 마하 1을 꾸며 썼다는 설명이다.",
      "1편 주유소 장면에서 존은 차를 1970년식이냐는 말에 1969년식이라고 고쳐 준다.",
    ],
    sister: [
      { site: "usa", path: "/cars/ford-mustang", label: "포드 머스탱 모델 페이지" },
      { site: "ff", path: "/cars", label: "분노의 질주 속 머스탱·머슬카" },
    ],
    sources: [IMCDB.jw1, IMCDB.jw2, SLASHGEAR, DRIVING],
  },
  {
    slug: "chevrolet-chevelle-ss-1970",
    nameKo: "1970 쉐보레 셰벨 SS 396",
    nameEn: "1970 Chevrolet Chevelle SS 396",
    kind: "자동차",
    maker: "쉐보레",
    role: "머스탱을 잃은 뒤 존의 발",
    hero: true,
    summary: "짙은 녹색에 흰 줄무늬. 머스탱을 도둑맞은 뒤 존이 복수를 위해 모는 머슬카다.",
    appearances: [
      { film: "john-wick", text: "머스탱을 잃은 존이 이 셰벨을 몰고 다닌다. 마지막 추격전에는 나오지 않는다." },
      { film: "chapter-2", text: "오프닝. 존이 셰벨로 오토바이를 쫓다 옆구리로 들이받아 세운다. 이 충돌로 차도 크게 망가진다." },
      { film: "chapter-4", text: "IMCDb는 4편에도 1970 셰벨이 잠깐 나온다고 기록한다." },
    ],
    notes: [
      "SS 454 LS6로 소개되는 경우도 있지만, 앞 펜더 엠블럼이 396이라는 지적이 있다(TopSpeed, Driving.ca).",
    ],
    sister: [
      { site: "usa", path: "/cars/chevrolet-chevelle", label: "쉐보레 셰벨 모델 페이지" },
      { site: "ff", path: "/cars/chevelle-ss-1970", label: "분노의 질주의 1970 셰벨 SS" },
    ],
    sources: [IMCDB.jw1, IMCDB.jw2, IMCDB.jw4, TOPSPEED, DRIVING],
  },
  {
    slug: "dodge-charger-2011",
    nameKo: "2011 닷지 차저 SXT",
    nameEn: "2011 Dodge Charger SXT",
    kind: "자동차",
    maker: "닷지",
    role: "1편 클라이맥스",
    hero: true,
    summary: "엠블럼을 뗀 검은 4도어 차저. 1편 마지막 추격전에서 존이 비고 일당을 들이받는 데 쓴다.",
    appearances: [
      { film: "john-wick", text: "클라이맥스. 존은 이 차로 비고 일당의 차를 쫓아 들이받고 부하들을 처리한다. 차는 결국 부두 아래로 떨어진다." },
    ],
    notes: [
      "트림 표시는 떼어졌지만 한 장면에서 펜더의 ‘HEMI’ 엠블럼이 보인다는 지적이 있다(TopSpeed, HotCars).",
      "시리즈에서 존이 모는 차 가운데 드문 현대식 세단이다.",
    ],
    sister: [
      { site: "usa", path: "/cars/dodge-charger", label: "닷지 차저 모델 페이지" },
      { site: "ff", path: "/cars/charger-2010", label: "분노의 질주의 2010 차저" },
    ],
    sources: [IMCDB.jw1, TOPSPEED, SLASHGEAR],
  },
  {
    slug: "plymouth-cuda-1971",
    nameKo: "1971 플리머스 쿠다",
    nameEn: "1971 Plymouth 'Cuda (Barracuda)",
    kind: "자동차",
    maker: "플리머스",
    role: "4편 파리 개선문",
    hero: true,
    summary: "4편 파리 밤거리를 달리는 검은 쿠다. 문짝이 떨어져 나간 채 개선문 로터리에서 총격전을 벌인다.",
    appearances: [
      { film: "chapter-4", text: "결투 장소로 가는 밤, 존은 쿠다를 몰고 파리를 달린다. 개선문을 도는 차들 사이에서 차를 돌려 가며 킬러들을 쏘고, 문짝 없는 차로 싸운다." },
    ],
    notes: [
      "IMCDb는 이 차를 4편의 주요 차량(별 3개)으로 기록한다.",
      "정확한 엔진 사양은 공개되지 않았다. 매체마다 440 식스팩, 426 헤미 등 추정이 엇갈린다.",
      "SlashGear는 팟캐스트 진행자 조 로건이 채드 스타헬스키 감독에게 3편에 머슬카가 없다고 아쉬워했고, 이후 71년식 쿠다를 제안했다는 일화를 소개한다.",
    ],
    sister: [{ site: "usa", path: "/cars/plymouth-barracuda", label: "플리머스 바라쿠다 모델 페이지" }],
    sources: [IMCDB.jw4, SLASHGEAR, DRIVING, TOPSPEED],
  },
  {
    slug: "ford-shelby-gt350-2016",
    nameKo: "2016 포드 셸비 GT350",
    nameEn: "2016 Ford Shelby GT350 (S550)",
    kind: "자동차",
    maker: "포드",
    role: "《발레리나》 이브의 차",
    hero: true,
    summary: "이브가 오스트리아 할슈타트로 향할 때 모는 검은 셸비. 존의 머스탱과 같은 머스탱 혈통이다.",
    appearances: [
      { film: "ballerina", text: "영화 중반에서 3막으로 넘어가는 대목. 이브가 눈과 얼음 덮인 산길을 달려 교단의 본거지 할슈타트로 간다. 이후 차를 두고 걸어서 싸운다." },
    ],
    notes: ["IMCDb는 별 3개(주요 차량)로 기록하고, 트랙 팩이 달린 2016–2018년형 미국 사양이라는 의견이 달려 있다."],
    sister: [
      { site: "usa", path: "/cars/ford-mustang-shelby-gt350", label: "셸비 GT350 모델 페이지" },
      { site: "usa", path: "/cars/ford-mustang", label: "포드 머스탱 모델 페이지" },
    ],
    sources: [{ label: "IMCDb — 2016 Ford Shelby GT 350 in Ballerina", url: "https://www.imcdb.org/v001948069.html" }, IMCDB.ballerina, SLASHGEAR],
  },
  {
    slug: "range-rover-1995",
    nameKo: "1995 레인지로버 (2세대)",
    nameEn: "1995 Land Rover Range Rover Series II",
    kind: "자동차",
    maker: "랜드로버",
    role: "3편 소피아의 차",
    summary: "카사블랑카에서 소피아가 존을 태우고 사막으로 가는 녹색 레인지로버.",
    appearances: [
      { film: "chapter-3-parabellum", text: "소피아가 존을 태우고 베라다를 만나러 가고, 싸움 끝에 사막까지 데려다준다. 존은 여기서부터 걸어서 장로를 찾아간다." },
    ],
    notes: ["시리즈가 머슬카만 고집하지 않는다는 걸 보여 주는 고급 오프로더."],
    sister: [{ site: "british", path: "/cars/range-rover", label: "레인지로버 모델 페이지" }],
    sources: [IMCDB.jw3, SLASHGEAR],
  },
  {
    slug: "range-rover-sport-2014",
    nameKo: "2014 레인지로버 스포츠",
    nameEn: "2014 Land Rover Range Rover Sport",
    kind: "자동차",
    maker: "랜드로버",
    role: "2편 산티노 쪽 차량",
    summary: "2편에서 악당 쪽 부하들이 타고 다니는 흰색 레인지로버 스포츠 두 대.",
    appearances: [{ film: "chapter-2", text: "같은 흰색 차 두 대가 여러 장면에서 악당 부하들의 차로 나온다(IMCDb 기록)." }],
    notes: [],
    sister: [{ site: "british", path: "/cars/range-rover-sport", label: "레인지로버 스포츠 모델 페이지" }],
    sources: [IMCDB.jw2],
  },
  {
    slug: "rolls-royce-ghost-2015",
    nameKo: "2015 롤스로이스 고스트",
    nameEn: "2015 Rolls-Royce Ghost Series II",
    kind: "자동차",
    maker: "롤스로이스",
    role: "2편 샤론이 모는 차",
    summary: "2편 끝무렵, 샤론이 존과 강아지를 태우고 윈스턴에게 데려가는 차.",
    appearances: [{ film: "chapter-2", text: "존이 강아지와 함께 뒷좌석에 탄다. 시리즈에서 드물게 부서지지 않고 퇴장하는 차다." }],
    notes: [],
    sister: [{ site: "british", path: "/brands/rolls-royce", label: "롤스로이스 브랜드 페이지" }],
    sources: [IMCDB.jw2, SLASHGEAR],
  },
  {
    slug: "mercedes-e-class-w212",
    nameKo: "메르세데스-벤츠 E클래스 (W212)",
    nameEn: "Mercedes-Benz E-Class W212",
    kind: "자동차",
    maker: "메르세데스-벤츠",
    role: "2편 카시안의 차",
    summary: "2편 로마에서 카시안이 존을 들이받는 데 쓴 세단.",
    appearances: [{ film: "chapter-2", text: "카시안이 이 차로 존을 들이받고, 이어지는 총격전에서 비슷한 차 한 대가 더 부서진다(IMCDb 기록)." }],
    notes: [],
    sister: [],
    sources: [IMCDB.jw2],
  },
  {
    slug: "nissan-maxima-2007",
    nameKo: "2007 닛산 맥시마",
    nameEn: "2007 Nissan Maxima",
    kind: "자동차",
    maker: "닛산",
    role: "2편 오프닝 추격",
    summary: "2편 오프닝에서 부하들이 존의 차를 들이받으려다 머스탱에 옆구리를 받히는 차.",
    appearances: [{ film: "chapter-2", text: "아브람의 부하들이 존의 차에 부딪쳐 오고, 존은 머스탱으로 맞받아친다(IMCDb 기록)." }],
    notes: [],
    sister: [],
    sources: [IMCDB.jw2],
  },
  {
    slug: "lexus-rx400h-2006",
    nameKo: "2006 렉서스 RX 400h",
    nameEn: "2006 Lexus RX 400h",
    kind: "자동차",
    maker: "렉서스",
    role: "존의 차고",
    summary: "존의 집 차고에 머스탱과 함께 서 있는 SUV.",
    appearances: [
      { film: "john-wick", text: "IMCDb에 기록된 존의 차고 속 SUV." },
      { film: "chapter-2", text: "같은 차가 다시 차고에 보인다는 IMCDb 이용자 기록이 있다. 헬렌의 차였을 것이라는 의견도 있지만 영화에서 밝혀지지는 않는다." },
    ],
    notes: [],
    sister: [],
    sources: [IMCDB.jw1, IMCDB.jw2],
  },
  {
    slug: "chapter-2-classics",
    nameKo: "2편 속 클래식 머슬카들",
    nameEn: "1966 Mustang · 1968 Camaro · 1969 Shelby GT350 · 1970 Charger · Road Runner",
    kind: "자동차",
    maker: "포드 · 쉐보레 · 닷지 · 플리머스",
    role: "2편 배경 차량",
    summary: "IMCDb가 2편에서 찾아 기록한 클래식카들. 1966 포드 머스탱, 1968 쉐보레 카마로, 1969 셸비 GT350, 1970 닷지 차저, 플리머스 로드러너가 목록에 있다.",
    appearances: [{ film: "chapter-2", text: "1969 셸비 GT350은 영화 시작 3분쯤에 보인다는 IMCDb 이용자 기록이 있다. 나머지는 배경으로 스치듯 나온다." }],
    notes: [],
    sister: [
      { site: "usa", path: "/cars/ford-mustang-shelby-gt350", label: "셸비 GT350" },
      { site: "ff", path: "/cars/charger-rt-1970", label: "분노의 질주의 1970 차저" },
      { site: "usa", path: "/movie-cars", label: "영화 속 미국차" },
    ],
    sources: [IMCDB.jw2],
  },
  {
    slug: "fiat-500-2007",
    nameKo: "2007 피아트 500",
    nameEn: "2007 Fiat 500",
    kind: "자동차",
    maker: "피아트",
    role: "2편 로마 거리",
    summary: "2편 로마 장면에 등장하는 작은 피아트 500 (IMCDb 기록). 2012 피아트 푼토도 함께 기록돼 있다.",
    appearances: [{ film: "chapter-2", text: "로마 거리 장면의 배경 차량." }],
    notes: [],
    sister: [
      { site: "italian", path: "/cars/fiat-500-2007", label: "피아트 500 (2007) 모델 페이지" },
      { site: "italian", path: "/cars/fiat-punto", label: "피아트 푼토 모델 페이지" },
    ],
    sources: [IMCDB.jw2],
  },
  {
    slug: "yamaha-mt09",
    nameKo: "야마하 MT-09",
    nameEn: "Yamaha MT-09",
    kind: "오토바이",
    maker: "야마하",
    role: "3편 다리 위 칼싸움",
    hero: true,
    summary: "3편에서 존과 칼을 든 킬러들이 함께 탄 오토바이. 시리즈에서 손꼽히는 추격 장면을 만들었다.",
    appearances: [{ film: "chapter-3-parabellum", text: "존이 MT-09을 타고 달리고, 같은 오토바이를 탄 킬러들이 칼을 휘두르며 따라붙는다. 실제 주행과 리그 촬영, CG를 섞어 찍었다." }],
    notes: [
      "한국 영화 《악녀》(2017)의 오토바이 장면에 대한 오마주로 알려져 있다.",
      "키아누 리브스는 실제로 오토바이 마니아이며, 2011년 ARCH 모터사이클을 공동 창업했다.",
    ],
    sister: [],
    sources: [IMCDB.jw3, { label: "Screen Rant — John Wick 3 motorcycle", url: "https://screenrant.com/john-wick-3-movie-motorcycle-cost/" }, SLASHGEAR],
  },
  {
    slug: "aprilia-660-2020",
    nameKo: "2020 아프릴리아 660",
    nameEn: "2020 Aprilia RS 660 / Tuono 660",
    kind: "오토바이",
    maker: "아프릴리아",
    role: "4편 개선문 이후",
    summary: "4편 개선문 총격전 직후 존이 갈아타는 이탈리아 오토바이.",
    appearances: [{ film: "chapter-4", text: "쿠다를 버린 존이 이 오토바이로 파리 거리를 달리다, 앞바퀴를 들어 올린 채 뛰어내려 오토바이를 적들에게 날려 보낸다." }],
    notes: ["IMCDb는 2020 아프릴리아 RS 660(별 3개)으로, SlashGear는 투오노 660으로 적는다."],
    sister: [{ site: "italian", path: "/", label: "이탈리아차 아카이브" }],
    sources: [IMCDB.jw4, SLASHGEAR],
  },
  {
    slug: "bmw-6-series-2012",
    nameKo: "2012 BMW 6시리즈",
    nameEn: "2012 BMW 6 Series (F13)",
    kind: "자동차",
    maker: "BMW",
    role: "《발레리나》 습격 장면",
    summary: "《발레리나》에서 임무가 꼬인 뒤 이브가 올라탄 쿠페. 곧 SUV에 옆을 들이받힌다.",
    appearances: [{ film: "ballerina", text: "이브가 차에 타자마자 SUV가 옆구리를 들이받고 차를 밀어붙이며 총을 쏜다. 차는 이어진 싸움에서 부서진다." }],
    notes: [],
    sister: [],
    sources: [IMCDB.ballerina, SLASHGEAR],
  },
  {
    slug: "chevrolet-impala-limo-1960",
    nameKo: "1960 쉐보레 임팔라 리무진",
    nameEn: "1960 Chevrolet Impala Stretched Limousine",
    kind: "자동차",
    maker: "쉐보레",
    role: "《더 콘티넨탈》 심판관의 차",
    summary: "하이 테이블 심판관이 타고 나타나는 길게 늘린 임팔라. 번호판 ‘SW-FLTY’는 3편의 대사 ‘충성을 맹세하다(swear fealty)’를 떠올리게 한다.",
    appearances: [{ film: "the-continental", text: "심판관이 1970년대 뉴욕 콘티넨탈을 찾아올 때 탄 차." }],
    notes: [],
    sister: [{ site: "usa", path: "/cars/chevrolet-impala", label: "쉐보레 임팔라 모델 페이지" }],
    sources: [IMCDB.continental, SLASHGEAR],
  },
  {
    slug: "continental-mustang-1969",
    nameKo: "《더 콘티넨탈》의 1969 머스탱",
    nameEn: "1969 Ford Mustang (The Continental, Ep. 1)",
    kind: "자동차",
    maker: "포드",
    role: "프리퀄 속 머스탱",
    summary: "IMCDb는 《더 콘티넨탈》 1화에 1969 포드 머스탱을 기록한다. 존의 차와 같은 연식이다.",
    appearances: [{ film: "the-continental", text: "Fraction Motors 등 일부 자동차 매체는 젊은 윈스턴이 존의 차와 같은 도색의 머스탱을 탄다고 소개한다. 두 차의 관계는 작품에서 직접 설명되지 않는다." }],
    notes: [],
    sister: [{ site: "usa", path: "/cars/ford-mustang", label: "포드 머스탱 모델 페이지" }],
    sources: [IMCDB.continental, { label: "Fraction Motors — A Guide to the Muscle Cars from John Wick", url: "https://fractionmotors.com/articles/a-guide-to-the-muscle-cars-from-john-wick" }],
  },
];

export const carBySlug = (slug: string) => cars.find((c) => c.slug === slug);

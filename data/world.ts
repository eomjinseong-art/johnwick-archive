export type WorldEntry = { slug: string; term: string; en: string; text: string[]; films: string[] };

export const world: WorldEntry[] = [
  {
    slug: "continental",
    term: "콘티넨탈 호텔",
    en: "The Continental",
    text: [
      "킬러들을 위한 호텔 체인. 뉴욕, 로마, 카사블랑카, 오사카, 프라하 등 도시마다 지점이 있고, 매니저와 컨시어지가 운영한다.",
      "호텔 안은 중립 지대다. 객실, 의사, 무기 담당, 재단사, 청소부 같은 서비스를 금화로 이용한다.",
      "규칙을 어기면 매니저가 직접 처벌한다. 1편의 퍼킨스는 호텔 안에서 존을 노렸다가 처형되고, 2편의 존은 라운지에서 산티노를 쏜 대가로 파문된다.",
    ],
    films: ["john-wick", "chapter-2", "chapter-3-parabellum", "chapter-4", "ballerina", "the-continental"],
  },
  {
    slug: "two-rules",
    term: "두 가지 규칙",
    en: "No business on Continental grounds · Every marker must be honored",
    text: [
      "2편에서 윈스턴이 존에게 일러 주는 킬러 세계의 절대 규칙이다.",
      "첫째, 콘티넨탈 안에서는 ‘영업(살인)’을 하지 않는다. 둘째, 마커는 반드시 지킨다.",
    ],
    films: ["chapter-2"],
  },
  {
    slug: "high-table",
    term: "하이 테이블",
    en: "The High Table",
    text: [
      "범죄 세계를 다스리는 열두 명의 최고위 두목 모임. 2편의 지아나 단토니오가 그 자리 중 하나를 가지고 있었다.",
      "심판관, 하빈저 같은 집행자를 보내 규칙을 어긴 사람과 그를 도운 사람을 벌한다. 4편에서는 그라몽 후작에게 무제한 권한을 준다.",
    ],
    films: ["chapter-2", "chapter-3-parabellum", "chapter-4", "the-continental"],
  },
  {
    slug: "elder",
    term: "장로",
    en: "The Elder",
    text: ["‘하이 테이블 위에 앉은 자’. 3편에서 존은 사막을 헤맨 끝에 장로를 만나 파문을 풀어 달라고 청하고, 4편 첫머리에서 존은 장로를 죽인다."],
    films: ["chapter-3-parabellum", "chapter-4"],
  },
  {
    slug: "gold-coins",
    term: "금화",
    en: "Gold coins",
    text: [
      "킬러 세계의 화폐. 콘티넨탈 객실, 청소부의 시체 처리, 각종 서비스 값을 금화로 치른다. 1편에서 존은 집 바닥 아래 무기와 함께 묻어 둔 금화를 꺼낸다.",
      "《더 콘티넨탈》은 하이 테이블이 금화를 찍어 내는 압인기를 프랭키 스콧이 훔치면서 시작한다.",
    ],
    films: ["john-wick", "chapter-2", "the-continental"],
  },
  {
    slug: "marker",
    term: "마커",
    en: "Marker",
    text: [
      "피로 맺은 맹세를 새긴 메달. 마커를 받은 사람은 그것을 내미는 사람의 부탁을 거절할 수 없다.",
      "2편에서 산티노는 존의 마커로 그를 로마로 보낸다. 2편 끝에서 윈스턴이 존에게 마커를 주고, 3편에서 존은 소피아에게 마커를 내밀어 도움을 받는다.",
    ],
    films: ["chapter-2", "chapter-3-parabellum"],
  },
  {
    slug: "excommunicado",
    term: "파문 (엑스커뮤니카도)",
    en: "Excommunicado",
    text: [
      "콘티넨탈과 하이 테이블의 보호와 서비스를 모두 잃는 처분. 파문된 사람을 돕는 것도 금지된다.",
      "2편 끝에서 윈스턴은 존을 파문하되 한 시간의 유예를 준다. 3편은 그 한 시간이 끝나기 직전에 시작한다. 4편에서는 윈스턴도 파문된다.",
    ],
    films: ["chapter-2", "chapter-3-parabellum", "chapter-4"],
  },
  {
    slug: "baba-yaga",
    term: "바바 야가",
    en: "Baba Yaga",
    text: ["킬러 세계가 존 윅을 부르는 별명. 1편에서 비고는 존을 ‘집중력과 헌신, 순수한 의지의 남자’라고 설명한다. 존은 헬렌과 함께하려고 ‘불가능한 임무’를 끝낸 뒤 은퇴했다."],
    films: ["john-wick"],
  },
  {
    slug: "ruska-roma",
    term: "루스카 로마",
    en: "Ruska Roma",
    text: [
      "발레단과 극장을 겉모습으로 둔 킬러 조직. 디렉터가 이끌며 어린 존을 길러 냈다.",
      "3편에서 존은 묵주를 내밀어 디렉터에게 카사블랑카로 가는 길을 얻는다. 4편에서는 결투를 신청하려고 베를린 루스카 로마에 다시 들어간다. 《발레리나》의 이브도 이곳에서 자랐다.",
    ],
    films: ["chapter-3-parabellum", "chapter-4", "ballerina"],
  },
  {
    slug: "bowery",
    term: "바워리 킹의 정보망",
    en: "The Bowery",
    text: ["노숙인처럼 보이는 사람들로 이뤄진 뉴욕 지하 정보망. 바워리 킹은 비둘기로 소식을 주고받는다. 2편에서 존에게 총 한 자루와 총알 일곱 발을 준다."],
    films: ["chapter-2", "chapter-3-parabellum", "chapter-4"],
  },
  {
    slug: "duel",
    term: "결투 전통",
    en: "Duel",
    text: [
      "하이 테이블의 오래된 전통. 가문을 대표해 결투를 신청할 수 있고, 이기면 하이 테이블에 대한 의무에서 벗어난다.",
      "4편에서 존과 그라몽 후작은 해 뜰 무렵 파리 사크레쾨르 성당에서 결투용 권총으로 맞서기로 한다. 하빈저가 진행을 맡고, 윈스턴이 존의 입회인이 된다.",
    ],
    films: ["chapter-4"],
  },
  {
    slug: "cult",
    term: "교단",
    en: "The Cult",
    text: ["《발레리나》에 나오는 킬러 교단. 오스트리아 할슈타트를 본거지로 두고 챈슬러가 이끈다. 루스카 로마와 오래 휴전 중이었다."],
    films: ["ballerina"],
  },
  {
    slug: "parabellum",
    term: "파라벨룸",
    en: "Para bellum",
    text: ["3편 부제. ‘평화를 원한다면 전쟁을 준비하라(Si vis pacem, para bellum)’라는 라틴어 격언에서 왔다. 영화 속에서 윈스턴이 이 격언을 말한다."],
    films: ["chapter-3-parabellum"],
  },
];

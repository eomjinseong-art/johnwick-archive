export type Character = {
  slug: string;
  name: string;
  nameEn: string;
  actor: string;
  actorEn: string;
  films: string[]; // film slugs
  group: "주인공" | "콘티넨탈" | "하이 테이블" | "루스카 로마" | "적" | "조력자" | "발레리나" | "더 콘티넨탈";
  desc: string;
  note?: string;
};

export const characters: Character[] = [
  { slug: "john-wick", name: "존 윅", nameEn: "John Wick", actor: "키아누 리브스", actorEn: "Keanu Reeves", films: ["john-wick", "chapter-2", "chapter-3-parabellum", "chapter-4", "ballerina"], group: "주인공", desc: "킬러 세계에서 ‘바바 야가’로 불린 전설의 암살자. 아내 헬렌과 살기 위해 은퇴했지만, 아내가 남긴 강아지가 죽으면서 다시 돌아온다. 루스카 로마에서 자랐다.", note: "키아누 리브스 전기는 이 사이트의 ‘키아누 리브스’ 페이지에 있습니다." },
  { slug: "helen", name: "헬렌 윅", nameEn: "Helen Wick", actor: "브리짓 모이나핸", actorEn: "Bridget Moynahan", films: ["john-wick", "chapter-2", "chapter-4"], group: "주인공", desc: "존의 아내. 병으로 세상을 떠나기 전 존이 혼자 남지 않도록 비글 강아지 데이지를 보내 둔다. 4편에는 1편 장면으로 등장한다." },
  { slug: "winston", name: "윈스턴 스콧", nameEn: "Winston Scott", actor: "이언 맥셰인", actorEn: "Ian McShane", films: ["john-wick", "chapter-2", "chapter-3-parabellum", "chapter-4", "ballerina"], group: "콘티넨탈", desc: "뉴욕 콘티넨탈 호텔의 주인이자 매니저. 존에게 아버지 같은 친구이지만, 3편에서는 하이 테이블에 충성을 맹세하며 존을 쏜다. 4편에서는 결투의 ‘입회인(세컨드)’이 된다.", note: "《더 콘티넨탈》의 젊은 윈스턴은 콜린 우델이 연기했다." },
  { slug: "charon", name: "샤론", nameEn: "Charon", actor: "랜스 레딕", actorEn: "Lance Reddick", films: ["john-wick", "chapter-2", "chapter-3-parabellum", "chapter-4", "ballerina"], group: "콘티넨탈", desc: "뉴욕 콘티넨탈의 컨시어지. 늘 정중하고 침착하며, 3편에서는 존과 함께 호텔을 지킨다. 4편에서 그라몽 후작에게 처형된다.", note: "랜스 레딕은 2023년 3월 세상을 떠났고, 2025년 《발레리나》가 마지막 출연작이 됐다. 젊은 샤론은 《더 콘티넨탈》에서 아요미드 아데군이 연기했다." },
  { slug: "viggo", name: "비고 타라소프", nameEn: "Viggo Tarasov", actor: "미카엘 니크비스트", actorEn: "Michael Nyqvist", films: ["john-wick"], group: "적", desc: "뉴욕 러시아 마피아 두목. 한때 존을 부렸던 사람으로, 아들 이오세프가 존을 건드리자 존이 어떤 사람인지 털어놓는다." },
  { slug: "iosef", name: "이오세프 타라소프", nameEn: "Iosef Tarasov", actor: "알피 앨런", actorEn: "Alfie Allen", films: ["john-wick"], group: "적", desc: "비고의 철없는 아들. 존의 머스탱을 훔치고 강아지를 죽여 모든 일을 일으킨다." },
  { slug: "perkins", name: "퍼킨스", nameEn: "Ms. Perkins", actor: "에이드리언 팔리키", actorEn: "Adrianne Palicki", films: ["john-wick"], group: "적", desc: "현상금을 노리고 콘티넨탈 안에서 존을 노린 킬러. 호텔 규칙을 어긴 대가를 치른다." },
  { slug: "marcus", name: "마커스", nameEn: "Marcus", actor: "윌럼 더포", actorEn: "Willem Dafoe", films: ["john-wick"], group: "조력자", desc: "존의 옛 스승이자 저격수. 비고의 의뢰를 받은 척하면서 몰래 존을 지켜 준다." },
  { slug: "aurelio", name: "아우렐리오", nameEn: "Aurelio", actor: "존 레귀자모", actorEn: "John Leguizamo", films: ["john-wick", "chapter-2"], group: "조력자", desc: "고급 정비소(촙숍) 주인이자 존의 오랜 친구. 훔친 머스탱이 누구 차인지 알아보고 작업을 거절한다. 2편에서는 망가진 머스탱을 맡는다." },
  { slug: "kirill", name: "키릴", nameEn: "Kirill", actor: "대니얼 번하트", actorEn: "Daniel Bernhardt", films: ["john-wick"], group: "적", desc: "비고의 오른팔. 러시아 군 지휘관 출신.", note: "대니얼 번하트는 《발레리나》에 다른 인물(흉터 눈의 암살자)로 다시 나온다." },
  { slug: "charlie", name: "찰리", nameEn: "Charlie", actor: "데이비드 패트릭 켈리", actorEn: "David Patrick Kelly", films: ["john-wick", "chapter-2"], group: "조력자", desc: "시체와 흔적을 치우는 ‘청소부’. 금화를 받고 일한다.", note: "《더 콘티넨탈》의 젊은 찰리는 피터 그린이 연기했다." },
  { slug: "addy", name: "애디", nameEn: "Addy", actor: "브리짓 리건", actorEn: "Bridget Regan", films: ["john-wick"], group: "콘티넨탈", desc: "콘티넨탈 바텐더." },
  { slug: "santino", name: "산티노 단토니오", nameEn: "Santino D'Antonio", actor: "리카르도 스카마르치오", actorEn: "Riccardo Scamarcio", films: ["chapter-2"], group: "적", desc: "이탈리아 카모라 두목. 존의 마커를 쥐고 누나를 죽이게 한 뒤, 그 자리를 차지하고 존까지 없애려 한다." },
  { slug: "gianna", name: "지아나 단토니오", nameEn: "Gianna D'Antonio", actor: "클라우디아 제리니", actorEn: "Claudia Gerini", films: ["chapter-2"], group: "하이 테이블", desc: "아버지의 자리를 이어 하이 테이블에 앉은 산티노의 누나. 존의 오랜 지인." },
  { slug: "ares", name: "아레스", nameEn: "Ares", actor: "루비 로즈", actorEn: "Ruby Rose", films: ["chapter-2"], group: "적", desc: "말을 하지 않고 수어로 대화하는 산티노의 경호원." },
  { slug: "cassian", name: "카시안", nameEn: "Cassian", actor: "커먼", actorEn: "Common", films: ["chapter-2"], group: "적", desc: "지아나의 경호원. 주인을 잃고 존을 쫓으며 지하철에서 결판을 낸다." },
  { slug: "bowery-king", name: "바워리 킹", nameEn: "The Bowery King", actor: "로런스 피시번", actorEn: "Laurence Fishburne", films: ["chapter-2", "chapter-3-parabellum", "chapter-4"], group: "조력자", desc: "노숙인으로 위장한 뉴욕 지하 정보망의 왕. 비둘기로 소식을 나른다. 3편에서 존을 도운 벌을 받고, 4편에서는 존을 후원한다.", note: "로런스 피시번과 키아누 리브스는 《매트릭스》의 모피어스와 네오다." },
  { slug: "abram", name: "아브람 타라소프", nameEn: "Abram Tarasov", actor: "피터 스토메어", actorEn: "Peter Stormare", films: ["chapter-2"], group: "적", desc: "비고의 형. 존의 머스탱을 보관하던 밀수 창고 주인." },
  { slug: "julius", name: "줄리어스", nameEn: "Julius", actor: "프랑코 네로", actorEn: "Franco Nero", films: ["chapter-2"], group: "콘티넨탈", desc: "로마 콘티넨탈의 주인이자 매니저." },
  { slug: "sommelier", name: "소믈리에", nameEn: "The Sommelier", actor: "피터 세라피노위츠", actorEn: "Peter Serafinowicz", films: ["chapter-2"], group: "콘티넨탈", desc: "로마 콘티넨탈의 무기 담당. 와인을 권하듯 총을 골라 준다." },
  { slug: "sofia", name: "소피아 알아즈와르", nameEn: "Sofia Al-Azwar", actor: "할리 베리", actorEn: "Halle Berry", films: ["chapter-3-parabellum"], group: "콘티넨탈", desc: "카사블랑카 콘티넨탈의 매니저이자 은퇴한 킬러. 존이 딸을 구해 준 빚(마커) 때문에 그를 돕는다. 훈련된 벨지안 말리누아들과 함께 싸운다." },
  { slug: "zero", name: "제로", nameEn: "Zero", actor: "마크 다카스코스", actorEn: "Mark Dacascos", films: ["chapter-3-parabellum"], group: "적", desc: "심판관이 고용한 일본인 킬러. 존을 존경하면서도 그를 죽이려 한다." },
  { slug: "adjudicator", name: "심판관", nameEn: "The Adjudicator", actor: "아시아 케이트 딜런", actorEn: "Asia Kate Dillon", films: ["chapter-3-parabellum"], group: "하이 테이블", desc: "하이 테이블이 보낸 집행자. 존을 도운 윈스턴, 바워리 킹, 디렉터에게 벌을 내린다.", note: "《더 콘티넨탈》의 심판관은 케이티 맥그래스가 연기했다." },
  { slug: "director", name: "디렉터", nameEn: "The Director", actor: "앤젤리카 휴스턴", actorEn: "Anjelica Huston", films: ["chapter-3-parabellum", "ballerina"], group: "루스카 로마", desc: "발레단을 겉모습으로 둔 킬러 조직 루스카 로마의 수장. 어린 존과 이브를 길렀다." },
  { slug: "elder", name: "장로", nameEn: "The Elder", actor: "사이드 타그마우이", actorEn: "Saïd Taghmaoui", films: ["chapter-3-parabellum"], group: "하이 테이블", desc: "‘하이 테이블 위에 앉은 자’. 사막에서 존을 만나 용서의 조건을 내건다.", note: "4편에서 존이 죽이는 장로는 조지 조지우가 연기한 다른 인물이다." },
  { slug: "berrada", name: "베라다", nameEn: "Berrada", actor: "제롬 플린", actorEn: "Jerome Flynn", films: ["chapter-3-parabellum"], group: "적", desc: "소피아의 옛 보스. 장로에게 가는 길을 알려 주는 대가로 소피아의 개를 요구한다." },
  { slug: "caine", name: "케인", nameEn: "Caine", actor: "견자단", actorEn: "Donnie Yen", films: ["chapter-4"], group: "하이 테이블", desc: "눈이 보이지 않는 은퇴한 하이 테이블 킬러이자 존의 옛 친구. 딸의 목숨 때문에 존을 쫓는다. 결투에서 후작의 대리인이 된다." },
  { slug: "marquis", name: "그라몽 후작", nameEn: "Marquis Vincent Bisset de Gramont", actor: "빌 스카스가드", actorEn: "Bill Skarsgård", films: ["chapter-4"], group: "하이 테이블", desc: "하이 테이블이 무제한 권한을 준 귀족. 뉴욕 콘티넨탈을 폭파하고 존과의 결투에 나선다." },
  { slug: "koji", name: "시마즈 코지", nameEn: "Shimazu Koji", actor: "사나다 히로유키", actorEn: "Hiroyuki Sanada", films: ["chapter-4"], group: "콘티넨탈", desc: "오사카 콘티넨탈의 매니저. 존과 케인의 오랜 친구로, 존을 숨겨 주다 목숨을 잃는다." },
  { slug: "akira", name: "시마즈 아키라", nameEn: "Shimazu Akira", actor: "리나 사와야마", actorEn: "Rina Sawayama", films: ["chapter-4"], group: "콘티넨탈", desc: "코지의 딸이자 오사카 콘티넨탈 컨시어지." },
  { slug: "mr-nobody", name: "미스터 노바디", nameEn: "Mr. Nobody / The Tracker", actor: "샤미어 앤더슨", actorEn: "Shamier Anderson", films: ["chapter-4"], group: "적", desc: "개와 함께 다니는 현상금 사냥꾼. 현상금이 오를 때까지 기다리다, 존이 자기 개를 구해 주자 마음을 바꾼다." },
  { slug: "killa", name: "킬라 하르칸", nameEn: "Killa Harkan", actor: "스콧 앳킨스", actorEn: "Scott Adkins", films: ["chapter-4"], group: "하이 테이블", desc: "독일 테이블의 우두머리. 카티아의 아버지를 죽인 대가로 존의 표적이 된다." },
  { slug: "harbinger", name: "하빈저", nameEn: "The Harbinger", actor: "클랜시 브라운", actorEn: "Clancy Brown", films: ["chapter-4"], group: "하이 테이블", desc: "하이 테이블의 고위 집행자. 결투의 진행을 맡는다." },
  { slug: "chidi", name: "치디", nameEn: "Chidi", actor: "마르코 자로르", actorEn: "Marko Zaror", films: ["chapter-4"], group: "적", desc: "그라몽 후작의 2인자." },
  { slug: "katia", name: "카티아", nameEn: "Katia", actor: "나탈리아 테나", actorEn: "Natalia Tena", films: ["chapter-4"], group: "루스카 로마", desc: "존의 의붓누이. 베를린 루스카 로마를 이끈다." },
  { slug: "eve", name: "이브 마카로", nameEn: "Eve Macarro", actor: "아나 데 아르마스", actorEn: "Ana de Armas", films: ["ballerina"], group: "발레리나", desc: "루스카 로마에서 발레리나이자 킬러로 자란 주인공. 아버지를 죽인 교단에 복수한다. ‘키키모라’라는 칭호를 얻는다." },
  { slug: "chancellor", name: "챈슬러", nameEn: "The Chancellor", actor: "가브리엘 번", actorEn: "Gabriel Byrne", films: ["ballerina"], group: "발레리나", desc: "오스트리아 할슈타트에 본거지를 둔 킬러 교단의 수장." },
  { slug: "pine", name: "대니얼 파인", nameEn: "Daniel Pine", actor: "노먼 리더스", actorEn: "Norman Reedus", films: ["ballerina"], group: "발레리나", desc: "교단을 떠나려는 킬러. 챈슬러의 아들이며 딸 엘라를 지키려 한다." },
  { slug: "lena", name: "레나", nameEn: "Lena", actor: "카탈리나 산디노 모레노", actorEn: "Catalina Sandino Moreno", films: ["ballerina"], group: "발레리나", desc: "챈슬러 밑의 킬러. 이브가 몰랐던 친언니였다." },
  { slug: "katla", name: "카틀라 박", nameEn: "Katla Park", actor: "최수영", actorEn: "Choi Soo-young", films: ["ballerina"], group: "발레리나", desc: "이브의 첫 경호 임무에서 보호 대상이 되는 인물." },
  { slug: "nogi", name: "노기", nameEn: "Nogi", actor: "샤론 덩컨브루스터", actorEn: "Sharon Duncan-Brewster", films: ["ballerina"], group: "발레리나", desc: "루스카 로마에서 이브를 가르친 스승." },
  { slug: "cormac", name: "코맥 오코너", nameEn: "Cormac O'Connor", actor: "멜 깁슨", actorEn: "Mel Gibson", films: ["the-continental"], group: "더 콘티넨탈", desc: "1970년대 뉴욕 콘티넨탈을 운영한 매니저. 어린 윈스턴과 프랭키 형제를 범죄자로 키웠다." },
  { slug: "young-winston", name: "윈스턴 스콧 (젊은 시절)", nameEn: "Winston Scott", actor: "콜린 우델", actorEn: "Colin Woodell", films: ["the-continental"], group: "더 콘티넨탈", desc: "런던에서 살던 젊은 윈스턴. 형을 잃은 뒤 콘티넨탈을 빼앗기로 한다." },
  { slug: "frankie", name: "프랭키 스콧", nameEn: "Frankie Scott", actor: "벤 롭슨", actorEn: "Ben Robson", films: ["the-continental"], group: "더 콘티넨탈", desc: "윈스턴의 형이자 베트남전 참전 킬러. 하이 테이블의 금화 압인기를 훔친다." },
  { slug: "kd", name: "KD 디 실바", nameEn: "KD di Silva", actor: "미셸 프라다", actorEn: "Mishel Prada", films: ["the-continental"], group: "더 콘티넨탈", desc: "스콧 형제를 쫓는 뉴욕 경찰 형사." },
  { slug: "miles", name: "마일스 버튼", nameEn: "Miles Burton", actor: "휴버트 포인트-뒤주르", actorEn: "Hubert Point-Du Jour", films: ["the-continental"], group: "더 콘티넨탈", desc: "총기 밀매상이자 프랭키의 베트남전 전우." },
  { slug: "lou", name: "루 버튼", nameEn: "Lou Burton", actor: "제시카 앨레인", actorEn: "Jessica Allain", films: ["the-continental"], group: "더 콘티넨탈", desc: "총을 싫어하는 가라테 도장 운영자. 마일스의 여동생." },
  { slug: "yen", name: "옌 스콧", nameEn: "Yen Scott", actor: "능 케이트", actorEn: "Nhung Kate", films: ["the-continental"], group: "더 콘티넨탈", desc: "프랭키의 아내이자 전직 킬러." },
  { slug: "young-charon", name: "샤론 (젊은 시절)", nameEn: "Charon", actor: "아요미드 아데군", actorEn: "Ayomide Adegun", films: ["the-continental"], group: "더 콘티넨탈", desc: "코맥 밑에서 일하던 젊은 샤론. 3화에서 윈스턴 편으로 돌아선다." },
];

export const GROUP_ORDER: Character["group"][] = ["주인공", "콘티넨탈", "하이 테이블", "루스카 로마", "조력자", "적", "발레리나", "더 콘티넨탈"];

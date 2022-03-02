export type menuType = {
  title: string;
  list: string[];
};
export type infoType = {
  title: string;
  info: string;
};
const coffee: menuType[] = [
  { title: '커피', list: ['스타벅스 원두', '스타벅스 비아', '스타벅스앳홈 by 캡슐'] },
  { title: '나와 어울리는 커피', list: [] },
  { title: '스타벅스 리저브™', list: ['RESERVE MAGAZINE'] },
  { title: '에스프레소 음료', list: ['도피오', '에스프레소 마키아또', '아메리카노', '마키아또', '카푸치노', '라떼', '모카'] },
  { title: '최상의 커피를 즐기는 법', list: ['커피 프레스', '푸어 오버', '아이스 푸어 오버', '커피 메이커', '리저브를 매장에서 다양하게 즐기는 법'] },
  { title: '커피 이야기', list: ['농장에서 우리의 손으로', '최상의 아라비카 원두', '스타벅스 로스트 스펙트럼', '스타벅스 디카페인', '클로버® 커피 추출 시스템'] },
];
const coffeeInfo: infoType[] = [
  { title: '나와 어울리는 커피 찾기', info: '스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.' },
  { title: '최상의 커피를 즐기는 법', info: '여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.' },
];

const menu: menuType[] = [
  { title: '음료', list: ['콜드 브루', '브루드 커피', '에스프레소', '프라푸치노', '블렌디드', '스타벅스 피지오', '티(티바나)', '기타 제조 음료', '스타벅스 주스(병음료)'] },
  { title: '푸드', list: ['브레드', '케이크', '샌드위치 & 샐러드', '따뜻한 푸드', '과일 & 요거트', '스낵 & 미니디저트', '아이스크림'] },
  { title: '상품', list: ['머그', '글라스', '플라스틱 텀블러', '스테인리스 텀블러', '보온병', '액세서리', '커피 용품', '패키지 티(티바나)'] },
  { title: '카드', list: ['실물카드', 'e-Gift 카드'] },
  { title: '메뉴 이야기', list: ['나이트로 콜드브루', '콜드 브루', '스타벅스 티바나'] },
];
const menuInfo: infoType[] = [{ title: '나이트로 콜드 브루', info: '나이트로 커피 정통의 물결치듯 흘려내리는 캐스케이딩과 부드러운 크림을 경험하세요.' }];

const store: menuType[] = [
  { title: '매장 찾기', list: ['퀵 검색', '지역 검색'] },
  { title: '드라이브 스루 매장', list: [] },
  { title: '스타벅스 리저브™ 매장', list: [] },
  { title: '커뮤니티 스토어 매장', list: [] },
  { title: '매장 이야기', list: ['티바나 바 매장'] },
];
const storeInfo: infoType[] = [{ title: '매장찾기', info: '보다 빠르게 매장을 찾아보세요.' }];

const responsibility: menuType[] = [
  { title: '사회공헌 캠페인 소개', list: [] },
  { title: '지역 사회 참여 활동', list: ['희망배달 캠페인', '재능기부 카페 소식', '커뮤니티 스토어', '청년 지원 프로그램', '우리 농산물 사랑 캠페인', '우리 문화 지키기'] },
  { title: '환경보호 활동', list: ['친환경 활동', '일회용 컵 없는 매장', '커피 원두 재활용'] },
  { title: '윤리 구매', list: ['윤리적 원두 구매', '공정무역 인증', '커피 농가 지원 활동'] },
  { title: '글로벌 사회 공헌', list: ['윤리경영 보고서', '스타벅스 재단', '지구촌 봉사의 달'] },
];
const responsibilityInfo: infoType[] = [{ title: '', info: '' }];

const rewards: menuType[] = [
  { title: '스타벅스 리워드', list: ['스타벅스 리워드 소개', '등급 및 혜택', '스타벅스 별', '자주 하는 질문'] },
  { title: '스타벅스 카드', list: ['스타벅스 카드 소개', '스타벅스 카드 갤러리', '등록 및 조회', '충전 및 이용안내', '분실신고/환불신청', '자주 하는 질문'] },
  { title: '스타벅스 e-Gift Card', list: ['스타벅스 e-Gift Card 소개', '이용안내', '선물하기', '자주 하는 질문'] },
];
const rewardsInfo: infoType[] = [{ title: '스타벅스 카드 등록하기', info: '카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.' }];

const whatNew: menuType[] = [
  { title: '이벤트', list: ['전체', '스타벅스 카드', '스타벅스 리워드', '온라인'] },
  { title: '뉴스', list: ['전체', '상품 출시', '스타벅스와 문화', '스타벅스 사회공헌', '스타벅스 카드출ㄹ시'] },
  { title: '매장별 이벤트', list: ['일반 매장', '신규 매장'] },
  { title: '공지사항', list: [] },
  { title: '월페이퍼', list: [] },
];
const whatNewInfo: infoType[] = [
  { title: '매장별 이벤트', info: '스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.' },
  { title: '월페이퍼', info: '매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!' },
];

type dropDownDataType = {
  title: string;
  menu: menuType[];
  info: infoType[];
};
const dropDownData: dropDownDataType[] = [
  { title: 'COFFEE', menu: coffee, info: coffeeInfo },
  { title: 'MENU', menu: menu, info: menuInfo },
  { title: 'STORE', menu: store, info: storeInfo },
  { title: 'RESPONSIBILITY', menu: responsibility, info: responsibilityInfo },
  { title: 'STARBUCKS REWARDS', menu: rewards, info: rewardsInfo },
  { title: "WHAT'S NEW", menu: whatNew, info: whatNewInfo },
];

export default dropDownData;

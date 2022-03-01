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
  { title: 'ㅁㅁㅁ', list: ['스타벅스 원두', '스타벅스 비아', '스타벅스앳홈 by 캡슐'] },
  { title: '나와 어울리는 커피', list: [] },
  { title: '스타벅스 리저브™', list: ['RESERVE MAGAZINE'] },
  { title: '에스프레소 음료', list: ['도피오', '에스프레소 마키아또', '아메리카노', '마키아또', '카푸치노', '라떼', '모카'] },
  { title: '최상의 커피를 즐기는 법', list: ['커피 프레스', '푸어 오버', '아이스 푸어 오버', '커피 메이커', '리저브를 매장에서 다양하게 즐기는 법'] },
  { title: '커피 이야기', list: ['농장에서 우리의 손으로', '최상의 아라비카 원두', '스타벅스 로스트 스펙트럼', '스타벅스 디카페인', '클로버® 커피 추출 시스템'] },
];
const menuInfo: infoType[] = [
  { title: '나와 어울리는 커피 찾기', info: '스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.' },
  { title: '최상의 커피를 즐기는 법', info: '여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.' },
];
type dropDownDataType = {
  title: string;
  menu: menuType[];
  info: infoType[];
};
const dropDownData: dropDownDataType[] = [
  { title: 'coffee', menu: coffee, info: coffeeInfo },
  { title: 'menu', menu: menu, info: menuInfo },
];

export default dropDownData;

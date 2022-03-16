import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #1e3932;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;

  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Logo = styled.img`
  width: 176px;
  height: 152px;
`;
export const ContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  margin: 0 30px;
  padding-right: 30px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const InfoTextWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #4b615b;
  margin-bottom: 22px;
`;

export const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 12px;
`;

export const InfoDesc = styled.div`
  font-weight: bold;

  margin-bottom: 12px;
  font-size: 17px;
`;

export const InfoButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 40px;
`;

export const Air = styled.div`
  width: 9px;
`;

export const GiftWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const GiftText = styled.div``;
export const GiftButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

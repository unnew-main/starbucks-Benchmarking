import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const UlList = styled.div`
  width: 20%;
`;

export const LiHeader = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: bold;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const LiItem = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 7px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

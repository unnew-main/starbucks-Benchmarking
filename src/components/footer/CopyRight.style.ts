import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-top: 40px;
  padding-bottom: 40px;
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CopyRightItem = styled.div`
  padding: 0 12px;
  font-size: 12px;
  font-weight: bold;
  border-left: 1px solid #393939;
  color: #ccc;
  :first-child {
    color: #00b050 !important;
    border-left: 0px;
  }
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ButtonList = styled(FlexCenter)`
  margin-top: 10px;
`;
export const ButtonWrapper = styled.div`
  margin: 0 5px;
`;

export const CopyMenu = styled(FlexCenter)`
  margin-top: 20px;
`;

export const CopyItem = styled.div`
  margin: 0 8px;
  font-size: 12px;
  color: #999;
`;

export const Copy = styled(FlexCenter)`
  margin-top: 20px;
  font-size: 12px;
  color: #999;
`;

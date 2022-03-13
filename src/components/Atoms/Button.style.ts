import styled from 'styled-components';

type ButtonStyleType = {
  padding: string;

  backgroundColor: string;
  fontColor: string;
  borderColor: string;
};

export const ButtonWrapper = styled.div<ButtonStyleType>`
  margin: 0 auto;
  width: auto;
  font-size: 15px;
  display: block;

  display: inline-block;
  border: 2px solid ${({ borderColor }) => borderColor};
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  padding: 0px ${({ padding }) => padding};
  line-height: 34px;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const ButtonText = styled.div<{ fontWeight?: 'bold' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

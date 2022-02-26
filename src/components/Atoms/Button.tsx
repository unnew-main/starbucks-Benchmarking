import { useMemo } from 'react';
import styled from 'styled-components';
import type { colorType } from '../../constants/colorScheme';
import ButtonColor from '../../constants/colorScheme';
type ButtonProps = {
  children: string;
  borderColor: keyof colorType;
  fontColor: keyof colorType;
  padding: string;

  backgroudColor?: keyof colorType;
  fontWeight?: 'bold';
};
export function Button({ children, ...props }: ButtonProps) {
  const changeColorSwitch = (property: string): string => {
    switch (property) {
      case 'brown':
        return ButtonColor.brown;
      case 'green':
        return ButtonColor.green;
      case 'greenWhite':
        return ButtonColor.greenWhite;
      case 'white':
        return ButtonColor.white;
      default:
        return ButtonColor.black;
    }
  };

  const changeBackgroundColor = props.backgroudColor ? changeColorSwitch(props.backgroudColor) : 'transparent';
  const changeBorderColor = changeColorSwitch(props.borderColor);
  const changeFontColor = changeColorSwitch(props.fontColor);

  return (
    <ButtonWrapper backgroundColor={changeBackgroundColor} fontColor={changeFontColor} borderColor={changeBorderColor} padding={props.padding}>
      <ButtonText fontWeight={props.fontWeight}>{children}</ButtonText>
    </ButtonWrapper>
  );
}

type ButtonStyleType = {
  padding: string;

  backgroundColor: string;
  fontColor: string;
  borderColor: string;
};
const ButtonWrapper = styled.div<ButtonStyleType>`
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
const ButtonText = styled.div<{ fontWeight?: 'bold' }>`
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

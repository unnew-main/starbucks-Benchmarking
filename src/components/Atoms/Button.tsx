import type { colorType } from '../../constants/colorScheme';
import ButtonColor from '../../constants/colorScheme';
import * as S from './Button.style';
type ButtonProps = {
  children: string;
  borderColor: keyof colorType;
  fontColor: keyof colorType;
  padding: string;

  backgroudColor?: keyof colorType;
  fontWeight?: 'bold';
};
export function Button({ children, ...props }: ButtonProps) {
  const changeColorSwitch = (property: keyof colorType): string => {
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
    <S.ButtonWrapper backgroundColor={changeBackgroundColor} fontColor={changeFontColor} borderColor={changeBorderColor} padding={props.padding}>
      <S.ButtonText fontWeight={props.fontWeight}>{children}</S.ButtonText>
    </S.ButtonWrapper>
  );
}

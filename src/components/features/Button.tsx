import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: string;

  borderColor: string;
  backgroudColor?: string;
  fontColor: string;
};
export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonWrapper props={props}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
}

type ButtonStyleType = {
  props: {
    borderColor: string;
    fontColor: string;
    backgroudColor?: string;
  };
};
const ButtonWrapper = styled.div<ButtonStyleType>`
  margin: 0 auto;
  width: auto;
  font-size: 15px;
  display: block;

  display: inline-block;
  border: 2px solid ${({ props }) => props.borderColor};
  color: ${({ props }) => props.fontColor};
  background-color: ${({ props }) => (props ? props.backgroudColor : 'transparent')};
  border-radius: 5px;
  padding: 0 29px;
  line-height: 34px;
  cursor: pointer;
`;
const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

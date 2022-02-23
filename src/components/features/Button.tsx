import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: string;
  borderColor: string;
  fontColor: string;
  padding: string;

  backgroudColor?: string;
  fontWeight?: string;
};
export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonWrapper props={props}>
      <ButtonText fontWeight={props.fontWeight}>{children}</ButtonText>
    </ButtonWrapper>
  );
}

type ButtonStyleType = {
  props: {
    borderColor: string;
    fontColor: string;
    padding: string;

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
  padding: 0px ${({ props }) => props.padding};
  line-height: 34px;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const ButtonText = styled.div<{ fontWeight?: string }>`
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

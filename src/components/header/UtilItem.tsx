import React from 'react';
import styled from 'styled-components';

type UtilItemType = {
  children: string;
};
export function UtilItem({ children }: UtilItemType) {
  return <Item>{children}</Item>;
}

const Item = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: 1px;
  border-left: 1px solid gray;
  :first-child {
    margin-left: 0;
    border-left: 0px;
  }
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

import React from 'react';
import styled from 'styled-components';

type UtilItemType = {
  children: string;
};
export function UtilItem({ children }: UtilItemType) {
  return <Item>{children}</Item>;
}

const Item = styled.div`
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-right: 14px;
  padding-left: 14px;
  margin-left: 1px;
  border-left: 1px solid #ccc;
  font-size: 13px;
  color: #555;
  :first-child {
    margin-left: 0;
    border-left: 0px;
  }
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

import { changeLanguage } from 'i18next';
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  border: 1px solid yellow;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <select onChange={(e) => {
        changeLanguage(e.target.value)
      }}>
        <option value="ko">한국어</option>
        <option value="en">en</option>
      </select>
    </Wrapper>
  );
}

export default Header
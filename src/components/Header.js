import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid #e0e0e0 1px;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #f5913e;
`;

const Link = styled(ReachRouterLink)`
  background-color: #e0e0e0;
  margin: 1rem;
  height: fit-content;
  color: #f5913e;
  border: 0;
  font-size: 1.2em;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f5913e;
    color: #e0e0e0;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Title>Math Magicians</Title>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </Wrapper>
  );
}
export default Header;

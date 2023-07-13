import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 0.2rem;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(31deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-30deg)' : 'rotate(0)'};
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    <RightNav open={open} />
    </>
  );
}

export default Burger;

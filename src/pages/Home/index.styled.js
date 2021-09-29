import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${PxToVw(50)};
  height: 100vh;
  min-height: 600px;

  h1 {
    user-select: none;
    font-size: ${PxToVw(100)};
    text-decoration: underline;
    text-shadow: ${PxToVw(3)} ${PxToVw(3)} #32c2ac;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: ${PxToVw(250)};
    }
  }
  @media (max-width: 640px) {
    h1 {
      font-size: ${PxToVw(450)};
      text-shadow: ${PxToVw(15)} ${PxToVw(15)} #32c2ac;
      margin-top: ${PxToVw(-500)};
    }
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  column-gap: ${PxToVw(50)};
  user-select: none;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    top: ${PxToVw(-250)};
    left: -7.5vw;
    background-color: #252836;
    border-radius: 30% / 40%;
    width: ${PxToVw(700)};
    height: ${PxToVw(500)};
    z-index: -1;
    opacity: 0.97;
    filter: blur(${PxToVw(60)});
  }
  a {
    border: 1px solid white;
    border-radius: ${PxToVw(30)};
    display: flex;
    background-color: #1c1e29;
    padding: ${PxToVw(30)} ${PxToVw(40)};
    font-size: ${PxToVw(32)};
    transition: 0.4s;
    &:hover {
      transform: translate(${PxToVw(-10)}, ${PxToVw(-10)});
      box-shadow: ${PxToVw(6)} ${PxToVw(6)} 0px 0 #fff;
      color: white !important;
    }
  }
  @media (max-width: 1024px) {
    &::after {
      top: ${PxToVw(-500)};
      left: -6vw;
      border-radius: 30% / 40%;
      width: ${PxToVw(1000)};
      height: ${PxToVw(900)};
    }
    a {
      padding: ${PxToVw(60)} ${PxToVw(80)};
      border-radius: ${PxToVw(60)};
      font-size: ${PxToVw(64)};
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    row-gap: ${PxToVw(150)};
    margin-top: ${PxToVw(100)};
    &::after {
      top: ${PxToVw(-800)};
      left: -9vw;
      border-radius: 30% / 40%;
      width: ${PxToVw(1700)};
      height: ${PxToVw(1900)};
    }
    a {
      padding: ${PxToVw(50)} ${PxToVw(400)};
      font-size: ${PxToVw(150)};
    }
  }
`;

import styled from 'styled-components';
import { PxToVw } from '../../index.styled';
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 600px;

`;
export const LoginForm = styled.form`
  h1 {
    user-select: none;
    font-size: ${PxToVw(100)};
    margin-bottom: ${PxToVw(50)};
    text-shadow: ${PxToVw(3)} ${PxToVw(3)} #32c2ac;
    position: relative;
    z-index: 2;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  width: ${PxToVw(400)};
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    top: ${PxToVw(-50)};
    left: -8.5vw;
    background-color: #252836;
    border-radius: 30% / 40%;
    width: ${PxToVw(700)};
    height: ${PxToVw(700)};
    z-index: -1;
    opacity: 0.97;
    filter: blur(${PxToVw(60)});
  }
  label {
    font-size: ${PxToVw(25)};
    margin-bottom: ${PxToVw(5)};
    text-transform: capitalize;
    color: #f0f0f0;
  }
  input {
    width: 100%;
    background-color: inherit;
    padding: ${PxToVw(10)};
    font-size: ${PxToVw(25)};
    margin-bottom: ${PxToVw(30)};
    border-bottom: 1px solid white;
    background: linear-gradient(
      210deg,
      rgba(0, 0, 255, 0) 15%,
      rgba(28, 30, 41, 1) 100%
    );
  }
  button,
  a {
    margin: 0 auto;
    display: block;
    background-color: #1c1e29;
    margin-top: ${PxToVw(30)};
    border: 1px solid white;
    border-radius: ${PxToVw(30)};
    padding: ${PxToVw(20)} ${PxToVw(40)};
    font-size: ${PxToVw(32)};
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      transform: translate(${PxToVw(-10)}, ${PxToVw(-10)});
      box-shadow: ${PxToVw(6)} ${PxToVw(6)} 0px 0 #fff;
      color: white;
    }
  }
  @media (max-width: 1024px) {
    width: ${PxToVw(800)};
    &::after {
      top: ${PxToVw(-160)};
      left: -10.5vw;
      width: ${PxToVw(1200)};
      height: ${PxToVw(1500)};
    }
    h1 {
      margin-bottom: ${PxToVw(100)};
      font-size: ${PxToVw(200)};
      text-shadow: ${PxToVw(10)} ${PxToVw(10)} rgb(50, 194, 172);
    }
    label {
      font-size: ${PxToVw(55)};
      margin-bottom: ${PxToVw(15)};
    }
    input {
      padding: ${PxToVw(10)};
      font-size: ${PxToVw(65)};
      margin-bottom: ${PxToVw(60)};
    }
    button,
    a {
      margin-top: ${PxToVw(30)};
      border-radius: ${PxToVw(30)};
      padding: ${PxToVw(40)} ${PxToVw(90)};
      font-size: ${PxToVw(62)};
    }
  }
  @media (min-aspect-ratio: 6/5) and (max-width: 1024px) {
    width: ${PxToVw(700)};
    &::after {
      top: ${PxToVw(-160)};
      left: -13.5vw;
      width: ${PxToVw(1200)};
      height: ${PxToVw(1000)};
    }
    h1 {
      margin-bottom: ${PxToVw(50)};
      font-size: ${PxToVw(130)};
      text-shadow: ${PxToVw(6)} ${PxToVw(6)} rgb(50, 194, 172);
    }
    label {
      font-size: ${PxToVw(30)};
      margin-bottom: ${PxToVw(10)};
    }
    input {
      padding: ${PxToVw(10)};
      font-size: ${PxToVw(35)};
      margin-bottom: ${PxToVw(30)};
    }
    button,
    a {
      margin-top: ${PxToVw(15)};
      border-radius: ${PxToVw(30)};
      padding: ${PxToVw(30)} ${PxToVw(90)};
      font-size: ${PxToVw(42)};
    }
  }
  @media (max-width: 640px) {
    width: ${PxToVw(1400)};
    &::after {
      top: ${PxToVw(-160)};
      left: -10.5vw;
      width: ${PxToVw(1800)};
      height: ${PxToVw(2050)};
    }
    h1 {
      margin-bottom: ${PxToVw(100)};
      font-size: ${PxToVw(300)};
      text-shadow: ${PxToVw(15)} ${PxToVw(15)} rgb(50, 194, 172);
    }
    label {
      font-size: ${PxToVw(85)};
      margin-bottom: ${PxToVw(30)};
    }
    input {
      padding: ${PxToVw(10)};
      font-size: ${PxToVw(105)};
      margin-bottom: ${PxToVw(120)};
    }
    button,
    a {
      margin-top: ${PxToVw(30)};
      border-radius: ${PxToVw(80)};
      padding: ${PxToVw(40)} ${PxToVw(150)};
      font-size: ${PxToVw(122)};
    }
  }
`;
export const BtnContainer = styled.div`
  display: flex;
`;

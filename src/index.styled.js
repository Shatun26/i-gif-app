import styled, { keyframes } from 'styled-components';

export const PxToVw = (px, screen = 1920) => {
  return `${(px * 100) / screen}vw`;
};
const DesktopBcgAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 ${PxToVw(452.5)} ;

  }
  
`;
const TabletBcgAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 ${PxToVw(750)} ;

  }
  
`;
const MobileBcgAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 ${PxToVw(1065)} ;

  }
  
`;
export const AnimationWrapper = styled.div`
  background-color: #252836;
  background-image: url(https:cdn.pixabay.com/photo/2020/03/17/20/52/covid-4941846_960_720.png);
  background-size: ${PxToVw(450)};
  animation: ${DesktopBcgAnimation} 10s linear infinite;
  @media (max-width: 1024px) {
    background-size: ${PxToVw(750)};
    animation: ${TabletBcgAnimation} 10s linear infinite;
  }
  @media (max-width: 640px) {
    background-size: ${PxToVw(1060)};
    animation: ${MobileBcgAnimation} 10s linear infinite;
  }
`;

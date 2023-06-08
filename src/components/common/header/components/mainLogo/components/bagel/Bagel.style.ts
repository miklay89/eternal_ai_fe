import styled, { keyframes } from "styled-components";

type EllipseProps = {
  width: number;
  height: number;
  from: number;
  borderWidth: number;
  borderColor: string;
  blur: number;
};

const rotateAnimation = (props: EllipseProps) => keyframes`
  from {
    transform: rotate(${props.from}deg);
  }
  to {
    transform: rotate(${props.from + 360}deg);
  }
`;

export const BagelWrapper = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  margin-right: 17.99px;
  @media (max-width: 1001px) {
    width: 30px;
    height: 30px;
    margin-right: 0px;
  }
`;

export const BagelEllipse = styled.div<EllipseProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border-radius: 50%;
  border-width: ${(props) => props.borderWidth + "px"};
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  filter: blur(${(props) => props.blur + "px"});
  transform: rotate(${(props) => props.from + "deg"});
  mix-blend-mode: screen;
  animation: ${rotateAnimation} 10s linear infinite;
`;

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

export const BagelWrapper = styled.div<{
  width: number;
  height: number;
}>`
  position: relative;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  margin: 0 auto;
  margin-top: 350px;
  @media (max-width: 1001px) {
    margin-top: 250px;
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

export const LoadingWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #1e1e1e;
  z-index: 10;
`;

export const LoadingContainer = styled.div`
  max-width: 100%;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Eternal = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 42px;
  width: 100%;
  height: 30px;
  object-fit: contain;
  @media (max-width: 1001px) {
    width: 95%;
  }
`;

import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 939px;
  height: 939px;
`;

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

export const PortraitImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

export const Shadow = styled.div`
  z-index: 2;
  position: absolute;
  height: 393px;
  width: 100%;
  background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
  bottom: 0;
  left: 0;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 19px);
`;

export const Name = styled.div`
  text-align: center;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 10px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 110%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
`;
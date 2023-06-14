import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 213px;
  width: 100%;
  height: 400px;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (max-width: 1001px) {
    margin-top: 250px;
  }
  @media (max-width: 900px) {
    margin-top: 150px;
  }
  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 700px) {
    margin-top: 50px;
  }
  @media (max-width: 600px) {
    margin-top: -20px;
  }
  @media (max-width: 500px) {
    margin-top: -70px;
  }
  @media (max-width: 400px) {
    margin-top: -127px;
  }

`;

export const Conversation = styled.img`
  width: 92.8%;
  height: auto;
  position: absolute;
  left: 4.8%;
  bottom: 190px;
  @media (max-width: 1001px) {
    left: 50%;
    transform: translate(-50%, 0%);
    width: 152.594%;
    bottom: 41.3px;
  }
`;

export const Blur = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0%;
  bottom: 8px;
  @media (max-width: 1001px) {
    left: 50%;
    transform: translate(-50%, 0%);
    width: 185%;
  }
`;

export const PortraitMusk = styled.img`
  width: 24.9%;
  height: auto;
  position: absolute;
  left: 0.1%;
  bottom: 0px;
  @media (max-width: 1001px) {
    display: none;
  }
`;

export const PortraitTeresa = styled.img`
  width: 20.9%;
  height: auto;
  position: absolute;
  left: 75.9%;
  bottom: 0px;
  @media (max-width: 1001px) {
    display: none;
  }
`;

export const PortraitJobs = styled.img`
  width: 27.1%;
  height: auto;
  position: absolute;
  left: 15.9%;
  bottom: 0px;
  @media (max-width: 1001px) {
    width: 55%;
    bottom: 0px;
    left: -19.5%;
  }
`;

export const PortraitEinstein = styled.img`
  width: 23.8%;
  height: auto;
  position: absolute;
  left: 58.4%;
  bottom: 0px;
  @media (max-width: 1001px) {
    width: 47.9%;
    bottom: 0px;
    left: 67.7%;
  }
`;

export const Ellipse = styled.img`
  width: 58.19%;
  height: auto;
  position: absolute;
  left: 22.777%;
  bottom: 168px;
  @media (max-width: 1001px) {
    width: 108.981%;
    bottom: 148.21px;
    left: -2.76%;
  }
`;

export const PortraitKing = styled.img`
  width: 35.8%;
  height: auto;
  position: absolute;
  left: 32.1%;
  bottom: 0px;
  @media (max-width: 1001px) {
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0px;
    width: 72%;
  }
`;

export const Shadow = styled.div`
  z-index: 1;
  position: absolute;
  height: 393px;
  width: 200%;
  background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
  bottom: 0;
  left: -100px;
  @media (max-width: 1001px) {
    height: 136.44px;
  }
`;

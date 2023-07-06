import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  gap: 16px;
`;

export const MiniPortraitWrapper = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 100%;
`;

export const MiniPortraitBG = styled.div<{
  background: string;
}>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const MiniPortrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const MessageBlob = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
  padding: 42px 48px;
  gap: 8px;
  isolation: isolate;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #e4e4e4;
  @media (max-width: 1001px) {
    font-size: 14px;
    padding: 24px;
  }
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
export const DotWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
`;
export const Dot = styled.div<{
  delay: string;
}>`
  background-color: white;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
  @media (max-width: 1001px) {
    width: 5px;
    height: 5px;
  }
`;

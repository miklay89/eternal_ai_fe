import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  height: 100%;
  background-color: #0a0907;
  color: #ffffff;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 28px;
  max-width: 1640px;
  height: 100vh;
  overflow: hidden;
`;

export const PortraitWrapper = styled.div`
  position: absolute;
  top: 153px;
  left: -4px;
`;

export const ChatInputWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 727px;
  height: 78px;
`;

export const ChatWindow = styled.div`
  position: absolute;
  padding-right: 26px;
  left: 887px;
  top: 137px;
  max-width: 745px;
  max-height: 970px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    opacity: 0.4;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  }
`;

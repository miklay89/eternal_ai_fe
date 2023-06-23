import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #0a0907;
  color: #ffffff;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 28px;
  max-width: 1640px;
  height: auto;
  max-height: 1326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  @media (max-width: 1001px) {
    max-height: none;
    padding: 16px;
    padding-bottom: 52px;
    gap: 8px;
  }
`;

export const PortraitWrapper = styled.div`
  margin-top: 87px;
  transform: translate(-10px, 0px);
  position: relative;

  @media (orientation: portrait) {
    transform: none;
    margin: 0 auto;
  }
  @media (orientation: landscape) {
    margin-top: auto;
    margin-bottom: auto;
    transform: none;
  }
`;

export const ChatInputWrapper = styled.div`
  position: relative;
  transform: translateX(-7px);
  max-width: 727px;
  height: 78px;
  z-index: 2;
  @media (max-width: 1601px) {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 1001px) {
    transform: none;
    position: relative;
    width: 100%;
    height: 56px;
    bottom: 0;
    right: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (orientation: portrait) {
    flex-direction: column;
    gap: 30px;
  }
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

export const ChatBoxWrapper = styled.div`
  transform: translateX(-40px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 1501px) {
    transform: none;
  }
`;

export const ChatWindow = styled.div`
  position: relative;
  padding-right: 26px;
  width: 744px;
  max-height: 900px;
  height: calc(100svh - 250px);
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

  @media screen and (max-width: 1601px) and (orientation: landscape) {
    max-width: 700px;
    width: 100%;
  }

  @media screen and (max-width: 1501px) and (orientation: landscape) {
    max-width: 670px;
  }

  @media screen and (max-width: 1301px) and (orientation: landscape) {
    max-width: 570px;
  }

  @media screen and (max-width: 1001px) and (orientation: portrait) {
    transform: translateX(7px);
    width: 100%;
    position: relative;
    margin: 0 auto;
    left: 0;
    top: 0;
    z-index: 0;
    gap: 8px;
    padding-right: 4px;
    max-height: 40vh;
  }

  @media screen and (max-width: 1001px) and (orientation: portrait) {
    max-height: 17vh;
  }

`;

export const Shadow = styled.div`
  z-index: 2;
  position: absolute;
  bottom: -60px;
  left: -100%;
  height: 30px;
  width: 400%;
  background: linear-gradient(180deg, #0a0806 0%, rgba(10, 8, 6, 0) 100%);
  display: none;
  @media (max-width: 1001px) {
    display: block;
  }
  @media (orientation: landscape) {
    display: none;
  }
`;

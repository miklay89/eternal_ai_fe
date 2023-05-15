import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  height: 100vh;
  background-color: #111115;
  color: #ffffff;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 28px;
  max-width: 1640px;
`;

export const PortraitWrapper = styled.div`
  position: absolute;
  top: 153px;
  left: -4px;
`;

export const ChatInputWrapper = styled.div`
  margin-left: auto;
  margin-right: 2px;
  margin-top: 404px;
  width: 727px;
  height: 78px;
`;

export const ChatWindow = styled.div`
  margin-left: auto;
  margin-right: 2px;
  margin-top: 130px;
  max-width: 719px;
  height: 676px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

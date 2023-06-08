import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 136px;
  z-index: 5;
  @media (max-width: 1001px) {
    margin-top: 67px;
  }
`;

export const MainTitle = styled.div`
  margin: 0 auto;
  margin-left: 16px;
  max-width: 100%;
  height: 94px;
  font-family: "Arquitecta";
  font-style: bold;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.3em;
    height: auto;
    margin-left: 0px;
  }
`;

export const Subtitle = styled.div`
  margin: 0 auto;
  margin-top: 8px;
  width: fit-content;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  text-align: center;
  @media (max-width: 1001px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

export const MessagesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px;
  width: 534px;
  margin-top: 32px;
  @media (max-width: 1001px) {
    width: auto;
    gap: 12px;
    margin-top: 24px;
  }
`;

export const TitleMessage = styled.div`
  background: linear-gradient(
    281.4deg,
    rgba(248, 45, 152, 0.3) -2.34%,
    rgba(88, 51, 239, 0.3) 114.41%
  );
  margin: 0 auto;
  padding: 1px;
  width: 534px;
  height: 78px;
  border-radius: 120px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 1) -2.34%,
      rgba(88, 51, 239, 1) 114.41%
    );
  }
  @media (max-width: 1001px) {
    height: 64px;
    width: 343px;
  }
`;

export const MessageText = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(90.83deg, #08081e 11.84%, #21050c 111.32%);
  padding: 8px 8px 8px 48px;
  border-radius: 120px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    font-size: 14px;
    line-height: 150%;
    padding: 21.5px 21.5px 24px 24px;
  }
`;

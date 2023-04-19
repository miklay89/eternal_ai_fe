import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin: 0 auto;
  margin-top: 141px;
  margin-left: -30px;
`;

export const MainTitle = styled.div`
  z-index: 50;
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
`;

export const Subtitle = styled.div`
  z-index: 50;
  margin: 0 auto;
  margin-top: 8px;
  width: fit-content;
  font-family: "Avenir-medium";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  text-align: center;
`;

export const MessagesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px;
  width: 534px;
  margin-top: 32px;
`;

export const TitleMessage = styled.div`
  z-index: 50;
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
`;

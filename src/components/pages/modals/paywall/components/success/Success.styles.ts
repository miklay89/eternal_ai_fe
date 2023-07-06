import styled from "styled-components";

export const Wrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const OuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 32px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
`;

export const InnerWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  padding: 48px;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    padding: 24px;
  }
`;

export const Circle = styled.div`
  margin: 0 auto;
  width: 78px;
  height: 78px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  @media (max-width: 1001px) {
    width: 56px;
    height: 56px;
  }
`;

export const Tick = styled.img`
  display: block;
  margin: auto auto;
  transform: scale(1.2, 1.2);
  @media (max-width: 1001px) {
    transform: scale(1, 1);
  }
`;

export const Title = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    margin-top: 16px;
    font-size: 18px;
  }
`;

export const Subtitle = styled.div`
  margin: 0 auto;
  margin-top: 7px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1001px) {
    margin-top: 16px;
    font-size: 12px;
  }
`;

export const StartChattingBtn = styled.button`
  width: 529px;
  height: 62px;
  margin: 0 auto;
  margin-top: 24px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 120px;
  border: none;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
  @media (max-width: 1001px) {
    margin: 0 auto;
    margin-top: 14px;
    width: 295px;
    height: 46px;
  }
`;

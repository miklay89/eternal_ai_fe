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
  flex-direction: column;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  padding: 48px;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    padding: 24px;
    width: 100%;
  }
`;

export const ProOuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 16px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: 66px;
  height: 40px;
  z-index: 5;
  @media (max-width: 1001px) {
    width: 58px;
    height: 42px;
    transform: translateY(-2px);
  }
`;

export const ProInnerWrapper = styled.div`
  display: flex;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  border-radius: 16px;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    padding: 15px 16px;
  }
`;

export const ProText = styled.div`
  margin: auto auto;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 11px;
  }
`;

export const Title = styled.div`
  margin-top: 26px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 18px;
    margin-top: 15px;
  }
`;

export const PaymentInputWrapper = styled.div`
  width: 100%;
  margin-top: 22px;
  @media (max-width: 1001px) {
    margin-top: 16px;
  }
`;

export const SubmitPaymentBtn = styled.button`
  margin-top: 20px;
  width: 529px;
  height: 62px;
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

import styled from "styled-components";
import { Payments } from "./types";

export const ModalWrapper = styled.div<{
  isOpen: boolean;
}>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(77px);
  background: rgba(0, 0, 0, 0.4);
  @media (max-width: 1001px) {
    display: block;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 1640px;
  width: 100%;
  padding: 28px;
  height: 100vh;
  padding-bottom: 70px;
  display: flex;
  flex-flow: column;
  @media (max-width: 1001px) {
    padding-top: 23px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }
`;

export const ModalNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1001px) {
  }
`;

export const Left = styled.div`
  width: 320px;
  height: auto;
  @media (max-width: 1001px) {
    display: none;
  }
`;

export const Center = styled.div`
  width: 320px;
  height: auto;
  display: flex;
`;

export const Right = styled.div`
  width: 320px;
  height: auto;
`;

export const ModalCloseBtnWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  margin-left: auto;
  border-radius: 8px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 1001px) {
    width: 48px;
    height: 48px;
  }
`;

export const ModalCloseIcon = styled.img`
  display: block;
  margin: auto auto;
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
    padding: 32px;
  }
`;

export const Title = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 24px;
  }
`;

export const Description = styled.div`
  margin-top: 8px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const OuterWrapper = styled.div`
  padding: 1px;
  border-radius: 32px;
  background: linear-gradient(
    281.4deg,
    rgba(248, 45, 152, 0.3) -2.34%,
    rgba(88, 51, 239, 0.3) 114.41%
  );
  position: absolute;
  max-width: 721px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CheckBoxWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  align-content: center;
  @media (max-width: 1001px) {
    margin-top: 24px;
    gap: 12px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 1001px) {
    width: 28px;
    height: 28px;
  }
`;

export const Check = styled.img<{
  isChecked: boolean;
}>`
  display: block;
  margin: auto auto;

  filter: ${(props) =>
    props.isChecked
      ? "invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg) brightness(100%) contrast(95%)"
      : ""};
`;

export const CheckBoxText = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const ContinueBtn = styled.button`
  margin: 0 auto;
  margin-top: 32px;
  width: 625px;
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
    width: 279px;
    margin-top: 24px;
  }
`;

export const PaywallContentWrapper = styled.div<{
  status: string;
}>`
  display: flex;
  flex-direction: column;
  margin-top: 175px;
  gap: 30px;
  @media (max-width: 1001px) {
    margin-top: ${(props) => props.status === Payments.INFO ? "26px" : ""};
    margin-top: ${(props) => props.status === Payments.PAYMENT ? "121px" : ""};
    margin-top: ${(props) => props.status === Payments.SUCCESS ? "196px" : ""};
    gap: 16px;
  }
`;

export const TitleWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const SubTitle = styled.div`
  margin: 0 auto;
  margin-top: 4px;
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
    font-size: 14px;
  }
`;

export const PaymentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  z-index: 10;
`;

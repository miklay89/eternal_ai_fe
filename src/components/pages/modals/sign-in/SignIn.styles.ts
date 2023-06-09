import styled from "styled-components";

export const ModalWrapper = styled.div<{
  isOpen: boolean;
}>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(77px);
  z-index: 10;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 28px;
  height: 100vh;
  flex-direction: column;
  @media (max-width: 1001px) {
    padding: 23px 16px 16px;
  }
`;

export const ModalNavWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1640px;
  padding-left: 28px;
  padding-right: 28px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1001px) {
    padding: 0;
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
  height: 48px;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 24px;
    height: 36px;
  }
`;

export const InputTitle = styled.div`
  margin-top: 32px;
  width: auto;
  height: 27px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    margin-top: 24px;
    font-size: 14px;
    height: 21px;
  }
`;

export const Input = styled.input`
  margin-top: 8px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #060608;
  border: 1px solid #2f2535;
  border-radius: 16px;
  flex: none;
  align-self: stretch;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    border-color: rgba(248, 45, 152, 1);
  }
  @media (max-width: 1001px) {
    font-size: 14px;
    height: 53px;
  }
`;

export const ForgotPassword = styled.div`
  margin-top: 32px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1001px) {
    margin-top: 24px;
    font-size: 14px;
  }
`;

export const SignInBtn = styled.button`
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
    margin-top: 24px;
    width: 279px;
  }
`;

export const Divider = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 0px;
  border: 1px solid #2f2535;
  @media (max-width: 1001px) {
    margin-top: 24px;
  }
`;

export const HaveNotWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 32px;
  @media (max-width: 1001px) {
    margin-top: 24px;
  }
`;

export const NotText = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const NotLink = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #f82d98;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

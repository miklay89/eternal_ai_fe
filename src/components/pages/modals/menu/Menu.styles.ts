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
  z-index: 10;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(77px);
  background: rgba(0, 0, 0, 0.4);
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
  display: -webkit-flex;
  flex-flow: column;
  justify-content: space-between;
  @media (max-width: 1001px) {
    padding-top: 23px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }
`;

export const ModalNavWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  @media (max-width: 1001px) {
  }
`;

export const Left = styled.div`
  width: 320px;
  height: auto;
  @media (max-width: 1001px) {
    order: 2;
  }
`;

export const Center = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  display: -webkit-flex;
  @media (max-width: 1001px) {
    order: 1;
  }
`;

export const Right = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: auto;
  @media (max-width: 1001px) {
    display: none;
  }
`;

export const MenuCloseBtnWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  display: -webkit-flex;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  margin-right: auto;
  border-radius: 8px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 1001px) {
    width: 48px;
    height: 48px;
    margin-right: 0;
    margin-left: auto;
  }
`;

export const Navbar = styled.nav`
  position: absolute;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
`;

export const Link = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0 auto;
  margin-top: 32px;
  width: auto;
  height: 48px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
  &:focus {
    color: #f82d98;
  }
  @media (max-width: 500px) {
    font-size: 24px;
    height: auto;
  }
`;

export const Divider = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  width: 279px;
  height: 0px;
  border: 1px solid #2f2535;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const Social = styled.div`
  margin-top: 32px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: auto;
  height: auto;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
  @media (max-width: 500px) {
    margin-top: 26px;
    gap: 13px;
  }
`;

export const SocialFacebook = styled.img`
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  @media (max-width: 500px) {
    scale: 0.68;
  }
`;

export const SocialInstagram = styled.img`
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  @media (max-width: 500px) {
    scale: 0.68;
    transform: translate(-3px);
  }
`;

export const SocialTwitter = styled.img`
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  @media (max-width: 500px) {
    scale: 0.68;
    transform: translate(-6px);
  }
`;

export const SocialDiscord = styled.img`
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  @media (max-width: 500px) {
    scale: 0.9;
    transform: translate(-4px);
  }
`;

export const LoginBtn = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 32px;
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
    color: #f82d98;
  }
  &:focus {
    color: #f82d98;
  }
`;

export const LoginBtnAdditional = styled.div<{
  authState: boolean;
}>`
  display: block;
  width: 150px;
  margin: 0 auto;
  margin-top: ${(props) => (props.authState ? "72px" : "24px")};
  font-family: "Arquitecta";
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
  &:focus {
    color: #f82d98;
  }
`;

export const AdditionalButtonsWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  position: relative;
  margin-bottom: 80px;
`;

export const GetStartedBtn = styled.button<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 185px;
  height: 48px;
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
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const GetStartedAdditionalBtn = styled.button<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 185px;
  height: 48px;
  margin: 0 auto;
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
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const ShareBtnInner = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  border-radius: 66px;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
`;

export const ShareIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ShareText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
`;

import styled from "styled-components";

export const MenuWrapper = styled.div<{
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
  height: 100vh;
`;

export const Navbar = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  @media (max-width: 1001px) {
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
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: auto;
  height: auto;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
  @media (max-width: 1001px) {
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
  @media (max-width: 1001px) {
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
  @media (max-width: 1001px) {
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
  @media (max-width: 1001px) {
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
  @media (max-width: 1001px) {
    scale: 0.9;
    transform: translate(-4px);
  }
`;

export const LoginBtn = styled.div<{
  authState: boolean;
}>`
  display: block;
  margin: 0 auto;
  margin-top: ${(props) => props.authState ? "72px" : "0px"};
  font-family: "Arquitecta";
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
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  position: relative;
  top: 90.8%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GetStartedBtn = styled.button<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  height: 48px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 120px;
  border: none;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
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
  @media (min-width: 400px) {
    width: 200px;
    margin: 0 auto;
  }
`;

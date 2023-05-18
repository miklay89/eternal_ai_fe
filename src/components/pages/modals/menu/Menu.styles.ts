import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: auto;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  max-width: 1640px;
  margin-top: 28px;
  padding-left: 28px;
  padding-right: 28px;
`;

export const HeaderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 56px;
`;

export const ModalCloseBtnWrapper = styled.div`
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  border-radius: 8px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  z-index: 15;
`;

export const ModalCloseIcon = styled.img`
  display: block;
  margin: auto auto;
`;

export const MainLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
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

export const GetStartedBtn = styled.button`
  display: block;
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
`;

export const MenuIcon = styled.img`
  display: block;
  margin: auto 0;
  margin-left: 4px;
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
`;

export const MenuCloseIcon = styled.img`
  display: block;
  margin: auto auto;
`;

export const MainLogo = styled.img`
  cursor: pointer;
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
`;


export const MenuWrapper = styled.div<{
  isOpen: boolean;
}>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(77px);
  z-index: 10;
`;

export const Navbar = styled.nav`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 343px;
  left: calc(50% - 343px / 2 + 0.5px);
  top: calc(50% - 440px / 2 + 0.5px);
  border-radius: 32px;
`;

export const Link = styled.div`
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
`;

export const SocialImg = styled.img`
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
`;

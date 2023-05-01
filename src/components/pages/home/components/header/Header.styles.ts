import styled from "styled-components";

export const HeaderWrapper = styled.div<{
  isOpenModal: boolean;
}>`
  height: 56px;
  margin: 0 auto;
  position: relative;
  display: ${(props) => (props.isOpenModal ? "block" : "flex")};
  width: ${(props) => (props.isOpenModal ? "270px" : "")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const HeaderItemWrapper = styled.div<{
  isOpenModal: boolean;
}>`
  display: ${(props) => (props.isOpenModal ? "none" : "flex")};
  justify-content: ${(props) => (props.isOpenModal ? "center" : "space-between")};
  margin: ${(props) => (props.isOpenModal ? "0 auto" : "0")};
  align-items: center;
  width: 270px;
  height: 56px;
`;

export const MenuIconWrapper = styled.div<{
  isOpenMenu: boolean;
  isOpenModal: boolean;
}>`
  display: ${(props) => (props.isOpenMenu ? "none" : props.isOpenModal ? "none" : "flex")};
  flex-direction: row;
  align-items: flex-start;
  width: 56px;
  height: 56px;
  cursor: pointer;
`;

export const MenuCloseBtnWrapper = styled.div<{
  isOpenMenu: boolean;
}>`
  cursor: pointer;
  box-sizing: border-box;
  display: ${(props) => (props.isOpenMenu ? "flex" : "none")};
  flex-direction: row;
  align-items: flex-start;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  border-radius: 8px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const MainLogoWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginBtn = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "none" : "block")};
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

export const GetStartedBtn = styled.button<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "none" : "block")};
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

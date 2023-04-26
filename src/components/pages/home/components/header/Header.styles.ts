import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 56px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;

export const MenuIconWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "none" : "flex")};
  flex-direction: row;
  align-items: flex-start;
  margin-left: 22px;
  width: 56px;
  height: 56px;
  cursor: pointer;
`;

export const MenuCloseBtnWrapper = styled.div<{
  show: boolean;
}>`
  cursor: pointer;
  box-sizing: border-box;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  align-items: flex-start;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  border-radius: 8px;
  margin-left: 32px;
`;

export const MainLogoWrapper = styled.div<{
  menuIsOpen: boolean;
}>`

  margin-left: ${(props) => (props.menuIsOpen ? "214px" : "224px")};
  display: flex;
  align-items: center;
`;

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginBtn = styled.div`
  margin-right: 30px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;

export const GetStartedBtn = styled.button`
  margin-right: 30px;
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
  margin: auto auto;
`;

export const MenuCloseIcon = styled.img`
  display: block;
  margin: auto auto;
`;

export const MainLogo = styled.img``;

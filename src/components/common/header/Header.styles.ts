import styled from "styled-components";

export const HeaderWrapper = styled.div<{
  show: boolean;
}>`
  height: auto;
  margin: 0 auto;
  position: relative;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;

export const HeaderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 56px;
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 56px;
  height: 56px;
  cursor: pointer;
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

export const ShareBtnOuter = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 1px;
  border-radius: 66px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: 160px;
  height: 48px;
  cursor: pointer;
`;

export const ShareBtnInner = styled.div`
  display: flex;
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

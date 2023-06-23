import styled from "styled-components";

export const HeaderWrapper = styled.div<{
  show: boolean;
}>`
  height: auto;
  margin: 0 auto;
  position: relative;
  width: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  @media (max-width: 1001px) {
    margin: 0;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 56px;
  @media (max-width: 1001px) {
    width: 160px;
    height: 30px;
    order: 2;
    gap: 16px;
    justify-content: end;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 56px;
  @media (max-width: 1001px) {
    width: 160px;
    height: 30px;
    order: 1;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 56px;
  @media (max-width: 1001px) {
    height: 30px;
    display: none;
  }
`;

export const MenuIconWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  align-items: flex-start;
  width: 56px;
  height: 56px;
  cursor: pointer;
  @media (max-width: 1001px) {
    width: auto;
    height: auto;
  }
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
  filter: brightness(0) invert(1);
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  @media (max-width: 1001px) {
    filter: url("#custom");
    margin-left: 0px;
  }
`;

export const MenuCloseBtnWrapper = styled.div<{
  show: boolean;
}>`
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  display: ${(props) => (props.show ? "flex" : "none")};
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
  @media (max-width: 1001px) {
    width: 48px;
    height: 48px;
  }
`;

export const MenuCloseIcon = styled.img`
  display: block;
  margin: auto auto;
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

export const AdditionalShareBtn = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 1px;
  border-radius: 66px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: 75px;
  height: 32px;
  cursor: pointer;
  @media (min-width: 1002px) {
    display: none;
  }
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
  @media (max-width: 1001px) {
    width: 43px;
    height: 12px;
    font-size: 11px;
    letter-spacing: 0.2em;
  }
`;

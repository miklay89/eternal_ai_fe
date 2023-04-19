import styled from "styled-components";

export const HeaderContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIconWrapper = styled.div`
  z-index: 50;
  position: absolute;
  left: 32px;
  top: 47px;
  cursor: pointer;
`;

export const MainLogoWrapper = styled.div`
  display: flex;
  margin-left: 714px;
  align-items: center;
`;

export const HeaderButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 68px;
  top: 32px;
  align-items: center;
`;

export const LoginBtn = styled.div`
  z-index: 50;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  margin-right: 32px;
`;

export const GetStartedBtn = styled.button`
  z-index: 50;
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

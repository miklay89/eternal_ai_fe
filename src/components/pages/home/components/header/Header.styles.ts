import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1640px;
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  cursor: pointer;
`;

export const MainLogoWrapper = styled.div`
  margin-left: 230px;
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

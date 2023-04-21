import {
  HeaderWrapper,
  MenuIconWrapper,
  MainLogoWrapper,
  HeaderButtonsWrapper,
  LoginBtn,
  GetStartedBtn,
} from "./Header.styles";
import { ReactComponent as MenuIcon } from "../../../../../../public/home/MainMenuIcon.svg";
import { ReactComponent as Eternal } from "../../../../../../public/home/ETERNAL.svg";
import Bagel from "./bagel/Bagel";

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuIconWrapper>
        <MenuIcon />
      </MenuIconWrapper>
      <MainLogoWrapper>
        <Bagel />
        <Eternal />
      </MainLogoWrapper>
      <HeaderButtonsWrapper>
        <LoginBtn>login</LoginBtn>
        <GetStartedBtn>get started</GetStartedBtn>
      </HeaderButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

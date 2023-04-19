import {
  HeaderContentWrapper,
  MenuIconWrapper,
  MainLogoWrapper,
  HeaderButtonsWrapper,
  LoginBtn,
  GetStartedBtn,
} from "./Header.styles";
import { ReactComponent as MenuIcon } from "../../../../../assets/Vector.svg";
import { ReactComponent as Eternal } from "../../../../../assets/ETERNAL.svg";
import Bagel from "./bagel/Bagel";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;

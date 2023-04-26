import { Dispatch, SetStateAction } from "react";
import {
  HeaderWrapper,
  MenuIconWrapper,
  MainLogoWrapper,
  HeaderButtonsWrapper,
  LoginBtn,
  GetStartedBtn,
  MenuIcon,
  MainLogo,
  MenuCloseBtnWrapper,
  MenuCloseIcon,
} from "./Header.styles";
import Bagel from "./bagel/Bagel";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onMenuClick: Dispatcher<boolean>;
};

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <MenuIconWrapper
        show={props.isOpen}
        onClick={() => props.onMenuClick((prev) => !prev)}
      >
        <MenuIcon src="/header/menu_icon.svg" />
      </MenuIconWrapper>
      <MenuCloseBtnWrapper
        show={props.isOpen}
        onClick={() => props.onMenuClick((prev) => !prev)}
      >
        <MenuCloseIcon src="/header/close_btn.svg" />
      </MenuCloseBtnWrapper>
      <MainLogoWrapper menuIsOpen={props.isOpen}>
        <Bagel />
        <MainLogo src="/eternal.svg" />
      </MainLogoWrapper>
      <HeaderButtonsWrapper>
        <LoginBtn>login</LoginBtn>
        <GetStartedBtn>get started</GetStartedBtn>
      </HeaderButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

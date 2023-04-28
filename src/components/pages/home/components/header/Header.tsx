import { Dispatch, SetStateAction, useState } from "react";
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
  HeaderItemWrapper,
} from "./Header.styles";
import Bagel from "./bagel/Bagel";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onMenuClick: Dispatcher<boolean>;
  onGetStartedClick: Dispatcher<boolean>;
};

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <HeaderItemWrapper>
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
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        <MainLogoWrapper>
          <Bagel />
          <MainLogo src="/eternal.svg" />
        </MainLogoWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        <LoginBtn>login</LoginBtn>
        <GetStartedBtn onClick={() => props.onGetStartedClick((prev) => !prev)}>
          get started
        </GetStartedBtn>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};

export default Header;

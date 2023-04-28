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
  isOpenSignUp: boolean;
  onMenuClick: Dispatcher<boolean>;
  onGetStartedClick: Dispatcher<boolean>;
  onGetStartedClickClose: Dispatcher<boolean>;
};

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <HeaderItemWrapper isOpenSignUp={false}>
        <MenuIconWrapper
          show={props.isOpen}
          isOpenSignUp={props.isOpenSignUp}
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
      <HeaderItemWrapper isOpenSignUp={false}>
        <MainLogoWrapper>
          <Bagel />
          <MainLogo src="/eternal.svg" />
        </MainLogoWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper isOpenSignUp={props.isOpenSignUp}>
        <LoginBtn show={props.isOpenSignUp}>login</LoginBtn>
        <GetStartedBtn
          show={props.isOpenSignUp}
          onClick={() => {
            props.onGetStartedClick((prev) => !prev);
            props.onMenuClick((prev) => !prev);
          }}
        >
          get started
        </GetStartedBtn>
        <MenuCloseBtnWrapper
          show={props.isOpenSignUp}
          onClick={() => props.onGetStartedClickClose((prev) => !prev)}
        >
          <MenuCloseIcon src="/header/close_btn.svg" />
        </MenuCloseBtnWrapper>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};

export default Header;

import { Dispatch, SetStateAction, useState } from "react";
import {
  HeaderWrapper,
  MenuIconWrapper,
  MainLogoWrapper,
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
  isOpenMenu: boolean;
  isOpenModal: boolean;
  onMenuClick: Dispatcher<boolean>;
  onGetStartedClick: Dispatcher<boolean>;
  onLoginClick: Dispatcher<boolean>;
};

const Header = (props: Props) => {
  return (
    <HeaderWrapper isOpenModal={props.isOpenModal}>
      <HeaderItemWrapper isOpenModal={props.isOpenModal}>
        <MenuIconWrapper
          isOpenMenu={props.isOpenMenu}
          isOpenModal={props.isOpenModal}
          onClick={() => props.onMenuClick((prev) => !prev)}
        >
          <MenuIcon src="/header/menu_icon.svg" />
        </MenuIconWrapper>

        <MenuCloseBtnWrapper
          isOpenMenu={props.isOpenMenu}
          onClick={() => props.onMenuClick((prev) => !prev)}
        >
          <MenuCloseIcon src="/header/close_btn.svg" />
        </MenuCloseBtnWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper isOpenModal={false}>
        <MainLogoWrapper>
          <Bagel />
          <MainLogo src="/eternal.svg" />
        </MainLogoWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper isOpenModal={props.isOpenModal}>
        <LoginBtn
          show={props.isOpenModal}
          onClick={() => props.onLoginClick((prev) => !prev)}
        >
          login
        </LoginBtn>
        <GetStartedBtn
          show={props.isOpenModal}
          onClick={() => {
            props.onGetStartedClick((prev) => !prev);
          }}
        >
          get started
        </GetStartedBtn>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};

export default Header;

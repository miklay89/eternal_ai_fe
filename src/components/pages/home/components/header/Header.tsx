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

import { Modals } from "../../Home";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpenMenu: boolean;
  isOpenModal: boolean;
  onOptionClick: Dispatcher<string | null>;
  onCloseClick: Dispatcher<string | null>;
};

const Header = (props: Props) => {
  return (
    <HeaderWrapper isOpenModal={props.isOpenModal}>
      <HeaderItemWrapper isOpenModal={props.isOpenModal}>
        <MenuIconWrapper
          isOpenMenu={props.isOpenMenu}
          isOpenModal={props.isOpenModal}
          onClick={() => props.onOptionClick(Modals.MENU)}
        >
          <MenuIcon src="/header/menu_icon.svg" />
        </MenuIconWrapper>

        <MenuCloseBtnWrapper
          isOpenMenu={props.isOpenMenu}
          onClick={() => props.onCloseClick(null)}
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
          onClick={() => props.onOptionClick(Modals.SIGN_IN)}
        >
          login
        </LoginBtn>
        <GetStartedBtn
          show={props.isOpenModal}
          onClick={() => {
            props.onOptionClick(Modals.SIGN_UP);
          }}
        >
          get started
        </GetStartedBtn>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};

export default Header;

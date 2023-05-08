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

import { Modals } from "../../pages/home/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import scrollToTop from "../../hooks/scrollToTop";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpenMenu: boolean;
  isOpenModal: boolean;
  onOptionClick: Dispatcher<string | null>;
  onCloseClick: Dispatcher<string | null>;
};

const Header = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      props.onCloseClick(null);
      scrollToTop();
    } else {
      navigate(Paths.HOME);
      scrollToTop();
    }
  };

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
        <MainLogoWrapper onClick={(e) => handleClickLogo(e)}>
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

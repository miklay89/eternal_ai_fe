import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Divider,
  GetStartedBtn,
  HeaderItemWrapper,
  HeaderWrapper,
  Link,
  LoginBtn,
  MainLogo,
  MainLogoWrapper,
  MenuCloseIcon,
  MenuWrapper,
  ModalCloseBtnWrapper,
  Navbar,
  ShareBtnInner,
  ShareBtnOuter,
  ShareIcon,
  ShareText,
  Social,
  SocialImg,
} from "./Menu.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { Modals } from "../../home/Home";
import Bagel from "../../../common/header/bagel/Bagel";
import scrollToTop from "../../../hooks/scrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import LocalStorage from "../../../../services/localStorage";
import { setAuth } from "../../../../store/authReducer";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickAboutLink: Dispatcher<string | null>;
  closeMenu: Dispatcher<string | null>;
};

const Menu = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const AuthState = useSelector((state: RootState) => state.isAuth);
  const [signOutBtn, showSingOutBtn] = useState<boolean>(false);

  useEffect(() => {
    if (AuthState.isAuth) {
      showSingOutBtn(true);
      return;
    }
    if (!AuthState.isAuth) {
      showSingOutBtn(false);
      return;
    }
  }, [AuthState.isAuth]);

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.ACCOUNT) {
      props.closeMenu(null);
    }
    navigate("/account");
  };

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      props.closeMenu(null);
      scrollToTop();
    } else {
      navigate(Paths.HOME);
      scrollToTop();
    }
  };

  const handleClickPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    if (AuthState.isAuth) {
      navigate(Paths.PAYWALL);
    } else {
      props.closeMenu(Modals.SIGN_IN);
    }
  };

  const handleClickBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!signOutBtn) {
      props.closeMenu(Modals.SIGN_IN);
    } else {
      setAuth(false);
      showSingOutBtn(false);
      LocalStorage.deleteToken();
    }
  };

  return (
    <MenuWrapper isOpen={props.isOpen}>
      <HeaderWrapper>
        <HeaderItemWrapper>
          <ModalCloseBtnWrapper onClick={() => props.closeMenu(null)}>
            <MenuCloseIcon src="/header/close_btn.svg" />
          </ModalCloseBtnWrapper>
        </HeaderItemWrapper>
        <HeaderItemWrapper>
          <MainLogoWrapper onClick={(e) => handleClickLogo(e)}>
            <Bagel />
            <MainLogo src="/eternal.svg" />
          </MainLogoWrapper>
        </HeaderItemWrapper>
        <HeaderItemWrapper>
          <LoginBtn onClick={(e) => handleClickBtn(e)}>
            {signOutBtn ? "sign out" : "login"}
          </LoginBtn>
          <GetStartedBtn
          show={signOutBtn ? false : true}
          onClick={() => {
            props.closeMenu(Modals.SIGN_UP);
          }}
        >
          get started
        </GetStartedBtn>
        <ShareBtnOuter show={signOutBtn ? true : false}>
          <ShareBtnInner>
            <ShareIcon src="/share_icon.svg" />
            <ShareText>SHARE</ShareText>
          </ShareBtnInner>
        </ShareBtnOuter>
        </HeaderItemWrapper>
      </HeaderWrapper>
      <Navbar>
        <Link onClick={() => props.onClickAboutLink(Modals.ABOUT)}>
          About us
        </Link>
        <Link onClick={(e) => handleClickPricing(e)}>Pricing</Link>
        <Link onClick={(e) => handleAccountClick(e)}>My account</Link>
        <Divider />
        <Social>
          <SocialImg src="/menu/facebook.svg" />
          <SocialImg src="/menu/instagram.svg" />
          <SocialImg src="/menu/twitter.svg" />
          <SocialImg src="/menu/discord.svg" />
        </Social>
      </Navbar>
    </MenuWrapper>
  );
};

export default Menu;

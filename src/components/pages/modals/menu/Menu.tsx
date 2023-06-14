import {
  AdditionalButtonsWrapper,
  Center,
  Container,
  Divider,
  GetStartedBtn,
  Left,
  Link,
  LoginBtn,
  LoginBtnAdditional,
  MenuCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  Navbar,
  Overlay,
  Right,
  ShareBtnInner,
  ShareIcon,
  ShareText,
  Social,
  SocialDiscord,
  SocialFacebook,
  SocialInstagram,
  SocialTwitter,
} from "./Menu.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";
import { RootState } from "../../../../store";
import { setAuth } from "../../../../store/reducers/auth";
import socket from "../../../../services/socket";
import { setConnection } from "../../../../store/reducers/socket";
import LocalStorage from "../../../../services/localStorage";
import { setInitialState } from "../../../../store/reducers/profile";
import { useEffect, useState } from "react";
import MainLogo from "../../../common/mainLogo/MainLogo";
import { MenuCloseIcon, ShareBtnOuter } from "../../../common/header/Header.styles";

type Props = {
  isOpen: boolean;
};

const Menu = (props: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.ACCOUNT) {
      dispatch(openModal(Modals.NONE));
    }
    dispatch(openModal(Modals.NONE));
    navigate("/account");
  };

  const handleClickPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal(Modals.NONE));
    navigate(Paths.PAYWALL);
  };

  const handleClickBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!authState) {
      dispatch(openModal(Modals.SIGN_IN));
    } else {
      dispatch(setAuth(false));
      socket.disconnect();
      dispatch(setConnection(false));
      LocalStorage.deleteToken();
      dispatch(setInitialState());
      navigate(Paths.HOME);
    }
  };

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () =>
      setWidth(window.innerWidth)
    );
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <Overlay />
      <Container>
        <ModalNavWrapper>
          <Left>
            <MenuCloseBtnWrapper
              onClick={() => dispatch(openModal(Modals.NONE))}
            >
              <MenuCloseIcon src="/header/close_btn.svg" />
            </MenuCloseBtnWrapper>
          </Left>
          <Center>
            <MainLogo />
          </Center>
          <Right>
            <LoginBtn onClick={(e) => handleClickBtn(e)}>
              {authState ? "sign out" : "login"}
            </LoginBtn>
            <GetStartedBtn
              show={authState ? false : true}
              onClick={() => dispatch(openModal(Modals.SIGN_UP))}
            >
              get started
            </GetStartedBtn>
            <ShareBtnOuter show={authState ? true : false}>
              <ShareBtnInner>
                <ShareIcon src="/share_icon.svg" />
                <ShareText>SHARE</ShareText>
              </ShareBtnInner>
            </ShareBtnOuter>
          </Right>
        </ModalNavWrapper>
        <Navbar>
          <Link show={true} onClick={() => dispatch(openModal(Modals.ABOUT))}>
            About us
          </Link>
          <Link show={true} onClick={(e) => handleClickPricing(e)}>
            Pricing
          </Link>
          <Link show={true}>How it works</Link>
          <Link show={authState} onClick={(e) => handleAccountClick(e)}>
            My account
          </Link>
          <Divider />
          <Social>
            <SocialFacebook src="/menu/facebook.svg" />
            <SocialInstagram src="/menu/instagram.svg" />
            <SocialTwitter src="/menu/twitter.svg" />
            <SocialDiscord src="/menu/discord.svg" />
          </Social>
        </Navbar>
        <AdditionalButtonsWrapper
          show={window.innerWidth < 1001 ? true : false}
        >
          <GetStartedBtn
            show={authState ? false : true}
            onClick={() => dispatch(openModal(Modals.SIGN_UP))}
          >
            get started
          </GetStartedBtn>
          <LoginBtnAdditional
            authState={authState ? true : false}
            onClick={(e) => handleClickBtn(e)}
          >
            {authState ? "sign out" : "login"}
          </LoginBtnAdditional>
        </AdditionalButtonsWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default Menu;

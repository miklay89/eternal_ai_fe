import {
  AdditionalButtonsWrapper,
  Center,
  Container,
  Divider,
  GetStartedAdditionalBtn,
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
import MainLogo from "../../../common/mainLogo/MainLogo";
import {
  MenuCloseIcon,
  ShareBtnOuter,
} from "../../../common/header/Header.styles";
import { copyTextToClipboard } from "../../../hooks/copyToClipboard";
import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
};

const Menu = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const disabledRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const modalState = useSelector((state: RootState) => state.modal.open);

  const handleAccountClick = () => {
    if (location.pathname === Paths.ACCOUNT) {
      dispatch(openModal(Modals.NONE));
    }
    dispatch(openModal(Modals.NONE));
    navigate("/account");
  };

  const handleClickPricing = () => {
    navigate(Paths.HOME);
    dispatch(openModal(Modals.PAYWALL));
  };

  const handleClickBtn = () => {
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

  // outside click
  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (
        disabledRef.current &&
        disabledRef.current.contains(e.target as Node)
      ) {
        return;
      }
      if (ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(openModal(Modals.NONE));
      }
      return;
    };

    document.addEventListener("mouseup", outsideClickHandler);

    return () => {
      document.removeEventListener("mouseup", outsideClickHandler);
    };
  });

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <Overlay />
      <Container>
        <ModalNavWrapper>
          <Left>
            <MenuCloseBtnWrapper
              tabIndex={0}
              onClick={() => dispatch(openModal(Modals.NONE))}
              onKeyDown={(e) =>
                e.key === "Enter" ? dispatch(openModal(Modals.NONE)) : ""
              }
            >
              <MenuCloseIcon src="/header/close_btn.svg" />
            </MenuCloseBtnWrapper>
          </Left>
          <Center>
            <MainLogo tabIndex={modalState === Modals.MENU ? 0 : -1} />
          </Center>
          <Right>
            <LoginBtn
              tabIndex={0}
              onClick={(e) => handleClickBtn()}
              onKeyDown={(e) => (e.key === "Enter" ? handleClickBtn() : "")}
            >
              {authState ? "sign out" : "login"}
            </LoginBtn>
            <GetStartedBtn
              show={authState ? false : true}
              tabIndex={0}
              onClick={() => dispatch(openModal(Modals.SIGN_UP))}
              onKeyDown={(e) =>
                e.key === "Enter" ? dispatch(openModal(Modals.SIGN_UP)) : ""
              }
            >
              get started
            </GetStartedBtn>
            <ShareBtnOuter
              ref={props.isOpen ? ref : null}
              show={authState ? true : false}
              tabIndex={0}
              onClick={async () =>
                await copyTextToClipboard(window.location.href)
              }
              onKeyDown={async (e) =>
                e.key === "Enter"
                  ? await copyTextToClipboard(window.location.href)
                  : ""
              }
            >
              <ShareBtnInner>
                <ShareIcon src="/share_icon.svg" />
                <ShareText>SHARE</ShareText>
              </ShareBtnInner>
            </ShareBtnOuter>
          </Right>
        </ModalNavWrapper>
        <Navbar>
          <Link
            show={true}
            tabIndex={0}
            onClick={() => dispatch(openModal(Modals.ABOUT))}
            onKeyDown={(e) =>
              e.key === "Enter" ? dispatch(openModal(Modals.ABOUT)) : ""
            }
          >
            About us
          </Link>
          <Link
            show={true}
            tabIndex={0}
            onClick={() => handleClickPricing()}
            onKeyDown={(e) => (e.key === "Enter" ? handleClickPricing() : "")}
          >
            Pricing
          </Link>
          <Link
            show={true}
            tabIndex={0}
            ref={props.isOpen ? disabledRef : null}
          >
            How it works
          </Link>
          <Link
            show={authState}
            tabIndex={0}
            onClick={() => handleAccountClick()}
            onKeyDown={(e) => (e.key === "Enter" ? handleAccountClick() : "")}
          >
            My account
          </Link>
          <Divider />
          <Social>
            <a href="https://www.facebook.com/" tabIndex={0}>
              <SocialFacebook src="/menu/facebook.svg" />
            </a>
            <a href="https://www.instagram.com/" tabIndex={0}>
              <SocialInstagram src="/menu/instagram.svg" />
            </a>
            <a href="https://twitter.com/" tabIndex={0}>
              <SocialTwitter src="/menu/twitter.svg" />
            </a>
            <a href="https://discord.com/" tabIndex={0}>
              <SocialDiscord src="/menu/discord.svg" />
            </a>
          </Social>
        </Navbar>
        <AdditionalButtonsWrapper
          show={window.innerWidth < 1001 ? true : false}
        >
          <GetStartedAdditionalBtn
            tabIndex={0}
            show={authState ? false : true}
            onClick={() => dispatch(openModal(Modals.SIGN_UP))}
          >
            get started
          </GetStartedAdditionalBtn>
          <LoginBtnAdditional
            tabIndex={0}
            authState={authState ? true : false}
            onClick={() => handleClickBtn()}
          >
            {authState ? "sign out" : "login"}
          </LoginBtnAdditional>
        </AdditionalButtonsWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default Menu;

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
  Social,
  SocialImg,
} from "./Menu.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { Modals } from "../../home/Home";
import Bagel from "../../../common/header/bagel/Bagel";
import scrollToTop from "../../../hooks/scrollToTop";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

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

  const handleAccountClick = () => {
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
          <LoginBtn onClick={() => props.closeMenu(Modals.SIGN_IN)}>
            {signOutBtn ? "sign out" : "login"}
          </LoginBtn>
          <GetStartedBtn
            onClick={() => {
              props.closeMenu(Modals.SIGN_UP);
            }}
          >
            get started
          </GetStartedBtn>
        </HeaderItemWrapper>
      </HeaderWrapper>
      <Navbar>
        <Link onClick={() => props.onClickAboutLink(Modals.ABOUT)}>
          About us
        </Link>
        <Link>Pricing</Link>
        <Link>How it works</Link>
        <Link onClick={handleAccountClick}>My account</Link>
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

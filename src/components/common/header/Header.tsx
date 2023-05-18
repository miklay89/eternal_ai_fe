import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { setAuth } from "../../../store/authReducer";
import {
  HeaderWrapper,
  MenuIconWrapper,
  MainLogoWrapper,
  LoginBtn,
  GetStartedBtn,
  MenuIcon,
  MainLogo,
  HeaderItemWrapper,
} from "./Header.styles";
import Bagel from "./bagel/Bagel";
import { Modals } from "../../pages/home/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import scrollToTop from "../../hooks/scrollToTop";
import LocalStorage from "../../../services/localStorage";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onOptionClick: Dispatcher<string | null>;
  onCloseClick: Dispatcher<string | null>;
};

const Header = (props: Props) => {
  const AuthState = useSelector((state: RootState) => state.isAuth);
  const location = useLocation();
  const navigate = useNavigate();
  const [signOutBtn, showSingOutBtn] = useState<boolean>(false);

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

  const handleClickBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!signOutBtn) {
      props.onOptionClick(Modals.SIGN_IN);
    } else {
      setAuth(false);
      showSingOutBtn(false);
      LocalStorage.deleteToken();
    }
  };

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

  return (
    <HeaderWrapper show={props.show}>
      <HeaderItemWrapper>
        <MenuIconWrapper onClick={() => props.onOptionClick(Modals.MENU)}>
          <MenuIcon src="/header/menu_icon.svg" />
        </MenuIconWrapper>
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

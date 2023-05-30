import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { setAuth } from "../../../store/reducers/auth";
import {
  HeaderWrapper,
  MenuIconWrapper,
  MainLogoWrapper,
  LoginBtn,
  GetStartedBtn,
  MenuIcon,
  MainLogo,
  HeaderItemWrapper,
  ShareBtnOuter,
  ShareBtnInner,
  ShareIcon,
  ShareText,
  MenuCloseBtnWrapper,
  MenuCloseIcon,
} from "./Header.styles";
import Bagel from "./bagel/Bagel";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import scrollToTop from "../../hooks/scrollToTop";
import LocalStorage from "../../../services/localStorage";
import { Modals } from "../../pages/modals/types";
import { openModal } from "../../../store/reducers/modals";
import socket from "../../../services/socket";
import { setConnection } from "../../../store/reducers/socket";
import { setInitialState } from "../../../store/reducers/profile";

type Props = {
  show: boolean;
};

const Header = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const modalState = useSelector((state: RootState) => state.modal.open);

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      dispatch(openModal(Modals.NONE));
      scrollToTop();
    } else {
      navigate(Paths.HOME);
      dispatch(openModal(Modals.NONE));
      scrollToTop();
    }
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

  return (
    <HeaderWrapper
      show={props.show}
      isOpenMenu={modalState === Modals.MENU ? true : false}
    >
      <HeaderItemWrapper>
        <MenuIconWrapper
          show={modalState === Modals.MENU ? false : true}
          onClick={() => dispatch(openModal(Modals.MENU))}
        >
          <MenuIcon src="/header/menu_icon.svg" />
        </MenuIconWrapper>
        <MenuCloseBtnWrapper
          show={modalState === Modals.MENU ? true : false}
          onClick={() => dispatch(openModal(Modals.NONE))}
        >
          <MenuCloseIcon src="/header/close_btn.svg" />
        </MenuCloseBtnWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        <MainLogoWrapper onClick={(e) => handleClickLogo(e)}>
          <Bagel />
          <MainLogo src="/eternal.svg" />
        </MainLogoWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper>
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
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};

export default Header;

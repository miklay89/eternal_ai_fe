import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { setAuth } from "../../../store/reducers/auth";
import {
  HeaderWrapper,
  MenuIconWrapper,
  LoginBtn,
  GetStartedBtn,
  MenuIcon,
  ShareBtnOuter,
  ShareBtnInner,
  ShareIcon,
  ShareText,
  MenuCloseBtnWrapper,
  MenuCloseIcon,
  Center,
  Left,
  Right,
  AdditionalShareBtn,
} from "./Header.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import LocalStorage from "../../../services/localStorage";
import { Modals } from "../../pages/modals/types";
import { openModal } from "../../../store/reducers/modals";
import socket from "../../../services/socket";
import { setConnection } from "../../../store/reducers/socket";
import { setInitialState } from "../../../store/reducers/profile";
import MainLogo from "../mainLogo/MainLogo";
import { copyTextToClipboard } from "../../hooks/copyToClipboard";

type Props = {
  show: boolean;
};

const Header = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const modalState = useSelector((state: RootState) => state.modal.open);

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

  return (
    <HeaderWrapper show={props.show}>
      <Left>
        <AdditionalShareBtn
          show={location.pathname === Paths.CHAT ? true : false}
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          onClick={async () => await copyTextToClipboard(window.location.href)}
          onKeyDown={async (e) =>
            e.key === "Enter"
              ? await copyTextToClipboard(window.location.href)
              : ""
          }
        >
          <ShareBtnInner>
            <ShareText>SHARE</ShareText>
          </ShareBtnInner>
        </AdditionalShareBtn>
        <MenuIconWrapper
          show={modalState === Modals.MENU ? false : true}
          onClick={() => dispatch(openModal(Modals.MENU))}
          onKeyDown={(e) =>
            e.key === "Enter" ? dispatch(openModal(Modals.MENU)) : ""
          }
          tabIndex={modalState === Modals.NONE ? 0 : -1}
        >
          <MenuIcon src="/header/menu_icon.svg" />
        </MenuIconWrapper>
        <MenuCloseBtnWrapper
          show={modalState === Modals.MENU ? true : false}
          onClick={() => dispatch(openModal(Modals.NONE))}
          onKeyDown={(e) =>
            e.key === "Enter" ? dispatch(openModal(Modals.NONE)) : ""
          }
          tabIndex={modalState === Modals.NONE ? 0 : -1}
        >
          <MenuCloseIcon src="/header/close_btn.svg" />
        </MenuCloseBtnWrapper>
      </Left>
      <Center>
        <MainLogo tabIndex={modalState === Modals.NONE ? 0 : -1} />
      </Center>
      <Right>
        <LoginBtn
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          onClick={() => handleClickBtn()}
          onKeyDown={(e) => (e.key === "Enter" ? handleClickBtn() : "")}
        >
          {authState ? "sign out" : "login"}
        </LoginBtn>
        <GetStartedBtn
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          show={authState ? false : true}
          onClick={() => dispatch(openModal(Modals.SIGN_UP))}
          onKeyDown={(e) =>
            e.key === "Enter" ? dispatch(openModal(Modals.SIGN_UP)) : ""
          }
        >
          get started
        </GetStartedBtn>
        <ShareBtnOuter
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          show={authState ? true : false}
          onClick={async () => await copyTextToClipboard(window.location.href)}
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
    </HeaderWrapper>
  );
};

export default Header;

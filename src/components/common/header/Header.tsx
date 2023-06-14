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
} from "./Header.styles";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import LocalStorage from "../../../services/localStorage";
import { Modals } from "../../pages/modals/types";
import { openModal } from "../../../store/reducers/modals";
import socket from "../../../services/socket";
import { setConnection } from "../../../store/reducers/socket";
import { setInitialState } from "../../../store/reducers/profile";
import MainLogo from "../mainLogo/MainLogo";

type Props = {
  show: boolean;
};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const modalState = useSelector((state: RootState) => state.modal.open);

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
    <HeaderWrapper show={props.show}>
      <Left>
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
    </HeaderWrapper>
  );
};

export default Header;

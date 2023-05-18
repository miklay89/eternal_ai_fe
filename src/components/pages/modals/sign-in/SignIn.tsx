import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/index";
import { setAuth } from "../../../../store/authReducer";
import {
  Divider,
  HaveNotWrapper,
  NotLink,
  NotText,
  ForgotPassword,
  InnerWrapper,
  Input,
  InputTitle,
  ModalCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  OuterWrapper,
  SignInBtn,
  Title,
  LogoWrapper,
} from "./SignIn.styles";
import { MainLogo, MenuCloseIcon } from "../../../common/header/Header.styles";
import { Modals } from "../../home/Home";
import Auth from "../../../../api/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import Bagel from "../../../common/header/bagel/Bagel";
import scrollToTop from "../../../hooks/scrollToTop";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickClose: Dispatcher<string | null>;
  onClickSignUp: Dispatcher<string | null>;
};

const SignIn = (props: Props) => {
  const dispatch = useDispatch();
  const isAuthState = useSelector((state: RootState) => state.isAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // sign-in
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("invalid email");
      return;
    }
    if (!validatePassword(password)) {
      alert("invalid password");
      return;
    }

    const res = await Auth.signIn(email, password);
    if (typeof res === "string") {
      alert(res);
      return;
    }

    setEmail("");
    setPassword("");
    dispatch(setAuth(true));
    if (location.pathname === Paths.HOME || location.pathname === Paths.CHAT) {
      props.onClickClose(null);
    } else {
      navigate(Paths.HOME);
    }
  };

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      props.onClickClose(null);
      scrollToTop();
    } else {
      navigate(Paths.HOME);
      scrollToTop();
    }
  };

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <ModalNavWrapper>
        <LogoWrapper onClick={(e) => handleClickLogo(e)}>
          <Bagel />
          <MainLogo src="/eternal.svg" />
        </LogoWrapper>
        <ModalCloseBtnWrapper onClick={() => props.onClickClose(null)}>
          <MenuCloseIcon src="/header/close_btn.svg" />
        </ModalCloseBtnWrapper>
      </ModalNavWrapper>
      <OuterWrapper>
        <InnerWrapper>
          <Title>Login</Title>
          <InputTitle>Email</InputTitle>
          <Input
            placeholder="justin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <InputTitle>Password</InputTitle>
          <Input
            placeholder="*********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <ForgotPassword>Forgot password?</ForgotPassword>
          <SignInBtn onClick={(e) => handleClick(e)}>sign in</SignInBtn>
          <Divider />
          <HaveNotWrapper>
            <NotText>Don’t have an account?</NotText>
            &nbsp;
            <NotLink onClick={() => props.onClickSignUp(Modals.SIGN_UP)}>
              Sign up
            </NotLink>
          </HaveNotWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default SignIn;

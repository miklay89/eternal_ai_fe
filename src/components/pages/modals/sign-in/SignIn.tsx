import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../../store/reducers/auth";
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
import Auth from "../../../../api/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import Bagel from "../../../common/header/bagel/Bagel";
import scrollToTop from "../../../hooks/scrollToTop";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";

type Props = {
  isOpen: boolean;
};

const SignIn = (props: Props) => {
  const dispatch = useDispatch();
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

    if (
      location.pathname === Paths.HOME ||
      location.pathname === Paths.CHAT ||
      location.pathname === Paths.ACCOUNT
    ) {
      window.location.reload();
    } else {
      navigate(Paths.HOME);
      window.location.reload();
    }
  };

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      dispatch(openModal(Modals.NONE));
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
        <ModalCloseBtnWrapper onClick={() => dispatch(openModal(Modals.NONE))}>
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
            placeholder="•••••••••••••••••••"
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
            <NotLink onClick={() => dispatch(openModal(Modals.SIGN_UP))}>
              Sign up
            </NotLink>
          </HaveNotWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default SignIn;

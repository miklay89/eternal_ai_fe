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
  Container,
  Left,
  Center,
  Right,
  Overlay,
} from "./SignIn.styles";
import { MenuCloseIcon } from "../../../common/header/Header.styles";
import Auth from "../../../../api/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";
import MainLogo from "../../../common/mainLogo/MainLogo";

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
  const handleSubmit = async () => {
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

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <Overlay />
      <Container>
        <ModalNavWrapper>
          <Left></Left>
          <Center>
            <MainLogo tabIndex={0} />
          </Center>
          <Right>
            <ModalCloseBtnWrapper
              tabIndex={0}
              onClick={() => dispatch(openModal(Modals.NONE))}
              onKeyDown={(e) =>
                e.key === "Enter" ? dispatch(openModal(Modals.NONE)) : ""
              }
            >
              <MenuCloseIcon src="/header/close_btn.svg" />
            </ModalCloseBtnWrapper>
          </Right>
        </ModalNavWrapper>
        <OuterWrapper>
          <InnerWrapper>
            <Title>Login</Title>
            <InputTitle>Email</InputTitle>
            <Input
              tabIndex={0}
              placeholder="justin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
            ></Input>
            <InputTitle>Password</InputTitle>
            <Input
              tabIndex={0}
              placeholder="•••••••••••••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
            ></Input>
            <ForgotPassword>Forgot password?</ForgotPassword>
            <SignInBtn
              tabIndex={0}
              onClick={() => handleSubmit()}
              onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
            >
              sign in
            </SignInBtn>
            <Divider />
            <HaveNotWrapper>
              <NotText>Don’t have an account?</NotText>
              &nbsp;
              <NotLink
                tabIndex={0}
                onClick={() => dispatch(openModal(Modals.SIGN_UP))}
                onKeyDown={(e) =>
                  e.key === "Enter" ? dispatch(openModal(Modals.SIGN_UP)) : ""
                }
              >
                Sign up
              </NotLink>
            </HaveNotWrapper>
          </InnerWrapper>
        </OuterWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default SignIn;

import { useState } from "react";
import { MenuCloseIcon } from "../../../common/header/Header.styles";
import {
  AlreadyHaveWrapper,
  AlreadyLink,
  AlreadyText,
  ButtonsWrapper,
  Center,
  Container,
  Divider,
  InnerWrapper,
  Input,
  InputTitle,
  Left,
  ModalCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  OuterWrapper,
  Right,
  SignUpBtn,
  SubTitle,
  Title,
} from "./SignUp.styles";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import Auth from "../../../../api/auth/auth";
import scrollToTop from "../../../hooks/scrollToTop";
import { Paths } from "../../../../routes/root";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";
import MainLogo from "../../../common/mainLogo/MainLogo";

type Props = {
  isOpen: boolean;
};

const SignUp = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

    const res = await Auth.signUp(email, password);
    if (typeof res === "string") {
      alert(res);
      return;
    }

    setEmail("");
    setPassword("");
    alert("user created, please confirm email");
    dispatch(openModal(Modals.SIGN_IN));
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
      <Container>
        <ModalNavWrapper>
          <Left></Left>
          <Center>
            <MainLogo />
          </Center>
          <Right>
            <ModalCloseBtnWrapper
              onClick={() => dispatch(openModal(Modals.NONE))}
            >
              <MenuCloseIcon src="/header/close_btn.svg" />
            </ModalCloseBtnWrapper>
          </Right>
        </ModalNavWrapper>
        <OuterWrapper>
          <InnerWrapper>
            <Title>Get started</Title>
            <SubTitle>To continue please create an account</SubTitle>
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
            <ButtonsWrapper>
              <SignUpBtn onClick={(e) => handleClick(e)}>sign up</SignUpBtn>
            </ButtonsWrapper>
            <Divider />
            <AlreadyHaveWrapper>
              <AlreadyText>Already have an account?</AlreadyText>
              &nbsp;
              <AlreadyLink onClick={() => dispatch(openModal(Modals.SIGN_IN))}>
                Sign in
              </AlreadyLink>
            </AlreadyHaveWrapper>
          </InnerWrapper>
        </OuterWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default SignUp;

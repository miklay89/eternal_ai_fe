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
  Overlay,
  Right,
  SignUpBtn,
  SubTitle,
  Title,
} from "./SignUp.styles";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import Auth from "../../../../api/auth/auth";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";
import MainLogo from "../../../common/mainLogo/MainLogo";

type Props = {
  isOpen: boolean;
};

const SignUp = (props: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
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
            <Title>Get started</Title>
            <SubTitle>To continue please create an account</SubTitle>
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
            <ButtonsWrapper>
              <SignUpBtn
                tabIndex={0}
                onClick={() => handleSubmit()}
                onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
              >
                sign up
              </SignUpBtn>
            </ButtonsWrapper>
            <Divider />
            <AlreadyHaveWrapper>
              <AlreadyText>Already have an account?</AlreadyText>
              &nbsp;
              <AlreadyLink
                tabIndex={0}
                onClick={() => dispatch(openModal(Modals.SIGN_IN))}
                onKeyDown={(e) =>
                  e.key === "Enter" ? dispatch(openModal(Modals.SIGN_IN)) : ""
                }
              >
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

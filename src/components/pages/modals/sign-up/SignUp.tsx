import { Dispatch, SetStateAction, useState } from "react";
import { MainLogo, MenuCloseIcon } from "../../../common/header/Header.styles";
import {
  AlreadyHaveWrapper,
  AlreadyLink,
  AlreadyText,
  ButtonsWrapper,
  Divider,
  InnerWrapper,
  Input,
  InputTitle,
  LogoWrapper,
  ModalCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  OuterWrapper,
  SignUpBtn,
  SubTitle,
  Title,
} from "./SignUp.styles";
import { Modals } from "../../home/Home";
import { validateEmail, validatePassword } from "../../../hooks/validators";
import Auth from "../../../../api/auth/auth";
import Bagel from "../../../common/header/bagel/Bagel";
import scrollToTop from "../../../hooks/scrollToTop";
import { Paths } from "../../../../routes/root";
import { useLocation, useNavigate } from "react-router-dom";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickClose: Dispatcher<string | null>;
  onClickSignIn: Dispatcher<string | null>;
};

const SignUp = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
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
    props.onClickClose(Modals.SIGN_IN);
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
            placeholder="*********"
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
            <AlreadyLink onClick={() => props.onClickSignIn(Modals.SIGN_IN)}>
              Sign in
            </AlreadyLink>
          </AlreadyHaveWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default SignUp;

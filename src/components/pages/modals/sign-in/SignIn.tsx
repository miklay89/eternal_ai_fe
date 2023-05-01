import { Dispatch, SetStateAction } from "react";
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
} from "./SignIn.styles";
import { MenuCloseIcon } from "../../home/components/header/Header.styles";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickClose: Dispatcher<boolean>;
  onClickSignUp: Dispatcher<boolean>;
};

const SignIn = (props: Props) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
      <ModalNavWrapper>
        <ModalCloseBtnWrapper onClick={() => props.onClickClose(false)}>
          <MenuCloseIcon src="/header/close_btn.svg" />
        </ModalCloseBtnWrapper>
      </ModalNavWrapper>
      <OuterWrapper>
        <InnerWrapper>
          <Title>Login</Title>
          <InputTitle>Email</InputTitle>
          <Input placeholder="justin@gmail.com"></Input>
          <InputTitle>Password</InputTitle>
          <Input placeholder="*********"></Input>
          <ForgotPassword>Forgot password?</ForgotPassword>
          <SignInBtn>sign in</SignInBtn>
          <Divider />
          <HaveNotWrapper>
            <NotText>Don’t have an account?</NotText>
            &nbsp;
            <NotLink onClick={() => props.onClickSignUp(true)}>Sign up</NotLink>
          </HaveNotWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default SignIn;

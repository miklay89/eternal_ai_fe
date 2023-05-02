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
import { MenuCloseIcon } from "../../../common/header/Header.styles";
import { Modals } from "../../home/Home";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickClose: Dispatcher<string | null>;
  onClickSignUp: Dispatcher<string | null>;
};

const SignIn = (props: Props) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
      <ModalNavWrapper>
        <ModalCloseBtnWrapper onClick={() => props.onClickClose(null)}>
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

import { Dispatch, SetStateAction } from "react";
import { MenuCloseIcon } from "../../home/components/header/Header.styles";
import {
  AlreadyHaveWrapper,
  AlreadyLink,
  AlreadyText,
  ButtonsWrapper,
  Divider,
  GoogleBtnText,
  GoogleIcon,
  InnerWrapper,
  Input,
  InputTitle,
  ModalCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  OuterWrapper,
  SignUpBtn,
  SignUpGoogle,
  SubTitle,
  Title,
} from "./SignUp.styles";
import { Modals } from "../../home/Home";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickClose: Dispatcher<string | null>;
  onClickSignIn: Dispatcher<string | null>;
};

const SignUp = (props: Props) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
      <ModalNavWrapper>
        <ModalCloseBtnWrapper onClick={() => props.onClickClose(null)}>
          <MenuCloseIcon src="/header/close_btn.svg" />
        </ModalCloseBtnWrapper>
      </ModalNavWrapper>
      <OuterWrapper>
        <InnerWrapper>
          <Title>Get started</Title>
          <SubTitle>To continue please create an account</SubTitle>
          <InputTitle>Email</InputTitle>
          <Input placeholder="justin@gmail.com"></Input>
          <InputTitle>Password</InputTitle>
          <Input placeholder="*********"></Input>
          <ButtonsWrapper>
            <SignUpGoogle>
              <GoogleIcon src="/google-icon.svg" />
              <GoogleBtnText>sign up with google</GoogleBtnText>
            </SignUpGoogle>
            <SignUpBtn>sign up</SignUpBtn>
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

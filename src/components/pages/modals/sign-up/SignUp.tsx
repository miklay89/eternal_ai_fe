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
  ModalWrapper,
  OuterWrapper,
  SignUpBtn,
  SignUpGoogle,
  SubTitle,
  Title,
} from "./SignUp.styles";

type Props = {
  isOpen: boolean;
};

const SignUp = (props: Props) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
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
            <AlreadyLink>Sign in</AlreadyLink>
          </AlreadyHaveWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default SignUp;

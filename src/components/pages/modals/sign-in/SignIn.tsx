import { InnerWrapper, ModalWrapper, OuterWrapper } from "./SignIn.styles";

type Props = {
  isOpen: boolean;
};

const SignIn = (props: Props) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
      <OuterWrapper>
        <InnerWrapper>sign-in</InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default SignIn;

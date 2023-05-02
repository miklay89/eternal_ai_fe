import { Dispatch, SetStateAction, useState } from "react";
import { MenuCloseIcon } from "../../../common/header/Header.styles";
import {
  Check,
  CheckBox,
  CheckBoxText,
  CheckBoxWrapper,
  ContinueBtn,
  Description,
  InnerWrapper,
  ModalCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  OuterWrapper,
  Title,
} from "./About.styles";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickClose: Dispatcher<string | null>;
};

const About = (props: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <ModalNavWrapper>
        <ModalCloseBtnWrapper onClick={() => props.onClickClose(null)}>
          <MenuCloseIcon src="/header/close_btn.svg" />
        </ModalCloseBtnWrapper>
      </ModalNavWrapper>
      <OuterWrapper>
        <InnerWrapper>
          <Title>About the platform</Title>
          <Description>
            All of the characters here are not real. Everything you see and hear
            is entirely generated by Artificial Intelligence machines. The
            opinions and beliefs expressed do not represent anyone. They are
            hallucinations of a bunch of 1s and 0s inside of a magic computer.
            <br />
            <br />
            The creators of this platform have the best intentions with this
            project, and deeply admire each and every character on the site. You
            might even say they are our Heroes. In fact, you can say that.
          </Description>
          <CheckBoxWrapper>
            <CheckBox onClick={() => setIsChecked((prev) => !prev)}>
              <Check isChecked={isChecked} src="/check.svg" />
            </CheckBox>
            <CheckBoxText>I have read the above statement</CheckBoxText>
          </CheckBoxWrapper>
          <ContinueBtn>continue</ContinueBtn>
        </InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default About;

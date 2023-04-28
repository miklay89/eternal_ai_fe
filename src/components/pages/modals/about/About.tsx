import { InnerWrapper, ModalWrapper, OuterWrapper } from "./About.styles";

type Props = {
  isOpen: boolean;
};

const About = (props: Props) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
      <OuterWrapper>
        <InnerWrapper>about</InnerWrapper>
      </OuterWrapper>
    </ModalWrapper>
  );
};

export default About;

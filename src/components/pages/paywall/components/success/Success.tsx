import { Dispatch, SetStateAction } from "react";
import {
  Circle,
  InnerWrapper,
  OuterWrapper,
  StartChattingBtn,
  Subtitle,
  Tick,
  Title,
  Wrapper,
} from "./Success.styles";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onChangeView: Dispatcher<string>;
};

const Success = (props: Props) => {
  return (
    <Wrapper show={props.show}>
      <OuterWrapper>
        <InnerWrapper>
          <Circle>
            <Tick src="/check.svg" />
          </Circle>
          <Title>You have successfully subscribed!</Title>
          <Subtitle>A receipt was sent to your email</Subtitle>
          <StartChattingBtn>start chatting</StartChattingBtn>
        </InnerWrapper>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Success;

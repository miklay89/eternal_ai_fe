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
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../../../routes/root";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onChangeView: Dispatcher<string>;
};

const Success = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(Paths.CHAT);
  };
  return (
    <Wrapper show={props.show}>
      <OuterWrapper>
        <InnerWrapper>
          <Circle>
            <Tick src="/check.svg" />
          </Circle>
          <Title>You have successfully subscribed!</Title>
          <Subtitle>A receipt was sent to your email</Subtitle>
          <StartChattingBtn
            tabIndex={0}
            onClick={() => handleClick()}
            onKeyDown={(e) => (e.key === "Enter" ? handleClick() : "")}
          >
            start chatting
          </StartChattingBtn>
        </InnerWrapper>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Success;

import { ReactNode, forwardRef } from "react";
import {
  Dot,
  DotWrapper,
  MessageBlob,
  MiniPortrait,
  MiniPortraitBG,
  MiniPortraitWrapper,
  Wrapper,
} from "./LoadingMessage.styles";

type Props = {
  backgroundUrl: string;
  portraitUrl: string;
  children?: ReactNode;
};

const LoadingMessage = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <MiniPortraitWrapper>
        <MiniPortraitBG background={props.backgroundUrl}>
          <MiniPortrait src={props.portraitUrl} />
        </MiniPortraitBG>
      </MiniPortraitWrapper>
      <MessageBlob>
        <DotWrapper>
          <Dot delay="0s" />
          <Dot delay=".1s" />
          <Dot delay=".2s" />
        </DotWrapper>
      </MessageBlob>
    </Wrapper>
  );
});

export default LoadingMessage;

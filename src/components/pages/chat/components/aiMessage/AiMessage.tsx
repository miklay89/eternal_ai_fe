import { forwardRef, ReactNode } from "react";

import {
  MessageBlob,
  MiniPortrait,
  MiniPortraitBG,
  MiniPortraitWrapper,
  Wrapper,
} from "./AiMessage.styles";

type Props = {
  backgroundUrl: string;
  portraitUrl: string;
  text: string;
  children?: ReactNode;
};

const AiMessage = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <MiniPortraitWrapper>
        <MiniPortraitBG background={props.backgroundUrl}>
          <MiniPortrait src={props.portraitUrl} />
        </MiniPortraitBG>
      </MiniPortraitWrapper>
      <MessageBlob>{props.text}</MessageBlob>
    </Wrapper>
  );
});

export default AiMessage;

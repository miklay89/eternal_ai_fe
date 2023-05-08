import { Dispatch, SetStateAction } from "react";
import {
  FreeLogo,
  NoteText,
  NoteTick,
  NoteWrapper,
  ProInnerWrapper,
  ProOuterWrapper,
  ProText,
  Share,
  ShareBtnInnerWrapper,
  ShareBtnOuterWrapper,
  ShareBtnText,
  Span,
  SubscribeBtn,
  SubscribeInnerWrapper,
  SubscribeOuterWrapper,
  Subtitle,
  Title,
  Wrapper,
} from "./PayInfo.styles";
import { Payments } from "../../Paywall";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onChangeView: Dispatcher<string>;
};

const PayInfo = (props: Props) => {
  return (
    <Wrapper show={props.show}>
      <Share>
        <FreeLogo>Free</FreeLogo>
        <Title>Share with a friend</Title>
        <Subtitle>
          Get <Span>3 free</Span> questions when you share on social media
        </Subtitle>
        <ShareBtnOuterWrapper>
          <ShareBtnInnerWrapper>
            <ShareBtnText>SHARE</ShareBtnText>
          </ShareBtnInnerWrapper>
        </ShareBtnOuterWrapper>
      </Share>
      <SubscribeOuterWrapper>
        <SubscribeInnerWrapper>
          <ProOuterWrapper>
            <ProInnerWrapper>
              <ProText>PRO</ProText>
            </ProInnerWrapper>
          </ProOuterWrapper>
          <Title>$10 / month</Title>
          <NoteWrapper>
            <NoteTick src="/check.svg" />
            <NoteText>Unlimited questions</NoteText>
          </NoteWrapper>
          <NoteWrapper>
            <NoteTick src="/check.svg" />
            <NoteText>SMS texting</NoteText>
          </NoteWrapper>
          <NoteWrapper>
            <NoteTick src="/check.svg" />
            <NoteText>Access to all characters</NoteText>
          </NoteWrapper>
          <SubscribeBtn onClick={() => props.onChangeView(Payments.PAYMENT)}>subscribe</SubscribeBtn>
        </SubscribeInnerWrapper>
      </SubscribeOuterWrapper>
    </Wrapper>
  );
};

export default PayInfo;
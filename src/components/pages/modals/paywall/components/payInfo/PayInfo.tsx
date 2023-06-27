import { Dispatch, SetStateAction } from "react";
import {
  FreeLogo,
  NoteText,
  NoteTick,
  NoteWrapper,
  NotesWrapper,
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
import { Payments } from "../../types";
import { copyTextToClipboard } from "../../../../../hooks/copyToClipboard";

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
        <ShareBtnOuterWrapper
          tabIndex={0}
          onClick={async () => await copyTextToClipboard(window.location.href)}
          onKeyDown={async (e) =>
            e.key === "Enter"
              ? await copyTextToClipboard(window.location.href)
              : ""
          }
        >
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
          <NotesWrapper>
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
          </NotesWrapper>
          <SubscribeBtn
            tabIndex={0}
            onClick={() => props.onChangeView(Payments.PAYMENT)}
            onKeyDown={(e) =>
              e.key === "Enter" ? props.onChangeView(Payments.PAYMENT) : ""
            }
          >
            subscribe
          </SubscribeBtn>
        </SubscribeInnerWrapper>
      </SubscribeOuterWrapper>
    </Wrapper>
  );
};

export default PayInfo;

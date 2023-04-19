import {
  MainTitle,
  MessageText,
  MessagesWrapper,
  Subtitle,
  TitleMessage,
  TitleWrapper,
} from "./Title.styles";

const Title = () => {
  return (
    <TitleWrapper>
      <MainTitle>
        ask important people
        <br /> important questions
      </MainTitle>
      <Subtitle>Choose a question to quickly get a realistic response</Subtitle>
      <MessagesWrapper>
        <TitleMessage>
          <MessageText>What did you want to be when you grew up?</MessageText>
        </TitleMessage>
        <TitleMessage>
          <MessageText>What is the meaning of life?</MessageText>
        </TitleMessage>
        <TitleMessage>
          <MessageText>What is your greatest accomplishment?</MessageText>
        </TitleMessage>
      </MessagesWrapper>
    </TitleWrapper>
  );
};

export default Title;

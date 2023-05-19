import { useDispatch, useSelector } from "react-redux";
import {
  MainTitle,
  MessageText,
  MessagesWrapper,
  Subtitle,
  TitleMessage,
  TitleWrapper,
} from "./Title.styles";
import { useNavigate } from "react-router-dom";
import { messages } from "./title.data";
import { setMessage } from "../../../../../store/messageReducer";
import { Paths } from "../../../../../routes/root";
import { RootState } from "../../../../../store";

const Title = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AuthState = useSelector((state: RootState) => state.isAuth);

  const handleClickMessage = (e: React.MouseEvent, message: string) => {
    e.preventDefault();
    if (!AuthState.isAuth) {
      alert("sign in first");
    } else {
      dispatch(setMessage(message));
      navigate(Paths.CHAT);
    }
  };

  const messagesForRender = messages.map((m, i) => {
    return (
      <TitleMessage key={i} onClick={(e) => handleClickMessage(e, m)}>
        <MessageText>{m}</MessageText>
      </TitleMessage>
    );
  });

  return (
    <TitleWrapper>
      <MainTitle>
        ask important people
        <br /> important questions
      </MainTitle>
      <Subtitle>Choose a question to quickly get a realistic response</Subtitle>
      <MessagesWrapper>{messagesForRender}</MessagesWrapper>
    </TitleWrapper>
  );
};

export default Title;

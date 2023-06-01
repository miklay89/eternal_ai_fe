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
import {
  addMessage,
  removeScrollMessage,
} from "../../../../../store/reducers/messages";
import { Paths } from "../../../../../routes/root";
import { RootState } from "../../../../../store";
import socket from "../../../../../services/socket";
import { setConnection } from "../../../../../store/reducers/socket";
import { setSoul } from "../../../../../store/reducers/soul";

const Title = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socketIsConnected = useSelector(
    (state: RootState) => state.socket.connection
  );
  const soul = useSelector((state: RootState) => state.soul.soul);
  const soulIsSet = useSelector((state: RootState) => state.soul.isSet);

  const authState = useSelector((state: RootState) => state.isAuth.isAuth);

  const handleClickMessage = (e: React.MouseEvent, message: string) => {
    e.preventDefault();
    if (!authState) {
      alert("sign in first");
      return;
    }

    if (!socketIsConnected) {
      socket.connect();
      socket.on("connect", () => dispatch(setConnection(true)));
    }

    dispatch(removeScrollMessage());

    const msg = {
      isAi: false,
      text: message,
      id: "template",
    };
    dispatch(addMessage(msg));

    const loadingMsg = {
      isAi: true,
      text: "",
      id: "loading",
    };
    dispatch(addMessage(loadingMsg));

    const scrollMsg = {
      id: "scroll",
      isAi: true,
      text: "",
    };
    dispatch(addMessage(scrollMsg));

    if (!soulIsSet) {
      const soulInfo = { soul: soul, isSet: true };
      socket.emit("setSoul", { soulId: soul.uuid });
      dispatch(setSoul(soulInfo));
    }

    socket.emit("sendMessage", { content: msg.text });
    navigate(Paths.CHAT);
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

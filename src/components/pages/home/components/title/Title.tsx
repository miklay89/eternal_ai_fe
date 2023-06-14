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
  addLoadingMessage,
  addScrollMessage,
  addUserMessage,
  removeScrollMessage,
} from "../../../../../store/reducers/messages";
import { Paths } from "../../../../../routes/root";
import { RootState } from "../../../../../store";
import socket from "../../../../../services/socket";
import { setConnection } from "../../../../../store/reducers/socket";
import { setSoul } from "../../../../../store/reducers/soul";
import { Modals } from "../../../modals/types";

const Title = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalState = useSelector((state: RootState) => state.modal.open);
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

    dispatch(addUserMessage({ id: "template", text: message }));

    dispatch(addLoadingMessage());

    dispatch(addScrollMessage());

    if (!soulIsSet) {
      const soulInfo = { soul: soul, isSet: true };
      socket.emit("setSoul", { soulId: soul.uuid });
      dispatch(setSoul(soulInfo));
    }

    socket.emit("sendMessage", { content: message });
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
    <TitleWrapper show={modalState !== Modals.PAYWALL ? true : false}>
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

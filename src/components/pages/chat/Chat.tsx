import { useEffect, useRef } from "react";
import {
  ChatInputWrapper,
  ChatWindow,
  Container,
  PortraitWrapper,
  Section,
} from "./Chat.styles";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import Menu from "../modals/menu/Menu";
import SignUp from "../modals/sign-up/SignUp";
import SignIn from "../modals/sign-in/SignIn";
import About from "../modals/about/About";
import Header from "../../common/header/Header";
import Portrait from "./components/portraite/Portrait";
import ChatInput from "./components/chatInput/ChatInput";
import AiMessage from "./components/aiMessage/AiMessage";
import UserMessage from "./components/userMessage/UserMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  addMessage,
  removeLoadingMessage,
  removePrevUserMessage,
} from "../../../store/reducers/messages";
import socket from "../../../services/socket";
import { ErrorRes, ResMessage } from "./types";
import LoadingMessage from "./components/loadingMessage/LoadingMessage";
import { setConnection } from "../../../store/reducers/socket";
import { Modals } from "../modals/types";

export type Message = {
  id?: string;
  ai: boolean;
  text: string;
};

const Chat = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const modalState = useSelector((state: RootState) => state.modal.open);
  const messages = useSelector((state: RootState) => state.message);
  const soul = useSelector((state: RootState) => state.soul.soul);
  const chatMessageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    socket.on("error", (res: ErrorRes) => {
      alert(res.message);
      dispatch(removeLoadingMessage());
      dispatch(removePrevUserMessage());
    });
    socket.on("disconnect", () => dispatch(setConnection(false)));

    return () => {
      socket.off("error");
      socket.off("disconnect");
    };
  }, []);

  socket.on("messages", (res: ResMessage) => saveMessage(res));

  const saveMessage = (res: ResMessage) => {
    dispatch(removePrevUserMessage());
    dispatch(removeLoadingMessage());

    const [usrRes] = res.messages.filter((m) => m.role === "user");
    const userMsg = {
      id: usrRes.id,
      isAi: false,
      text: usrRes.content,
    };
    dispatch(addMessage(userMsg));

    const [aiRes] = res.messages.filter((m) => m.role === "assistant");
    const aiMsg = {
      id: aiRes.id,
      isAi: true,
      text: aiRes.content,
    };
    dispatch(addMessage(aiMsg));
  };

  useEffect(() => {
    if (ref.current) {
      if (modalState === Modals.NONE) {
        enableBodyScroll(ref.current);
      } else {
        disableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [modalState]);

  const scrollToBottom = () => {
    chatMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const messagesForRender = messages.map((msg, idx) => {
    if (msg.isAi && msg.id !== "loading") {
      return (
        <AiMessage
          key={idx}
          text={msg.text}
          ref={chatMessageRef}
          backgroundUrl={soul.substrateUrl}
          portraitUrl={soul.imgUrl}
        />
      );
    }
    if (msg.isAi && msg.id === "loading") {
      return (
        <LoadingMessage
          key={idx}
          ref={chatMessageRef}
          backgroundUrl={soul.substrateUrl}
          portraitUrl={soul.imgUrl}
        />
      );
    }
    return <UserMessage key={idx} text={msg.text} ref={chatMessageRef} />;
  });

  return (
    <Section ref={ref}>
      <Menu isOpen={modalState === Modals.MENU ? true : false} />
      <SignUp isOpen={modalState === Modals.SIGN_UP ? true : false} />
      <SignIn isOpen={modalState === Modals.SIGN_IN ? true : false} />
      <About isOpen={modalState === Modals.ABOUT ? true : false} />

      <Container>
        <Header
          show={
            modalState === Modals.NONE || modalState === Modals.MENU
              ? true
              : false
          }
        />
        <PortraitWrapper>
          <Portrait
            fullName={soul.fullName}
            imgUrl={soul.imgUrl}
            uuid={soul.uuid}
            title={soul.title}
            id={soul.id}
          />
        </PortraitWrapper>
        <ChatWindow>{messagesForRender}</ChatWindow>
        <ChatInputWrapper>
          <ChatInput />
        </ChatInputWrapper>
      </Container>
    </Section>
  );
};

export default Chat;

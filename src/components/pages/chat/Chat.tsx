import { useEffect, useRef, useState } from "react";
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
import { Modals } from "../home/Home";
import SignUp from "../modals/sign-up/SignUp";
import SignIn from "../modals/sign-in/SignIn";
import About from "../modals/about/About";
import Header from "../../common/header/Header";
import Portrait from "./components/portraite/Portrait";
import ChatInput from "./components/chatInput/ChatInput";
import AiMessage from "./components/aiMessage/AiMessage";
import UserMessage from "./components/userMessage/UserMessage";
import { individualsData } from "../home/components/promo/Cards.data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setMessage } from "../../../store/messageReducer";
import { socket } from "../../../services/socket";

export type Message = {
  ai: boolean;
  text: string;
};

const Chat = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const chatMessageRef = useRef<null | HTMLDivElement>(null);
  const messageState = useSelector((state: RootState) => state.message);
  const [currentModal, openModal] = useState<null | string>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  let initMsgState = true;
  useEffect(() => {
    if (initMsgState) {
      if (messageState.message.length) {
        const initMsg = {
          ai: false,
          text: messageState.message,
        };
        setMessages((prev) => [...prev, initMsg]);
        dispatch(setMessage(""));
        initMsgState = false;
      }
    }
  }, []);

  // SOCKET
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    console.log("try connect");
    socket.connect();
    function onConnect() {
      setIsConnected(true);
      console.log("connected");
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    // socket.on("connect_event", onError);
    // socket.on('foo', onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      // socket.off('foo', onFooEvent);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (currentModal) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [currentModal]);

  const scrollToBottom = () => {
    chatMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const messagesForRender = messages.map((msg, idx) => {
    if (msg.ai) {
      return (
        <AiMessage
          key={idx}
          text={msg.text}
          ref={chatMessageRef}
          backgroundUrl={individualsData[0].substrateUrl}
          portraitUrl={individualsData[0].imgUrl}
        />
      );
    }
    return <UserMessage key={idx} text={msg.text} ref={chatMessageRef} />;
  });

  return (
    <Section ref={ref}>
      <Menu
        isOpen={currentModal === Modals.MENU ? true : false}
        onClickAboutLink={openModal}
        closeMenu={openModal}
      />
      <SignUp
        isOpen={currentModal === Modals.SIGN_UP ? true : false}
        onClickClose={openModal}
        onClickSignIn={openModal}
      />
      <SignIn
        isOpen={currentModal === Modals.SIGN_IN ? true : false}
        onClickClose={openModal}
        onClickSignUp={openModal}
      />
      <About
        isOpen={currentModal === Modals.ABOUT ? true : false}
        onClickClose={openModal}
      />

      <Container>
        <Header
          show={currentModal == null ? true : false}
          onOptionClick={openModal}
          onCloseClick={openModal}
        />
        <PortraitWrapper>
          <Portrait
            fullName={individualsData[0].fullName}
            imgUrl={individualsData[0].imgUrl}
            uuid={individualsData[0].uuid}
            title={individualsData[0].title}
            id={individualsData[0].id}
          />
        </PortraitWrapper>
        <ChatWindow>{messagesForRender}</ChatWindow>
        <ChatInputWrapper>
          <ChatInput onSubmit={setMessages} />
        </ChatInputWrapper>
      </Container>
    </Section>
  );
};

export default Chat;

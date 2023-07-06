import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ChatBoxWrapper,
  ChatInputWrapper,
  ChatWindow,
  Container,
  ContentWrapper,
  PortraitWrapper,
  Section,
  Shadow,
} from "./Chat.styles";
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
  addAIMessage,
  addMessagesFromHistory,
  addScrollMessage,
  addUserMessage,
  removeLoadingMessage,
  removePrevUserMessage,
  removeScrollMessage,
} from "../../../store/reducers/messages";
import socket from "../../../services/socket";
import { ErrorRes, ResMessage } from "./types";
import LoadingMessage from "./components/loadingMessage/LoadingMessage";
import { setConnection } from "../../../store/reducers/socket";
import { Modals } from "../modals/types";
import Loading from "../loading/Loading";
import ScrollMessage from "./components/scrollMessage/ScrollMessage";
import ChatInstance from "../../../api/chat/chat";
import { individualsData } from "../home/components/promo/Cards.data";
import { setSoul } from "../../../store/reducers/soul";
import Paywall from "../modals/paywall/Paywall";
import { openModal } from "../../../store/reducers/modals";

const Chat = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const modalState = useSelector((state: RootState) => state.modal.open);
  const messages = useSelector((state: RootState) => state.message);
  const soul = useSelector((state: RootState) => state.soul.soul);
  const soulIsSet = useSelector((state: RootState) => state.soul.isSet);
  const chatMessageRef = useRef<null | HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    socket.on("error", (res: ErrorRes) => {
      alert(res.message);
      dispatch(removeLoadingMessage());
      dispatch(removePrevUserMessage());
    });
    socket.on("disconnect", () => dispatch(setConnection(false)));

    if (!soulIsSet) {
      ChatInstance.getChatInfo().then((info) => {
        if (info) {
          const [newSoul] = individualsData.filter(
            (i) => i.uuid === info.currentSoulId
          );
          const soulInfo = { soul: newSoul ? newSoul : soul, isSet: true };
          socket.emit("setSoul", { soulId: newSoul.uuid });
          dispatch(setSoul(soulInfo));

          //history
          ChatInstance.getInitHistory(soulInfo.soul.uuid).then((res) => {
            res.forEach((m) => {
              if (m.role === "user") {
                dispatch(addUserMessage({ id: m.id, text: m.content }));
              }
              if (m.role === "assistant") {
                dispatch(addAIMessage({ id: m.id, text: m.content }));
              }
            });

            dispatch(addScrollMessage());
          });
        } else {
          const soulInfo = { soul: soul, isSet: true };
          socket.emit("setSoul", { soulId: soul.uuid });
          dispatch(setSoul(soulInfo));

          //history
          ChatInstance.getInitHistory(soulInfo.soul.uuid).then((res) => {
            res.forEach((m) => {
              if (m.role === "user") {
                dispatch(addUserMessage({ id: m.id, text: m.content }));
              }
              if (m.role === "assistant") {
                dispatch(addAIMessage({ id: m.id, text: m.content }));
              }
            });

            dispatch(addScrollMessage());
          });
        }
      });
    }

    return () => {
      socket.off("error");
      socket.off("disconnect");
    };
  }, []);

  socket.on("messages", (res: ResMessage) => saveMessage(res));

  const saveMessage = (res: ResMessage) => {
    dispatch(removeScrollMessage());
    dispatch(removePrevUserMessage());
    dispatch(removeLoadingMessage());

    const [usrRes] = res.messages.filter((m) => m.role === "user");
    dispatch(addUserMessage({ id: usrRes.id, text: usrRes.content }));

    const [aiRes] = res.messages.filter((m) => m.role === "assistant");
    dispatch(addAIMessage({ id: aiRes.id, text: aiRes.content }));

    dispatch(addScrollMessage());
  };

  const scrollTo = () => {
    chatMessageRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollTo();
  }, [messages]);

  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    dispatch(removeScrollMessage());
    if (e.currentTarget.scrollTop === 0) {
      const firstMsgId = messages[0].id;
      if (firstMsgId === "scroll") {
        dispatch(removeScrollMessage());
        return;
      }
      ChatInstance.getMessages(soul.uuid, firstMsgId).then((res) => {
        const prepared = res.map((m) => {
          if (m.role === "user") {
            return { id: m.id, isAi: false, text: m.content };
          } else {
            return { id: m.id, isAi: true, text: m.content };
          }
        });
        dispatch(addMessagesFromHistory(prepared));
      });
      dispatch(removeScrollMessage());
    }
  };

  const messagesForRender = messages.map((msg, idx) => {
    if (msg.isAi && msg.id !== "loading" && msg.id !== "scroll") {
      return (
        <AiMessage
          key={idx}
          text={msg.text}
          backgroundUrl={soul.substrateUrl}
          portraitUrl={soul.imgUrl}
        />
      );
    }

    if (msg.isAi && msg.id === "loading") {
      return (
        <LoadingMessage
          key={idx}
          backgroundUrl={soul.substrateUrl}
          portraitUrl={soul.imgUrl}
        />
      );
    }

    if (msg.isAi && msg.id === "scroll") {
      return <ScrollMessage key={idx} ref={chatMessageRef} />;
    }
    return <UserMessage key={idx} text={msg.text} />;
  });

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(openModal(Modals.NONE));
      }
    };
    window.addEventListener("keyup", closeModal);
    return () => {
      window.removeEventListener("keyup", closeModal);
    };
  }, []);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (portraitRef.current) {
        //portrait
        if (window.innerHeight > window.innerWidth) {
          // console.log("here");
          window.innerHeight > 1000
            ? setHeight(
                window.innerHeight - portraitRef.current.clientHeight - 250
              )
            : setHeight(
                window.innerHeight - portraitRef.current.clientHeight - 200
              );

          // landscape
        } else {
          const newHeight = window.innerHeight - 300;
          setHeight(newHeight > 900 ? 900 : newHeight);
        }
        // ratio 1/1
        if (window.innerHeight === window.innerWidth) {
          setHeight(
            window.innerHeight - portraitRef.current.clientHeight - 300
          );
        }
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [window.innerHeight]);

  return (
    <Section ref={ref}>
      <Loading />
      <Menu isOpen={modalState === Modals.MENU ? true : false} />
      <SignUp isOpen={modalState === Modals.SIGN_UP ? true : false} />
      <SignIn isOpen={modalState === Modals.SIGN_IN ? true : false} />
      <About isOpen={modalState === Modals.ABOUT ? true : false} />
      <Paywall isOpen={modalState === Modals.PAYWALL ? true : false} />
      <Container>
        <Header
          show={
            modalState === Modals.NONE || modalState === Modals.MENU
              ? true
              : false
          }
        />
        <ContentWrapper>
          <PortraitWrapper ref={portraitRef}>
            <Portrait
              fullName={soul.fullName}
              imgUrl={soul.imgUrl}
              uuid={soul.uuid}
              title={soul.title}
              id={soul.id}
            />
            <Shadow />
          </PortraitWrapper>
          <ChatBoxWrapper ref={chatBoxRef}>
            <ChatWindow height={height} onScroll={(e) => handleScroll(e)}>
              {messagesForRender}
            </ChatWindow>
            <ChatInputWrapper>
              <ChatInput />
            </ChatInputWrapper>
          </ChatBoxWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Chat;

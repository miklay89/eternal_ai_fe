import { useEffect, useRef, useState } from "react";
import { Container, Section } from "./Chat.styles";
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
import ChatWindow from "./components/chatWindow/ChatWindow";
import AiMessage from "./components/aiMessage/AiMessage";
import UserMessage from "./components/userMessage/UserMessage";

const Chat = () => {
  const [currentModal, openModal] = useState<null | string>(null);

  const ref = useRef(null);

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
          isOpenMenu={currentModal === Modals.MENU ? true : false}
          isOpenModal={
            currentModal !== null && currentModal !== Modals.MENU ? true : false
          }
          onOptionClick={openModal}
          onCloseClick={openModal}
        />
        {/* <div>Рожа + подпись + подсветка с абсолютным позиционированием</div> */}
        <Portrait />
        {/* <div>Окно чата - меседжы от юзера и меседжы от бота</div> */}
        <ChatWindow />
        <AiMessage />
        <UserMessage />
        {/* <div>Инпут для написания сообщений</div> */}
        <ChatInput />
      </Container>
    </Section>
  );
};

export default Chat;

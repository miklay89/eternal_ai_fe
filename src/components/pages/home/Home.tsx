import { useEffect, useMemo, useRef, useState } from "react";
import { Container, GradientCorner, HomeSection } from "./Home.styles";
import EternalsBG from "./components/eternalsBG/EternalsBG";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Menu from "../modals/menu/Menu";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import SignUp from "../modals/sign-up/SignUp";
import About from "../modals/about/About";
import SignIn from "../modals/sign-in/SignIn";

export enum Modals {
  MENU = "menu",
  SIGN_UP = "sign_up",
  SIGN_IN = "sign_in",
  ABOUT = "about",
}

const HomePage = () => {
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
    <HomeSection ref={ref}>
      <GradientCorner />
      <Menu
        isOpen={currentModal === Modals.MENU ? true : false}
        onClickAboutLink={openModal}
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
          isOpenModal={currentModal !== null && currentModal !== Modals.MENU ? true : false}
          onOptionClick={openModal}
          onCloseClick={openModal}
        />
        <Title />
        <EternalsBG />
        <Promo />
        <Footer marginTop={150.84} />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

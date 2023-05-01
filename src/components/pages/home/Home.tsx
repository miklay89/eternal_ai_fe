import { useEffect, useMemo, useRef, useState } from "react";
import { Container, GradientCorner, HomeSection } from "./Home.styles";
import EternalsBG from "./components/eternalsBG/EternalsBG";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
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

const HomePage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState<boolean>(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState<boolean>(false);
  const [isOpenAbout, setIsOpenAbout] = useState<boolean>(false);
  // const [currentModal, openModal] = useState<null | string>(null);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (isOpenMenu || isOpenSignUp || isOpenSignIn || isOpenAbout) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpenMenu, isOpenSignUp, isOpenSignIn, isOpenAbout]);

  return (
    <HomeSection ref={ref}>
      <GradientCorner />
      <Menu isOpen={isOpenMenu} onClickAboutLink={setIsOpenAbout} />
      <SignUp
        isOpen={isOpenSignUp}
        onClickClose={setIsOpenSignUp}
        onClickSignIn={setIsOpenSignIn}
      />
      <SignIn
        isOpen={isOpenSignIn}
        onClickClose={setIsOpenSignIn}
        onClickSignUp={setIsOpenSignUp}
      />
      <About isOpen={isOpenAbout} onClickClose={setIsOpenAbout} />
      <Container>
        <Header
          isOpenMenu={isOpenMenu}
          isOpenModal={isOpenSignUp || isOpenSignIn || isOpenAbout}
          onMenuClick={setIsOpenMenu}
          onGetStartedClick={setIsOpenSignUp}
          onLoginClick={setIsOpenSignIn}
        />
        <Title />
        <EternalsBG />
        <Promo />
        <Footer />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

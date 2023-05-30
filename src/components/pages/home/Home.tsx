import { useEffect, useRef, useState } from "react";
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
import { Modals } from "../modals/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Loading from "../loading/Loading";

const HomePage = () => {
  const modalState = useSelector((state: RootState) => state.modal.open);
  const ref = useRef(null);

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

  return (
    <HomeSection ref={ref}>
      <Loading />
      <GradientCorner />
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
        <Title />
        <EternalsBG top={1270} />
        <Promo />
        <Footer marginTop={150.84} />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

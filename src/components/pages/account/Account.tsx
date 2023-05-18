import { useEffect, useRef, useState } from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import {
  AccountSection,
  Container,
  Ellipse,
  InnerWrapper,
  Input,
  InputTitle,
  OuterWrapper,
  SaveBtn,
  Title,
} from "./Account.styles";
import UpdatePayment from "./components/UpdatePayment";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import Menu from "../modals/menu/Menu";
import SignUp from "../modals/sign-up/SignUp";
import SignIn from "../modals/sign-in/SignIn";
import About from "../modals/about/About";
import { Modals } from "../home/Home";

const Account = () => {
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
    <AccountSection ref={ref}>
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
        <Ellipse
          width={1624}
          height={510}
          left={342}
          bottom={1071}
          src="/home/ellipse_3643.png"
        />
        <Ellipse
          width={1624}
          height={510}
          left={-301}
          bottom={322}
          src="/home/ellipse_3644.png"
        />
        <OuterWrapper>
          <InnerWrapper>
            <Title>Account Details</Title>
            <InputTitle>Name</InputTitle>
            <Input placeholder="Justin Mac" />
            <InputTitle>Email</InputTitle>
            <Input placeholder="justin@gmail.com" />
            <InputTitle>Phone number</InputTitle>
            <Input placeholder="8329822222" />
            <InputTitle>Password</InputTitle>
            <Input placeholder="•••••••••••••••••••" />
            <SaveBtn>Save</SaveBtn>
          </InnerWrapper>
        </OuterWrapper>
        <UpdatePayment />
        <Footer marginTop={80} closeAllModals={openModal} />
      </Container>
    </AccountSection>
  );
};

export default Account;

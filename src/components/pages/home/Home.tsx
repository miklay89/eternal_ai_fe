import {
  Container,
  GradientCorner,
  HomeSection,
  PaywallBlock,
} from "./Home.styles";
import EternalsBG from "../../common/eternalsBG/EternalsBG";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Menu from "../modals/menu/Menu";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";
import SignUp from "../modals/sign-up/SignUp";
import About from "../modals/about/About";
import SignIn from "../modals/sign-in/SignIn";
import { Modals } from "../modals/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Loading from "../loading/Loading";
import Paywall from "../modals/paywall/Paywall";

const HomePage = () => {
  const modalState = useSelector((state: RootState) => state.modal.open);

  return (
    <HomeSection>
      <Loading />
      <GradientCorner />
      <Menu isOpen={modalState === Modals.MENU ? true : false} />
      <SignUp isOpen={modalState === Modals.SIGN_UP ? true : false} />
      <SignIn isOpen={modalState === Modals.SIGN_IN ? true : false} />
      <About isOpen={modalState === Modals.ABOUT ? true : false} />
      <Paywall isOpen={modalState === Modals.PAYWALL ? true : false} />
      <Container>
        <div style={{ maxWidth: "1640px", maxHeight: "56px" }}>
          <Header
            show={
              modalState === Modals.NONE || modalState === Modals.MENU
                ? true
                : false
            }
          />
        </div>
        <PaywallBlock show={modalState === Modals.PAYWALL ? true : false} />
        <Title />
        <EternalsBG />
        <Promo />
        <Footer marginTop={150.84} />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

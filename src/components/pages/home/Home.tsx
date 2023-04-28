import { useEffect, useRef, useState } from "react";
import { Container, GradientCorner, HomeSection } from "./Home.styles";
import EternalsBG from "./components/eternalsBG/EternalsBG";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "../menu/Menu";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const HomePage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (isOpenMenu) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpenMenu]);

  return (
    <HomeSection ref={ref}>
      <GradientCorner />
      <Menu isOpen={isOpenMenu} />
      <Container>
        <Header isOpen={isOpenMenu} onMenuClick={setIsOpenMenu} />
        <Title />
        <EternalsBG />
        <Promo />
        <Footer />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

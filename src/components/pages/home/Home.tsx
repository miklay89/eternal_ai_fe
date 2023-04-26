import { useState } from "react";
import { Container, GradientCorner, HomeSection } from "./Home.styles";
import EternalsBG from "./components/eternalsBG/EternalsBG";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";

const HomePage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <HomeSection>
      <GradientCorner />
      <Menu isOpen={isOpenMenu} onMenuClick={setIsOpenMenu} />
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

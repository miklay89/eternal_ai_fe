import { Container, HomeSection } from "./Home.styles";
import EternalsBG from "./components/eternalsBG/EternalsBG";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";

const HomePage = () => {
  return (
    <HomeSection>
      <Container>
        <Header />
        <Title />
        <EternalsBG />
        <Promo />
        <Footer />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

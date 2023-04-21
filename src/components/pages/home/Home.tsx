import { HomeSection } from "./Home.styles";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";
const HomePage = () => {
  return (
    <HomeSection>
      <Header />
      <Title />
      <Promo />
      <Footer />
    </HomeSection>
  );
};

export default HomePage;

import { HomeSection } from "./Home.styles";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Title from "./components/title/Title";
const HomePage = () => {
  return (
    <HomeSection>
      <Header />
      <Title />
      <Promo />
    </HomeSection>
  );
};

export default HomePage;

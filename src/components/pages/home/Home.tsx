import {
  BGImgPart,
  Container,
  HomeSection,
  HomeSectionBg,
} from "./Home.styles";
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
        <HomeSectionBg>
          <BGImgPart
            src="/home/background/conversation.png"
            width={1472}
            left={104}
            bottom={192}
          />
          <BGImgPart
            src="/home/background/Group 143725066.png"
            width={1620}
            left={0}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/image 121.png"
            width={396}
            left={29}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/image 122.png"
            width={332}
            left={1230}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/image 120.png"
            width={431}
            left={280}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/image 119.png"
            width={379}
            left={952}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/image 117.png"
            width={567}
            left={537}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/Rectangle 149481700.png"
            width={1640}
            left={0}
            bottom={0}
          />
          <BGImgPart
            src="/home/background/Ellipse 3643.png"
            width={921}
            left={374}
            bottom={334}
          />
          <BGImgPart
            src="/home/background/Ellipse 3644.png"
            width={921}
            left={374}
            bottom={334}
          />
        </HomeSectionBg>
        <Promo />
        <Footer />
      </Container>
    </HomeSection>
  );
};

export default HomePage;

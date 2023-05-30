import {
  IndividualsTableWrapper,
  PromoH1,
  PromoSubtitle,
  PromoWrapper,
} from "./Promo.styles";
import Card from "./components/Card";
import { individualsData } from "./Cards.data";

const Promo = () => {
  const cards = individualsData.map((individual, idx) => {
    return (
      <Card
        key={idx}
        fullName={individual.fullName}
        title={individual.title}
        imgUrl={individual.imgUrl}
        substrateUrl={individual.substrateUrl}
        uuid={individual.uuid}
        id={individual.id}
      ></Card>
    );
  });
  return (
    <PromoWrapper>
      <PromoH1>individuals</PromoH1>
      <PromoSubtitle>
        Ask a question to your favorite person and get a realistic response
      </PromoSubtitle>
      <IndividualsTableWrapper>{cards}</IndividualsTableWrapper>
    </PromoWrapper>
  );
};

export default Promo;

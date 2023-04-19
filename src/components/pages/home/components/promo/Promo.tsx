import { Img, ImgWrapper, PromoWrapper } from "./Promo.styles";
import substrate from "../../../../../assets/Frame 143725203.png"

const Promo = () => {
  return (
    <PromoWrapper>
      <ImgWrapper>
      <Img src={substrate} alt="substrate"></Img>
      </ImgWrapper>
    </PromoWrapper>
  );
};

export default Promo;

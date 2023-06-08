import { useState } from "react";
import EternalsBG from "../../common/eternalsBG/EternalsBG";
import {
  CloseBtnWrapper,
  CloseIcon,
  Container,
  GradientCorner,
  LogoWrapper,
  PaymentWrapper,
  Section,
  SubTitle,
  Title,
  TitleWrapper,
} from "./Paywall.styles";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import scrollToTop from "../../hooks/scrollToTop";
import PayInfo from "./components/payInfo/PayInfo";
import Payment from "./components/payment/Payment";
import Success from "./components/success/Success";
import { Payments } from "./types";
import MainLogo from "../../common/header/components/mainLogo/MainLogo";

const Paywall = () => {
  const navigate = useNavigate();
  const [payment, showPayment] = useState<string>(Payments.INFO);

  const handleCloseBtnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(Paths.HOME);
    scrollToTop();
  };

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(Paths.HOME);
    scrollToTop();
  };

  return (
    <Section>
      <GradientCorner />
      <Container>
        <LogoWrapper onClick={(e) => handleClickLogo(e)}>
          <MainLogo />
        </LogoWrapper>
        <CloseBtnWrapper onClick={(e) => handleCloseBtnClick(e)}>
          <CloseIcon src="/header/close_btn.svg" />
        </CloseBtnWrapper>
        <TitleWrapper show={payment !== Payments.SUCCESS ? true : false}>
          <Title>Unlock full features</Title>
          <SubTitle>
            Share or subscribe to continue asking unlimited questions
          </SubTitle>
        </TitleWrapper>
        <PaymentWrapper>
          <PayInfo
            show={payment === Payments.INFO ? true : false}
            onChangeView={showPayment}
          />
          <Payment
            show={payment === Payments.PAYMENT ? true : false}
            onChangeView={showPayment}
          />
          <Success
            show={payment === Payments.SUCCESS ? true : false}
            onChangeView={showPayment}
          />
        </PaymentWrapper>
        <EternalsBG top={1440} />
      </Container>
    </Section>
  );
};

export default Paywall;

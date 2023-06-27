import { useEffect, useRef, useState } from "react";
import { MenuCloseIcon } from "../../../common/header/Header.styles";
import {
  Center,
  Container,
  Left,
  ModalCloseBtnWrapper,
  ModalNavWrapper,
  ModalWrapper,
  Overlay,
  PaymentWrapper,
  PaywallContentWrapper,
  Right,
  SubTitle,
  Title,
  TitleWrapper,
} from "./Paywall.styles";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";
import MainLogo from "../../../common/mainLogo/MainLogo";
import { Payments } from "./types";
import PayInfo from "./components/payInfo/PayInfo";
import Payment from "./components/payment/Payment";
import Success from "./components/success/Success";

type Props = {
  isOpen: boolean;
};

const Paywall = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [payment, showPayment] = useState<string>(Payments.INFO);

  // outside click
  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(openModal(Modals.NONE));
      }
    };

    document.addEventListener("mouseup", outsideClickHandler);

    return () => {
      document.removeEventListener("mouseup", outsideClickHandler);
    };
  });

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <Overlay />
      <Container>
        <ModalNavWrapper>
          <Left></Left>
          <Center>
            <MainLogo tabIndex={props.isOpen ? 0 : -1} />
          </Center>
          <Right>
            <ModalCloseBtnWrapper
              tabIndex={0}
              onClick={() => dispatch(openModal(Modals.NONE))}
              onKeyDown={(e) =>
                e.key === "Enter" ? dispatch(openModal(Modals.NONE)) : ""
              }
            >
              <MenuCloseIcon src="/header/close_btn.svg" />
            </ModalCloseBtnWrapper>
          </Right>
        </ModalNavWrapper>
        <PaywallContentWrapper status={payment}>
          <TitleWrapper show={payment !== Payments.SUCCESS ? true : false}>
            <Title>Unlock full features</Title>
            <SubTitle>
              Share or subscribe to continue asking unlimited questions
            </SubTitle>
          </TitleWrapper>
          <PaymentWrapper ref={props.isOpen ? ref : null}>
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
        </PaywallContentWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default Paywall;

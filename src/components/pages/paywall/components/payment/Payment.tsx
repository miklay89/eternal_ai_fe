import { Dispatch, SetStateAction, useState } from "react";
import {
  CardCVCInput,
  CardIcon,
  CardInfoWrapper,
  CardMonthInput,
  CardNumberInput,
  InnerWrapper,
  InputsWrapper,
  OuterWrapper,
  ProInnerWrapper,
  ProOuterWrapper,
  ProText,
  SubmitPaymentBtn,
  Title,
  Wrapper,
} from "./Payment.styles";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onChangeView: Dispatcher<string>;
};

const Payment = (props: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Wrapper show={props.show}>
      <OuterWrapper>
        <InnerWrapper>
          <ProOuterWrapper>
            <ProInnerWrapper>
              <ProText>PRO</ProText>
            </ProInnerWrapper>
          </ProOuterWrapper>
          <Title>$10 / month</Title>
          <CardInfoWrapper>
            <InputsWrapper
              isFocused={isFocused}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <CardIcon src="/credit_card_icon.png" />
              <CardNumberInput placeholder="Card Number" />
              <CardMonthInput placeholder="MM / YY" />
              <CardCVCInput placeholder="CVC" />
            </InputsWrapper>
          </CardInfoWrapper>
          <SubmitPaymentBtn>submit payment</SubmitPaymentBtn>
        </InnerWrapper>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Payment;

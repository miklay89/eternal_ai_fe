import { Dispatch, SetStateAction, useState } from "react";
import {
  InnerWrapper,
  OuterWrapper,
  ProInnerWrapper,
  ProOuterWrapper,
  ProText,
  SubmitPaymentBtn,
  Title,
  Wrapper,
} from "./Payment.styles";
import PaymentInputs from "../../../../common/paymentInput/PaymentInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import {
  validateCVC,
  validateCardNumber,
  validateMonth,
  validateYear,
} from "../../../../common/paymentInput/cardInputsValidators";
import Profile from "../../../../../api/profile/profile";
import { Payments } from "../../types";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onChangeView: Dispatcher<string>;
};

const Payment = (props: Props) => {
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent) => {
    if (!authState) return alert("sign-in first");
    e.preventDefault();
    const validCardNumber = validateCardNumber(number);
    if (typeof validCardNumber === "boolean") {
      return alert("card number incorrect");
    }

    const validExpMonth = validateMonth(date);
    if (typeof validExpMonth === "boolean") {
      return alert("expiration month is incorrect");
    }

    const validExpYear = validateYear(date);
    if (typeof validExpYear === "boolean") {
      return alert("expiration year is incorrect");
    }

    const validCVC = validateCVC(cvc);
    if (typeof validCVC === "boolean") {
      return alert("cvc is incorrect");
    }

    const card = {
      number: validCardNumber,
      expYear: validExpYear,
      expMonth: validExpMonth,
      cvc: validCVC,
    };

    const updCardInfo = await Profile.updateCardInfo({ card: card });
    if (typeof updCardInfo === "string") return alert(updCardInfo);
    const subscribeClient = await Profile.createSubscription({ card: card });
    if (typeof subscribeClient === "string") return alert(subscribeClient);
    props.onChangeView(Payments.SUCCESS);
  };

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
          <PaymentInputs
            number={number}
            date={date}
            cvc={cvc}
            setNumber={setNumber}
            setDate={setDate}
            setCvc={setCvc}
          />
          <SubmitPaymentBtn onClick={(e) => handleSubmit(e)}>
            submit payment
          </SubmitPaymentBtn>
        </InnerWrapper>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Payment;

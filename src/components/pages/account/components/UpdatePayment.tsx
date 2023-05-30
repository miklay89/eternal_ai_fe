import { useState } from "react";
import {
  CancelSubBtn,
  CardInfoWrapper,
  InnerWrapper,
  NextPayment,
  OuterWrapper,
  Price,
  ProInnerWrapper,
  ProOuterWrapper,
  ProText,
  SaveBtn,
  UpdateBtnInnerWrapper,
  UpdateBtnOuterWrapper,
  UpdateBtnText,
} from "./UpdatePayment.styles";
import PaymentInputs from "../../../common/paymentInput/PaymentInput";
import {
  validateCVC,
  validateCardNumber,
  validateYear,
  validateMonth,
} from "../../../common/paymentInput/cardInputsValidators";
import Profile from "../../../../api/profile/profile";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
  nextPayment: string;
};

const UpdatePayment = (props: Props) => {
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const [update, setIsUpdate] = useState<boolean>(false);
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
    setIsUpdate(true);
  };

  const handleCancelSub = async (e: React.MouseEvent) => {
    e.preventDefault();
    const res = await Profile.deleteSubscription();
    if (typeof res === "string") return alert(res);
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ProOuterWrapper>
          <ProInnerWrapper>
            <ProText>PRO</ProText>
          </ProInnerWrapper>
        </ProOuterWrapper>
        <Price>$10 / month</Price>
        <NextPayment>{props.nextPayment}</NextPayment>
        <UpdateBtnOuterWrapper onClick={() => setIsUpdate(true)} show={update}>
          <UpdateBtnInnerWrapper>
            <UpdateBtnText>update payment</UpdateBtnText>
          </UpdateBtnInnerWrapper>
        </UpdateBtnOuterWrapper>
        <CancelSubBtn show={update} onClick={(e) => handleCancelSub(e)}>
          cancel subscription
        </CancelSubBtn>
        <CardInfoWrapper show={update}>
          <PaymentInputs
            number={number}
            date={date}
            cvc={cvc}
            setNumber={setNumber}
            setDate={setDate}
            setCvc={setCvc}
          />
          <SaveBtn onClick={(e) => handleSubmit(e)}>Save</SaveBtn>
        </CardInfoWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default UpdatePayment;

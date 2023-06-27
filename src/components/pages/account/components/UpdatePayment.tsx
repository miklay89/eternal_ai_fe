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
  SubscribeBtn,
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
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../../../store/reducers/profile";
import { RootState } from "../../../../store";
import { Modals } from "../../modals/types";

type Props = {
  nextPayment: string;
};

const UpdatePayment = (props: Props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal.open);
  const profileState = useSelector((state: RootState) => state.profile.user);
  const [update, setIsUpdate] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  const handleSubmit = async () => {
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
    setIsUpdate(false);
  };

  const handleCancelSub = async () => {
    const res = await Profile.deleteSubscription();
    if (typeof res === "string") return alert(res);

    Profile.getData().then((user) => dispatch(setProfile(user)));
  };

  const handleSub = () => {
    Profile.createSubscription().then((res) => {
      if (typeof res === "string") alert(res);
    });

    Profile.getData().then((user) => dispatch(setProfile(user)));
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
        <UpdateBtnOuterWrapper
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          onClick={() => setIsUpdate(true)}
          onKeyDown={(e) => (e.key === "Enter" ? setIsUpdate(true) : "")}
          show={update}
        >
          <UpdateBtnInnerWrapper>
            <UpdateBtnText>update payment</UpdateBtnText>
          </UpdateBtnInnerWrapper>
        </UpdateBtnOuterWrapper>
        <CardInfoWrapper show={update}>
          <PaymentInputs
            number={number}
            date={date}
            cvc={cvc}
            setNumber={setNumber}
            setDate={setDate}
            setCvc={setCvc}
          />
          <SaveBtn
            tabIndex={modalState === Modals.NONE ? 0 : -1}
            onClick={() => handleSubmit()}
            onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
          >
            Save
          </SaveBtn>
        </CardInfoWrapper>
        <CancelSubBtn
          show={profileState.isSubscribed ? true : false}
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          onClick={() => handleCancelSub()}
          onKeyDown={(e) => (e.key === "Enter" ? handleCancelSub() : "")}
        >
          cancel subscription
        </CancelSubBtn>
        <SubscribeBtn
          show={profileState.isSubscribed ? false : true}
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          onClick={() => handleSub()}
          onKeyDown={(e) => (e.key === "Enter" ? handleSub() : "")}
        >
          Subscribe
        </SubscribeBtn>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default UpdatePayment;

import { useState } from "react";
import {
  CancelSubBtn,
  CardCVCInput,
  CardIcon,
  CardInfoWrapper,
  CardMonthInput,
  CardNumberInput,
  InnerWrapper,
  InputsWrapper,
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

const UpdatePayment = () => {
  const [update, setIsUpdate] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ProOuterWrapper>
          <ProInnerWrapper>
            <ProText>PRO</ProText>
          </ProInnerWrapper>
        </ProOuterWrapper>
        <Price>$10 / month</Price>
        <NextPayment>
          Next payment will be processed on April 6, 2023
        </NextPayment>
        <UpdateBtnOuterWrapper onClick={() => setIsUpdate(true)} show={update}>
          <UpdateBtnInnerWrapper>
            <UpdateBtnText>update payment</UpdateBtnText>
          </UpdateBtnInnerWrapper>
        </UpdateBtnOuterWrapper>
        <CancelSubBtn show={update}>cancel subscription</CancelSubBtn>
        <CardInfoWrapper show={update}>
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
          <SaveBtn onClick={() => setIsUpdate(false)}>Save</SaveBtn>
        </CardInfoWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default UpdatePayment;

import { css } from "styled-components";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { images } from "./cardImages";
import { FormEvent, useState } from "react";

type Props = {
  number: string;
  setNumber: (val: string) => void;
  date: string;
  setDate: (val: string) => void;
  cvc: string;
  setCvc: (val: string) => void;
};

const PaymentInputs = (props: Props) => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper
      {...wrapperProps}
      styles={{
        fieldWrapper: {
          base: css`
            width: 529px;
            background: transparent;
            outline: none;
            @media (max-width: 1001px) {
              width: 100%;
            }
            @media (min-width: 500px) {
              width: 470px;
            }
          `,
          errored: css``,
        },
        inputWrapper: {
          base: css`
            outline: none;
            box-shadow: none;
            background: transparent;
            padding-left: 16.25px;
            padding-right: 16px;
            padding-top: 17.5px;
            padding-bottom: 17.5px;
            width: 100%;
            height: 100%;
            border: 1px solid #2f2535;
            border-radius: 16px;
            &:hover {
              border: 1px solid rgba(255, 255, 255, 0.5);
            }
            @media (max-width: 1001px) {
              padding-left: 12px;
              padding-right: 12px;
              padding-top: 17.5px;
              padding-bottom: 17.5px;
            }
          `,
          errored: css`
            border-color: red;
          `,
          focused: css`
            outline: none;
            border: 1px solid rgba(248, 45, 152, 1);
            &:hover {
              border: 1px solid rgba(248, 45, 152, 1);
            }
          `,
        },
        input: {
          base: css`
            margin-left: 4.25px;
            width: 270px;
            outline: none;
            border: none;
            background: transparent;
            height: 27px;
            font-family: "Avenir";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -0.01em;
            color: #ffffff;
            opacity: 0.7;
            @media (max-width: 1001px) {
              width: 100%;
              height: 21px;
              font-size: 14px;
              margin-left: -4px;
            }
          `,
          errored: css`
            color: red;
          `,
          cardNumber: css`
            width: 15rem;
            @media (max-width: 1001px) {
              width: 8rem;
            }
          `,
          expiryDate: css`
            margin-left: auto;
            width: 4.3rem;
            @media (max-width: 1001px) {
              width: 3.4rem;
            }
          `,
          cvc: css`
            width: 2.3rem;
            @media (max-width: 1001px) {
              width: 1.7rem;
            }
          `,
        },
        errorText: {
          base: css`
            position: absolute;
            bottom: 15px;
            font-family: "Avenir";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -0.01em;
            color: #ffffff;
          `,
        },
      }}
    >
      <svg {...getCardImageProps({ images })} />
      <input
        {...getCardNumberProps({
          onChange: (e: FormEvent<HTMLInputElement>) =>
            props.setNumber(e.currentTarget.value),
        })}
      />
      <input
        {...getExpiryDateProps({
          onChange: (e: FormEvent<HTMLInputElement>) =>
            props.setDate(e.currentTarget.value),
        })}
      />
      <input
        {...getCVCProps({
          onChange: (e: FormEvent<HTMLInputElement>) =>
            props.setCvc(e.currentTarget.value),
        })}
      />
    </PaymentInputsWrapper>
  );
};

export default PaymentInputs;

import styled from "styled-components";

export const Wrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const OuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 32px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  padding: 48px;
  border-radius: 32px;
  width: 100%;
  height: 100%;
`;

export const ProOuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 16px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: 66px;
  height: 40px;
  z-index: 5;
`;

export const ProInnerWrapper = styled.div`
  display: flex;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  border-radius: 16px;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
`;

export const ProText = styled.div`
  margin: auto auto;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Title = styled.div`
  margin-top: 26px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 16px;
`;

export const InputsWrapper = styled.div<{
  isFocused: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16.25px;
  padding-right: 16px;
  padding-top: 17.5px;
  padding-bottom: 17.5px;
  width: 100%;
  height: 100%;
  border: ${(props) =>
    props.isFocused ? "1px solid rgba(248, 45, 152, 1)" : "1px solid #2f2535"};
  border-radius: 16px;
  max-width: 529px;
  &:hover {
    border-color: ${(props) =>
      props.isFocused ? "rgba(248, 45, 152, 1)" : "rgba(255, 255, 255, 0.5)"};
  }
`;

export const CardIcon = styled.img`
  display: block;
  margin: 0 0;
`;

export const CardNumberInput = styled.input`
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
`;

export const CardMonthInput = styled.input`
  margin-left: 73px;
  background: transparent;
  outline: none;
  border: none;
  height: 27px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  max-width: 83px;
`;

export const CardCVCInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  height: 27px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  max-width: 40px;
`;

export const SubmitPaymentBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 62px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 120px;
  border: none;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
`;

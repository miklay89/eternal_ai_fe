import styled from "styled-components";

export const OuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  margin-top: 19px;
  border-radius: 32px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: 760px;
  z-index: 5;
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
  height: 44px;
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

export const Price = styled.div`
  margin: 0 auto;
  margin-top: 12px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const NextPayment = styled.div`
  margin: 0 auto;
  margin-top: 12px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
`;

export const UpdateBtnOuterWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "none" : "block")};
  margin-top: 32px;
  padding: 1px;
  width: 100%;
  height: 62px;
  background: #ffffff;
  border-radius: 120px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  }
`;

export const UpdateBtnInnerWrapper = styled.div`
  display: flex;
  border-radius: 120px;
  padding: 16px 24px;
  width: 100%;
  height: 100%;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
`;

export const UpdateBtnText = styled.div`
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

export const CancelSubBtn = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0 auto;
  margin-top: 32px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
`;

export const CardInfoWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
`;

export const SaveBtn = styled.button`
  width: 119px;
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

export const SubscribeBtn = styled.button<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin-top: 32px;
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

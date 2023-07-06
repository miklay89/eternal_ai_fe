import styled from "styled-components";

export const OuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 120px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: inherit;
  height: inherit;
`;

export const InnerWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  padding: 8px 8px 8px 48px;
  border-radius: 120px;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    padding: 8px 8px 8px 30px;
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 200px;
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
  @media (max-width: 1001px) {
    width: 120px;
    height: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  height: auto;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 14px;
    width: 100%;
  }
`;

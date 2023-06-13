import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  height: auto;
  background-color: #111115;
  color: #ffffff;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 28px;
  max-width: 1640px;
  overflow: hidden;
  position: relative;
  height: auto;
`;

export const GradientCorner = styled.div`
  z-index: 5;
  width: 100vw;
  height: 550px;
  position: absolute;
  left: 0px;
  top: 0px;
  background-image: linear-gradient(
    115deg,
    rgba(88, 51, 239, 0.2) 0.5%,
    rgba(29, 29, 36, 0) 12%
  );
`;

export const LogoWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const CloseBtnWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 28px;
  right: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  border-radius: 8px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  z-index: 15;
`;

export const CloseIcon = styled.img`
  display: block;
  margin: auto auto;
`;

export const TitleWrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0 auto;
  margin-top: 182px;
  position: relative;
  z-index: 10;
`;

export const Title = styled.div`
  margin: 0 auto;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const SubTitle = styled.div`
  margin: 0 auto;
  margin-top: 4px;
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

export const PaymentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  z-index: 10;
`;

import styled from "styled-components";

export const HomeSection = styled.section`
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  height: auto;
  background-color: #111115;
  color: #ffffff;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 28px;
  max-width: 1640px;
  overflow: hidden;
  @media (max-width: 1001px) {
    padding: 32px 16px 16px;
  }
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

export const PaywallBlock = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  height: 790px;
`;

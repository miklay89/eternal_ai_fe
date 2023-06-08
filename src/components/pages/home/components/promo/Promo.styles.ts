import styled from "styled-components";

export const PromoWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 154px;
  position: relative;
  @media (max-width: 1001px) {
    margin-top: 68.56px;
  }
`;

export const PromoH1 = styled.h1`
  margin: 0;
  width: auto;
  height: 47px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 16px;
    height: 21px;
    letter-spacing: 0.3em;
  }
`;

export const PromoSubtitle = styled.h5`
  margin: 0;
  margin-top: 6px;
  width: auto;
  height: 27px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.006em;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const IndividualsTableWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 32px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 24px;
  row-gap: 24px;
  padding: 0px;

  @media (max-width: 1490px) {
    margin: 0 auto;
    margin-top: 42px;
    grid-template-columns: auto auto auto auto;
    column-gap: auto;
    row-gap: 16px;
  }

  @media (max-width: 1201px) {
    margin: 0 auto;
    margin-top: 42px;
    grid-template-columns: auto auto auto;
    column-gap: auto;
    row-gap: 16px;
  }

  @media (max-width: 1001px) {
    margin: 0 auto;
    margin-top: 42px;
    grid-template-columns: auto auto auto auto;
    column-gap: auto;
    row-gap: 16px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 42px;
    grid-template-columns: auto auto auto;
    column-gap: auto;
    row-gap: 16px;
  }

  @media (max-width: 570px) {
    margin: 0 auto;
    margin-top: 42px;
    grid-template-columns: auto auto;
    column-gap: 16px;
    row-gap: 16px;
  }
`;

import styled from "styled-components";

export const PromoWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 767px;
  position: relative;
`;

export const PromoH1 = styled.h1`
  margin: 0;
  width: 350px;
  height: 47px;

  /* Arquitecta/H1 */

  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  /* identical to box height, or 47px */

  letter-spacing: 0.4em;
  text-transform: uppercase;

  /* White */

  color: #ffffff;
`;

export const PromoSubtitle = styled.h5`
  margin: 0;
  margin-top: 6px;
  width: 523px;
  height: 27px;

  /* Avenir/Body Medium */

  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  letter-spacing: -0.006em;

  /* White */

  color: #ffffff;

  opacity: 0.7;
`;

export const IndividualsTableWrapper = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 24px;
  row-gap: 24px;
  padding: 0px;
`;


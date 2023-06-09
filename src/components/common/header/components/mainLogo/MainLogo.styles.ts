import styled from "styled-components";

export const MainLogoWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 15;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1001px) {
    margin: 0;
    gap: 12.25px;
  }
`;

export const MainLogoText = styled.img`
  cursor: pointer;
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  @media (max-width: 1001px) {
    width: 101px;
  }
`;

import styled from "styled-components";

export const FooterLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLogoText = styled.img`
  cursor: pointer;
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
`;

import styled from "styled-components";

export const HomeSection = styled.section`
  margin: 0 auto;
  max-width: 100%;
  padding: 32px 0;
  position: relative;
  height: auto;
  background-color: #111115;
  color: #ffffff;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1640px;
  overflow: hidden;
`;

export const HomeSectionBg = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 222px;
  max-width: 100%;
  height: 393px;
  overflow: visible;
`;

export const BGImgPart = styled.img<{
  width: number;
  left: number;
  bottom: number;
}>`
  position: absolute;
  width: ${(props) => props.width + "px"};
  left: ${(props) => props.left + "px"};
  bottom: ${(props) => props.bottom + "px"};
  object-fit: cover;
`;

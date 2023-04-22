import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 393px;
  margin-top: 230px;
`;

export const ImgPart = styled.img<{
  left: number;
  bottom: number;
}>`
  width: auto;
  height: auto;
  position: absolute;
  left: ${(props) => props.left + "px"};
  bottom: ${(props) => props.bottom + "px"};
  object-fit: contain;
`;

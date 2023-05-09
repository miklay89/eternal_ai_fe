import styled from "styled-components";

export const Wrapper = styled.div<{
  top: number;
}>`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: ${(props) => props.top + "px"};
  width: 100%;
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

export const Shadow = styled.div`
  z-index: 1;
  position: absolute;
  height: 393px;
  width: 100%;
  background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
  bottom: 0;
  left: 0;
`;

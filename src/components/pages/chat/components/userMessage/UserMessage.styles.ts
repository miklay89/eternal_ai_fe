import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: auto;
  display: block;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  width: fit-content;
  height: auto;
  background: #ffffff;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  //text
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #0a0806;
  @media (max-width: 1001px) {
    font-size: 14px;
    padding: 24px;
  }
`;

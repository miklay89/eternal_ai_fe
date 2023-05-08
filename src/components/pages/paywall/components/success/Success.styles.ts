import styled from "styled-components";

export const Wrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
`;
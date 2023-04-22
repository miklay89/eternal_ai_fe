import styled from "styled-components";

export const CardWrapper = styled.div<{
  background: string;
  substrateUrl: string;
}>`
  background-color: gray;
  position: relative;
  width: 260.8px;
  height: 297.72px;
  border-radius: 16px;
  cursor: pointer;
  background: ${(props) => `url(${props.background}) no-repeat top center`},
    ${(props) => `url(${props.substrateUrl}) no-repeat top center`};
`;

export const PersonInfo = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  bottom: -0.5px;
  width: 261px;
  background: rgba(88, 48, 102, 0.2);
  backdrop-filter: blur(22px);
  border-radius: 16px;
`;

export const PersonFullName = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const PersonTitle = styled.div`
  margin-top: 4px;
  height: 12px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
`;

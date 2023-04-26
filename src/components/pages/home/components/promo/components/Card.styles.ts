import styled from "styled-components";

export const CardWrapper = styled.div<{
  background: string;
}>`
  position: relative;
  width: 260.8px;
  height: 297.72px;
  cursor: pointer;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    filter: blur(16px);
  }
  border-radius: 16px;
`;

export const CardBg = styled.div<{
  background: string;
}>`
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: 100%;
  /* filter: blur(16px); */
`;

export const CardImage = styled.img`
  position: absolute;
  z-index: 1;
  border-radius: 16px;
`;

export const PersonInfo = styled.div<{
  show: boolean;
}>`
  z-index: 1;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  bottom: 0;
  width: 100%;
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

import styled from "styled-components";

export const FooterWrapper = styled.div<{
  marginTop: number;
}>`
  margin: 0 auto;
  max-width: 1576px;
  height: 140px;
  margin-top: ${(props) => props.marginTop + "px"};
  background: #1d1d24;
  border-radius: 32px;
  padding-left: 48px;
  padding-right: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;
    height: auto;
    gap: 32px;
    margin-top: 58px;
  }
`;

export const FooterLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  @media (max-width: 800px) {
    order: 1;
  }
`;

export const Copy = styled.div`
  margin-right: 2px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.006em;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 800px) {
    order: 3;
  }
`;

export const FollowWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  @media (max-width: 800px) {
    order: 2;
  }
`;

export const FollowText = styled.div`
  margin-right: 6px;
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

export const Social = styled.div`
  margin-left: 8px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
`;

export const SocialImg = styled.img``;

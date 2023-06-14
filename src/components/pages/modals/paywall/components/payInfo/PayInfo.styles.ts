import styled from "styled-components";

export const Wrapper = styled.div<{
  show: boolean;
}>`
  display: ${(props) => (props.show ? "flex" : "none")};
  gap: 32px;
  @media (max-width: 1001px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Share = styled.div`
  padding: 100.5px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90.83deg,
    rgba(4, 4, 16, 0.6) 11.84%,
    rgba(15, 3, 6, 0.6) 111.32%
  );
  backdrop-filter: blur(12px);
  border-radius: 32px;
  @media (max-width: 1001px) {
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    max-width: 343px;
  }
`;

export const FreeLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border-radius: 16px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #0e0e10;
  @media (max-width: 1001px) {
    font-size: 14px;
    transform: translateY(-2px);
  }
`;

export const Title = styled.div`
  margin-top: 26px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 18px;
    margin-top: 15px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 4px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const Span = styled.span`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(248, 45, 152, 1);
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const ShareBtnOuterWrapper = styled.div`
  display: "block";
  margin-top: 24px;
  padding: 1px;
  width: 220px;
  height: 62px;
  background: #ffffff;
  border-radius: 120px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  }
  @media (max-width: 1001px) {
    margin-top: 15px;
    width: 293px;
    height: 46px;
  }
`;

export const ShareBtnInnerWrapper = styled.div`
  display: flex;
  border-radius: 120px;
  padding: 16px 24px;
  width: 100%;
  height: 100%;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
`;

export const ShareBtnText = styled.div`
  margin: auto auto;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const SubscribeOuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 32px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
`;

export const SubscribeInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  padding: 48px;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    padding: 24px;
    width: 341px;
  }
`;

export const ProOuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 16px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  position: relative;
  width: 66px;
  height: 40px;
  z-index: 5;
  @media (max-width: 1001px) {
    width: 58px;
    height: 42px;
    transform: translateY(-2px);
  }
`;

export const ProInnerWrapper = styled.div`
  display: flex;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  border-radius: 16px;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  @media (max-width: 1001px) {
    padding: 15px 16px;
  }
`;

export const ProText = styled.div`
  margin: auto auto;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 1001px) {
    font-size: 11px;
  }
`;

export const NotesWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  @media (max-width: 1001px) {
    margin-left: 56px;
  }
`;

export const NoteTick = styled.img`
  display: block;
  margin: 0;
  flex: none;
`;

export const NoteText = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  flex: none;
  @media (max-width: 1001px) {
    font-size: 14px;
  }
`;

export const SubscribeBtn = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 62px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 120px;
  border: none;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
  @media (max-width: 1001px) {
    margin-top: 18px;
    height: 46px;
    font-size: 13px;
  }
  @media (max-width: 500px) {
    width: 295px;
  }
`;

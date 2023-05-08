import styled from "styled-components";

export const AccountSection = styled.section`
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  height: auto;
  background-color: #111115;
  color: #ffffff;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 28px;
  max-width: 1640px;
`;

export const Ellipse = styled.img<{
  left: number;
  bottom: number;
  width: number;
  height: number;
}>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  position: absolute;
  left: ${(props) => props.left + "px"};
  bottom: ${(props) => props.bottom + "px"};
  filter: blur(8px);
`;

export const OuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  margin-top: 76px;
  border-radius: 32px;
  background: linear-gradient(
    281.4deg,
    rgba(248, 45, 152, 0.4) -2.34%,
    rgba(88, 51, 239, 0.4) 114.41%
  );
  position: relative;
  width: 760px;
  z-index: 5;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  padding: 48px;
  border-radius: 32px;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Title = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const InputTitle = styled.div`
  margin-top: 31px;
  height: 27px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const Input = styled.input`
  margin-top: 8px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #060608;
  border: 1px solid #2f2535;
  border-radius: 16px;
  flex: none;
  align-self: stretch;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    border-color: rgba(248, 45, 152, 1);
  }
`;

export const SaveBtn = styled.button`
  margin-top: 32px;
  margin-left: auto;
  width: 210px;
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
`;

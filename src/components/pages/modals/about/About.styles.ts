import styled from "styled-components";

export const ModalWrapper = styled.div<{
  isOpen: boolean;
}>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(77px);
  z-index: 10;
`;

export const ModalNavWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 28px;
  padding-left: 28px;
  padding-right: 28px;
  max-width: 1640px;
  display: flex;
  justify-content: flex-end;
  z-index: 15;
`;

export const ModalCloseBtnWrapper = styled.div`
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 56px;
  height: 56px;
  background: #000000;
  border: 1px solid #2f2535;
  border-radius: 8px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  z-index: 15;
`;

export const ModalCloseIcon = styled.img`
  display: block;
  margin: auto auto;
`;

export const OuterWrapper = styled.div`
  padding: 1px;
  margin: auto auto;
  border-radius: 32px;
  background: linear-gradient(
    281.4deg,
    rgba(248, 45, 152, 0.3) -2.34%,
    rgba(88, 51, 239, 0.3) 114.41%
  );
  position: fixed;
  width: 721px;
  left: calc(50% - 721px / 2 + 0.5px);
  top: calc(50% - 250px / 2 + 0.5px);
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

export const Title = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const Description = styled.div`
  margin-top: 8px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
`;

export const CheckBoxWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const CheckBox = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

export const Check = styled.img<{
  isChecked: boolean;
}>`
  display: block;
  margin: auto auto;

  filter: ${(props) =>
    props.isChecked
      ? "invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg) brightness(100%) contrast(95%)"
      : ""};
`;

export const CheckBoxText = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
`;

export const ContinueBtn = styled.button`
  margin-top: 32px;
  width: 625px;
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

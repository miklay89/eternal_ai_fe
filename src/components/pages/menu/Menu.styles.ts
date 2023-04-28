import styled from "styled-components";

export const MenuWrapper = styled.div<{
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

export const Navbar = styled.nav`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 343px;
  left: calc(50% - 343px / 2 + 0.5px);
  top: calc(50% - 440px / 2 + 0.5px);
  border-radius: 32px;
`;

export const Link = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  width: auto;
  height: 48px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
  &:focus {
    color: #f82d98;
  }
`;

export const Divider = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  width: 279px;
  height: 0px;
  border: 1px solid #2f2535;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const Social = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: auto;
  height: auto;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
`;

export const SocialImg = styled.img`
  &:hover {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
  &:focus {
    filter: invert(29%) sepia(85%) saturate(3285%) hue-rotate(310deg)
      brightness(100%) contrast(95%);
  }
`;

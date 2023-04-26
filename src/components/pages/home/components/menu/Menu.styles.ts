import styled from "styled-components";

export const MenuWrapper = styled.div<{
  isOpen: boolean;
}>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(77px);
  z-index: 10;
  padding-top: 28px;
`;

export const MenuContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1640px;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 343px;
  height: 440px;
  left: calc(50% - 343px / 2 + 0.5px);
  top: 406px;

  border-radius: 32px;
`;

export const Link = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  width: auto;
  height: 48px;

  /* Avenir/H3 */

  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  /* identical to box height, or 48px */

  letter-spacing: -0.01em;

  /* White */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
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
`;

export const SocialImg = styled.img``;

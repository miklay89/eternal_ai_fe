import {
  Divider,
  Link,
  MenuWrapper,
  Navbar,
  Social,
  SocialImg,
} from "./Menu.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/root";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/reducers/modals";
import { Modals } from "../types";

type Props = {
  isOpen: boolean;
};

const Menu = (props: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.ACCOUNT) {
      dispatch(openModal(Modals.NONE));
    }
    dispatch(openModal(Modals.NONE));
    navigate("/account");
  };

  const handleClickPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal(Modals.NONE));
    navigate(Paths.PAYWALL);
  };

  return (
    <MenuWrapper isOpen={props.isOpen}>
      <Navbar>
        <Link onClick={() => dispatch(openModal(Modals.ABOUT))}>About us</Link>
        <Link onClick={(e) => handleClickPricing(e)}>Pricing</Link>
        <Link>How it works</Link>
        <Link onClick={(e) => handleAccountClick(e)}>My account</Link>
        <Divider />
        <Social>
          <SocialImg src="/menu/facebook.svg" />
          <SocialImg src="/menu/instagram.svg" />
          <SocialImg src="/menu/twitter.svg" />
          <SocialImg src="/menu/discord.svg" />
        </Social>
      </Navbar>
    </MenuWrapper>
  );
};

export default Menu;

import { Dispatch, SetStateAction } from "react";
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
import { Modals } from "../../home/Home";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onClickAboutLink: Dispatcher<string | null>;
  closeMenu: Dispatcher<string | null>;
};

const Menu = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (location.pathname === Paths.ACCOUNT) {
      props.closeMenu(null);
    }
    navigate("/account");
  };

  return (
    <MenuWrapper isOpen={props.isOpen}>
      <Navbar>
        <Link onClick={() => props.onClickAboutLink(Modals.ABOUT)}>
          About us
        </Link>
        <Link>Pricing</Link>
        <Link>How it works</Link>
        <Link onClick={handleAccountClick}>My account</Link>
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

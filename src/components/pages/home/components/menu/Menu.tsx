import { Dispatch, SetStateAction } from "react";
import Header from "../header/Header";
import {
  Divider,
  Link,
  MenuContainer,
  MenuWrapper,
  Navbar,
  Social,
  SocialImg,
} from "./Menu.styles";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  isOpen: boolean;
  onMenuClick: Dispatcher<boolean>;
};

const Menu = (props: Props) => {
  return (
    <MenuWrapper isOpen={props.isOpen}>
      <MenuContainer>
        <Header onMenuClick={props.onMenuClick} isOpen={props.isOpen} />
        <Navbar>
          <Link>About us</Link>
          <Link>Pricing</Link>
          <Link>How it works</Link>
          <Link>My account</Link>
          <Divider />
          <Social>
            <SocialImg src="/menu/facebook.svg" />
            <SocialImg src="/menu/instagram.svg" />
            <SocialImg src="/menu/twitter.svg" />
            <SocialImg src="/menu/discord.svg" />
          </Social>
        </Navbar>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default Menu;

import {
  Divider,
  Link,
  MenuWrapper,
  Navbar,
  Social,
  SocialImg,
} from "./Menu.styles";

type Props = {
  isOpen: boolean;
};

const Menu = (props: Props) => {
  return (
    <MenuWrapper isOpen={props.isOpen}>
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
    </MenuWrapper>
  );
};

export default Menu;

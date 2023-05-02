import Bagel from "../header/bagel/Bagel";

import {
  Copy,
  FollowText,
  FollowWrapper,
  FooterLogoWrapper,
  FooterWrapper,
  Social,
  SocialImg,
} from "./Footer.styles";
import { MainLogo } from "../header/Header.styles";

type Props = {
  marginTop: number;
}

const Footer = (props: Props) => {
  return (
    <FooterWrapper marginTop={props.marginTop}>
      <FooterLogoWrapper>
        <Bagel />
        <MainLogo src="/eternal.svg" />
      </FooterLogoWrapper>
      <Copy>© 2023 Eternal. All rights reserved.</Copy>
      <FollowWrapper>
        <FollowText>follow us</FollowText>
        <Social>
          <SocialImg src="/footer/twitter.svg" />
        </Social>
        <Social>
          <SocialImg src="/footer/facebook.svg" />
        </Social>
        <Social>
          <SocialImg src="/footer/youtube.svg" />
        </Social>
      </FollowWrapper>
    </FooterWrapper>
  );
};

export default Footer;

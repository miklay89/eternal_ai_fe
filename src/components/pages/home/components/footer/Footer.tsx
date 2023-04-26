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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogoWrapper>
        <Bagel />
        <MainLogo src="/public/eternal.svg" />
      </FooterLogoWrapper>
      <Copy>© 2023 Eternal. All rights reserved.</Copy>
      <FollowWrapper>
        <FollowText>follow us</FollowText>
        <Social>
          <SocialImg src="/public/footer/twitter.svg" />
        </Social>
        <Social>
          <SocialImg src="/public/footer/facebook.svg" />
        </Social>
        <Social>
          <SocialImg src="/public/footer/youtube.svg" />
        </Social>
      </FollowWrapper>
    </FooterWrapper>
  );
};

export default Footer;

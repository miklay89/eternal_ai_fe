import Bagel from "../header/bagel/Bagel";
import {
  Copy,
  FollowText,
  FollowWrapper,
  FooterLogoWrapper,
  FooterWrapper,
  Social,
} from "./Footer.styles";
import { ReactComponent as Eternal } from "../../../../../../public/home/ETERNAL.svg";
import { ReactComponent as Youtube } from "../../../../../../public/home/youtube.svg";
import { ReactComponent as Twitter } from "../../../../../../public/home/twitter.svg";
import { ReactComponent as FaceBook } from "../../../../../../public/home/facebook.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogoWrapper>
        <Bagel />
        <Eternal />
      </FooterLogoWrapper>
      <Copy>© 2023 Eternal. All rights reserved.</Copy>
      <FollowWrapper>
        <FollowText>follow us</FollowText>
        <Social>
          <Twitter />
        </Social>
        <Social>
          <FaceBook />
        </Social>
        <Social>
          <Youtube />
        </Social>
      </FollowWrapper>
    </FooterWrapper>
  );
};

export default Footer;

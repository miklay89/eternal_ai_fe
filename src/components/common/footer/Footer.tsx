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
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import { Dispatch, SetStateAction } from "react";
import scrollToTop from "../../hooks/scrollToTop";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  marginTop: number;
  closeAllModals: Dispatcher<string | null>;
};

const Footer = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClickFooterLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      props.closeAllModals(null);
      scrollToTop();
    } else {
      navigate(Paths.HOME);
      scrollToTop();
    }
  };
  return (
    <FooterWrapper marginTop={props.marginTop}>
      <FooterLogoWrapper onClick={(e) => handleClickFooterLogo(e)}>
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

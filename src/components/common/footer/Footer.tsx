import {
  Copy,
  FollowText,
  FollowWrapper,
  FooterLogoWrapper,
  FooterWrapper,
  Social,
  SocialImg,
} from "./Footer.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import scrollToTop from "../../hooks/scrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/reducers/modals";
import { Modals } from "../../pages/modals/types";
import FooterLogo from "./components/footerLogo/FooterLogo";
import { RootState } from "../../../store";

type Props = {
  marginTop: number;
};

const Footer = (props: Props) => {
  const modalState = useSelector((state: RootState) => state.modal.open);

  return (
    <FooterWrapper marginTop={props.marginTop}>
      <FooterLogoWrapper>
        <FooterLogo />
      </FooterLogoWrapper>
      <Copy>© 2023 Eternal. All rights reserved.</Copy>
      <FollowWrapper>
        <FollowText>follow us</FollowText>
        <Social
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          href="https://twitter.com/"
        >
          <SocialImg src="/footer/twitter.svg" />
        </Social>
        <Social
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          href="https://www.facebook.com/"
        >
          <SocialImg src="/footer/facebook.svg" />
        </Social>
        <Social
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          href="https://www.youtube.com/"
        >
          <SocialImg src="/footer/youtube.svg" />
        </Social>
      </FollowWrapper>
    </FooterWrapper>
  );
};

export default Footer;

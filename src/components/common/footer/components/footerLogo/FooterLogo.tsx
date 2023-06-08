import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../../routes/root";
import { FooterLogoText, FooterLogoWrapper } from "./FooterLogo.styles";
import Bagel from "./components/bagel/Bagel";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../store/reducers/modals";
import scrollToTop from "../../../../hooks/scrollToTop";
import { Modals } from "../../../../pages/modals/types";

const FooterLogo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === Paths.HOME) {
      dispatch(openModal(Modals.NONE));
      scrollToTop();
    } else {
      navigate(Paths.HOME);
      dispatch(openModal(Modals.NONE));
      scrollToTop();
    }
  };

  return (
    <FooterLogoWrapper onClick={(e) => handleClickLogo(e)}>
      <Bagel />
      <FooterLogoText src="/eternal.svg" />
    </FooterLogoWrapper>
  );
};

export default FooterLogo;

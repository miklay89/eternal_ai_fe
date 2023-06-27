import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../../../routes/root";
import { FooterLogoText, FooterLogoWrapper } from "./FooterLogo.styles";
import Bagel from "./components/bagel/Bagel";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../../store/reducers/modals";
import scrollToTop from "../../../../hooks/scrollToTop";
import { Modals } from "../../../../pages/modals/types";
import { RootState } from "../../../../../store";

const FooterLogo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal.open);

  const handleClickLogo = () => {
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
    <FooterLogoWrapper
      tabIndex={modalState === Modals.NONE ? 0 : -1}
      onClick={() => handleClickLogo()}
      onKeyDown={(e) => (e.key === "Enter" ? handleClickLogo() : "")}
    >
      <Bagel />
      <FooterLogoText src="/eternal.svg" />
    </FooterLogoWrapper>
  );
};

export default FooterLogo;

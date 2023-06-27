import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../../routes/root";
import { MainLogoText, MainLogoWrapper } from "./MainLogo.styles";
import Bagel from "./components/bagel/Bagel";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/reducers/modals";
import scrollToTop from "../../hooks/scrollToTop";
import { Modals } from "../../pages/modals/types";

type Props = {
  tabIndex: number;
};

const MainLogo = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <MainLogoWrapper
      tabIndex={props.tabIndex}
      onClick={() => handleClickLogo()}
      onKeyDown={(e) => (e.key === "Enter" ? handleClickLogo() : "")}
    >
      <Bagel />
      <MainLogoText src="/eternal.svg" />
    </MainLogoWrapper>
  );
};

export default MainLogo;

import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../routes/root";

const navigateToHome = (e: React.MouseEvent) => {
  e.preventDefault();
  const navigate = useNavigate();
  const location = useLocation();
  navigate(Paths.HOME);
};

export default navigateToHome;

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";
import { FC, useEffect } from "react";
import { openModal } from "../store/reducers/modals";
import { Modals } from "../components/pages/modals/types";
import LocalStorage from "../services/localStorage";
import Auth from "../api/auth/auth";
import { setAuth } from "../store/reducers/auth";

type Props = {
  fc: FC;
};

const PrivateRouteComponent = (props: Props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);

  const token = LocalStorage.getToken();
  if (!token) {
    dispatch(openModal(Modals.SIGN_IN));
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (!authState) {
      Auth.checkAuthMe()
        .then(() => dispatch(setAuth(true)))
        .catch(() => {
          LocalStorage.deleteToken();
          dispatch(setAuth(false));
        });
    }
  }, []);

  if (authState) {
    return <props.fc />;
  }

  return <Outlet />;
};

export default PrivateRouteComponent;

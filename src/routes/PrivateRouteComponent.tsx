import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";
import { FC } from "react";
import { openModal } from "../store/reducers/modals";
import { Modals } from "../components/pages/modals/types";

type Props = {
  fc: FC;
};

const PrivateRouteComponent = (props: Props) => {
  const dispatch = useDispatch();

  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  if (authState) return <props.fc />;

  dispatch(openModal(Modals.SIGN_IN));
  return <Navigate to="/" />;
};

export default PrivateRouteComponent;

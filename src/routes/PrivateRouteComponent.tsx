import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";
import { FC } from "react";

type Props = {
  fc: FC;
};

const PrivateRouteComponent = (props: Props) => {
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  if (authState) return <props.fc />;

  return <Navigate to="/" />;
};

export default PrivateRouteComponent;

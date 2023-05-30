import { useEffect } from "react";
import {
  BagelEllipse,
  BagelWrapper,
  Eternal,
  LoadingContainer,
  LoadingWrapper,
} from "./Loading.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setAuth } from "../../../store/reducers/auth";
import Auth from "../../../api/auth/auth";
import socket from "../../../services/socket";
import { setConnection } from "../../../store/reducers/socket";
import { setSoul } from "../../../store/reducers/soul";
import LocalStorage from "../../../services/localStorage";
import Profile from "../../../api/profile/profile";
import { setProfile } from "../../../store/reducers/profile";
import { setLoading } from "../../../store/reducers/loading";

const Loading = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector(
    (state: RootState) => state.loading.isLoading
  );
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const socketIsConnected = useSelector(
    (state: RootState) => state.socket.connection
  );
  const soul = useSelector((state: RootState) => state.soul.soul);
  const soulIsSet = useSelector((state: RootState) => state.soul.isSet);
  const profileState = useSelector((state: RootState) => state.profile.user);

  useEffect(() => {
    const token = LocalStorage.getToken();
    if (!token) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
      dispatch(setLoading(false));
      return;
    }
    if (authState) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
      return;
    }

    Auth.checkAuthMe()
      .then(() => dispatch(setAuth(true)))
      .catch(() => {
        LocalStorage.deleteToken();
        dispatch(setAuth(false));
      });

    if (socketIsConnected) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
      return;
    }
    socket.connect();
    socket.on("connect", () => dispatch(setConnection(true)));

    if (soulIsSet) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
      return;
    }
    const soulInfo = { soul: soul, isSet: true };
    socket.emit("setSoul", { soulId: soul.uuid });
    dispatch(setSoul(soulInfo));

    if (profileState.email.length > 0) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
      return;
    }
    Profile.getData().then((user) => dispatch(setProfile(user)));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, []);

  return (
    <LoadingWrapper show={loadingState}>
      <LoadingContainer>
        <BagelWrapper width={300} height={300}>
          <BagelEllipse
            width={205.41}
            height={231.14}
            from={-90}
            borderWidth={20.2162}
            borderColor="#933eff"
            blur={9.1892}
          />
          <BagelEllipse
            width={205.41}
            height={264.22}
            from={-90}
            borderWidth={34.9189}
            borderColor="#5833EF"
            blur={16.5406}
          />
          <BagelEllipse
            width={206.12}
            height={249.74}
            from={-57.23}
            borderWidth={20.2162}
            borderColor="#FFFEF0"
            blur={9.1892}
          />
          <BagelEllipse
            width={206.12}
            height={249.92}
            from={-45}
            borderWidth={20.2162}
            borderColor="#FFFFFF"
            blur={0}
          />
          <BagelEllipse
            width={206.12}
            height={242.47}
            from={0}
            borderWidth={20.2162}
            borderColor="#F82D98"
            blur={9.1892}
          />
          <BagelEllipse
            width={206.12}
            height={242.47}
            from={0}
            borderWidth={20.2162}
            borderColor="#F82D98"
            blur={0}
          />
          <BagelEllipse
            width={206.12}
            height={242.84}
            from={45}
            borderWidth={20.2162}
            borderColor="#AFF220"
            blur={9.1892}
          />
          <BagelEllipse
            width={213.22}
            height={240.4}
            from={45}
            borderWidth={20.2162}
            borderColor="#AFF220"
            blur={0}
          />
        </BagelWrapper>
        <Eternal src="./eternal.svg" />
      </LoadingContainer>
    </LoadingWrapper>
  );
};

export default Loading;

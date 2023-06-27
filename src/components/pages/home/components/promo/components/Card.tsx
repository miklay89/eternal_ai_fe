import { useState } from "react";
import {
  CardImage,
  CardWrapper,
  ImageWrapper,
  PersonFullName,
  PersonInfo,
  PersonTitle,
} from "./Card.styles";
import { useDispatch, useSelector } from "react-redux";
import { setSoul } from "../../../../../../store/reducers/soul";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../../../routes/root";
import {
  addAIMessage,
  addScrollMessage,
  addUserMessage,
  eraseChat,
} from "../../../../../../store/reducers/messages";
import socket from "../../../../../../services/socket";
import { RootState } from "../../../../../../store";
import { setConnection } from "../../../../../../store/reducers/socket";
import ChatInstance from "../../../../../../api/chat/chat";
import { Modals } from "../../../../modals/types";

type Props = {
  fullName: string;
  title: string;
  imgUrl: string;
  substrateUrl: string;
  uuid: string;
  id: number;
};

const Card = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal.open);
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const socketIsConnected = useSelector(
    (state: RootState) => state.socket.connection
  );
  const soul = useSelector((state: RootState) => state.soul.soul);
  const soulIsSet = useSelector((state: RootState) => state.soul.isSet);
  const [showPersonInfo, setShowPersonInfo] = useState<boolean>(false);

  const handleClick = () => {
    if (!authState) {
      alert("sign in first");
      return;
    }

    if (!socketIsConnected) {
      socket.connect();
      socket.on("connect", () => dispatch(setConnection(true)));
    }

    if (!soulIsSet) {
      socket.emit("setSoul", { soulId: props.uuid });
      const soulInfo = { soul: props, isSet: true };
      dispatch(setSoul(soulInfo));
    }

    if (soul.uuid === props.uuid) {
      navigate(Paths.CHAT);
      ChatInstance.getInitHistory(soul.uuid).then((res) => {
        res.forEach((m) => {
          if (m.role === "user") {
            dispatch(addUserMessage({ id: m.id, text: m.content }));
          }
          if (m.role === "assistant") {
            dispatch(addAIMessage({ id: m.id, text: m.content }));
          }
        });

        dispatch(addScrollMessage());
      });
      return;
    }

    socket.emit("setSoul", { soulId: props.uuid });
    const soulInfo = { soul: props, isSet: true };
    dispatch(setSoul(soulInfo));
    dispatch(eraseChat());

    ChatInstance.getInitHistory(soulInfo.soul.uuid)
      .then((res) => {
        res.forEach((m) => {
          if (m.role === "user") {
            dispatch(addUserMessage({ id: m.id, text: m.content }));
          }
          if (m.role === "assistant") {
            dispatch(addAIMessage({ id: m.id, text: m.content }));
          }
        });

        dispatch(addScrollMessage());
      })
      .finally(() => navigate(Paths.CHAT));
  };

  return (
    <CardWrapper
      background={props.substrateUrl}
      onMouseEnter={() => setShowPersonInfo(true)}
      onMouseLeave={() => setShowPersonInfo(false)}
      onClick={() => handleClick()}
      tabIndex={modalState === Modals.NONE ? 0 : -1}
      onKeyDown={(e) => (e.key === "Enter" ? handleClick() : "")}
    >
      <ImageWrapper>
        <CardImage src={props.imgUrl} />
      </ImageWrapper>
      <PersonInfo show={showPersonInfo}>
        <PersonFullName>{props.fullName}</PersonFullName>
        <PersonTitle>{props.title}</PersonTitle>
      </PersonInfo>
    </CardWrapper>
  );
};

export default Card;

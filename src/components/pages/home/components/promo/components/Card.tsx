import { useState } from "react";
import {
  CardImage,
  CardWrapper,
  PersonFullName,
  PersonInfo,
  PersonTitle,
} from "./Card.styles";
import { useDispatch, useSelector } from "react-redux";
import { setSoul } from "../../../../../../store/reducers/soul";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../../../routes/root";
import {
  addMessage,
  eraseChat,
} from "../../../../../../store/reducers/messages";
import socket from "../../../../../../services/socket";
import { RootState } from "../../../../../../store";
import { setConnection } from "../../../../../../store/reducers/socket";
import ChatInstance from "../../../../../../api/chat/chat";

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
  const authState = useSelector((state: RootState) => state.isAuth.isAuth);
  const socketIsConnected = useSelector(
    (state: RootState) => state.socket.connection
  );
  const soul = useSelector((state: RootState) => state.soul.soul);
  const soulIsSet = useSelector((state: RootState) => state.soul.isSet);
  const [showPersonInfo, setShowPersonInfo] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
            const userMsg = {
              id: m.id,
              isAi: false,
              text: m.content,
            };
            dispatch(addMessage(userMsg));
          }
          if (m.role === "assistant") {
            const aiMsg = {
              id: m.id,
              isAi: true,
              text: m.content,
            };
            dispatch(addMessage(aiMsg));
          }
        });

        const scrollMsg = {
          id: "scroll",
          isAi: true,
          text: "",
        };
        dispatch(addMessage(scrollMsg));
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
            const userMsg = {
              id: m.id,
              isAi: false,
              text: m.content,
            };
            dispatch(addMessage(userMsg));
          }
          if (m.role === "assistant") {
            const aiMsg = {
              id: m.id,
              isAi: true,
              text: m.content,
            };
            dispatch(addMessage(aiMsg));
          }
        });

        const scrollMsg = {
          id: "scroll",
          isAi: true,
          text: "",
        };
        dispatch(addMessage(scrollMsg));
      })
      .finally(() => navigate(Paths.CHAT));
  };

  return (
    <CardWrapper
      background={props.substrateUrl}
      onMouseEnter={() => setShowPersonInfo(true)}
      onMouseLeave={() => setShowPersonInfo(false)}
      onClick={(e) => handleClick(e)}
    >
      <CardImage src={props.imgUrl} />
      <PersonInfo show={showPersonInfo}>
        <PersonFullName>{props.fullName}</PersonFullName>
        <PersonTitle>{props.title}</PersonTitle>
      </PersonInfo>
    </CardWrapper>
  );
};

export default Card;

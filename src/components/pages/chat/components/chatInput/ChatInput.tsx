import { useState } from "react";
import {
  InnerWrapper,
  Input,
  OuterWrapper,
  SubmitBtn,
} from "./ChatInput.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { addMessage } from "../../../../../store/reducers/messages";
import socket from "../../../../../services/socket";
import { setConnection } from "../../../../../store/reducers/socket";

const ChatInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const AuthState = useSelector((state: RootState) => state.isAuth);
  const soul = useSelector((state: RootState) => state.soul.soul);
  const socketIsConnected = useSelector(
    (state: RootState) => state.socket.connection
  );
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!AuthState.isAuth) {
      alert("sign in first");
      return;
    }
    if (!socketIsConnected) {
      socket.connect();
      socket.on("connect", () => dispatch(setConnection(true)));
    }

    if (!value.length) return;
    const msg = {
      isAi: false,
      text: value,
      id: "template",
    };
    dispatch(addMessage(msg));
    socket.emit("sendMessage", { content: msg.text });

    setValue("");

    const loadingMsg = {
      isAi: true,
      text: "",
      id: "loading",
    };
    dispatch(addMessage(loadingMsg));
  };

  const handleSubmitKeyboard = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!AuthState.isAuth) {
        alert("sign in first");
        return;
      }

      if (!socketIsConnected) {
        socket.connect();
        socket.on("connect", () => dispatch(setConnection(true)));
      }

      if (!value.length) return;

      const msg = {
        isAi: false,
        text: value,
        id: "template",
      };
      dispatch(addMessage(msg));

      socket.emit("sendMessage", { content: msg.text });

      setValue("");

      const loadingMsg = {
        isAi: true,
        text: "",
        id: "loading",
      };
      dispatch(addMessage(loadingMsg));
    } else {
      return;
    }
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Input
          placeholder="Enter your message..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          onKeyDown={(e) => handleSubmitKeyboard(e)}
        />
        <SubmitBtn onClick={(e) => handleSubmit(e)}>submit</SubmitBtn>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default ChatInput;

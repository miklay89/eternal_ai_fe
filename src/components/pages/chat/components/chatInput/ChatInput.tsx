import { useState } from "react";
import {
  InnerWrapper,
  Input,
  OuterWrapper,
  SubmitBtn,
} from "./ChatInput.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import {
  addMessage,
  removeScrollMessage,
} from "../../../../../store/reducers/messages";
import socket from "../../../../../services/socket";

const ChatInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!value.length) return;

    dispatch(removeScrollMessage());

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

    const scrollMsg = {
      id: "scroll",
      isAi: true,
      text: "",
    };
    dispatch(addMessage(scrollMsg));
  };

  const handleSubmitKeyboard = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!value.length) return;

      dispatch(removeScrollMessage());

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

      const scrollMsg = {
        id: "scroll",
        isAi: true,
        text: "",
      };
      dispatch(addMessage(scrollMsg));
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

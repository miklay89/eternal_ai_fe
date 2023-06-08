import { useState } from "react";
import {
  InnerWrapper,
  Input,
  OuterWrapper,
  SubmitBtn,
} from "./ChatInput.styles";
import { useDispatch } from "react-redux";
import {
  addLoadingMessage,
  addScrollMessage,
  addUserMessage,
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

    dispatch(addUserMessage({ id: "template", text: value }));
    socket.emit("sendMessage", { content: value });

    setValue("");

    dispatch(addLoadingMessage());

    dispatch(addScrollMessage());
  };

  const handleSubmitKeyboard = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!value.length) return;

      dispatch(removeScrollMessage());

      dispatch(addUserMessage({ id: "template", text: value }));
      socket.emit("sendMessage", { content: value });

      setValue("");

      dispatch(addLoadingMessage());

      dispatch(addScrollMessage());
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

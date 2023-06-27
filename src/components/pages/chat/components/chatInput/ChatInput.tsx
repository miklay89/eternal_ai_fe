import { useState } from "react";
import {
  InnerWrapper,
  Input,
  OuterWrapper,
  SubmitBtn,
} from "./ChatInput.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addLoadingMessage,
  addScrollMessage,
  addUserMessage,
  removeScrollMessage,
} from "../../../../../store/reducers/messages";
import socket from "../../../../../services/socket";
import { RootState } from "../../../../../store";
import { Modals } from "../../../modals/types";

const ChatInput = () => {
  const modalState = useSelector((state: RootState) => state.modal.open);
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
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          placeholder="Enter your message..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          onKeyDown={(e) => handleSubmitKeyboard(e)}
        />
        <SubmitBtn
          tabIndex={modalState === Modals.NONE ? 0 : -1}
          onClick={(e) => handleSubmit(e)}
        >
          submit
        </SubmitBtn>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default ChatInput;

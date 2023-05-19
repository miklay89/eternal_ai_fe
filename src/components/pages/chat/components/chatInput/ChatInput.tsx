import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  InnerWrapper,
  Input,
  OuterWrapper,
  SubmitBtn,
} from "./ChatInput.styles";
import { Message } from "../../Chat";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  onSubmit: Dispatcher<Message[]>;
};

const ChatInput = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const AuthState = useSelector((state: RootState) => state.isAuth);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!AuthState.isAuth) {
      alert("sign in first");
      return;
    }
    if (!value.length) return;
    const msg = { ai: false, text: value };
    props.onSubmit((prev) => [...prev, msg]);
    setValue("");
  };

  const handleSubmitKeyboard = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!AuthState.isAuth) {
        alert("sign in first");
        return;
      }
      if (!value.length) return;
      const msg = { ai: false, text: value };
      props.onSubmit((prev) => [...prev, msg]);
      setValue("");
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

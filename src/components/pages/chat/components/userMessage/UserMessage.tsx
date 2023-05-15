import { forwardRef, ReactNode } from "react";
import { Wrapper } from "./UserMessage.styles";

type Props = {
  text: string;
  children?: ReactNode;
};

const UserMessage = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Wrapper ref={ref}>{props.text}</Wrapper>;
});

export default UserMessage;

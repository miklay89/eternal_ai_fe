import { forwardRef, ReactNode } from "react";

import { Wrapper } from "./ScrollMessage.styles";

type Props = {
  children?: ReactNode;
};

const ScrollMessage = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Wrapper ref={ref} />;
});

export default ScrollMessage;

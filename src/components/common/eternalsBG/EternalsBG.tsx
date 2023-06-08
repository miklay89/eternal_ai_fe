import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Blur,
  Conversation,
  Ellipse,
  PortraitEinstein,
  PortraitJobs,
  PortraitKing,
  PortraitMusk,
  PortraitTeresa,
  Shadow,
  Wrapper,
} from "./EterenalsBG.styles";

type Props = {
  top: number;
};

const EternalsBG = (props: Props) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState<number>(
    window.innerWidth < 1001 ? -127 : props.top
  );

  const updateMargin = () => {
    if (elRef.current) {
      switch (true) {
        case window.innerWidth > 300 && window.innerWidth < 401:
          return setTop(-127);
        case window.innerWidth > 400 && window.innerWidth < 501:
          return setTop(-25);
        case window.innerWidth > 500 && window.innerWidth < 601:
          return setTop(30);
        case window.innerWidth > 600 && window.innerWidth < 701:
          return setTop(70);
        case window.innerWidth > 700 && window.innerWidth < 801:
          return setTop(130);
        case window.innerWidth > 800 && window.innerWidth < 901:
          return setTop(230);
        case window.innerWidth > 900 && window.innerWidth < 1000:
          return setTop(290);
        default:
          setTop(props.top);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", updateMargin);
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <Wrapper top={top} ref={elRef}>
      <Conversation src="/home/conversation.png" />
      <Blur src="/home/blur.png" />
      <PortraitMusk src="/home/e_musk.png" />
      <PortraitTeresa src="/home/m_teresa.png" />
      <PortraitJobs src="/home/s_jobs.png" />
      <PortraitEinstein src="/home/a_einstein.png" />
      <Ellipse src="/home/ellipse_3643.png" />
      <PortraitKing src="/home/l_king.png" />
      <Ellipse src="/home/ellipse_3644.png" />
      <Shadow />
    </Wrapper>
  );
};

export default EternalsBG;

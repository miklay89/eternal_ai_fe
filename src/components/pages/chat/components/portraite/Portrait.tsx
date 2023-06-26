import { useEffect, useRef, useState } from "react";
import {
  BagelEllipse,
  BagelWrapper,
  InfoWrapper,
  Name,
  PortraitImg,
  Shadow,
  Title,
  Wrapper,
} from "./Portraite.styles";

type Props = {
  fullName: string;
  title: string;
  imgUrl: string;
  id: number;
  uuid: string;
};

const Portrait = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const calcWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    calcWidth();

    window.addEventListener("resize", calcWidth);
    return () => {
      window.removeEventListener("resize", calcWidth);
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <BagelWrapper width={width} height={width}>
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.82 * width)}
          borderWidth={Number(0.07 * width)}
          from={-90}
          borderColor="#933eff"
          blur={Number(0.03 * width)}
        />
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.94 * width)}
          from={-90}
          borderWidth={Number(0.12 * width)}
          borderColor="#5833EF"
          blur={Number(0.06 * width)}
        />
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.89 * width)}
          from={-57.23}
          borderWidth={Number(0.07 * width)}
          borderColor="#FFFEF0"
          blur={Number(0.03 * width)}
        />
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.89 * width)}
          from={-45}
          borderWidth={Number(0.07 * width)}
          borderColor="#FFFFFF"
          blur={0}
        />
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.87 * width)}
          from={0}
          borderWidth={Number(0.07 * width)}
          borderColor="#F82D98"
          blur={Number(0.03 * width)}
        />
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.87 * width)}
          from={0}
          borderWidth={Number(0.07 * width)}
          borderColor="#F82D98"
          blur={0}
        />
        <BagelEllipse
          width={Number(0.75 * width)}
          height={Number(0.87 * width)}
          from={45}
          borderWidth={Number(0.07 * width)}
          borderColor="#AFF220"
          blur={Number(0.03 * width)}
        />
        <BagelEllipse
          width={Number(0.76 * width)}
          height={Number(0.87 * width)}
          from={45}
          borderWidth={Number(0.07 * width)}
          borderColor="#AFF220"
          blur={0}
        />
      </BagelWrapper>
      <PortraitImg src={props.imgUrl} />
      <Shadow />
      <InfoWrapper>
        <Name>{props.fullName}</Name>
        <Title>{props.title}</Title>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Portrait;

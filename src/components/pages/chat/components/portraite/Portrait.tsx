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
  return (
    <Wrapper>
      <BagelWrapper width={939} height={939}>
        <BagelEllipse
          width={610}
          height={685}
          from={-90}
          borderWidth={60}
          borderColor="#F82D98"
          blur={27}
        />
        <BagelEllipse
          width={610}
          height={780}
          from={-90}
          borderWidth={100}
          borderColor="#5833EF"
          blur={49}
        />
        <BagelEllipse
          width={610}
          height={740}
          from={-57.23}
          borderWidth={45}
          borderColor="#FFFEF0"
          blur={27}
        />
        <BagelEllipse
          width={610}
          height={740}
          from={-45}
          borderWidth={45}
          borderColor="#FFFFFF"
          blur={0}
        />
        <BagelEllipse
          width={610}
          height={720}
          from={0}
          borderWidth={45}
          borderColor="#F82D98"
          blur={27}
        />
        <BagelEllipse
          width={610}
          height={720}
          from={0}
          borderWidth={45}
          borderColor="#F82D98"
          blur={0}
        />
        <BagelEllipse
          width={610}
          height={720}
          from={45}
          borderWidth={45}
          borderColor="#AFF220"
          blur={27}
        />
        <BagelEllipse
          width={630}
          height={710}
          from={45}
          borderWidth={45}
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

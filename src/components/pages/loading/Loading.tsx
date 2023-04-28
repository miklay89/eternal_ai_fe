import {
  BagelEllipse,
  BagelWrapper,
  Eternal,
  LoadingContainer,
  LoadingWrapper,
} from "./Loading.styles";


const Loading = () => {

  return (
    <LoadingWrapper>
      <LoadingContainer>
        <BagelWrapper width={300} height={300}>
          <BagelEllipse
            width={205.41}
            height={231.14}
            from={-90}
            borderWidth={20.2162}
            borderColor="#933eff"
            blur={9.1892}
          />
          <BagelEllipse
            width={205.41}
            height={264.22}
            from={-90}
            borderWidth={34.9189}
            borderColor="#5833EF"
            blur={16.5406}
          />
          <BagelEllipse
            width={206.12}
            height={249.74}
            from={-57.23}
            borderWidth={20.2162}
            borderColor="#FFFEF0"
            blur={9.1892}
          />
          <BagelEllipse
            width={206.12}
            height={249.92}
            from={-45}
            borderWidth={20.2162}
            borderColor="#FFFFFF"
            blur={0}
          />
          <BagelEllipse
            width={206.12}
            height={242.47}
            from={0}
            borderWidth={20.2162}
            borderColor="#F82D98"
            blur={9.1892}
          />
          <BagelEllipse
            width={206.12}
            height={242.47}
            from={0}
            borderWidth={20.2162}
            borderColor="#F82D98"
            blur={0}
          />
          <BagelEllipse
            width={206.12}
            height={242.84}
            from={45}
            borderWidth={20.2162}
            borderColor="#AFF220"
            blur={9.1892}
          />
          <BagelEllipse
            width={213.22}
            height={240.4}
            from={45}
            borderWidth={20.2162}
            borderColor="#AFF220"
            blur={0}
          />
        </BagelWrapper>
        <Eternal src="./eternal.svg" />
      </LoadingContainer>
    </LoadingWrapper>
  );
};

export default Loading;

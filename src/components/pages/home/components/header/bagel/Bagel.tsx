import styled, { keyframes } from "styled-components";

type EllipseProps = {
  width: number;
  height: number;
  from: number;
  borderWidth: number;
  borderColor: string;
  blur: number;
};

const rotateAnimation = (props: EllipseProps) => keyframes`
  from {
    transform: rotate(${props.from}deg);
  }
  to {
    transform: rotate(${props.from + 360}deg);
  }
`;

const BagelWrapper = styled.div<{
  width: number;
  height: number;
}>`
  position: relative;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  margin-right: 17.99px;
`;

const BagelEllipse = styled.div<EllipseProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border-radius: 50%;
  border-width: ${(props) => props.borderWidth + "px"};
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  filter: blur(${(props) => props.blur + "px"});
  transform: rotate(${(props) => props.from + "deg"});
  mix-blend-mode: screen;
  animation: ${rotateAnimation} 10s linear infinite;
`;

const Bagel = () => {
  return (
    <BagelWrapper width={44.37} height={44}>
      <BagelEllipse
        width={32.98}
        height={37.18}
        from={-90}
        borderWidth={3.29814}
        borderColor="#933eff"
        blur={1.49916}
      />
      <BagelEllipse
        width={32.98}
        height={42.58}
        from={-90}
        borderWidth={5.69679}
        borderColor="#5833EF"
        blur={2.69848}
      />
      <BagelEllipse
        width={33.1}
        height={40.22}
        from={-57.23}
        borderWidth={3.29814}
        borderColor="#FFFEF0"
        blur={1.49916}
      />
      <BagelEllipse
        width={33.1}
        height={40.25}
        from={-45}
        borderWidth={3.29814}
        borderColor="#FFFFFF"
        blur={0}
      />
      <BagelEllipse
        width={33.1}
        height={39.03}
        from={0}
        borderWidth={3.29814}
        borderColor="#F82D98"
        blur={1.49916}
      />
      <BagelEllipse
        width={33.1}
        height={39.03}
        from={0}
        borderWidth={3.29814}
        borderColor="#F82D98"
        blur={0}
      />
      <BagelEllipse
        width={33.1}
        height={39.09}
        from={45}
        borderWidth={3.29814}
        borderColor="#AFF220"
        blur={1.49916}
      />
      <BagelEllipse
        width={34.26}
        height={38.69}
        from={45}
        borderWidth={3.29814}
        borderColor="#AFF220"
        blur={0}
      />
    </BagelWrapper>
  );
};

export default Bagel;

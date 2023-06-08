import { useEffect, useRef, useState } from "react";
import { BagelEllipse, BagelWrapper } from "./Bagel.style";

const Bagel = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(
    window.innerWidth > 1001 ? 45 : 30
  );

  const updateWidth = () => {
    if (elRef.current) {
      setWidth(elRef.current.clientWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", updateWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <BagelWrapper ref={elRef}>
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
  );
};

export default Bagel;

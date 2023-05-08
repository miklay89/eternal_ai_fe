import { ImgPart, Shadow, Wrapper } from "./EterenalsBG.styles";

type Props = {
  top: number;
}

const EternalsBG = (props: Props) => {
  return (
    <Wrapper top={props.top}>
      <ImgPart src="/home/conversation.png" left={76} bottom={200} />
      <ImgPart src="/home/blur.png" left={-25} bottom={10} />
      <ImgPart src="/home/e_musk.png" left={0} bottom={8} />
      <ImgPart src="/home/m_teresa.png" left={1201} bottom={8} />
      <ImgPart src="/home/s_jobs.png" left={251} bottom={8} />
      <ImgPart src="/home/a_einstein.png" left={923} bottom={8} />
      <ImgPart src="/home/ellipse_3643.png" left={-29} bottom={8} />
      <ImgPart src="/home/l_king.png" left={508} bottom={8} />
      <ImgPart src="/home/ellipse_3644.png" left={-29} bottom={8} />
      <Shadow />
    </Wrapper>
  );
};

export default EternalsBG;

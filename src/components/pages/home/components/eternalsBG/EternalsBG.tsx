import { ImgPart, Shadow, Wrapper } from "./EterenalsBG.styles";

const EternalsBG = () => {
  return (
    <Wrapper>
      <ImgPart src="/home/conversation.png" left={104} bottom={200} />
      <ImgPart src="/home/blur.png" left={0} bottom={10} />
      <ImgPart src="/home/e_musk.png" left={29} bottom={8} />
      <ImgPart src="/home/m_teresa.png" left={1230} bottom={8} />
      <ImgPart src="/home/s_jobs.png" left={280} bottom={8} />
      <ImgPart src="/home/a_einstein.png" left={952} bottom={8} />
      <ImgPart src="/home/ellipse_3643.png" left={0} bottom={8} />
      <ImgPart src="/home/l_king.png" left={537} bottom={8} />
      <ImgPart src="/home/ellipse_3644.png" left={0} bottom={8} />
      <Shadow />
    </Wrapper>
  );
};

export default EternalsBG;

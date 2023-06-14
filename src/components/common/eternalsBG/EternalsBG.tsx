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

const EternalsBG = () => {
  return (
    <Wrapper>
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

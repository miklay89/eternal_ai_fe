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
  return (
    <Wrapper top={props.top}>
      <Conversation src="/home/conversation.png" left={76} bottom={200} />
      <Blur src="/home/blur.png" left={-25} bottom={10} />
      <PortraitMusk src="/home/e_musk.png" left={0} bottom={8} />
      <PortraitTeresa src="/home/m_teresa.png" left={1201} bottom={8} />
      <PortraitJobs src="/home/s_jobs.png" left={251} bottom={8} />
      <PortraitEinstein src="/home/a_einstein.png" left={923} bottom={8} />
      <Ellipse src="/home/ellipse_3643.png" left={-29} bottom={8} />
      <PortraitKing src="/home/l_king.png" left={508} bottom={8} />
      <Ellipse src="/home/ellipse_3644.png" left={-29} bottom={8} />
      <Shadow />
    </Wrapper>
  );
};

export default EternalsBG;

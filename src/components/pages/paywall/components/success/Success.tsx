import { Dispatch, SetStateAction } from "react";
import { Wrapper } from "./Success.styles";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean;
  onChangeView: Dispatcher<string>;
};

const Success = (props: Props) => {
  return <Wrapper show={props.show}>Success</Wrapper>;
};

export default Success;

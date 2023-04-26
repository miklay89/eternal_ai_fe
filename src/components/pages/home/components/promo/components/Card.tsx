import { useState } from "react";
import {
  CardImage,
  CardWrapper,
  PersonFullName,
  PersonInfo,
  PersonTitle,
} from "./Card.styles";

type Props = {
  fullName: string;
  title: string;
  imgUrl: any;
  substrateUrl: any;
};

const Card = (props: Props) => {
  const [showPersonInfo, setShowPersonInfo] = useState<boolean>(false);

  return (
    <CardWrapper
      background={props.substrateUrl}
      onMouseEnter={() => setShowPersonInfo(true)}
      onMouseLeave={() => setShowPersonInfo(false)}
    >
      {/* <CardBg background={props.substrateUrl}></CardBg> */}
      <CardImage src={props.imgUrl} />
      <PersonInfo show={showPersonInfo}>
        <PersonFullName>{props.fullName}</PersonFullName>
        <PersonTitle>{props.title}</PersonTitle>
      </PersonInfo>
    </CardWrapper>
  );
};

export default Card;

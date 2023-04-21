import { useState } from "react";
import {
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
      background={props.imgUrl}
      substrateUrl={props.substrateUrl}
      onMouseEnter={() => setShowPersonInfo(true)}
      onMouseLeave={() => setShowPersonInfo(false)}
    >
      <PersonInfo show={showPersonInfo}>
        <PersonFullName>{props.fullName}</PersonFullName>
        <PersonTitle>{props.title}</PersonTitle>
      </PersonInfo>
    </CardWrapper>
  );
};

export default Card;

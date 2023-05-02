import { useState } from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import {
  AccountSection,
  Container,
  ContentWrapper,
  Ellipse,
  InnerWrapper,
  Input,
  InputTitle,
  OuterWrapper,
  SaveBtn,
  Title,
} from "./Account.styles";
import UpdatePayment from "./components/UpdatePayment";

const Account = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<null | string>(null);
  return (
    <AccountSection>
      <Container>
        {/* TODO ADD header + Add windows states from MOBX */}
        <Header
          isOpenMenu={false}
          isOpenModal={false}
          onOptionClick={setIsOpenMenu}
          onCloseClick={setIsOpenMenu}
        />
        <Ellipse
          width={1624}
          height={510}
          left={342}
          bottom={1071}
          src="/home/ellipse_3643.png"
        />
        <Ellipse
          width={1624}
          height={510}
          left={-301}
          bottom={322}
          src="/home/ellipse_3644.png"
        />
        <OuterWrapper>
          <InnerWrapper>
            <Title>Account Details</Title>
            <InputTitle>Name</InputTitle>
            <Input placeholder="Justin Mac" />
            <InputTitle>Email</InputTitle>
            <Input placeholder="justin@gmail.com" />
            <InputTitle>Phone number</InputTitle>
            <Input placeholder="8329822222" />
            <InputTitle>Password</InputTitle>
            <Input placeholder="•••••••••••••••••••" />
            <SaveBtn>Save</SaveBtn>
          </InnerWrapper>
        </OuterWrapper>
        <UpdatePayment />
        <Footer marginTop={80} />
      </Container>
    </AccountSection>
  );
};

export default Account;

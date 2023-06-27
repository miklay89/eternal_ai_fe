import { useEffect, useRef, useState } from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import {
  AccountSection,
  Container,
  Ellipse,
  InnerWrapper,
  Input,
  InputTitle,
  OuterWrapper,
  SaveBtn,
  Title,
} from "./Account.styles";
import UpdatePayment from "./components/UpdatePayment";
import Menu from "../modals/menu/Menu";
import SignUp from "../modals/sign-up/SignUp";
import SignIn from "../modals/sign-in/SignIn";
import About from "../modals/about/About";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Modals } from "../modals/types";
import Profile from "../../../api/profile/profile";
import { setProfile } from "../../../store/reducers/profile";
import Auth from "../../../api/auth/auth";
import Loading from "../loading/Loading";
import Paywall from "../modals/paywall/Paywall";

const Account = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal.open);
  const profileState = useSelector((state: RootState) => state.profile.user);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [subEndDate, setSubEndDate] = useState<string>("");

  const handleSave = async () => {
    if (name.length > 0 && name !== profileState.name) {
      const res = await Profile.updateData(name, undefined);
      if (typeof res === "string") {
        alert(res);
      }
    }

    if (phone.length > 0 && phone !== profileState.phone) {
      const res = await Profile.updateData(undefined, phone);
      if (typeof res === "string") {
        alert(res);
      }
    }

    if (password.length !== 0) {
      if (password.length > 5 && password.length < 25) {
        const data = { email: profileState.email, password };
        Auth.updatePassword(data)
          .then((res) => {
            if (typeof res === "boolean" && res) {
              alert("check email for confirmation new password");
            }
          })
          .catch((res: string) => alert(res));
      } else {
        alert("password should be 5-25 length for updating");
      }
    }

    Profile.getData().then((user) => dispatch(setProfile(user)));
  };

  useEffect(() => {
    Profile.getData().then((user) => dispatch(setProfile(user)));
  }, []);

  useEffect(() => {
    setName(profileState.name ? profileState.name : "");
    setEmail(profileState.email);
    setPhone(profileState.phone ? profileState.phone : "");
    if (profileState.isSubscribed) {
      if (profileState.subscriptionDue) {
        const date = new Date(profileState.subscriptionDue);
        const month = date.toLocaleString("en-US", { month: "long" });
        const day = date.getDate();
        const year = date.getFullYear();
        setSubEndDate(
          `Next payment will be processed on ${month} ${day}, ${year}.`
        );
      }
    } else {
      if (profileState.subscriptionDue) {
        const date = new Date(profileState.subscriptionDue);
        const month = date.toLocaleString("en-US", { month: "long" });
        const day = date.getDate();
        const year = date.getFullYear();
        setSubEndDate(
          `You are not subscribed, but subscription due to ${month} ${day}, ${year}.`
        );
      } else {
        setSubEndDate(
          `You are not subscribed yet, you left ${profileState.freeQuestionsLeft} free questions.`
        );
      }
    }
  }, [profileState]);

  return (
    <AccountSection>
      <Loading />
      <Menu isOpen={modalState === Modals.MENU ? true : false} />
      <SignUp isOpen={modalState === Modals.SIGN_UP ? true : false} />
      <SignIn isOpen={modalState === Modals.SIGN_IN ? true : false} />
      <About isOpen={modalState === Modals.ABOUT ? true : false} />
      <Paywall isOpen={modalState === Modals.PAYWALL ? true : false} />
      <Container>
        <Header
          show={
            modalState === Modals.NONE || modalState === Modals.MENU
              ? true
              : false
          }
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
            <Input
              tabIndex={modalState === Modals.NONE ? 0 : -1}
              placeholder="Justin Mac"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSave() : "")}
            />
            <InputTitle>Email</InputTitle>
            <Input
              disabled
              placeholder="justin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputTitle>Phone number</InputTitle>
            <Input
              tabIndex={modalState === Modals.NONE ? 0 : -1}
              placeholder="+1329822222"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSave() : "")}
            />
            <InputTitle>Password</InputTitle>
            <Input
              tabIndex={modalState === Modals.NONE ? 0 : -1}
              placeholder="•••••••••••••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSave() : "")}
            />
            <SaveBtn
              tabIndex={modalState === Modals.NONE ? 0 : -1}
              onClick={handleSave}
            >
              Save
            </SaveBtn>
          </InnerWrapper>
        </OuterWrapper>
        <UpdatePayment nextPayment={subEndDate} />
        <Footer marginTop={80} />
      </Container>
    </AccountSection>
  );
};

export default Account;

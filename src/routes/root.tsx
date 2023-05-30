import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRouteComponent";
import HomePage from "../components/pages/home/Home";
import Account from "../components/pages/account/Account";
import Paywall from "../components/pages/paywall/Paywall";
import Chat from "../components/pages/chat/Chat";

export enum Paths {
  HOME = "/",
  ACCOUNT = "/account",
  PAYWALL = "/paywall",
  CHAT = "/chat",
}

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <HomePage />,
  },
  {
    path: Paths.ACCOUNT,
    element: <PrivateRoute fc={Account} />,
  },
  {
    path: Paths.PAYWALL,
    element: <Paywall />,
  },
  {
    path: Paths.CHAT,
    element: <PrivateRoute fc={Chat} />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRouteComponent";
import HomePage from "../components/pages/home/Home";
import Account from "../components/pages/account/Account";
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
    path: Paths.CHAT,
    element: <PrivateRoute fc={Chat} />,
  },
]);

export default router;

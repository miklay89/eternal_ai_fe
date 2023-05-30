import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/pages/loading/Loading";
import PrivateRoute from "./PrivateRouteComponent";

const Home = lazy(() => import("../components/pages/home/Home"));
const Paywall = lazy(() => import("../components/pages/paywall/Paywall"));
const Account = lazy(() => import("../components/pages/account/Account"));
const Chat = lazy(() => import("../components/pages/chat/Chat"));

export enum Paths {
  HOME = "/",
  ACCOUNT = "/account",
  PAYWALL = "/paywall",
  CHAT = "/chat",
}

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: Paths.ACCOUNT,
    element: (
      <Suspense fallback={<Loading />}>
        <PrivateRoute fc={Account} />
      </Suspense>
    ),
  },
  {
    path: Paths.PAYWALL,
    element: (
      <Suspense fallback={<Loading />}>
        <Paywall />
      </Suspense>
    ),
  },
  {
    path: Paths.CHAT,
    element: (
      <Suspense fallback={<Loading />}>
        <PrivateRoute fc={Chat} />
      </Suspense>
    ),
  },
]);

export default router;

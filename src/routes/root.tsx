import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/pages/loading/Loading";

const Home = lazy(() => import("../components/pages/home/Home"));
const Account = lazy(() => import("../components/pages/account/Account"));
const Paywall = lazy(() => import("../components/pages/paywall/Paywall"));
const Chat = lazy(() => import("../components/pages/chat/Chat"));

export enum Paths {
  HOME = "/",
  ACCOUNT = "/account",
  PAYWALL = "/paywall",
  CHAT = "/chat"
}

// TODO add protected routes Account + Paywall
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
        <Account />
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
        <Chat />
      </Suspense>
    ),
  },
]);

export default router;

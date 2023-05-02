import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/pages/loading/Loading";

const Home = lazy(() => import("../components/pages/home/Home"));
const Account = lazy(() => import("../components/pages/account/Account"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading/>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/account",
    element: (
      <Suspense fallback={<Loading/>}>
        <Account />
      </Suspense>
    ),
  },
]);

export default router;

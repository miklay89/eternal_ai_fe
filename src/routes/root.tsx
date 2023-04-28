import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/pages/loading/Loading";

const Home = lazy(() => import("../components/pages/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading/>}>
        <Home />
      </Suspense>
    ),
  },
]);

export default router;

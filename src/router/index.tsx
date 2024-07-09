import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RootLayout from "../pages/RootLayout";
import LearnLayout from "../pages/learn/LearnLayout";
import ThinkingInReant from "../pages/learn/ThinkingInReant";
import Installation from "../pages/learn/Installation";
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";
import ProtectdRoute from "../components/auth/ProtectdRoute";
import ErrorsRouteElement from "../components/errors/ErrorsRouteElement";
import PageNotFound from "../pages/PageNotFound";
import QuickStartPage from "../pages/learn";

const isLogin = true;

const useData: { email: string } | null = isLogin
  ? { email: "email@gmail.com" }
  : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={
          <ErrorsRouteElement statusCode={500} title="Server Error" />
        }
      >
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <ProtectdRoute
              isAllowed={isLogin}
              redirectPath="/login"
              data={useData}
            >
              <ContributePage />
            </ProtectdRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectdRoute
              isAllowed={!isLogin}
              redirectPath="/contribute"
              data={useData}
            >
              <LoginPage />
            </ProtectdRoute>
          }
        />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="/learn/thinking-in-react" element={<ThinkingInReant />} />
        <Route path="/learn/installation" element={<Installation />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;

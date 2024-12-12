import { Suspense, useMemo } from "react";
import { useRoutes } from "react-router-dom";
// import Layout from "../components/Layout/Layout";
import { Spinner } from "../components/Elements/Spinner/Spinner";
import { lazyImport } from "../utils/lazyImport";
import MainLayout from "@/components/Layout/MainLayout";
import Signin from "@/features/Auth/SignIn/routes/Signin";
import SignUp from "@/features/Auth/SignUp/routes/SignUp";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import AllUsers from "@/features/Dashboard/User/routes/Users";

const { Report } = lazyImport(() => import("../features/Report"), "Report");
const { Users } = lazyImport(() => import("../features/Report"), "Users");
const { Products } = lazyImport(() => import("../features/Report"), "Products");
const { PurchaseHistory } = lazyImport(
  () => import("../features/Report"),
  "PurchaseHistory"
);

export const AppRoutes = () => {
  const routes = useMemo(
    () => [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "lessons",
            element: (
              <Suspense fallback={<Spinner />}>
                <Report />
              </Suspense>
            ),
          },
          {
            path: "tutorials",
            element: (
              <Suspense fallback={<Spinner />}>
                <Users />
              </Suspense>
            ),
          },
          {
            path: "vocabularies",
            element: (
              <Suspense fallback={<Spinner />}>
                <Products />
              </Suspense>
            ),
          },
          {
            path: "purchase-history",
            element: (
              <Suspense fallback={<Spinner />}>
                <PurchaseHistory />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/dashboard/",
        element: <DashboardLayout />,
        children: [
          {
            path: "users",
            element: (
              <Suspense fallback={<Spinner />}>
                <AllUsers />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "sign-up",
        element: (
          <Suspense fallback={<Spinner />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "sign-in",
        element: (
          <Suspense fallback={<Spinner />}>
            <Signin />
          </Suspense>
        ),
      },
    ],
    []
  );
  const element = useRoutes([...routes]);

  return <>{element}</>;
};

AppRoutes.displayName = "AppRoutes";

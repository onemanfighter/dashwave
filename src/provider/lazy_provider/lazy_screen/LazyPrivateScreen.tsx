import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

const HomeScreen = lazy(
  () => import("../../../screens/private/main_root_screen/MainRootScreen")
);
const LazyHomeScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <HomeScreen />
    </LazyComponentProvider>
  );
};

const DashboardHome = lazy(
  () => import("../../../screens/private/screens/dashboard_home/DashboardHome")
);
const LazyDashboardScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <DashboardHome />
    </LazyComponentProvider>
  );
};

export { LazyHomeScreenComponent, LazyDashboardScreenComponent };

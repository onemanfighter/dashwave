/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Private screens lazy components.
const HomeScreen = lazy(
  () => import("../../../screens/private/main_root_screen/MainRootScreen")
);

const DashboardHome = lazy(
  () => import("../../../screens/private/screens/dashboard_home/DashboardHome")
);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Private screens components.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy home screen component.
 * @returns The LazyHomeScreenComponent component.
 */
export function LazyHomeScreenComponent() {
  return (
    <LazyComponentProvider>
      <HomeScreen />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy dashboard screen component.
 * @returns The LazyDashboardScreenComponent component.
 */
export function LazyDashboardScreenComponent() {
  return (
    <LazyComponentProvider>
      <DashboardHome />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

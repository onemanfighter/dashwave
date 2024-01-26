import { lazy } from "react";
import LazyComponentProvider from "./component/LazyComponent";

const App = lazy(() => import("../../App"));
const LoginScreen = lazy(
  () => import("../../screens/public/login_screen/LoginScreen")
);
const SignupScreen = lazy(
  () => import("../../screens/public/signup_screen/SignupScreen")
);

const HomeScreen = lazy(
  () => import("../../screens/private/home_screen/HomeScreen")
);

const DashboardHome = lazy(
  () => import("../../screens/private/dashboard_home/DashboardHome")
);

const ForgotPasswordScreen = lazy(
  () => import("../../screens/public/forgot_password/ForgotPassword")
);

// Static screens components.
const Error404 = lazy(() => import("../../screens/static_screen/404"));

/**
 * Component definition for the lazy app component.
 * @returns The LazyAppComponent component.
 */
export function LazyAppComponent() {
  return (
    <LazyComponentProvider>
      <App />
    </LazyComponentProvider>
  );
}

// Private screens components.
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

// Public screens components.
/**
 * Component definition for the lazy login screen component.
 * @returns The LazyLoginScreenComponent component.
 */
export function LazyLoginScreenComponent() {
  return (
    <LazyComponentProvider>
      <LoginScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy signup screen component.
 * @returns The LazySignupScreenComponent component.
 */
export function LazySignupScreenComponent() {
  return (
    <LazyComponentProvider>
      <SignupScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy forgot password screen component.
 * @returns The LazyForgotPasswordScreenComponent component.
 */
export function LazyForgotPasswordScreenComponent() {
  return (
    <LazyComponentProvider>
      <ForgotPasswordScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy 404 screen component.
 * @returns The LazyError404ScreenComponent component.
 */
export function LazyError404ScreenComponent() {
  return (
    <LazyComponentProvider>
      <Error404 />
    </LazyComponentProvider>
  );
}

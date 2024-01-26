import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Public screens components.
const LoginScreen = lazy(
  () => import("../../../screens/public/login_screen/LoginScreen")
);
const SignupScreen = lazy(
  () => import("../../../screens/public/signup_screen/SignupScreen")
);

const ForgotPasswordScreen = lazy(
  () => import("../../../screens/public/forgot_password/ForgotPassword")
);

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

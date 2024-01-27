import { AuthData } from "../../../data_store/slice/AuthSlice";
import { firebaseForgotPassword } from "./actions/AuthForgotPassword";
import { LoginCred, firebaseSingIn } from "./actions/AuthSignIn";
import { firebaseSignOut } from "./actions/AuthSignOut";
import firebaseSignUp, { SignUpCred } from "./actions/AuthSignUp";

/**
 * Method to make the Firebase signin
 */
export function signIn(
  cred: LoginCred,
  signInHandler: (authData: AuthData) => void,
  errorCallback: (error: string) => void
) {
  firebaseSingIn(cred, signInHandler, errorCallback);
}

/**
 * Method to make the Firebase signup
 */
export function signUp(
  cred: SignUpCred,
  signUpHandler: (authData: AuthData) => void,
  errorCallback: (error: string) => void
) {
  firebaseSignUp(cred, signUpHandler, errorCallback);
}

/**
 * Method to make firebase signout
 */
export function signOut(signOutHandler: () => void) {
  firebaseSignOut(signOutHandler);
}

/**
 * Method to make the firebase forgot password.
 */
export function forgotPassword(
  email: string,
  forgotPasswordHandler: () => void,
  errorCallback: (error: string) => void
) {
  firebaseForgotPassword(email, forgotPasswordHandler, errorCallback);
}

/**
 * Method to make the firebase already signin
 *
 */
export function alreadySignedIn(
  signInHandler: (authData: AuthData) => void,
  signOutHandler: () => void
) {
  const authData = localStorage.getItem("tokenDetails");
  let token = "";
  if (!authData) {
    signOutHandler();
    return;
  }

  const authDataJson: AuthData = JSON.parse(authData as string);
  token = authDataJson.authToken;
  const user: AuthData = {
    userData: authDataJson.userData,
    authToken: token,
  };
  signInHandler(user);
}

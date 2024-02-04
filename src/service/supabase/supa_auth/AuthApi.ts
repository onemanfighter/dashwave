import { AuthData } from "../../../data_store/slice/AuthSlice";
import { AuthTokenKey } from "../../local_storage/token_constants/StorageConstant";
import { firebaseForgotPassword } from "./actions/AuthForgotPassword";
import { LoginCred, firebaseSingIn } from "./actions/AuthSignIn";
import { firebaseSignOut } from "./actions/AuthSignOut";
import supabaseSignUp, { SignUpCred } from "./actions/AuthSignUp";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Method to make the Firebase signup
 */
export function signUp(
  cred: SignUpCred,
  signUpHandler: () => void,
  errorCallback: (error: string) => void
) {
  supabaseSignUp(cred, signUpHandler, errorCallback);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Method to make firebase signout
 */
export function signOut(signOutHandler: () => void) {
  firebaseSignOut(signOutHandler);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Method to make the firebase already signin
 *
 */
export function alreadySignedIn(signOutHandler: () => void) {
  const authData = localStorage.getItem(AuthTokenKey);
  if (!authData) {
    signOutHandler();
    return;
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

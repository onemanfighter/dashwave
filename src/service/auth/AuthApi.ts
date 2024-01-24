import { AuthData } from "../../data_store/slice/AuthSlice";
import { LoginCred, firebaseSingIn } from "./AuthSignIn";
import firebaseSignUp, { SignUpCred } from "./AuthSignUp";

export function signIn(
  cred: LoginCred,
  signInHandler: (authData: AuthData) => void
) {
  firebaseSingIn(cred, signInHandler);
}

/**
 * Method to make the Firebase login
 */
export function signUp(
  cred: SignUpCred,
  signUpHandler: (authData: AuthData) => void
) {
  firebaseSignUp(cred, signUpHandler);
}

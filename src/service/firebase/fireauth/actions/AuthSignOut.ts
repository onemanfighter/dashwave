import { signOut } from "firebase/auth";
import { auth } from "../../firebase_main/Firebase";

export interface LoginCred {
  email: string;
  password: string;
}
/**
 * Method to sign-in using firebase.
 */
export function firebaseSignOut(signOutHandler: () => void) {
  signOut(auth)
    .then(() => {
      signOutHandler();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

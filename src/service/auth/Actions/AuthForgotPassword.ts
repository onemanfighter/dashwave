import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

/**
 * Method to sign-in using firebase.
 */
export function firebaseForgotPassword(
  email: string,
  forgotPasswordHandler: () => void,
  errorCallback: (error: string) => void
) {
  if (email !== null)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        forgotPasswordHandler();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        errorCallback(errorMessage);
      });
}

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { AuthData, UserData } from "../../data_store/slice/AuthSlice";

export interface LoginCred {
  email: string;
  password: string;
}
/**
 * Method to sign-in using firebase.
 */
export function firebaseSingIn(
  cred: LoginCred,
  signInHandler: (authData: AuthData) => void
) {
  if (cred.email !== null && cred.password !== null)
    signInWithEmailAndPassword(auth, cred.email, cred.password)
      .then((userCredential) => {
        const user: UserData = {
          firstName: "",
          lastName: "",
          email: cred.email,
        };
        userCredential.user.getIdToken().then((authToken) => {
          const authData: AuthData = { userData: user, authToken: authToken };
          signInHandler(authData);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
}

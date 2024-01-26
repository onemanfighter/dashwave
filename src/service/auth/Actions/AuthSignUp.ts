import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { AuthData, UserData } from "../../../data_store/slice/AuthSlice";
import { storeAuthkeyData } from "../../storage/auth/AuthStorageApi";

export interface SignUpCred {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

export default function firebaseSignUp(
  cred: SignUpCred,
  signUpHandler: (authData: AuthData) => void,
  errorCallback: (error: string) => void
) {
  console.log(cred);
  createUserWithEmailAndPassword(auth, cred.email, cred.password)
    .then((userCredential) => {
      const user: UserData = {
        firstName: cred.fName,
        lastName: cred.lName,
        email: cred.email,
      };
      userCredential.user.getIdToken().then((authToken) => {
        const authData: AuthData = { userData: user, authToken: authToken };
        signUpHandler(authData);
        storeAuthkeyData(authData);
        console.log(authToken);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorCallback(errorMessage);
      console.log(errorCode, errorMessage);
    });
}

import { SupabaseAuth } from "../../supabase_main/Supabase";
import { AuthData } from "../../../../data_store/slice/AuthSlice";

export interface SignUpCred {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

export default function supabaseSignUp(
  cred: SignUpCred,
  signUpHandler: () => void,
  errorCallback: (error: string) => void
) {
  SupabaseAuth.signUp({
    email: cred.email,
    password: cred.password,
  }).then(
    (response) => {
      console.log("signup", response);
      signUpHandler();
    },
    (error) => {
      console.log(error);
      errorCallback(error.message);
    }
  );
}

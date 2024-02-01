import { SupabaseAuth } from "../../supabase_main/Supabase";

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
    options: {
      data: {
        first_name: cred.fName,
        last_name: cred.lName,
      },
    },
  }).then(
    (response) => {
      console.log(response);
      signUpHandler();
    },
    (error) => {
      console.log(error);
      errorCallback(error.message);
    }
  );
}

import { SupabaseAuth } from "../../supabase_main/Supabase";
import { AuthData } from "../../../../data_store/slice/AuthSlice";

export interface LoginCred {
  email: string;
  password: string;
}

/**
 * Method to sign-in using firebase.
 */
export async function firebaseSingIn(
  cred: LoginCred,
  signInHandler: (authData: AuthData) => void,
  errorCallback: (error: string) => void
) {
  if (cred.email !== null && cred.password !== null)
    try {
      const { data, error } = await SupabaseAuth.signInWithPassword({
        email: cred.email,
        password: cred.password,
      });
      if (error) {
        console.log(error);
        errorCallback(error.message);
      } else {
        console.log(data);
        const authData: AuthData = {
          authToken: data.session.access_token,
          userData: {
            userId: data.user.id,
            firstName: data.user.user_metadata.first_name,
            lastName: data.user.user_metadata.last_name,
            email: data.user.email ? data.user.email : "",
          },
        };
        signInHandler(authData);
      }
    } catch (error: any) {
      console.log(error);
      errorCallback(error);
    }
}
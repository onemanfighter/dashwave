import { SupabaseAuth } from "../../supabase_main/Supabase";

export interface LoginCred {
  email: string;
  password: string;
}
/**
 * Method to sign-out using supabase.
 */
export function firebaseSignOut(signOutHandler: () => void) {
  SupabaseAuth.signOut().then(() => {
    signOutHandler();
  });
}

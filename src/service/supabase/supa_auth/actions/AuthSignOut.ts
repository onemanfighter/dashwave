import { SupabaseAuth } from "../../supabase_main/Supabase";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Method to sign-out using supabase.
 */
export function firebaseSignOut(signOutHandler: () => void) {
  SupabaseAuth.signOut().then(() => {
    signOutHandler();
  });
}

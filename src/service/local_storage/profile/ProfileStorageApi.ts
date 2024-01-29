import { UserProfData } from "../../supabase/supastore/user_profile/UserCollection";
import { ProfileTokenKey } from "../token_constants/StorageConstant";

/**
 * Method to store the profilekey in local storage
 */
export function storeProfilekeyData(profileData: UserProfData) {
  localStorage.setItem(ProfileTokenKey, JSON.stringify(profileData));
}

/**
 * Method to get the profilekey from local storage
 */
export function getProfileKeyData(): UserProfData | null {
  const profileData = localStorage.getItem(ProfileTokenKey);
  if (profileData) {
    return JSON.parse(profileData);
  }
  return null;
}

/**
 * Method to remove the profilekey from local storage
 */
export function removeProfileKeyData() {
  localStorage.removeItem(ProfileTokenKey);
}

import { UserProfileData } from "../../supabase/supastore/user_profile/UserCollection";
import { ProfileTokenKey } from "../token_constants/StorageConstant";

/**
 * Method to store the profile key in local storage
 */
export function storeProfileKeyData(profileData: UserProfileData) {
  localStorage.setItem(ProfileTokenKey, JSON.stringify(profileData));
}

/**
 * Method to get the profile key from local storage
 */
export function getProfileKeyData(): UserProfileData | null {
  const profileData = localStorage.getItem(ProfileTokenKey);
  const profile: UserProfileData = profileData ? JSON.parse(profileData) : null;
  if (
    profile !== null &&
    profile !== undefined &&
    profile.userId !== "undefined"
  ) {
    return profile;
  }
  console.log("Profile data not found");
  return null;
}

/**
 * Method to remove the profile key from local storage
 */
export function removeProfileKeyData() {
  localStorage.removeItem(ProfileTokenKey);
}

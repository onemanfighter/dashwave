import { UserData } from "../../../../data_store/slice/AuthSlice";
import { UserProfileData } from "./UserCollection";
import { getUserUsingId } from "./actions/UserDataRead";
import { updateUserData } from "./actions/UserDataWrite";

/**
 * Method to get the user profileData
 *
 * @param userAuthState - The user auth data.
 * @param callback - The callback function.
 * @returns The user data.
 */
export function userProfileDataRead(
  userAuthState: UserData,
  callback: (user: UserProfileData) => void
) {
  getUserUsingId(userAuthState, callback);
}

/**
 * Method to update the user profileData.
 * @param userIdFromAuth - The user id.
 * @param data - The user data.
 * @param callback - The callback function.
 * @param showNotification - The notification function.
 * @returns The user data.
 */
export function userProfileDataUpdate(
  userIdFromAuth: string,
  data: UserProfileData,
  callback: (profile: UserProfileData) => void,
  showNotification: () => void
) {
  return updateUserData(userIdFromAuth, data, callback, showNotification);
}

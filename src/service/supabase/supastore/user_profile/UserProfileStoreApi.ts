/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { UserData } from "../../../../store/slice/auth/AuthSlice";
import { ToastAlertData } from "../../../../provider/alert_toast_provider/AlertToastProvider";
import { UserProfileData } from "./UserCollection";
import { getUserUsingId } from "./actions/UserDataRead";
import { updateUserData } from "./actions/UserDataWrite";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Method to get the user profileData
 *
 * @param userAuthState - The user auth data.
 * @param callback - The callback function.
 * @returns The user data.
 */
function userProfileDataRead(
  userAuthState: UserData,
  callback: (user: UserProfileData) => void
) {
  console.log("userProfileDataRead");
  getUserUsingId(userAuthState, callback);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Method to update the user profileData.
 * @param userIdFromAuth - The user id.
 * @param data - The user data.
 * @param callback - The callback function.
 * @param showAlertHandler - The notification function.
 * @returns The user data.
 */
function userProfileDataUpdate(
  userIdFromAuth: string,
  data: UserProfileData,
  callback: (profile: UserProfileData) => void,
  showAlertHandler: (toastAlertData: ToastAlertData) => void
) {
  return updateUserData(userIdFromAuth, data, callback, showAlertHandler);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the functions
export { userProfileDataRead, userProfileDataUpdate };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

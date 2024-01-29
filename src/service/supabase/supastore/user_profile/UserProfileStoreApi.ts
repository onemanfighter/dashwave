import { UserData } from "../../../../data_store/slice/AuthSlice";
import { UserProfData } from "./UserCollection";
import { getUserUsingId } from "./actions/UserDataRead";
import { updateUserData } from "./actions/UserDataWrite";

/**
 * Method to get the user profileData
 *
 * @param userAuthState - The user auth data.
 * @returns The user data.
 */
export function userProfileDataRead(
  userAuthState: UserData,
  callback: (user: UserProfData) => void
) {
  getUserUsingId(userAuthState, callback);
}

/**
 * Method to update the user profileData.
 * @param userId - The user id.
 * @param data - The user data.
 * @returns The user data.
 */
export function userProfileDataUpdate(
  data: UserProfData,
  callback: () => void
) {
  return updateUserData(data, callback);
}

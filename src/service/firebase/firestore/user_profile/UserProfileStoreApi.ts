import { UserProfData } from "./UserCollection";
import { getUserUsingId } from "./actions/UserDataRead";
import { updateUserData } from "./actions/UserDataWrite";

/**
 * Method to get the user profileData
 *
 * @param email - The email id.
 * @returns The user data.
 */
export function userProfileDataRead(
  email: string,
  callback: (user: UserProfData) => void
) {
  getUserUsingId(email, callback);
}

/**
 * Method to update the user profileData.
 * @param userId - The user id.
 * @param data - The user data.
 * @returns The user data.
 */
export function userProfileDataUpdate(userId: string, data: UserProfData) {
  return updateUserData(userId, data);
}

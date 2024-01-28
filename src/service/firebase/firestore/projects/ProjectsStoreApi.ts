import { UserProfData } from "./ProjectsCollection";
import { getUserUsingId } from "./actions/ProjectsDataRead";
import { updateUserData } from "./actions/ProjectsDataWrite";

/**
 * Method to get the user project data
 *
 * @param projectId - The project id.
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

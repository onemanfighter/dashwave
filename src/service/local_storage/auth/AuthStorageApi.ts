import { AuthData } from "../../../data_store/slice/AuthSlice";
import { AuthTokenKey } from "../token_constants/StorageConstant";

/**
 * Method to get the authkey from local storage
 */
export function getAuthKeyData(): AuthData | null {
  const authData = localStorage.getItem(AuthTokenKey);
  if (authData) {
    const data = JSON.parse(authData);
    return {
      authToken: data.authToken as string,
      userData: {
        userId: data.user.id as string,
        email: data.user.email as string,
        firstName: data.user.user_metadata.first_name,
        lastName: data.user.user_metadata.last_name,
      },
    };
  }
  return null;
}

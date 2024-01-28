import { AuthData } from "../../../data_store/slice/AuthSlice";
import { AuthTokenKey } from "../token_constants/StorageConstant";

/**
 * Method to store the authkey in local storage
 */
export function storeAuthkeyData(authData: AuthData) {
  localStorage.setItem(AuthTokenKey, JSON.stringify(authData));
}

/**
 * Method to get the authkey from local storage
 */
export function getAuthKeyData(): AuthData | null {
  const authData = localStorage.getItem(AuthTokenKey);
  if (authData) {
    return JSON.parse(authData);
  }
  return null;
}

/**
 * Method to remove the authkey from local storage
 */
export function removeAuthKeyData() {
  localStorage.removeItem(AuthTokenKey);
}

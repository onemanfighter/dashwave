import { currentPathKey } from "../token_constants/StorageConstant";

/**
 * Method to store the currentPathkey in local storage
 */
export function storeCurrentPathkeyData(currentPathData: string) {
  localStorage.setItem(currentPathKey, JSON.stringify(currentPathData));
}

/**
 * Method to get the currentPathkey from local storage
 */
export function getCurrentPathKeyData(): string | null {
  const currentPathData = localStorage.getItem(currentPathKey);
  if (currentPathData) {
    return JSON.parse(currentPathData);
  }
  return null;
}

/**
 * Method to remove the currentPathkey from local storage
 */
export function removeCurrentPathKeyData() {
  localStorage.removeItem(currentPathKey);
}

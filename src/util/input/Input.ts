/**
 * Function to check the email is valid or not.
 * @param email
 * @returns boolean
 */

export function isValidEmail(email: string) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Function to check the password is valid or not.
 * @param password
 * @returns boolean
 * @description Password must contain at least one lowercase letter, one uppercase letter, one numeric digit,
 * and one special character. The password must be eight characters or longer.
 */
export function isValidPassword(password: string) {
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
}

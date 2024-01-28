/**
 * @interface UserProfData
 * @description The user profile data.
 *
 * @property {string} userId - The user id.
 * @property {string} fname - The first name.
 * @property {string} lname - The last name.
 * @property {string} profile - The profile image.
 * @property {string} email - The email.
 * @property {string} place - The place.
 * @property {string} dateOfBirth - The date of birth.
 * @property {string} designation - The designation.
 * @property {number} yearOfExp - The year of experience.
 * @property {SocialLinks} socialLinks - The social links.
 *
 * @example
 * {
 *  userId: "1234567890",
 * fname: "John",
 * lname: "Doe",
 * profile: "https://www.google.com",
 * email: "amit@gmail.com"
 * place: "Bangalore",
 * dateOfBirth: "01/01/1990",
 * designation: "Software Engineer",
 * yearOfExp: 5,
 * socialLinks: {
 * linkedIn: "https://www.linkedin.com",
 * facebook: "https://www.facebook.com",
 * x: "https://www.x.com",
 * github: "https://www.github.com",
 * instagram: "https://www.instagram.com",
 * website: "https://www.google.com",
 * }
 * }
 */
export interface UserProfData {
  userId: string;
  fname: string;
  lname: string;
  profile: string;
  email: string;
  place: string;
  dateOfBirth: string;
  designation: string;
  yearOfExp: number;
  socialLinks: Array<SocialLink>;
}

/**
 * Social type enum.
 */
export enum SocialType {
  Facebook = "facebook",
  X = "x",
  Instagram = "instagram",
  Github = "github",
  Linkedin = "linkedin",
  Youtube = "youtube",
  Website = "website",
}

// Social link interface.
export interface SocialLink {
  type: SocialType;
  link: string;
}

import { SupabaseUsersDB } from "../../../supabase_main/Supabase";
import {
  SocialType,
  UserDataTableSchema,
  UserProfileData,
} from "../UserCollection";
export function userDataWrite() {}

export async function updateUserData(
  userIdFromAuth: string,
  userProfFormdata: UserProfileData,
  callback: (user: UserProfileData) => void,
  showNotification: () => void
) {
  const userData: UserDataTableSchema = {
    id: userIdFromAuth,
    email: userProfFormdata.email,
    fname: userProfFormdata.fname,
    lname: userProfFormdata.lname,
    profile_image: "",
    place: userProfFormdata.place,
    dob: userProfFormdata.dateOfBirth,
    yoe: userProfFormdata.yearOfExp,
    designation: userProfFormdata.designation,
    social_fb: userProfFormdata.socialLinks.get(SocialType.Facebook)!,
    social_insta: userProfFormdata.socialLinks.get(SocialType.Instagram)!,
    social_x: userProfFormdata.socialLinks.get(SocialType.X)!,
    social_git: userProfFormdata.socialLinks.get(SocialType.Github)!,
    social_li: userProfFormdata.socialLinks.get(SocialType.Linkedin)!,
    social_web: userProfFormdata.socialLinks.get(SocialType.Website)!,
    social_yt: userProfFormdata.socialLinks.get(SocialType.Youtube)!,
  };

  try {
    const { data, error } = await SupabaseUsersDB.upsert([
      { ...userData },
    ]).select();

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      callback(userProfFormdata);
      showNotification();
    }
  } catch (error) {
    console.log(error);
  }
}

import {
  ToastAlertData,
  getErrorAlertData,
  getSuccessAlertData,
} from "../../../../../provider/alert_toast_provider/AlertToastProvider";
import { getSocialMediaLink } from "../../../../../util/Utils";
import { SupabaseUsersDB } from "../../../supabase_main/Supabase";
import {
  SocialType,
  UserDataTableSchema,
  UserProfileData,
} from "../UserCollection";
export function userDataWrite() {}

export async function updateUserData(
  userIdFromAuth: string,
  userProfFormData: UserProfileData,
  callback: (user: UserProfileData) => void,
  showAlertHandler: (toastAlertData: ToastAlertData) => void
) {
  const userData: UserDataTableSchema = {
    id: userIdFromAuth,
    email: userProfFormData.email,
    first_name: userProfFormData.firstName,
    last_name: userProfFormData.lastName,
    profile_image: "",
    place: userProfFormData.place,
    dob: userProfFormData.dateOfBirth,
    yoe: userProfFormData.yearOfExp,
    designation: userProfFormData.designation,
    social_fb: getSocialMediaLink(
      userProfFormData.socialLinks,
      SocialType.Facebook
    ),
    social_insta: getSocialMediaLink(
      userProfFormData.socialLinks,
      SocialType.Instagram
    ),
    social_x: getSocialMediaLink(userProfFormData.socialLinks, SocialType.X),
    social_git: getSocialMediaLink(
      userProfFormData.socialLinks,
      SocialType.Github
    ),
    social_li: getSocialMediaLink(
      userProfFormData.socialLinks,
      SocialType.Linkedin
    ),
    social_web: getSocialMediaLink(
      userProfFormData.socialLinks,
      SocialType.Website
    ),
    social_yt: getSocialMediaLink(
      userProfFormData.socialLinks,
      SocialType.Youtube
    ),
  };

  try {
    const { data, error } = await SupabaseUsersDB.upsert([
      { ...userData },
    ]).select();

    if (error) {
      console.log(error);
      showAlertHandler(
        getErrorAlertData("Error while updating user profile data")
      );
    } else {
      console.log(data);
      callback(userProfFormData);
      showAlertHandler(
        getSuccessAlertData("Successfully updated user profile data")
      );
    }
  } catch (error) {
    console.log(error);
    showAlertHandler(
      getErrorAlertData("Error while updating user profile data")
    );
  }
}

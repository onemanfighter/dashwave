import { UserData } from "../../../../../data_store/slice/AuthSlice";
import { SupabaseUsersDB } from "../../../supabase_main/Supabase";
import { SocialType, UserProfileData } from "../UserCollection";

// Get a list of cities from your database
export async function getUserUsingId(
  userAuthState: UserData,
  callback: (user: UserProfileData) => void
) {
  try {
    const { data, error } = await SupabaseUsersDB.select("*")
      .eq("id", userAuthState.userId)
      .single();
    if (data !== null) {
      console.log("data", data);
      const user = getProfDataFromResponse(data);
      callback(user);
      return;
    }

    if (error) {
      console.log("error");
      const { data, error } = await SupabaseUsersDB.upsert({
        id: userAuthState.userId,
        email: userAuthState.email,
        fname: userAuthState.firstName,
        lname: userAuthState.lastName,
        profile_image: "",
        place: "",
        dob: new Date(),
        yoe: 0,
        designation: "",
      }).single();

      if (error) {
        console.log(error);
      } else {
        const user = getProfDataFromResponse(data);
        callback(user);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Method to get the user profileData.
 *
 * @param user - The user data.
 * @returns The user data.
 */
function getProfDataFromResponse(user: any): UserProfileData {
  const profData: UserProfileData = {
    userId: user.id,
    fname: user.fName,
    lname: user.lName,
    profile: user.profile_image,
    email: user.email,
    place: user.place,
    dateOfBirth: user.dob,
    designation: user.designation,
    yearOfExp: user.yoe,
    socialLinks: new Map<SocialType, string>()
      .set(SocialType.Facebook, user.social_fb)
      .set(SocialType.Instagram, user.social_insta)
      .set(SocialType.X, user.social_x)
      .set(SocialType.Github, user.social_git)
      .set(SocialType.Linkedin, user.social_li)
      .set(SocialType.Website, user.social_web)
      .set(SocialType.Youtube, user.social_yt),
  };
  return profData;
}

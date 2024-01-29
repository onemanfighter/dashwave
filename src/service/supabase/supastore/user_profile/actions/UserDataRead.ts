import { UserData } from "../../../../../data_store/slice/AuthSlice";
import { SupabaseUsersDB } from "../../../supabase_main/Supabase";
import { SocialType, UserProfData } from "../UserCollection";

// Get a list of cities from your database
export async function getUserUsingId(
  userAuthState: UserData,
  callback: (user: UserProfData) => void
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
        created_at: new Date(),
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
function getProfDataFromResponse(user: any): UserProfData {
  const profData: UserProfData = {
    userId: user.id,
    fname: user.fName,
    lname: user.lName,
    profile: user.profile_image,
    email: user.email,
    place: user.place,
    dateOfBirth: user.dob,
    designation: user.designation,
    yearOfExp: user.yoe,
    socialLinks: [
      {
        type: SocialType.Linkedin,
        link: "",
      },
      {
        type: SocialType.Facebook,
        link: "",
      },
      { type: SocialType.Youtube, link: "" },
      { type: SocialType.X, link: "" },
      { type: SocialType.Github, link: "" },
      {
        type: SocialType.Instagram,
        link: "",
      },
      { type: SocialType.Website, link: "" },
    ],
  };
  return profData;
}

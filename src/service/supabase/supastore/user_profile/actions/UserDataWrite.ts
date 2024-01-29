import {
  SupabaseSocialsDB,
  SupabaseUsersDB,
} from "../../../supabase_main/Supabase";
import { UserProfData } from "../UserCollection";
export function userDataWrite() {}

export async function updateUserData(
  userProfFormdata: UserProfData,
  callback: (user: UserProfData) => void
) {
  const userData = {
    email: userProfFormdata.email,
    fname: userProfFormdata.fname,
    lname: userProfFormdata.lname,
    profile_image: "",
    place: userProfFormdata.place,
    dob: userProfFormdata.dateOfBirth,
    yoe: userProfFormdata.yearOfExp,
    designation: userProfFormdata.designation,
    created_at: new Date(),
  };

  const socialData = {
    linkedin: userProfFormdata.socialLinks[0].link,
    facebook: userProfFormdata.socialLinks[1].link,
    x: userProfFormdata.socialLinks[2].link,
    github: userProfFormdata.socialLinks[3].link,
    instagram: userProfFormdata.socialLinks[4].link,
    website: userProfFormdata.socialLinks[5].link,
  };

  try {
    const { data, error } = await SupabaseUsersDB.upsert({
      id: userProfFormdata.userId,
      ...userData,
    }).single();

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const { data, error } = await SupabaseSocialsDB.upsert({
      id: userProfFormdata.userId,
      ...socialData,
    }).single();

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

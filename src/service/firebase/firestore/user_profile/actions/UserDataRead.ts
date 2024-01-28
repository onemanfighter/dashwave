import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from "../../../firebase_main/Firebase";
import { SocialType, UserProfData } from "../UserCollection";

// Get a list of cities from your database
export function getUserUsingId(
  email: string,
  callback: (user: UserProfData) => void
) {
  console.log("getUserUsingId", email);
  const newQuery = query(
    collection(firestoreDB, "users"),
    where("email", "==", email)
  );

  getDocs(newQuery)
    .then((querySnapshot) => {
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach((doc) => {
        // Sending back the response.
        callback(getProfDataFromResponse(doc.data()));
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

/**
 * Method to get the user profileData.
 *
 * @param user - The user data.
 * @returns The user data.
 */
function getProfDataFromResponse(user: any): UserProfData {
  const profData: UserProfData = {
    userId: user.userId,
    fname: user.fName,
    lname: user.lName,
    profile: user.profile,
    email: user.email,
    place: user.place,
    dateOfBirth: user.date_of_birth,
    designation: user.designation,
    yearOfExp: user.year_of_experience,
    socialLinks: [
      {
        type: SocialType.Linkedin,
        link: user.social_links.linkedIn as string,
      },
      {
        type: SocialType.Facebook,
        link: user.social_links.facebook as string,
      },
      { type: SocialType.Youtube, link: user.social_links.youtube as string },
      { type: SocialType.X, link: user.social_links.x as string },
      { type: SocialType.Github, link: user.social_links.github as string },
      {
        type: SocialType.Instagram,
        link: user.social_links.instagram as string,
      },
      { type: SocialType.Website, link: user.social_links.website as string },
    ],
  };
  return profData;
}

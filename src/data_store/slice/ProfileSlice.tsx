import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SocialType,
  UserProfileData,
} from "../../service/supabase/supastore/user_profile/UserCollection";
import {
  getProfileKeyData,
  storeProfileKeyData,
} from "../../service/local_storage/profile/ProfileStorageApi";
import { userProfileDataRead } from "../../service/supabase/supastore/user_profile/UserProfileStoreApi";
import { getAuthData } from "./AuthSlice";

const initialProfile: UserProfileData = {
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  profile: "",
  place: "",
  dateOfBirth: "",
  designation: "",
  yearOfExp: 0,
  socialLinks: [
    {
      type: SocialType.Facebook,
      link: "",
    },
    {
      type: SocialType.Instagram,
      link: "",
    },
    {
      type: SocialType.Github,
      link: "",
    },
    {
      type: SocialType.X,
      link: "",
    },
    {
      type: SocialType.Linkedin,
      link: "",
    },
    {
      type: SocialType.Youtube,
      link: "",
    },
    {
      type: SocialType.Website,
      link: "",
    },
  ],
};

const PROFILE = "profile";

export const profileSlice = createSlice({
  name: PROFILE,
  initialState: initialProfile,
  reducers: {
    updateProfile: (_state, action: PayloadAction<UserProfileData>) => {
      console.log("action.payload", action.payload);
      storeProfileKeyData(action.payload);
      return action.payload;
    },
    removeProfile: (_state) => {
      storeProfileKeyData(initialProfile);
      return initialProfile;
    },
  },
});

/**
 * Check if local storage has profile data, if not then fetch from the server database.
 * If the profile data is not available in the server database then add the initial profile data.
 * Then once the profile data is available in the server database, store it in the local storage.
 * Finally return the profile data from the local storage.
 *
 * @returns The profile data from the local storage.
 */
export function syncForTheFirstTime(
  setProfileCallback: (data: UserProfileData) => void
): UserProfileData | void {
  const profileData = getProfileKeyData();
  if (
    profileData != null &&
    profileData?.userId !== "" &&
    profileData?.userId !== undefined
  ) {
    return profileData as UserProfileData;
  }

  userProfileDataRead(getAuthData().userData, setProfileCallback);
}

export const { updateProfile, removeProfile } = profileSlice.actions;

export default profileSlice.reducer;

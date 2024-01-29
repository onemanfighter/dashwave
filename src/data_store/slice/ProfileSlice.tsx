import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SocialType,
  UserProfileData,
} from "../../service/supabase/supastore/user_profile/UserCollection";
import { storeProfilekeyData } from "../../service/local_storage/profile/ProfileStorageApi";
import { ProfileTokenKey } from "../../service/local_storage/token_constants/StorageConstant";

const initialProfile: UserProfileData = {
  userId: "",
  fname: "",
  lname: "",
  email: "",
  profile: "",
  place: "",
  dateOfBirth: "",
  designation: "",
  yearOfExp: 0,
  socialLinks: new Map<SocialType, string>([
    [SocialType.Facebook, ""],
    [SocialType.Instagram, ""],
    [SocialType.Github, ""],
    [SocialType.X, ""],
    [SocialType.Linkedin, ""],
    [SocialType.Youtube, ""],
    [SocialType.Website, ""],
  ]),
};

const PROFILE = "profile";

export const profileSlice = createSlice({
  name: PROFILE,
  initialState: getProfileData(),
  reducers: {
    setProfile: (_state, action: PayloadAction<UserProfileData>) => {
      console.log("setProfile", action.payload);
      storeProfilekeyData(action.payload);
      return action.payload;
    },
    removeProfile: (_state) => {
      storeProfilekeyData(initialProfile);
      return initialProfile;
    },
  },
});

/**
 * Get the profile data from the local storage.
 *
 * @returns The profile data from the local storage.
 */
export function getProfileData(): UserProfileData {
  const profileData = localStorage.getItem(ProfileTokenKey);
  if (profileData) {
    return JSON.parse(profileData);
  }
  return initialProfile;
}

export const { setProfile, removeProfile } = profileSlice.actions;

export default profileSlice.reducer;

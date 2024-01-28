import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SocialType,
  UserProfData,
} from "../../service/firebase/firestore/UserCollection";
import { storeProfilekeyData } from "../../service/local_storage/profile/ProfileStorageApi";
import { ProfileTokenKey } from "../../service/local_storage/token_constants/StorageConstant";

const initialProfile: UserProfData = {
  userId: "",
  fname: "",
  lname: "",
  email: "",
  profile: "",
  place: "",
  dateOfBirth: "",
  designation: "",
  yearOfExp: 0,
  socialLinks: [
    { type: SocialType.Facebook, link: "" },
    { type: SocialType.Instagram, link: "" },
    { type: SocialType.Github, link: "" },
    { type: SocialType.X, link: "" },
    { type: SocialType.Linkedin, link: "" },
    { type: SocialType.Youtube, link: "" },
    { type: SocialType.Website, link: "" },
  ],
};

const PROFILE = "profile";

export const profileSlice = createSlice({
  name: PROFILE,
  initialState: getProfileData(),
  reducers: {
    setProfile: (_state, action: PayloadAction<UserProfData>) => {
      storeProfilekeyData(action.payload);
      return action.payload;
    },
    removeProfile: (_state) => {
      storeProfilekeyData(initialProfile);
      return initialProfile;
    },
    updateProfile: (_state, action: PayloadAction<UserProfData>) => {
      storeProfilekeyData(action.payload);
      return action.payload;
    },
  },
});

/**
 * Get the profile data from the local storage.
 *
 * @returns The profile data from the local storage.
 */
export function getProfileData(): UserProfData {
  const profileData = localStorage.getItem(ProfileTokenKey);
  if (profileData) {
    return JSON.parse(profileData);
  }
  return initialProfile;
}

export const { setProfile, removeProfile, updateProfile } =
  profileSlice.actions;

export default profileSlice.reducer;

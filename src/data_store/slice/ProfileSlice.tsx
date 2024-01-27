import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SocialType,
  UserProfData,
} from "../../service/firebase/firestore/UserCollection";

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
  initialState: initialProfile,
  reducers: {
    setProfile: (_state, action: PayloadAction<UserProfData>) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;

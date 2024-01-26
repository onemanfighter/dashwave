import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProfileData {
  name: string;
  email: string;
  profileImage: string;
  title: string;
  place: string;
}

const initialProfile: ProfileData = {
  name: "Amit raikwar",
  email: "amitraikwar@gmail.com",
  profileImage:
    "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png",
  title: "Software engineer",
  place: "Pune, India",
};

const PROFILE = "profile";

export const profileSlice = createSlice({
  name: PROFILE,
  initialState: initialProfile,
  reducers: {
    setProfile: (_state, action: PayloadAction<ProfileData>) => {
      return action.payload;
    },
    getProfile: (state) => {
      return state;
    },
  },
});

export const { setProfile, getProfile } = profileSlice.actions;

export default profileSlice.reducer;

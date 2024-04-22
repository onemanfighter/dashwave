import {
    SocialType,
    UserProfileData,
} from '@service/supabase/supastore/user_profile/UserCollection';
import { AppStoreSlice } from 'src/zustand_store/store';
import { ProfileStateSlice, UserProfileState } from './types';

const userProfileData: UserProfileData = {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    profile: '',
    place: '',
    dateOfBirth: '',
    designation: '',
    yearOfExp: 0,
    socialLinks: [
        {
            type: SocialType.Facebook,
            link: '',
        },
        {
            type: SocialType.Instagram,
            link: '',
        },
        {
            type: SocialType.Github,
            link: '',
        },
        {
            type: SocialType.X,
            link: '',
        },
        {
            type: SocialType.Linkedin,
            link: '',
        },
        {
            type: SocialType.Youtube,
            link: '',
        },
        {
            type: SocialType.Website,
            link: '',
        },
    ],
};

const initialState: UserProfileState = {
    data: userProfileData,
};

const createProfileSlice: AppStoreSlice<ProfileStateSlice> = (set) => ({
    ...initialState,
    updateProfile: (profile: UserProfileData) =>
        set((state) => {
            state.Profile.data = profile;
        }),
    removeProfile: () => {
        set((state) => {
            state.Profile.data = initialState.data;
        });
    },
});

export default createProfileSlice;

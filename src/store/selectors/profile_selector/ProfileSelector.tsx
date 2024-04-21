import { useDispatch } from 'react-redux';
import { UserProfileData, profileSlice } from '@store/slice';
import { RootState } from '@store/store_state';

export const ProfileSelector = (state: RootState) => {
    const dispatch = useDispatch();
    const { updateProfile, removeProfile } = profileSlice.actions;

    const updateProfileAction = (payload: UserProfileData) => {
        dispatch(updateProfile(payload));
    };
    const removeProfileAction = () => {
        dispatch(removeProfile());
    };

    return { profile: state.profile, updateProfileAction, removeProfileAction };
};

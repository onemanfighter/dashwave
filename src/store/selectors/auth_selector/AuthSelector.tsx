import { useDispatch } from 'react-redux';
import { AuthData } from 'store/slice';
import { authSlice } from 'store/slice/auth/AuthSlice';
import { RootState } from 'store/store_state';

export const AuthSelector = (state: RootState) => {
    const dispatch = useDispatch();
    const { setLoginData, removeLoginData } = authSlice.actions;

    const setLoginDataAction = (payload: AuthData) => {
        dispatch(setLoginData(payload));
    };
    const removeLoginDataAction = () => {
        dispatch(removeLoginData());
    };
    return {
        userId: state.auth.userData.userId,
        authToken: state.auth.authToken,
        userData: state.auth.userData,
        setLoginDataAction,
        removeLoginDataAction,
    };
};

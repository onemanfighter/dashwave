import { useDispatch } from 'react-redux';
import { onSignOut } from 'store';
import { useEffect } from 'react';
import { alreadySignedIn } from '../../service/supabase/supa_auth/AuthApi';
import { AlreadyLoginServiceProviderProps } from './types';

const AlreadyLoginServiceProvider = (
    props: AlreadyLoginServiceProviderProps
) => {
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(onSignOut());
    };

    useEffect(() => {
        alreadySignedIn(signOutHandler);
    });
    return <div>{props.children}</div>;
};

export default AlreadyLoginServiceProvider;

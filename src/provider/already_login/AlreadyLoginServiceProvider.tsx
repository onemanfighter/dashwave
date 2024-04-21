import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { alreadySignedIn } from '@service/supabase/supa_auth/AuthApi';
import { AlreadyLoginServiceProviderProps } from './types';
import { AuthSelector } from 'store/selectors';

const AlreadyLoginServiceProvider = (
    props: AlreadyLoginServiceProviderProps
) => {
    const { removeLoginDataAction } = useSelector(AuthSelector);

    const signOutHandler = () => {
        removeLoginDataAction();
    };

    useEffect(() => {
        alreadySignedIn(signOutHandler);
    });
    return <div>{props.children}</div>;
};

export default AlreadyLoginServiceProvider;

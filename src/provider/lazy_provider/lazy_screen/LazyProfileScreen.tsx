import { lazy } from 'react';
import LazyComponentProvider from '../component/LazyComponent';

const ProfileMainScreen = lazy(
    () => import('../../../screens/private/screens/profile/ProfileMainScreen')
);
const LazyProfileMainScreenComponent = () => {
    return (
        <LazyComponentProvider>
            <ProfileMainScreen />
        </LazyComponentProvider>
    );
};

const ProfilePasswordResetScreen = lazy(
    () =>
        import(
            '../../../screens/private/screens/profile/profile_reset_password/ProfilePasswordResetScreen'
        )
);
const LazyProfilePasswordResetScreenComponent = () => {
    return (
        <LazyComponentProvider>
            <ProfilePasswordResetScreen />
        </LazyComponentProvider>
    );
};

const ProfileSettingScreen = lazy(
    () =>
        import(
            '../../../screens/private/screens/profile/profile_setting/ProfileSettingScreen'
        )
);
const LazyProfileSettingScreenComponent = () => {
    return (
        <LazyComponentProvider>
            <ProfileSettingScreen />
        </LazyComponentProvider>
    );
};

const ProfilePreviewScreen = lazy(
    () =>
        import(
            '../../../screens/private/screens/profile/profile_preview/ProfilePreviewScreen'
        )
);
const LazyProfilePreviewScreenComponent = () => {
    return (
        <LazyComponentProvider>
            <ProfilePreviewScreen />
        </LazyComponentProvider>
    );
};

export {
    LazyProfileMainScreenComponent,
    LazyProfilePasswordResetScreenComponent,
    LazyProfileSettingScreenComponent,
    LazyProfilePreviewScreenComponent,
};

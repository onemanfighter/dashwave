/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Profile screens lazy components.
const ProfileMainScreen = lazy(
  () => import("../../../screens/private/screens/profile/ProfileMainScreen")
);

const ProfilePasswordResetScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/profile/profile_reset_password/ProfilePasswordResetScreen"
    )
);

const ProfileSettingScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/profile/profile_setting/ProfileSettingScreen"
    )
);

const ProfilePreviewScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/profile/profile_preview/ProfilePreviewScreen"
    )
);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Profile screens components.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy profile main screen component.
 * @returns The LazyProfileMainScreenComponent component.
 */
export function LazyProfileMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <ProfileMainScreen />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy profile edit screen component.
 * @returns The LazyProfilePasswordResetScreenComponent component.
 */
export function LazyProfilePasswordResetScreenComponent() {
  return (
    <LazyComponentProvider>
      <ProfilePasswordResetScreen />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy profile setting screen component.
 * @returns The LazyProfileSettingScreenComponent component.
 */
export function LazyProfileSettingScreenComponent() {
  return (
    <LazyComponentProvider>
      <ProfileSettingScreen />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy profile preview screen component.
 * @returns The LazyProfilePreviewScreenComponent component.
 */
export function LazyProfilePreviewScreenComponent() {
  return (
    <LazyComponentProvider>
      <ProfilePreviewScreen />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

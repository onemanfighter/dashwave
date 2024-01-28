import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Creds screens components.
const CredsScreen = lazy(
  () => import("../../../screens/private/screens/creds/CredsScreen")
);

const CredsMainScreen = lazy(
  () => import("../../../screens/private/screens/creds/creds_main/CredsMain")
);

const CredsPreviewScreen = lazy(
  () =>
    import("../../../screens/private/screens/creds/creds_preview/CredsPreview")
);

const CredsEditScreen = lazy(
  () => import("../../../screens/private/screens/creds/creds_edit/CredsEdit")
);

const CredsAddScreen = lazy(
  () => import("../../../screens/private/screens/creds/creds_settings/CredsAdd")
);

const CredsDeleteScreen = lazy(
  () =>
    import("../../../screens/private/screens/creds/creds_delete/CredsDelete")
);

/**
 * Component definition for the lazy creds screen component.
 * @returns The LazyCredsScreenComponent component.
 */
export function LazyCredsScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy creds main screen component.
 * @returns The LazyCredsMainScreenComponent component.
 */
export function LazyCredsMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsMainScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy creds preview screen component.
 * @returns The LazyCredsPreviewScreenComponent component.
 */
export function LazyCredsPreviewScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsPreviewScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy creds edit screen component.
 * @returns The LazyCredsEditScreenComponent component.
 */
export function LazyCredsEditScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsEditScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy creds add screen component.
 * @returns The LazyCredsAddScreenComponent component.
 */
export function LazyCredsAddScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsAddScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy creds delete screen component.
 * @returns The LazyCredsDeleteScreenComponent component.
 */
export function LazyCredsDeleteScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsDeleteScreen />
    </LazyComponentProvider>
  );
}

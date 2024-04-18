import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

const CredsScreen = lazy(
  () => import("../../../screens/private/screens/creds/CredsScreen")
);

const LazyCredsScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <CredsScreen />
    </LazyComponentProvider>
  );
};

const CredsMainScreen = lazy(
  () => import("../../../screens/private/screens/creds/creds_main/CredsMain")
);
const LazyCredsMainScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <CredsMainScreen />
    </LazyComponentProvider>
  );
};

const CredsPreviewScreen = lazy(
  () =>
    import("../../../screens/private/screens/creds/creds_preview/CredsPreview")
);
const LazyCredsPreviewScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <CredsPreviewScreen />
    </LazyComponentProvider>
  );
};

const CredsEditScreen = lazy(
  () => import("../../../screens/private/screens/creds/creds_edit/CredsEdit")
);

const LazyCredsEditScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <CredsEditScreen />
    </LazyComponentProvider>
  );
};

const CredsAddScreen = lazy(
  () => import("../../../screens/private/screens/creds/creds_settings/CredsAdd")
);

const LazyCredsAddScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <CredsAddScreen />
    </LazyComponentProvider>
  );
};

const CredsDeleteScreen = lazy(
  () =>
    import("../../../screens/private/screens/creds/creds_delete/CredsDelete")
);
const LazyCredsDeleteScreenComponent = () => {
  return (
    <LazyComponentProvider>
      <CredsDeleteScreen />
    </LazyComponentProvider>
  );
};

export {
  LazyCredsScreenComponent,
  LazyCredsAddScreenComponent,
  LazyCredsDeleteScreenComponent,
  LazyCredsEditScreenComponent,
  LazyCredsMainScreenComponent,
  LazyCredsPreviewScreenComponent,
};

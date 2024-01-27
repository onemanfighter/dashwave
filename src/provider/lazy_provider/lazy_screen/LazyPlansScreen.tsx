import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Plans screens components.
const PlansMainScreen = lazy(
  () => import("../../../screens/private/screens/plans/PlansScreen")
);

const PlansPreviewScreen = lazy(
  () =>
    import("../../../screens/private/screens/plans/plans_preview/PlansPreview")
);

const PlansEditScreen = lazy(
  () => import("../../../screens/private/screens/plans/plans_edit/PlansEdit")
);

const PlansAddScreen = lazy(
  () => import("../../../screens/private/screens/plans/plans_add/PlansAdd")
);

const PlansDeleteScreen = lazy(
  () =>
    import("../../../screens/private/screens/plans/plans_delete/PlansDelete")
);

/**
 * Component definition for the lazy plans main screen component.
 * @returns The LazyPlansMainScreenComponent component.
 */
export function LazyPlansMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <PlansMainScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy plans preview screen component.
 * @returns The LazyPlansPreviewScreenComponent component.
 */
export function LazyPlansPreviewScreenComponent() {
  return (
    <LazyComponentProvider>
      <PlansPreviewScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy plans edit screen component.
 * @returns The LazyPlansEditScreenComponent component.
 */
export function LazyPlansEditScreenComponent() {
  return (
    <LazyComponentProvider>
      <PlansEditScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy plans add screen component.
 * @returns The LazyPlansAddScreenComponent component.
 */
export function LazyPlansAddScreenComponent() {
  return (
    <LazyComponentProvider>
      <PlansAddScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy plans delete screen component.
 * @returns The LazyPlansDeleteScreenComponent component.
 */
export function LazyPlansDeleteScreenComponent() {
  return (
    <LazyComponentProvider>
      <PlansDeleteScreen />
    </LazyComponentProvider>
  );
}

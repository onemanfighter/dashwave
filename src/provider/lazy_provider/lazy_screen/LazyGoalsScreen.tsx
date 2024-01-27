import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Goals screens components.
const GoalsMainScreen = lazy(
  () => import("../../../screens/private/screens/goals/GoalsScreen")
);

const GoalsPreviewScreen = lazy(
  () =>
    import("../../../screens/private/screens/goals/goals_preview/GoalsPreview")
);

const GoalsEditScreen = lazy(
  () => import("../../../screens/private/screens/goals/goals_edit/GoalsEdit")
);

const GoalsAddScreen = lazy(
  () => import("../../../screens/private/screens/goals/goals_add/GoalsAdd")
);

const GoalsDeleteScreen = lazy(
  () =>
    import("../../../screens/private/screens/goals/goals_delete/GoalsDelete")
);

/**
 * Component definition for the lazy goals main screen component.
 * @returns The LazyGoalsMainScreenComponent component.
 */
export function LazyGoalsMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <GoalsMainScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy goals preview screen component.
 * @returns The LazyGoalsPreviewScreenComponent component.
 */
export function LazyGoalsPreviewScreenComponent() {
  return (
    <LazyComponentProvider>
      <GoalsPreviewScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy goals edit screen component.
 * @returns The LazyGoalsEditScreenComponent component.
 */
export function LazyGoalsEditScreenComponent() {
  return (
    <LazyComponentProvider>
      <GoalsEditScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy goals add screen component.
 * @returns The LazyGoalsAddScreenComponent component.
 */
export function LazyGoalsAddScreenComponent() {
  return (
    <LazyComponentProvider>
      <GoalsAddScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy goals delete screen component.
 * @returns The LazyGoalsDeleteScreenComponent component.
 */
export function LazyGoalsDeleteScreenComponent() {
  return (
    <LazyComponentProvider>
      <GoalsDeleteScreen />
    </LazyComponentProvider>
  );
}

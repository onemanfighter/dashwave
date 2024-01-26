import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Private screens components.
const HomeScreen = lazy(
  () => import("../../../screens/private/main_root_screen/MainRootScreen")
);

const DashboardHome = lazy(
  () => import("../../../screens/private/screens/dashboard_home/DashboardHome")
);

const ExpenseScreen = lazy(
  () => import("../../../screens/private/screens/expenses/ExpenseScreen")
);

const ProjectsScreen = lazy(
  () => import("../../../screens/private/screens/projects/ProjectScreen")
);

const ProjectMainScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/projects/project_main/ProjectMainScreen"
    )
);

const ProjectPreviewScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/projects/project_preview/ProjectPreviewScreen"
    )
);

const ProjectEditScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/projects/project_edit/ProjectEditScreen"
    )
);

const ProjectAddScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/projects/project_add/ProjectAddScreen"
    )
);

const PlanScreen = lazy(
  () => import("../../../screens/private/screens/plans/PlansScreen")
);

const GoalsScreen = lazy(
  () => import("../../../screens/private/screens/goals/GoalsScreen")
);

const CredsScreen = lazy(
  () => import("../../../screens/private/screens/creds/CredsScreen")
);

// Private screens components.
/**
 * Component definition for the lazy home screen component.
 * @returns The LazyHomeScreenComponent component.
 */
export function LazyHomeScreenComponent() {
  return (
    <LazyComponentProvider>
      <HomeScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy dashboard screen component.
 * @returns The LazyDashboardScreenComponent component.
 */
export function LazyDashboardScreenComponent() {
  return (
    <LazyComponentProvider>
      <DashboardHome />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expense screen component.
 * @returns The LazyExpenseScreenComponent component.
 */
export function LazyExpenseScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpenseScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy projects screen component.
 * @returns The LazyProjectsScreenComponent component.
 */
export function LazyProjectsScreenComponent() {
  return (
    <LazyComponentProvider>
      <ProjectsScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy project main screen component.
 * @returns The LazyProjectMainScreenComponent component.
 */
export function LazyProjectMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <ProjectMainScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy projects preview screen component.
 * @returns The LazyProjectPreviewComponent component.
 */
export function LazyProjectPreviewComponent() {
  return (
    <LazyComponentProvider>
      <ProjectPreviewScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy project edit screen component.
 * @returns The LazyProjectEditComponent component.
 */
export function LazyProjectEditComponent() {
  return (
    <LazyComponentProvider>
      <ProjectEditScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy add project screen component.
 * @returns The LazyProjectAddComponent component.
 */
export function LazyProjectAddComponent() {
  return (
    <LazyComponentProvider>
      <ProjectAddScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy plans screen component.
 * @returns The LazyPlansScreenComponent component.
 */
export function LazyPlansScreenComponent() {
  return (
    <LazyComponentProvider>
      <PlanScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy goals screen component.
 * @returns The LazyGoalsScreenComponent component.
 */
export function LazyGoalsScreenComponent() {
  return (
    <LazyComponentProvider>
      <GoalsScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy credentials screen component.
 * @returns The LazyCredsScreenComponent component.
 */
export function LazyCredsScreenComponent() {
  return (
    <LazyComponentProvider>
      <CredsScreen />
    </LazyComponentProvider>
  );
}

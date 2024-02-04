/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Projects screens lazy components.
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

const ProjectDeleteScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/projects/project_delete/ProjectDeleteScreen"
    )
);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Projects screens components.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the lazy delete project screen component.
 * @returns The LazyProjectDeleteComponent component.
 */
export function LazyProjectDeleteComponent() {
  return (
    <LazyComponentProvider>
      <ProjectDeleteScreen />
    </LazyComponentProvider>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

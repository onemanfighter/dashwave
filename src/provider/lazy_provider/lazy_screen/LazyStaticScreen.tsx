import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Static screens components.
const Error404 = lazy(() => import("../../../screens/static_screen/404"));

/**
 * Component definition for the lazy 404 screen component.
 * @returns The LazyError404ScreenComponent component.
 */
export function LazyError404ScreenComponent() {
  return (
    <LazyComponentProvider>
      <Error404 />
    </LazyComponentProvider>
  );
}

import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// App component.
const App = lazy(() => import("../../../App"));

/**
 * Component definition for the lazy app component.
 * @returns The LazyAppComponent component.
 */
export function LazyAppComponent() {
  return (
    <LazyComponentProvider>
      <App />
    </LazyComponentProvider>
  );
}

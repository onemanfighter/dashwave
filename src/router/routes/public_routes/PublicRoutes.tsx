import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import LazyComponentProvider from "../../../provider/lazy_provider/component/LazyComponent";
import { LazyAppComponent } from "../../../provider/lazy_provider/lazy_screen/LazyAppScreen";
import {
  LazyForgotPasswordScreenComponent,
  LazyLoginScreenComponent,
  LazySignupScreenComponent,
} from "../../../provider/lazy_provider/lazy_screen/LazyPublicScreen";

/**
 * Router declaration for the demo app before login.
 */
const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<LazyComponentProvider children={<LazyAppComponent />} />}
    >
      <Route path="" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<LazyLoginScreenComponent />} />
      <Route path="signup" element={<LazySignupScreenComponent />} />
      <Route
        path="forgot-password"
        element={<LazyForgotPasswordScreenComponent />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Route>
  )
);

export default publicRouter;
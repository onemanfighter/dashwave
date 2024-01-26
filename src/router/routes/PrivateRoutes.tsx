import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import {
  LazyDashboardScreenComponent,
  LazyHomeScreenComponent,
} from "../../provider/lazy_provider/LazyScreen";

/**
 * Router declaration for the demo app after login.
 */
const privateRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyHomeScreenComponent />}>
      <Route path="" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<LazyDashboardScreenComponent />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Route>
  )
);

export default privateRouter;

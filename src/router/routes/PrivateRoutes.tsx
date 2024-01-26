import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import {
  LazyCredsScreenComponent,
  LazyDashboardScreenComponent,
  LazyExpenseScreenComponent,
  LazyGoalsScreenComponent,
  LazyHomeScreenComponent,
  LazyPlansScreenComponent,
  LazyProjectsScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyPrivateScreen";
import {
  LazyProfileMainScreenComponent,
  LazyProfilePreviewScreenComponent,
  LazyProfileSettingScreenComponent,
  LazyProfilePasswordResetScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyProfileScreen";

/**
 * Router declaration for the demo app after login.
 */
const privateRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyHomeScreenComponent />}>
      <Route path="" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<LazyDashboardScreenComponent />} />
      <Route path="projects" element={<LazyProjectsScreenComponent />}></Route>
      <Route path="plans" element={<LazyPlansScreenComponent />}></Route>
      <Route path="expense" element={<LazyExpenseScreenComponent />}></Route>
      <Route path="goals" element={<LazyGoalsScreenComponent />}></Route>
      <Route path="creds" element={<LazyCredsScreenComponent />}></Route>
      <Route path="profile" element={<LazyProfileMainScreenComponent />}>
        <Route path="" element={<Navigate to="preview" replace />} />
        <Route path="preview" element={<LazyProfilePreviewScreenComponent />} />
        <Route
          path="reset"
          element={<LazyProfilePasswordResetScreenComponent />}
        />
        <Route
          path="settings"
          element={<LazyProfileSettingScreenComponent />}
        />
      </Route>
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Route>
  )
);

export default privateRouter;

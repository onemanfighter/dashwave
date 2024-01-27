import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import {
  LazyDashboardScreenComponent,
  LazyHomeScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyPrivateScreen";
import {
  LazyProfileMainScreenComponent,
  LazyProfilePreviewScreenComponent,
  LazyProfileSettingScreenComponent,
  LazyProfilePasswordResetScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyProfileScreen";
import {
  LazyPlansAddScreenComponent,
  LazyPlansDeleteScreenComponent,
  LazyPlansEditScreenComponent,
  LazyPlansMainScreenComponent,
  LazyPlansPreviewScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyPlansScreen";
import {
  LazyCredsAddScreenComponent,
  LazyCredsDeleteScreenComponent,
  LazyCredsEditScreenComponent,
  LazyCredsMainScreenComponent,
  LazyCredsPreviewScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyCredsScreen";
import {
  LazyGoalsAddScreenComponent,
  LazyGoalsDeleteScreenComponent,
  LazyGoalsEditScreenComponent,
  LazyGoalsMainScreenComponent,
  LazyGoalsPreviewScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyGoalsScreen";
import {
  LazyExpensesAddScreenComponent,
  LazyExpensesDeleteScreenComponent,
  LazyExpensesEditScreenComponent,
  LazyExpensesMainScreenComponent,
  LazyExpensesPreviewScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyExpensesScreen";
import {
  LazyProjectAddComponent,
  LazyProjectDeleteComponent,
  LazyProjectEditComponent,
  LazyProjectMainScreenComponent,
  LazyProjectPreviewComponent,
  LazyProjectsScreenComponent,
} from "../../provider/lazy_provider/lazy_screen/LazyProjectScreen";

/**
 * Router declaration for the demo app after login.
 */
const privateRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyHomeScreenComponent />}>
      <Route path="" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<LazyDashboardScreenComponent />} />
      <Route path="projects" element={<LazyProjectsScreenComponent />}>
        <Route path="" element={<LazyProjectMainScreenComponent />} />
        <Route path="preview" element={<LazyProjectPreviewComponent />} />
        <Route path="add" element={<LazyProjectAddComponent />} />
        <Route path="edit" element={<LazyProjectEditComponent />} />
        <Route path="delete" element={<LazyProjectDeleteComponent />} />
      </Route>
      <Route path="plans" element={<LazyPlansMainScreenComponent />}>
        <Route path="" element={<Navigate to="preview" replace />} />
        <Route path="preview" element={<LazyPlansPreviewScreenComponent />} />
        <Route path="add" element={<LazyPlansAddScreenComponent />} />
        <Route path="edit" element={<LazyPlansEditScreenComponent />} />
        <Route path="delete" element={<LazyPlansDeleteScreenComponent />} />
      </Route>
      <Route path="expense" element={<LazyExpensesMainScreenComponent />}>
        <Route path="" element={<Navigate to="preview" replace />} />
        <Route
          path="preview"
          element={<LazyExpensesPreviewScreenComponent />}
        />
        <Route path="add" element={<LazyExpensesAddScreenComponent />} />
        <Route path="edit" element={<LazyExpensesEditScreenComponent />} />
        <Route path="delete" element={<LazyExpensesDeleteScreenComponent />} />
      </Route>
      <Route path="goals" element={<LazyGoalsMainScreenComponent />}>
        <Route path="" element={<Navigate to="preview" replace />} />
        <Route path="preview" element={<LazyGoalsPreviewScreenComponent />} />
        <Route path="add" element={<LazyGoalsAddScreenComponent />} />
        <Route path="edit" element={<LazyGoalsEditScreenComponent />} />
        <Route path="delete" element={<LazyGoalsDeleteScreenComponent />} />
      </Route>
      <Route path="creds" element={<LazyCredsMainScreenComponent />}>
        <Route path="" element={<Navigate to="preview" replace />} />
        <Route path="preview" element={<LazyCredsPreviewScreenComponent />} />
        <Route path="add" element={<LazyCredsAddScreenComponent />} />
        <Route path="edit" element={<LazyCredsEditScreenComponent />} />
        <Route path="delete" element={<LazyCredsDeleteScreenComponent />} />
      </Route>
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

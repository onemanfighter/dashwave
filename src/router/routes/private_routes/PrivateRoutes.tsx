/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import {
  LazyHomeScreenComponent,
  LazyDashboardScreenComponent,
  LazyPlansScreenComponent,
  LazyPlansMainScreenComponent,
  LazyPlansPreviewScreenComponent,
  LazyPlansAddScreenComponent,
  LazyPlansEditScreenComponent,
  LazyPlansDeleteScreenComponent,
  LazyExpenseScreenComponent,
  LazyExpenseMainScreenComponent,
  LazyExpensePreviewScreenComponent,
  LazyExpenseAddScreenComponent,
  LazyExpenseEditScreenComponent,
  LazyExpenseDeleteScreenComponent,
  LazyGoalsScreenComponent,
  LazyGoalsMainScreenComponent,
  LazyGoalsPreviewScreenComponent,
  LazyGoalsAddScreenComponent,
  LazyGoalsEditScreenComponent,
  LazyGoalsDeleteScreenComponent,
  LazyProfileMainScreenComponent,
  LazyCredsMainScreenComponent,
  LazyProfilePreviewScreenComponent,
  LazyCredsScreenComponent,
  LazyCredsPreviewScreenComponent,
  LazyCredsAddScreenComponent,
  LazyCredsEditScreenComponent,
  LazyCredsDeleteScreenComponent,
  LazyProfilePasswordResetScreenComponent,
  LazyProfileSettingScreenComponent,
} from "provider";
import {
  LazyProjectsScreenComponent,
  LazyProjectMainScreenComponent,
  LazyProjectPreviewComponent,
  LazyProjectAddComponent,
  LazyProjectEditComponent,
  LazyProjectDeleteComponent,
} from "provider/lazy_provider/lazy_screen/LazyProjectScreen";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
        <Route path="preview" element={<LazyProjectPreviewComponent />}>
          <Route path=":id" element={<LazyProjectPreviewComponent />} />
        </Route>
        <Route path="add" element={<LazyProjectAddComponent />} />
        <Route path="edit" element={<LazyProjectEditComponent />}>
          <Route path=":id" element={<LazyProjectEditComponent />} />
        </Route>
        <Route path="delete" element={<LazyProjectDeleteComponent />}>
          <Route path=":id" element={<LazyProjectDeleteComponent />} />
        </Route>
      </Route>
      <Route path="plans" element={<LazyPlansScreenComponent />}>
        <Route path="" element={<LazyPlansMainScreenComponent />} />
        <Route path="preview" element={<LazyPlansPreviewScreenComponent />} />
        <Route path="add" element={<LazyPlansAddScreenComponent />} />
        <Route path="edit" element={<LazyPlansEditScreenComponent />} />
        <Route path="delete" element={<LazyPlansDeleteScreenComponent />} />
      </Route>
      <Route path="expenses" element={<LazyExpenseScreenComponent />}>
        <Route path="" element={<LazyExpenseMainScreenComponent />} />
        <Route path="preview" element={<LazyExpensePreviewScreenComponent />} />
        <Route path="add" element={<LazyExpenseAddScreenComponent />} />
        <Route path="edit" element={<LazyExpenseEditScreenComponent />} />
        <Route path="delete" element={<LazyExpenseDeleteScreenComponent />} />
      </Route>
      <Route path="goals" element={<LazyGoalsScreenComponent />}>
        <Route path="" element={<LazyGoalsMainScreenComponent />} />
        <Route path="preview" element={<LazyGoalsPreviewScreenComponent />} />
        <Route path="add" element={<LazyGoalsAddScreenComponent />} />
        <Route path="edit" element={<LazyGoalsEditScreenComponent />} />
        <Route path="delete" element={<LazyGoalsDeleteScreenComponent />} />
      </Route>
      <Route path="learning" element={<LazyProfileMainScreenComponent />}>
        <Route path="" element={<LazyCredsMainScreenComponent />} />
        <Route path="preview" element={<LazyProfilePreviewScreenComponent />} />
      </Route>
      <Route path="resources" element={<LazyProfileMainScreenComponent />}>
        <Route path="" element={<LazyCredsMainScreenComponent />} />
        <Route path="preview" element={<LazyProfilePreviewScreenComponent />} />
      </Route>
      <Route path="creds" element={<LazyCredsScreenComponent />}>
        <Route path="" element={<LazyCredsMainScreenComponent />} />
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the private router.
export default privateRouter;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

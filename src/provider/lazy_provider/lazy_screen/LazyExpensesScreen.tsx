import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Expenses screens components.
const ExpenseScreen = lazy(
  () => import("../../../screens/private/screens/expenses/ExpenseScreen")
);

const ExpenseMainScreen = lazy(
  () =>
    import("../../../screens/private/screens/expenses/expense_main/ExpenseMain")
);

const ExpensePreviewScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/expenses/expense_preview/ExpensePreview"
    )
);

const ExpenseEditScreen = lazy(
  () =>
    import("../../../screens/private/screens/expenses/expense_edit/ExpenseEdit")
);

const ExpenseAddScreen = lazy(
  () =>
    import("../../../screens/private/screens/expenses/expense_add/ExpenseAdd")
);

const ExpenseDeleteScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/expenses/expense_delete/ExpenseDelete"
    )
);

/**
 * Component definition for the lazy expenses screen component.
 * @returns The LazyExpensesScreenComponent component.
 */
export function LazyExpenseScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpenseScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses main screen component.
 * @returns The LazyExpenseMainScreenComponent component.
 */
export function LazyExpenseMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpenseMainScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses preview screen component.
 * @returns The LazyExpensePreviewScreenComponent component.
 */
export function LazyExpensePreviewScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpensePreviewScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses edit screen component.
 * @returns The LazyExpenseEditScreenComponent component.
 */
export function LazyExpenseEditScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpenseEditScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses add screen component.
 * @returns The LazyExpenseAddScreenComponent component.
 */
export function LazyExpenseAddScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpenseAddScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses delete screen component.
 * @returns The LazyExpenseDeleteScreenComponent component.
 */
export function LazyExpenseDeleteScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpenseDeleteScreen />
    </LazyComponentProvider>
  );
}

import { lazy } from "react";
import LazyComponentProvider from "../component/LazyComponent";

// Expenses screens components.
const ExpensesMainScreen = lazy(
  () => import("../../../screens/private/screens/expenses/ExpenseScreen")
);

const ExpensesPreviewScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/expenses/expense_preview/ExpensePreview"
    )
);

const ExpensesEditScreen = lazy(
  () =>
    import("../../../screens/private/screens/expenses/expense_edit/ExpenseEdit")
);

const ExpensesAddScreen = lazy(
  () =>
    import("../../../screens/private/screens/expenses/expense_add/ExpenseAdd")
);

const ExpensesDeleteScreen = lazy(
  () =>
    import(
      "../../../screens/private/screens/expenses/expense_delete/ExpenseDelete"
    )
);

/**
 * Component definition for the lazy expenses main screen component.
 * @returns The LazyExpensesMainScreenComponent component.
 */
export function LazyExpensesMainScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpensesMainScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses preview screen component.
 * @returns The LazyExpensesPreviewScreenComponent component.
 */
export function LazyExpensesPreviewScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpensesPreviewScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses edit screen component.
 * @returns The LazyExpensesEditScreenComponent component.
 */
export function LazyExpensesEditScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpensesEditScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses add screen component.
 * @returns The LazyExpensesAddScreenComponent component.
 */
export function LazyExpensesAddScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpensesAddScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy expenses delete screen component.
 * @returns The LazyExpensesDeleteScreenComponent component.
 */
export function LazyExpensesDeleteScreenComponent() {
  return (
    <LazyComponentProvider>
      <ExpensesDeleteScreen />
    </LazyComponentProvider>
  );
}

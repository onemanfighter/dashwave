/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink, Outlet, useLocation } from "react-router-dom";
import TooltipComponent from "../../../../components/tooltip/TooltipComponent";
import EditIcon from "../../../../assets/icons/project_icon/EditIcon";
import { AddIcon } from "../../../../assets/icons/project_icon/AddIcon";
import OverviewIcon from "../../../../assets/icons/cred_icon/OverviewIcon";
import DeleteIcon from "../../../../assets/icons/cred_icon/DeleteIcon";
import getSubNavTitle from "../../../../util/nav/NavTitle";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Props for the CredsScreen component.
 */
export interface IExpenseScreenProps {}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * cred screen routes.
 */
const ExpensesRoutes = [
  { title: "Expenses overview", icon: <OverviewIcon />, path: "preview" },
  { title: "Add expense", icon: <AddIcon />, path: "add" },
  { title: "Edit expense", icon: <EditIcon />, path: "edit" },
  { title: "Delete expense", icon: <DeleteIcon />, path: "delete" },
];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the creds screen component.
 * @param props The props for the creds screen component.
 * @returns The creds screen component.
 */
export default function ExpenseScreen(props: IExpenseScreenProps) {
  const currentLocation = useLocation();
  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-1 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-xl font-semibold mx-4">
          {getSubNavTitle(currentLocation.pathname)}
        </div>
        <div className="flex flex-row space-x-2 gap-3">
          {ExpensesRoutes.map((item, index) => (
            <TooltipComponent key={index} title={item.title}>
              <NavLink to={item.path} className="btn btn-square btn-outline ">
                {item.icon}
              </NavLink>
            </TooltipComponent>
          ))}
        </div>
      </div>
      <div className="overflow-scroll h-[90%]">
        <Outlet />
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

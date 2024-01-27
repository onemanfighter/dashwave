import { NavLink, Outlet } from "react-router-dom";
import TooltipComponent from "../../../../components/tooltip/TooltipComponent";
import EditIcon from "../../../../assets/icons/project_icon/EditIcon";
import { AddIcon } from "../../../../assets/icons/project_icon/AddIcon";
import OverviewIcon from "../../../../assets/icons/cred_icon/OverviewIcon";
import DeleteIcon from "../../../../assets/icons/cred_icon/DeleteIcon";

export interface IExpenseScreenProps {}

const ExpensesRoutes = [
  { title: "Expenses overview", icon: <OverviewIcon />, path: "preview" },
  { title: "Add expense", icon: <AddIcon />, path: "add" },
  { title: "Edit expense", icon: <EditIcon />, path: "edit" },
  { title: "Delete expense", icon: <DeleteIcon />, path: "delete" },
];

export default function ExpenseScreen(props: IExpenseScreenProps) {
  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-1 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-xl font-semibold mx-4">Expenses</div>
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

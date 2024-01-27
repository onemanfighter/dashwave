import { NavLink, Outlet } from "react-router-dom";
import TooltipComponent from "../../../../components/tooltip/TooltipComponent";
import { AddIcon } from "../../../../assets/icons/project_icon/AddIcon";
import EditIcon from "../../../../assets/icons/project_icon/EditIcon";
import PreviewIcon from "../../../../assets/icons/project_icon/PreviewIcon";
import DeleteIcon from "../../../../assets/icons/cred_icon/DeleteIcon";

export interface IProjectsScreenProps {}

const ProjectRoutes = [
  { title: "Project preview", icon: <PreviewIcon />, path: "preview" },
  { title: "Add project", icon: <AddIcon />, path: "add" },
  { title: "Edit project", icon: <EditIcon />, path: "edit" },
  { title: "Delete project", icon: <DeleteIcon />, path: "delete" },
];

export default function ProjectsScreen(props: IProjectsScreenProps) {
  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-1 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-xl font-semibold mx-4">Projects</div>
        <div className="flex flex-row space-x-2 gap-3">
          {ProjectRoutes.map((item, index) => (
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

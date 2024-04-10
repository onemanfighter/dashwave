/**
 * Author: Amit raikwar
 * Last updated: 05 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink, Outlet, useLocation } from "react-router-dom";
import TooltipComponent from "../../../../components/tooltip/TooltipComponent";
import { AddIcon, DeleteIcon, EditIcon, PreviewIcon } from "../../../../assets";
import getSubNavTitle from "../../../../util/nav/NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../data_store/Store";
import { useEffect } from "react";
import { getAllProjects } from "../../../../service/supabase/supastore/projects/ProjectsStoreApi";
import { addProjects } from "../../../../data_store/slice/projects/ProjectsSlice";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Props for the ProjectsScreen component.
 */
interface IProjectsScreenProps {}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project screen routes.
 */
const ProjectRoutes = [
  { title: "Project preview", icon: <PreviewIcon />, path: "preview" },
  { title: "Add project", icon: <AddIcon />, path: "add" },
  { title: "Edit project", icon: <EditIcon />, path: "edit" },
  { title: "Delete project", icon: <DeleteIcon />, path: "delete" },
];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the projects screen component.
 * @param props The props for the projects screen component.
 * @returns The projects screen component.
 */
function ProjectsScreen(props: IProjectsScreenProps) {
  const dispatch = useDispatch();
  const currentLocation = useLocation();
  const userId = useSelector((state: RootState) => state.auth.userData.userId);

  // Making network request to get all projects.
  useEffect(() => {
    getAllProjects(userId, (projectsData) =>
      dispatch(addProjects(projectsData))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userId]);

  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-1 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-xl font-semibold mx-4">
          {getSubNavTitle(currentLocation.pathname)}
        </div>
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ProjectsScreen component.
export default ProjectsScreen;
export type { IProjectsScreenProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

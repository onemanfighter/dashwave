import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TooltipComponent } from '@dash-ui';
import getSubNavTitle from '../../../../util/nav/NavTitle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProjects } from '@service/supabase/supastore/projects/ProjectsStoreApi';
import { AddIcon, DeleteIcon, EditIcon, PreviewIcon } from '@assets';
import { ProjectSelectorAction } from '@store/selectors/project_selector';
import { appStore } from '@zustand_store';
import { authSelector, useShallow } from '@selectors';

/**
 * Props for the ProjectsScreen component.
 */
interface IProjectsScreenProps {}

/**
 * Project screen routes.
 */
const ProjectRoutes = [
    { title: 'Project preview', icon: <PreviewIcon />, path: 'preview' },
    { title: 'Add project', icon: <AddIcon />, path: 'add' },
    { title: 'Edit project', icon: <EditIcon />, path: 'edit' },
    { title: 'Delete project', icon: <DeleteIcon />, path: 'delete' },
];

/**
 * Component definition for the projects screen component.
 * @param props The props for the projects screen component.
 * @returns The projects screen component.
 */
function ProjectsScreen(props: IProjectsScreenProps) {
    const dispatch = useDispatch();
    const currentLocation = useLocation();

    const { userId } = appStore(useShallow(authSelector));
    const { addProjectsAction } = ProjectSelectorAction(dispatch);

    // Making network request to get all projects.
    useEffect(() => {
        getAllProjects(userId, (projectsData) =>
            addProjectsAction(projectsData)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    return (
        <div className="h-full">
            <div className=" m-2 bg-primary-content p-1 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
                <div className="text-xl font-semibold mx-4">
                    {getSubNavTitle(currentLocation.pathname)}
                </div>
                <div className="flex flex-row space-x-2 gap-3">
                    {ProjectRoutes.map((item, index) => (
                        <TooltipComponent key={index} title={item.title}>
                            <NavLink
                                to={item.path}
                                className="btn btn-square btn-outline "
                            >
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

// Export the ProjectsScreen component.
export default ProjectsScreen;
export type { IProjectsScreenProps };

import { ProjectData } from '@service/supabase/supastore/projects/ProjectsCollection';
import { projectsSlice } from '@store/slice/projects/ProjectsSlice';
import { AppDispatch, RootState } from '@store/store_state';

export const ProjectSelector = (state: RootState) => {
    return { projects: state.projects };
};

export const ProjectSelectorAction = (dispatch: AppDispatch) => {
    const {
        addProjects,
        addSingleProject,
        removeProjects,
        updateSingleProject,
    } = projectsSlice.actions;
    return {
        addProjectsAction: (projects: ProjectData[]) => {
            dispatch(addProjects(projects));
        },
        addSingleProjectAction: (project: ProjectData) => {
            dispatch(addSingleProject(project));
        },
        removeProjectsAction: (projectId: string) => {
            dispatch(removeProjects(projectId));
        },
        updateSingleProjectAction: (project: ProjectData) => {
            dispatch(updateSingleProject(project));
        },
    };
};

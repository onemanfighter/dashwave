import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectData } from '../../../service/supabase/supastore/projects/ProjectsCollection';
import {
    getProjectsKeyData,
    removeProjectsKeyData,
    storeProjectsKeyData,
} from '../../../service/local_storage/projects/ProjectStorageApi';

/**
 * Initial projects data.
 */
const initialProjects: ProjectData[] = [];

const PROJECTS = 'projects';

/**
 * The all project slice.
 */
export const projectsSlice = createSlice({
    name: PROJECTS,
    initialState: getLocalProjectData(),
    reducers: {
        addProjects: (_state, action: PayloadAction<ProjectData[]>) => {
            storeProjectsKeyData(action.payload);
            return action.payload;
        },
        addSingleProject: (state, action: PayloadAction<ProjectData>) => {
            state.push(action.payload);
        },
        updateSingleProject: (state, action: PayloadAction<ProjectData>) => {
            const index = state.findIndex(
                (project) => project.projectId === action.payload.projectId
            );
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        removeProjects: (_state, _action: PayloadAction<string>) => {
            removeProjectsKeyData();
            return [];
        },
    },
});

/**
 * Get single project.
 * @param state The state of the project slice.
 * @param projectId The project id.
 * @returns The project data.
 */
const getSingleProject = (state: ProjectData[], projectId: string) => {
    return state.find((project) => project.projectId === projectId);
};

/**
 * Get local project data.
 * @returns The project data.
 */
function getLocalProjectData(): ProjectData[] {
    const data = getProjectsKeyData();
    if (data) {
        return data;
    }
    return initialProjects;
}

// Export the profile slice.
export const {
    addProjects,
    addSingleProject,
    updateSingleProject,
    removeProjects,
} = projectsSlice.actions;
export default projectsSlice.reducer;

export { getSingleProject };

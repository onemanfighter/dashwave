import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ProjectCard, getProjectCardData } from 'components';

/**
 * Component definition for the project main screen.
 * @returns The ProjectMainScreen component.
 */
function ProjectMainScreen() {
    const projectData = useSelector((state: RootState) => state.projects);

    return (
        <div className="m-2">
            <div className=" gap-2 flex flex-wrap justify-around">
                {projectData.map((project, index) => (
                    <div key={index}>
                        <ProjectCard data={getProjectCardData(project)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Export the ProjectMainScreen component.
export default ProjectMainScreen;

import { useSelector } from 'react-redux';
import { ProjectCard, getProjectCardData } from 'components';
import { ProjectSelector } from 'store/selectors/project_selector';

/**
 * Component definition for the project main screen.
 * @returns The ProjectMainScreen component.
 */
function ProjectMainScreen() {
    const { projects: projectData } = useSelector(ProjectSelector);

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

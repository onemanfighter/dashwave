import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectCard, getProjectCardData } from '@dash-ui';
import { projectsSelector, useShallow } from '@selectors';
import { appStore } from '@store';

type IProjectEditScreenProps = {};

const ProjectEditScreen = (props: IProjectEditScreenProps) => {
    const { projectData } = appStore(useShallow(projectsSelector));
    const initialProjectId = projectData[0].projectId;
    const [selectedProjectId, setSelectedProjectId] =
        useState<string>(initialProjectId);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setSelectedProjectId(id);
        } else {
            setSelectedProjectId(initialProjectId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlerProjectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedProjectId(event.target.value);
    };

    return (
        <div className="overflow-auto ">
            <select
                className="select select-bordered w-full max-w-xs"
                onChange={handlerProjectChange}
            >
                <option disabled selected>
                    Who shot first?
                </option>
                {projectData.map((project, index) => (
                    <option key={index} value={project.projectId}>
                        {project.projectName}
                    </option>
                ))}
            </select>
            <div className="m-2">
                <div className=" gap-2 flex flex-wrap justify-around">
                    <div>
                        <ProjectCard
                            data={getProjectCardData(
                                projectData.find(
                                    (project) =>
                                        project.projectId === selectedProjectId
                                )!
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the ProjectEditScreen component.
export default ProjectEditScreen;
export type { IProjectEditScreenProps };

/**
 * Author: Amit raikwar
 * Last updated: 05 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink } from "react-router-dom";
import { ProjectData } from "../../service/supabase/supastore/projects/ProjectsCollection";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project card props.
 * @param data The project card data.
 */
interface IProjectCardProps {
  data: ProjectCardData;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project card data type definition.
 *
 * @param title The project title.
 * @param description The project description.
 * @param image The project image.
 * @param icon The project icon.
 * @param path The project path.
 * @param projectLiveLink The project live link.
 * @param githubLink The project github link.
 * @param isLive The project is live.
 * @param completed The project completed.
 */
interface ProjectCardData {
  title: string;
  description: string;
  image: string;
  icon: string;
  path: string;
  projectLiveLink: string;
  githubLink: string;
  isLive: boolean;
  completed: number;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project card component.
 * @param propsData The project card props.
 * @returns The project card component.
 */
function ProjectCard(propsData: IProjectCardProps) {
  const props = propsData.data;
  return (
    <div className="card w-[360px] bg-base-100 shadow-xl outline-double">
      <figure>
        {props.image ? (
          <img src={props.image} alt={props.title} loading="lazy" />
        ) : (
          <div className="skeleton w-[360px] h-[200px] mx-2 mt-2"></div>
        )}
      </figure>
      <div className="card-body">
        <div className="flex flex-row justify-between items-center p-2 drop-shadow-lg border rounded-xl">
          <TitleAndLiveBadge
            title={props.title}
            isLive={props.isLive}
            liveLink={props.projectLiveLink}
          />
          {props.icon ? (
            <img src={props.icon} alt={props.title} className="w-10 h-10" />
          ) : (
            <div className="skeleton w-16 h-16 rounded-full"></div>
          )}
        </div>
        <p>{props.description}</p>
        <div className="flex flex-row items-center justify-between">
          <progress
            className="progress progress-primary w-[80%] mt-2"
            value={props.completed}
            max="100"
          ></progress>
          <div className="text-primary text-lg font-semibold">
            {props.completed}%
          </div>
        </div>
        <div className="card-actions justify-between mt-2 ">
          <a
            href={props.githubLink}
            target="_blank"
            className="btn btn-outline"
            rel="noreferrer"
          >
            Project link
          </a>
          <NavLink to={props.path} className="btn btn-outline btn-primary">
            See preview
          </NavLink>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Title and live badge internal component.
function TitleAndLiveBadge(props: {
  title: string;
  isLive: boolean;
  liveLink: string;
}) {
  return (
    <div className="flex flex-row justify-start items-center">
      <h2 className="card-title">
        <a
          href={`http://${props.liveLink}`}
          target="_blank"
          rel="noreferrer"
          className=" hover:text-primary hover: duration-75"
        >
          {props.title}
        </a>
      </h2>
      <div>
        {props.isLive && (
          <span className="badge badge-success animate-pulse duration-75 m-1">
            Live
          </span>
        )}
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Get the project card data.
 * @param project The project data.
 * @returns The project card data.
 */
function getProjectCardData(project: ProjectData): ProjectCardData {
  return {
    title: project.projectName,
    description: project.projectDesc,
    icon: project.projectIcon,
    image: project.images && project.images.length > 0 ? project.images[0] : "",
    path: project.projectId,
    projectLiveLink: project.projectLink,
    githubLink: project.githubLink,
    isLive: project.isLive,
    completed: project.projectCompleted,
  };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ProjectCard component.
export default ProjectCard;
export type { IProjectCardProps, ProjectCardData };
export { getProjectCardData };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

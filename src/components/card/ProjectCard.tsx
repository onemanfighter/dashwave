/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink } from "react-router-dom";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project card props.
 */
interface IProjectCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  previewLink: string;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project card component.
 */
const defaultProps: IProjectCardProps = {
  title: "Project Title",
  description: "Project Description",
  image:
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  path: "/",
  previewLink: "/",
};

function ProjectCard() {
  const props = defaultProps;
  return (
    <div>
      <div className="card w-[360px] bg-base-100 shadow-xl">
        <figure>
          <img src={props.image} alt={props.title} loading="lazy" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-between mt-2 ">
            <NavLink to={props.path} className="btn btn-outline">
              Project link
            </NavLink>
            <NavLink to={props.path} className="btn btn-outline btn-primary">
              See project
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ProjectCard component.
export default ProjectCard;
export type { IProjectCardProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

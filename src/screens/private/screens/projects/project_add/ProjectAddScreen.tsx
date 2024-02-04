/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import ProjectCard from "../../../../../components/card/ProjectCard";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the project edit screen props.
 */
interface IProjectEditScreenProps {}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the project edit screen.
 * @param props The props for the project edit screen.
 * @returns The ProjectEditScreen component.
 */
function ProjectAddScreen(props: IProjectEditScreenProps) {
  const dummyData = [1, 1, 1, 1, 1, 1];

  return <div className="overflow-auto h-screen"></div>;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exports for the ProjectEditScreen component.
export default ProjectAddScreen;
export type { IProjectEditScreenProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

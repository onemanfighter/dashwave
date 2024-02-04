/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import ProjectCard from "../../../../../components/card/ProjectCard";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the project main screen props.
 */
interface IProjectMainScreenProps {}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the project main screen.
 * @param props The props for the project main screen.
 * @returns The ProjectMainScreen component.
 */
function ProjectMainScreen(props: IProjectMainScreenProps) {
  const dummyData = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="m-2">
      <div className=" gap-2 flex flex-wrap justify-around">
        {dummyData.map((item, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </div>
  );
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ProjectMainScreen component.
export default ProjectMainScreen;
export type { IProjectMainScreenProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

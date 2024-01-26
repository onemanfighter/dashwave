import { NavLink } from "react-router-dom";
import ProjectCard from "../../../../../components/card/ProjectCard";

export interface IProjectMainScreenProps {}

export default function ProjectMainScreen(props: IProjectMainScreenProps) {
  const dummyData = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="m-2">
      <div className="flex flex-row justify-end p-1 m-1">
        <NavLink to={"add"} className={"btn btn-outline"}>
          Add new project
        </NavLink>
      </div>
      <div className=" gap-2 flex flex-wrap justify-around">
        {dummyData.map((item, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </div>
  );
}

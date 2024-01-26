import { Outlet } from "react-router-dom";

export interface IProjectsScreenProps {}

export default function ProjectsScreen(props: IProjectsScreenProps) {
  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-2 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold ">Project</div>
      </div>
      <div className="overflow-scroll h-[85%]">
        <Outlet />
      </div>
    </div>
  );
}

import ProjectCard from "../../../../../components/card/ProjectCard";

export interface IAppProps {}

export default function ProjectPreviewScreen(props: IAppProps) {
  const dummyData = [1, 1, 1, 1, 1, 1];

  return (
    <div className="overflow-auto ">
      {dummyData.map((item, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
}

import ProjectCard from "../../../../../components/card/ProjectCard";

export interface IProjectEditScreenProps {}

export default function ProjectAddScreen(props: IProjectEditScreenProps) {
  const dummyData = [1, 1, 1, 1, 1, 1];

  return (
    <div className="overflow-auto h-screen">
      {dummyData.map((item, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
}

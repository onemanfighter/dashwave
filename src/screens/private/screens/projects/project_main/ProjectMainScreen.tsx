import ProjectCard from "../../../../../components/card/ProjectCard";

export interface IProjectMainScreenProps {}

export default function ProjectMainScreen(props: IProjectMainScreenProps) {
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

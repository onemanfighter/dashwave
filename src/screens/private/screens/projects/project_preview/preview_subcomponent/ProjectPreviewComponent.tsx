/* eslint-disable jsx-a11y/iframe-has-title */
/**
 * Author : Amit raikwar
 * Last updated : 20 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useDispatch } from "react-redux";
import { GithubIcon } from "../../../../../../assets/icons/social_icon/GithubIcon";
import HostingerIcon from "../../../../../../assets/icons/social_icon/HostingerIcon";
import { WebsiteIcon } from "../../../../../../assets/icons/social_icon/WebsiteIcon";
import ImagePreviewModalButton from "../../../../../../components/image_preview_modal/ImagePreviewButton";
import { setModalImage } from "../../../../../../data_store/slice/ImageModalSlice";
import { ProjectData } from "../../../../../../service/supabase/supastore/projects/ProjectsCollection";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project preview sub-component props.
 * @param project The project data.
 */
interface IProjectPreviewComponentProps {
  project: ProjectData;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project preview component.
 * @param props The project preview component props.
 * @returns The project preview component.
 */
function ProjectPreviewComponent(props: IProjectPreviewComponentProps) {
  return (
    <div className="bg-base-100 shadow-xl outline-double rounded-md w-full px-4  py-1 h-full">
      <div className="w-full grid grid-cols-2">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex flex-row items-start justify-between">
            <ProjectNameComponent
              projectIcon={props.project.projectIcon}
              projectName={props.project.projectName}
            />
            <LiveBadgeComponent isLive={props.project.isLive} />
          </div>
          {/* Link buttons */}
          <ProjectLinksComponent
            projectLink={props.project.projectLink}
            githubLink={props.project.githubLink}
            hostingerLink={props.project.hostingerLink}
          />
          {/* Project description */}
          <ProjectDescriptionComponent
            description={props.project.projectDesc}
          />
          {/* Project images */}
          <ProjectImagesComponent
            images={props.project.images}
            title={props.project.projectName}
          />
        </div>
        {/** Mockup part */}
        <ProjectMockupComponent projectLink={props.project.projectLink} />
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project name component.
 */
function ProjectNameComponent(props: {
  projectName: string;
  projectIcon: string;
}) {
  return (
    <div className="flex flex-row items-start justify-center">
      <img
        src={props.projectIcon}
        alt={props.projectName}
        loading="lazy"
        className="w-[100px] h-[100px] rounded-md outline p-1 mt-4 hover:scale-110 transition-all duration-300 ease-in-out"
      />
      <div className="p-4">
        <h1 className="text-4xl font-bold textarea-ghost">
          {props.projectName}
        </h1>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project description component.
 */
function ProjectDescriptionComponent(props: { description: string }) {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-xl font-semibold">Project description</h2>
      <p className="text-base">{props.description}</p>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Live badge component.
 */
function LiveBadgeComponent(props: { isLive: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      {props.isLive ? (
        <span className="badge badge-success animate-pulse duration-75 m-1">
          Live
        </span>
      ) : (
        <span className="badge badge-error m-1">Not live</span>
      )}
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Project links component props.
interface IProjectLinksComponentProps {
  projectLink: string;
  githubLink: string;
  hostingerLink: string;
}
/**
 * Project links component.
 */
function ProjectLinksComponent(props: IProjectLinksComponentProps) {
  return (
    <div className="flex flex-row justify-between p-2">
      <a
        href={props.projectLink}
        target="_blank"
        rel="noreferrer"
        className="btn btn-success justify-between btn-outline w-[190px]"
      >
        <WebsiteIcon />
        Project live link
      </a>
      <a
        href={props.githubLink}
        target="_blank"
        rel="noreferrer"
        className="btn justify-between px-3 btn-outline w-[190px]"
      >
        <GithubIcon />
        Github repo link
      </a>
      <a
        href={props.hostingerLink}
        target="_blank"
        rel="noreferrer"
        className="btn btn-outline btn-info justify-between px-4 w-[190px]"
      >
        <HostingerIcon />
        Hostinger link
      </a>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Project images component props.
interface IProjectImagesComponentProps {
  images: string[];
  title: string;
}

/**
 * Component for the projects images.
 */
function ProjectImagesComponent(props: IProjectImagesComponentProps) {
  const dispatch = useDispatch();

  const onImageClickHandler = (image: string) => {
    dispatch(setModalImage(image));
  };

  return (
    <div className="flex flex-row items-start overflow-scroll gap-3 p-2 ">
      {props.images.map((image, index) => (
        <ImagePreviewModalButton
          onClickHandler={() => {
            onImageClickHandler(image);
          }}
        >
          <img
            key={index}
            src={image}
            alt={props.title}
            loading="lazy"
            className="w-[150px] h-[100px] rounded-md outline p-1 mt-4 hover:scale-105 hover:cursor-pointer"
          />
        </ImagePreviewModalButton>
      ))}
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Project mockup component.
 */
function ProjectMockupComponent(props: { projectLink: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mockup-browser border border-base-300 w-[100%]">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">
            {props.projectLink}
          </div>
        </div>
        <div className="flex justify-center bg-base-200">
          <iframe
            width={1500}
            height={400}
            style={{ border: 0 }}
            loading="lazy"
            className=""
            src={"http://" + props.projectLink}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the project preview component.
export default ProjectPreviewComponent;
export type { IProjectPreviewComponentProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

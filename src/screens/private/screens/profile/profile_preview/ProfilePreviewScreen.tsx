import { useSelector } from "react-redux";
import TitleCard from "../../../../../components/card/TitleCard";
import { RootState } from "../../../../../data_store/Store";
import { SocialLink } from "../../../../../service/firebase/firestore/UserCollection";
import SocialIcon from "../../../../../assets/icons/social_icon/IconApi";
import TooltipComponent from "../../../../../components/tooltip/TooltipComponent";
import NameIcon from "../../../../../assets/icons/profile_icon/NameIcon";
import EmailIcon from "../../../../../assets/icons/profile_icon/EmailIcon";
import PlaceIcon from "../../../../../assets/icons/profile_icon/PlaceIcon";
import TitleIcon from "../../../../../assets/icons/profile_icon/TitleIcon";
import DateIcon from "../../../../../assets/icons/profile_icon/DateIcon";
import ExperienceIcon from "../../../../../assets/icons/profile_icon/ExperienceIcon";

const TextStyle =
  "text-lg font-semibold mt-2 outline rounded-md p-2 flex flex-row items-center gap-2";

export default function ProfilePreviewScreen() {
  const profileData = useSelector((state: RootState) => state.profile);

  return (
    <div className=" m-2 h-full">
      <TitleCard title="Profile preview" topMargin="mt-2">
        <div className="grid grid-cols-1">
          <div className="flex flex-row items-start justify-between">
            <div className="grid grid-cols-1 m-auto">
              <div className={TextStyle}>
                <NameIcon /> {profileData.fname} {profileData.lname}
              </div>
              <div className={TextStyle}>
                <EmailIcon /> {profileData.email}
              </div>
              <div className={TextStyle}>
                <PlaceIcon /> {profileData.place}
              </div>
              <div className={TextStyle}>
                <TitleIcon /> {profileData.designation}
              </div>
              <div className={TextStyle}>
                <DateIcon /> {profileData.dateOfBirth}
              </div>
              <div className={TextStyle}>
                <ExperienceIcon /> {profileData.yearOfExp} Years
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="w-64 h-64 items-center mx-auto rounded-full bg-base-200 btn btn-square btn-outline">
              <img
                src={profileData.profile}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className=" flex flex-row justify-evenly w-full ">
          <GetSocialLink socialLinks={profileData.socialLinks} />
        </div>
      </TitleCard>
    </div>
  );
}

interface SocialLinkProps {
  socialLinks: Array<SocialLink>;
}

function GetSocialLink(props: SocialLinkProps) {
  return (
    <>
      {props.socialLinks.map((socialLink, index) => {
        const disabled = socialLink.link === "";
        return (
          <TooltipComponent title={socialLink.type} disable={disabled}>
            <a
              href={socialLink.link}
              className={`btn btn-ghost btn-square ${
                disabled ? " btn-disabled bg-blend-overlay opacity-50" : ""
              }`}
            >
              <SocialIcon socialType={socialLink.type} />
            </a>
          </TooltipComponent>
        );
      })}
    </>
  );
}

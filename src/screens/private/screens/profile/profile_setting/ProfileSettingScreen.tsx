import { useDispatch, useSelector } from "react-redux";
import InputText from "../../../../../components/text/InputText";
import { showNotification } from "../../../../../data_store/slice/NotificationSlice";
import TitleCard from "../../../../../components/card/TitleCard";
import { RootState } from "../../../../../data_store/Store";
import { SocialType } from "../../../../../service/firebase/firestore/UserCollection";
import FacebookIcon from "../../../../../assets/icons/social_icon/FacebookIcon";
import { InstagramIcon } from "../../../../../assets/icons/social_icon/InstagramIcon";
import { GithubIcon } from "../../../../../assets/icons/social_icon/GithubIcon";
import { LinkedInIcon } from "../../../../../assets/icons/social_icon/LinkinIcon";
import { XIcon } from "../../../../../assets/icons/social_icon/XIcon";
import { YoutubeIcon } from "../../../../../assets/icons/social_icon/YoutubeIcon";
import { WebsiteIcon } from "../../../../../assets/icons/social_icon/WebsiteIcon";

interface UpdateFormValue {
  updateType: string;
  value: string;
}

function ProfileSettingScreen() {
  const profileData = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const showNotificationHandler = () => {
    dispatch(
      showNotification({
        title: "Profile Updated",
        description: "Your profile has been updated successfully!",
        type: "success",
        duration: 5000,
      })
    );
  };

  const updateProfile = () => {
    showNotificationHandler();
  };

  const updateFormValue = ({ updateType, value }: UpdateFormValue) => {
    console.log(updateType, value);
  };

  const TopSideButton = () => {
    return (
      <button
        className="btn btn-primary float-right"
        onClick={() => updateProfile()}
      >
        Update
      </button>
    );
  };
  return (
    <div className="m-2 overflow-scroll">
      <TitleCard
        title="Profile Settings"
        topMargin="mt-2"
        TopSideButtons={<TopSideButton />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="First name"
            defaultValue={profileData.fname}
            updateType="fName"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Last name"
            defaultValue={profileData.lname}
            updateType="lName"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email Id"
            updateType="email"
            defaultValue={profileData.email}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Designation"
            updateType="designation"
            defaultValue={profileData.designation}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Place"
            updateType="place"
            defaultValue={profileData.place}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Year of Experience"
            updateType="yearOfExp"
            defaultValue={profileData.yearOfExp.toString()}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Date of Birth"
            updateType="dateOfBirth"
            defaultValue={profileData.dateOfBirth}
            updateFormValue={updateFormValue}
          />
          <div className=" flex flex-col item-center">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="file"
              className="file-input w-full max-w-xs border border-base-300"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className={`text-xl font-semibold inline-block`}>Social Links</div>
        <div className="divider col-span-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<FacebookIcon />} />
            <InputText
              labelTitle="Facebook"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.Facebook
                )?.link
              }
              updateType="facebook"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<InstagramIcon />} />
            <InputText
              labelTitle="Instagram"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.Instagram
                )?.link
              }
              updateType="instagram"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<GithubIcon />} />
            <InputText
              labelTitle="Github"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.Github
                )?.link
              }
              updateType="github"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<LinkedInIcon />} />
            <InputText
              labelTitle="LinkedIn"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.Linkedin
                )?.link
              }
              updateType="linkedin"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<XIcon />} />
            <InputText
              labelTitle="X(Twitter)"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.X
                )?.link
              }
              updateType="x"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<YoutubeIcon />} />
            <InputText
              labelTitle="Youtube"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.Youtube
                )?.link
              }
              updateType="youtube"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<WebsiteIcon />} />
            <InputText
              labelTitle="Website"
              defaultValue={
                profileData.socialLinks.find(
                  (item) => item.type === SocialType.Website
                )?.link
              }
              updateType="website"
              updateFormValue={updateFormValue}
            />
          </div>
        </div>
        <TopSideButton />
      </TitleCard>
    </div>
  );
}

function IconBorderProvider(props: { children: any }) {
  return (
    <div className="btn btn-square mx-1 drop-shadow-md">{props.children}</div>
  );
}

export default ProfileSettingScreen;

import { useDispatch, useSelector } from "react-redux";
import InputText from "../../../../../components/text/InputText";
import { showNotification } from "../../../../../data_store/slice/NotificationSlice";
import TitleCard from "../../../../../components/card/TitleCard";
import { RootState } from "../../../../../data_store/Store";
import {
  SocialType,
  UserProfileData,
} from "../../../../../service/supabase/supastore/user_profile/UserCollection";
import FacebookIcon from "../../../../../assets/icons/social_icon/FacebookIcon";
import { InstagramIcon } from "../../../../../assets/icons/social_icon/InstagramIcon";
import { GithubIcon } from "../../../../../assets/icons/social_icon/GithubIcon";
import { LinkedInIcon } from "../../../../../assets/icons/social_icon/LinkinIcon";
import { XIcon } from "../../../../../assets/icons/social_icon/XIcon";
import { YoutubeIcon } from "../../../../../assets/icons/social_icon/YoutubeIcon";
import { WebsiteIcon } from "../../../../../assets/icons/social_icon/WebsiteIcon";
import { useState } from "react";
import { userProfileDataUpdate } from "../../../../../service/supabase/supastore/user_profile/UserProfileStoreApi";
import { setProfile } from "../../../../../data_store/slice/ProfileSlice";
import { getAuthUserID } from "../../../../../data_store/slice/AuthSlice";
import NotificationButton, {
  NotificationButtonType,
} from "../../../../../components/notification/NotificationButton";

interface UpdateFormValue {
  updateType: string;
  value: string;
}

function ProfileSettingScreen() {
  const profileData = useSelector((state: RootState) => state.profile);
  const authUserId = useSelector(
    (state: RootState) => state.auth.userData.userId
  );
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userProfileState, setUserProfileState] =
    useState<UserProfileData>(profileData);
  const dispatch = useDispatch();

  const showNotificationHandler = () => {
    dispatch(
      showNotification({
        title: "Profile Updated",
        description: "Your profile has been updated successfully!",
      })
    );
  };

  const profileSavingHandler = (profile: UserProfileData) => {
    dispatch(setProfile(profile));
  };

  const updateProfile = () => {
    setLoading(true);
    userProfileDataUpdate(
      getAuthUserID(),
      userProfileState,
      profileSavingHandler,
      showNotificationHandler
    );
    setLoading(false);
  };

  const updateFormValue = ({ updateType, value }: UpdateFormValue) => {
    setErrorMessage("");
    setUserProfileState({ ...userProfileState, [updateType]: value });
  };

  const TopSideButton = () => {
    return (
      <NotificationButton
        buttonText={"Update"}
        buttonType={NotificationButtonType.INFO}
        isButtonOutline={true}
        onClickHandler={() => {
          dispatch(
            showNotification({
              title: "Profile Update",
              description: "Are you sure you want to update your profile?",
              onConfirm: updateProfile,
            })
          );
        }}
      />
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
            type="text"
            labelTitle="First name"
            defaultValue={profileData.fname}
            updateType="fname"
            updateFormValue={updateFormValue}
          />
          <InputText
            type="text"
            labelTitle="Last name"
            defaultValue={profileData.lname}
            updateType="lname"
            updateFormValue={updateFormValue}
          />
          <InputText
            type="email"
            labelTitle="Email Id"
            updateType="email"
            defaultValue={profileData.email}
            updateFormValue={updateFormValue}
          />
          <InputText
            type="text"
            labelTitle="Designation"
            updateType="designation"
            defaultValue={profileData.designation}
            updateFormValue={updateFormValue}
          />
          <InputText
            type="text"
            labelTitle="Place"
            updateType="place"
            defaultValue={profileData.place}
            updateFormValue={updateFormValue}
          />
          <InputText
            type="number"
            labelTitle="Year of Experience"
            updateType="yearOfExp"
            defaultValue={profileData.yearOfExp.toString()}
            updateFormValue={updateFormValue}
          />
          <InputText
            type="date"
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
              defaultValue={profileData.socialLinks.get(SocialType.Facebook)}
              updateType="facebook"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<InstagramIcon />} />
            <InputText
              labelTitle="Instagram"
              defaultValue={profileData.socialLinks.get(SocialType.Instagram)}
              updateType="instagram"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<GithubIcon />} />
            <InputText
              labelTitle="Github"
              defaultValue={profileData.socialLinks.get(SocialType.Github)}
              updateType="github"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<LinkedInIcon />} />
            <InputText
              labelTitle="LinkedIn"
              defaultValue={profileData.socialLinks.get(SocialType.Linkedin)}
              updateType="linkedin"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<XIcon />} />
            <InputText
              labelTitle="X(Twitter)"
              defaultValue={profileData.socialLinks.get(SocialType.X)}
              updateType="x"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<YoutubeIcon />} />
            <InputText
              labelTitle="Youtube"
              defaultValue={profileData.socialLinks.get(SocialType.Youtube)}
              updateType="youtube"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="flex flex-row justify-center items-end">
            <IconBorderProvider children={<WebsiteIcon />} />
            <InputText
              labelTitle="Website"
              defaultValue={profileData.socialLinks.get(SocialType.Website)}
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

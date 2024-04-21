import { useDispatch, useSelector } from 'react-redux';
import {
    NotificationButton,
    NotificationButtonType,
    PageLoadingComponent,
    TitleCard,
} from 'components';
import {
    SocialType,
    UserProfileData,
} from '../../../../../service/supabase/supastore/user_profile/UserCollection';

import { useState } from 'react';
import { userProfileDataUpdate } from '../../../../../service/supabase/supastore/user_profile/UserProfileStoreApi';
import { getSocialMediaLink } from '../../../../../util/Utils';
import { ToastAlertData } from 'provider';
import {
    FacebookIcon,
    InstagramIcon,
    GithubIcon,
    LinkedInIcon,
    XIcon,
    YoutubeIcon,
    WebsiteIcon,
} from 'assets';
import { InputText, InputType } from 'components';
import { showAlertWithTimeout, updateProfile, getAuthUserID } from 'store';
import { NotificationSelector } from 'store/selectors';
import { ProfileSelector } from 'store/selectors/profile';

/**
 * Type definition for the update form value.
 */
interface UpdateFormValue {
    updateType: string;
    value: string;
}

/**
 * The profile setting screen component.
 * @returns The ProfileSettingScreen component.
 */
function ProfileSettingScreen() {
    const { showNotificationAction } = useSelector(NotificationSelector);
    const { profile: profileData, updateProfileAction } =
        useSelector(ProfileSelector);
    const [loading, setLoading] = useState(false);
    const [userProfileState, setUserProfileState] =
        useState<UserProfileData>(profileData);
    const dispatch = useDispatch();

    const showSuccessAlertHandler = (toastAlertData: ToastAlertData) => {
        showAlertWithTimeout(dispatch, toastAlertData, 3000);
    };

    const profileSavingHandler = (profile: UserProfileData) => {
        updateProfileAction(profile);
    };

    const updateProfileHandler = () => {
        setLoading(true);
        userProfileDataUpdate(
            getAuthUserID(),
            userProfileState,
            profileSavingHandler,
            showSuccessAlertHandler
        );
        setLoading(false);
    };

    const updateFormValue = ({ updateType, value }: UpdateFormValue) => {
        setUserProfileState({ ...userProfileState, [updateType]: value });
    };

    const TopSideButton = () => {
        return (
            <NotificationButton
                buttonText={'Update'}
                buttonType={NotificationButtonType.INFO}
                isButtonOutline={true}
                onClickHandler={() => {
                    showNotificationAction({
                        title: 'Profile Update',
                        description:
                            'Are you sure you want to update your profile?',
                        onConfirm: updateProfileHandler,
                    });
                }}
            />
        );
    };
    return (
        <div className="m-2 overflow-scroll">
            {loading && <PageLoadingComponent />}
            <TitleCard
                title="Profile Settings"
                topMargin="mt-2"
                TopSideButtons={<TopSideButton />}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText
                        type={InputType.TEXT}
                        labelTitle="First name"
                        defaultValue={profileData.firstName}
                        updateType="fname"
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        type={InputType.TEXT}
                        labelTitle="Last name"
                        defaultValue={profileData.lastName}
                        updateType="lname"
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        type={InputType.EMAIL}
                        labelTitle="Email Id"
                        updateType="email"
                        defaultValue={profileData.email}
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        type={InputType.TEXT}
                        labelTitle="Designation"
                        updateType="designation"
                        defaultValue={profileData.designation}
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        type={InputType.TEXT}
                        labelTitle="Place"
                        updateType="place"
                        defaultValue={profileData.place}
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        type={InputType.NUMBER}
                        labelTitle="Year of Experience"
                        updateType="yearOfExp"
                        defaultValue={profileData.yearOfExp.toString()}
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        type={InputType.DATE}
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
                <div className={`text-xl font-semibold inline-block`}>
                    Social Links
                </div>
                <div className="divider col-span-2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<FacebookIcon />} />
                        <InputText
                            labelTitle="Facebook"
                            defaultValue={getSocialMediaLink(
                                profileData.socialLinks,
                                SocialType.Facebook
                            )}
                            updateType="facebook"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<InstagramIcon />} />
                        <InputText
                            labelTitle="Instagram"
                            defaultValue={
                                getSocialMediaLink(
                                    profileData.socialLinks,
                                    SocialType.Instagram
                                ) ?? ''
                            }
                            updateType="instagram"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<GithubIcon />} />
                        <InputText
                            labelTitle="Github"
                            defaultValue={getSocialMediaLink(
                                profileData.socialLinks,
                                SocialType.Github
                            )}
                            updateType="github"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<LinkedInIcon />} />
                        <InputText
                            labelTitle="LinkedIn"
                            defaultValue={getSocialMediaLink(
                                profileData.socialLinks,
                                SocialType.Linkedin
                            )}
                            updateType="linkedin"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<XIcon />} />
                        <InputText
                            labelTitle="X(Twitter)"
                            defaultValue={getSocialMediaLink(
                                profileData.socialLinks,
                                SocialType.X
                            )}
                            updateType="x"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<YoutubeIcon />} />
                        <InputText
                            labelTitle="Youtube"
                            defaultValue={getSocialMediaLink(
                                profileData.socialLinks,
                                SocialType.Youtube
                            )}
                            updateType="youtube"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-end">
                        <IconBorderProvider children={<WebsiteIcon />} />
                        <InputText
                            labelTitle="Website"
                            defaultValue={getSocialMediaLink(
                                profileData.socialLinks,
                                SocialType.Website
                            )}
                            updateType="website"
                            updateFormValue={updateFormValue}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <TopSideButton />
                </div>
            </TitleCard>
        </div>
    );
}

function IconBorderProvider(props: { children: any }) {
    return (
        <div className="btn btn-square mx-1 drop-shadow-md">
            {props.children}
        </div>
    );
}

// Export the ProfileSettingScreen component.
export default ProfileSettingScreen;

import { useDispatch, useSelector } from "react-redux";
import InputText from "../../../../components/text/InputText";
import { showNotification } from "../../../../data_store/slice/NotificationSlice";
import TitleCard from "../../../../components/card/TitleCard";
import { RootState } from "../../../../data_store/Store";

interface UpdateFormValue {
  updateType: string;
  value: string;
}

function ProfileSettingScreen() {
  const profileData = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  //
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

  return (
    <>
      <TitleCard title="Profile Settings" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Name"
            defaultValue={profileData.name}
            updateType="name"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email Id"
            updateType="email"
            defaultValue={profileData.email}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Title"
            updateType="title"
            defaultValue={profileData.title}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Place"
            updateType="place"
            defaultValue={profileData.place}
            updateFormValue={updateFormValue}
          />
        </div>
        <div className="divider"></div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Update
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettingScreen;

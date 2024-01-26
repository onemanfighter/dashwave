import { useSelector } from "react-redux";
import TitleCard from "../../../../components/card/TitleCard";
import { RootState } from "../../../../data_store/Store";

export default function ProfilePreviewScreen() {
  const profileData = useSelector((state: RootState) => state.profile);

  return (
    <div>
      <TitleCard title="Profile preview" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-base-200">
              <img
                src={profileData.profileImage}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-xl font-semibold mt-4">{profileData.name}</div>
            <div className="text-lg font-semibold mt-2">
              {profileData.place}
            </div>
            <div className="text-lg font-semibold mt-2">
              {profileData.title}
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </TitleCard>
    </div>
  );
}

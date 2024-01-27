import { NavLink, Outlet } from "react-router-dom";
import { SettingIcon } from "../../../assets/icons/profile_icon/SettingsIcon";
import { ProfileIcon } from "../../../assets/icons/profile_icon/ProfileIcon";
import { PasswordResetIcon } from "../../../assets/icons/profile_icon/PasswordResetIcon";
import TooltipComponent from "../../../components/tooltip/TooltipComponent";

export interface IProfileMainScreenProps {}

const ProfileRoutes = [
  { title: "Profile preview", icon: <ProfileIcon />, path: "preview" },
  { title: "Reset password", icon: <PasswordResetIcon />, path: "reset" },
  { title: "Profile setting", icon: <SettingIcon />, path: "settings" },
];

export default function ProfileMainScreen(props: IProfileMainScreenProps) {
  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-2 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold mx-4">Profile</div>
        <div className="flex flex-row space-x-2 gap-3">
          {ProfileRoutes.map((item, index) => (
            <TooltipComponent key={index} title={item.title}>
              <NavLink to={item.path} className="btn btn-square btn-outline ">
                {item.icon}
              </NavLink>
            </TooltipComponent>
          ))}
        </div>
      </div>
      <div className="overflow-scroll h-[90%]">
        <Outlet />
      </div>
    </div>
  );
}

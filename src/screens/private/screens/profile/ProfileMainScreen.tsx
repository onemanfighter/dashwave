import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SettingIcon } from "../../../../assets/icons/profile_icon/SettingsIcon";
import { ProfileIcon } from "../../../../assets/icons/profile_icon/ProfileIcon";
import { PasswordResetIcon } from "../../../../assets/icons/profile_icon/PasswordResetIcon";
import TooltipComponent from "../../../../components/tooltip/TooltipComponent";
import getSubNavTitle from "../../../../util/nav/NavTitle";

export interface IProfileMainScreenProps {}

const ProfileRoutes = [
  { title: "Profile preview", icon: <ProfileIcon />, path: "preview" },
  { title: "Reset password", icon: <PasswordResetIcon />, path: "reset" },
  { title: "Profile setting", icon: <SettingIcon />, path: "settings" },
];

export default function ProfileMainScreen(props: IProfileMainScreenProps) {
  const currentLocation = useLocation();
  return (
    <div className="h-full">
      <div className=" m-2 bg-primary-content p-1 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-xl font-semibold mx-4">
          {getSubNavTitle(currentLocation.pathname)}
        </div>
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

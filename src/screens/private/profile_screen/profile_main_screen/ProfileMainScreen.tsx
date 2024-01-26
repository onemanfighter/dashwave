import { Outlet } from "react-router-dom";

export interface IProfileMainScreenProps {}

export default function ProfileMainScreen(props: IProfileMainScreenProps) {
  return (
    <div>
      <div className=" m-2 bg-primary-content p-2 drop-shadow-md rounded-lg flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold ">Profile</div>
      </div>
      <div className=" m-2">
        <Outlet />
      </div>
    </div>
  );
}

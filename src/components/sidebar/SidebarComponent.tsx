import { NavLink } from "react-router-dom";
import { sidebarRoutes } from "../../router/sidebarRoutes/SidebarRoutes";

export interface ISidebarComponentProps {}

export default function SidebarComponent(props: ISidebarComponentProps) {
  return (
    <div className=" flex-col text-base-content">
      <ul className="menu p-4 w-full ">
        {/* Sidebar content here */}
        {sidebarRoutes.map((route, index) => {
          return (
            <li>
              <NavLink
                key={index}
                to={route.path}
                className={
                  " hover:bg-primary-content hover:outline-dotted hover:outline-primary"
                }
              >
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

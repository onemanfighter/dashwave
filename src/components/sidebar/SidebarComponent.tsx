import { NavLink } from "react-router-dom";
import { sidebarRoutes } from "../../router/sidebarRoutes/SidebarRoutes";
import HomeIcon from "../../assets/icons/sidebar_icons/HomeIcon";
import ProjectIcon from "../../assets/icons/sidebar_icons/ProjectIcon";
import PlanIcon from "../../assets/icons/sidebar_icons/PlanIcon";
import ExpenseIcon from "../../assets/icons/sidebar_icons/ExpenseIcon";
import GoalsIcon from "../../assets/icons/sidebar_icons/GoalsIcon";
import CredsIcon from "../../assets/icons/sidebar_icons/CredsIcon";
import { ProfileIcon } from "../../assets/icons/profile_icon/ProfileIcon";

export interface ISidebarComponentProps {}

export default function SidebarComponent(props: ISidebarComponentProps) {
  return (
    <div className=" flex-col text-base-content">
      <ul className="menu p-4 w-full ">
        {/* Sidebar content here */}
        {sidebarRoutes.map((route, index) => {
          return (
            <li className="mt-2" key={index}>
              <NavLink
                key={index}
                to={route.path}
                className={
                  " hover:bg-primary-content hover:outline-dotted hover:outline-primary"
                }
              >
                {getIcon(route.iconName)}
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Gets the icon for the sidebar.
 * @param icon The icon name.
 * @returns The icon component.
 */
function getIcon(icon: string) {
  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "projects":
      return <ProjectIcon />;
    case "plans":
      return <PlanIcon />;
    case "expenses":
      return <ExpenseIcon />;
    case "goals":
      return <GoalsIcon />;
    case "credentials":
      return <CredsIcon />;
    case "profile":
      return <ProfileIcon />;
    default:
      return null;
  }
}

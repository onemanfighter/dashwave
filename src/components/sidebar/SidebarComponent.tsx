/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink } from "react-router-dom";
import {
  ProfileRoute,
  sidebarRoutes,
} from "../../router/sidebarRoutes/SidebarRoutes";
import ProjectIcon from "../../assets/icons/sidebar_icons/ProjectIcon";
import PlanIcon from "../../assets/icons/sidebar_icons/PlanIcon";
import ExpenseIcon from "../../assets/icons/sidebar_icons/ExpenseIcon";
import GoalsIcon from "../../assets/icons/sidebar_icons/GoalsIcon";
import CredsIcon from "../../assets/icons/sidebar_icons/CredsIcon";
import { ProfileIcon } from "../../assets/icons/profile_icon/ProfileIcon";
import TooltipComponent from "../tooltip/TooltipComponent";
import LearningIcon from "../../assets/icons/sidebar_icons/LearningIcon";
import ResourceIcon from "../../assets/icons/sidebar_icons/ResourceIcon";
import HomeIcon from "../../assets/icons/sidebar_icons/HomeIcon";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Sidebar component props.
 */
interface ISidebarComponentProps {
  sideBarOpen: boolean;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Sidebar component.
 *
 * @param props  The sidebar component props.
 * @returns The sidebar component.
 */
function SidebarComponent(props: ISidebarComponentProps) {
  return (
    <div className=" flex-col text-base-content flex justify-between h-[95%]">
      <ul className="menu p-2 w-full ">
        {/* Sidebar content here */}
        {sidebarRoutes.map((route, index) => {
          return (
            <TooltipComponent
              key={index}
              title={route.name}
              position="tooltip-right"
              disable={props.sideBarOpen}
            >
              <li className="mt-2" key={index}>
                <NavLink
                  key={index}
                  to={route.path}
                  className={
                    " hover:bg-primary-content hover:outline-dotted hover:outline-primary"
                  }
                >
                  {getIcon(route.iconName)}
                  {props.sideBarOpen ? route.name : ""}
                </NavLink>
              </li>
            </TooltipComponent>
          );
        })}
      </ul>
      <ul className="menu p-2 w-full ">
        <TooltipComponent
          title={ProfileRoute.name}
          position="tooltip-right"
          disable={props.sideBarOpen}
        >
          <li className="mt-2">
            <NavLink
              to={ProfileRoute.path}
              className={
                " hover:bg-primary-content hover:outline-dotted hover:outline-primary"
              }
            >
              {getIcon(ProfileRoute.iconName)}
              {props.sideBarOpen ? ProfileRoute.name : ""}
            </NavLink>
          </li>
        </TooltipComponent>
      </ul>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
    case "learning":
      return <LearningIcon />;
    case "resources":
      return <ResourceIcon />;
    default:
      return null;
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the SidebarComponent component.
export default SidebarComponent;
export type { ISidebarComponentProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink } from 'react-router-dom';
import {
    CredsIcon,
    ExpenseIcon,
    GoalsIcon,
    HomeIcon,
    LearningIcon,
    PlanIcon,
    ProfileIcon,
    ProjectIcon,
    ResourceIcon,
} from 'assets';
import TooltipComponent from '../tooltip/TooltipComponent';
import { ProfileRoutes, SidebarRoutes } from 'router/sidebarRoutes';
import {
    SidebarComponentProps,
    SidebarIconProps,
    SidebarIconType,
} from './types';
import { useTranslation } from 'react-i18next';

/**
 * Gets the icon for the sidebar.
 * @param icon The icon name.
 * @returns The icon component.
 */
const SidebarIcon = ({ icon }: SidebarIconProps) => {
    switch (icon) {
        case SidebarIconType.Home:
            return <HomeIcon />;
        case SidebarIconType.Projects:
            return <ProjectIcon />;
        case SidebarIconType.Plans:
            return <PlanIcon />;
        case SidebarIconType.Expenses:
            return <ExpenseIcon />;
        case SidebarIconType.Goals:
            return <GoalsIcon />;
        case SidebarIconType.Credentials:
            return <CredsIcon />;
        case SidebarIconType.Profile:
            return <ProfileIcon />;
        case SidebarIconType.Learning:
            return <LearningIcon />;
        case SidebarIconType.Resources:
            return <ResourceIcon />;
        default:
            return null;
    }
};

/**
 * Sidebar component.
 *
 * @param props  The sidebar component props.
 * @returns The sidebar component.
 */
function SidebarComponent(props: SidebarComponentProps) {
    const { t } = useTranslation();
    return (
        <div className=" flex-col text-base-content flex justify-between h-[95%]">
            <ul className="menu p-2 w-full ">
                {/* Sidebar content here */}
                {SidebarRoutes.map((route, index) => {
                    return (
                        <TooltipComponent
                            key={index}
                            title={t(route.nameKey)}
                            position="tooltip-right"
                            disable={props.sideBarOpen}
                        >
                            <li className="mt-2" key={index}>
                                <NavLink
                                    key={index}
                                    to={route.path}
                                    className={
                                        ' hover:bg-primary-content hover:outline-dotted hover:outline-primary'
                                    }
                                >
                                    <SidebarIcon
                                        icon={route.iconName as SidebarIconType}
                                    />
                                    {props.sideBarOpen ? t(route.nameKey) : ''}
                                </NavLink>
                            </li>
                        </TooltipComponent>
                    );
                })}
            </ul>
            <ul className="menu p-2 w-full ">
                <TooltipComponent
                    title={t(ProfileRoutes.nameKey)}
                    position="tooltip-right"
                    disable={props.sideBarOpen}
                >
                    <li className="mt-2">
                        <NavLink
                            to={ProfileRoutes.path}
                            className={
                                ' hover:bg-primary-content hover:outline-dotted hover:outline-primary'
                            }
                        >
                            <SidebarIcon
                                icon={ProfileRoutes.iconName as SidebarIconType}
                            />
                            {props.sideBarOpen ? t(ProfileRoutes.nameKey) : ''}
                        </NavLink>
                    </li>
                </TooltipComponent>
            </ul>
        </div>
    );
}

export default SidebarComponent;

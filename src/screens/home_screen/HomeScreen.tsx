import { Outlet } from "react-router-dom";
import NavigationComponent from "../../components/navigation/Navigation";

/**
 * Proptypes for the home screen component.
 */
export interface IHomeScreenProps {}

/**
 * Component definition for the home screen component.
 * @param props The proptypes for the component.
 * @returns The HomeScreen component.
 */
export default function HomeScreen(props: IHomeScreenProps) {
  return (
    <div className="min-h-screen">
      <div>
        <NavigationComponent />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

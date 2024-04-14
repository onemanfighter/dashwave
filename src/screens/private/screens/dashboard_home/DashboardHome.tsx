/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { batch, useDispatch } from "react-redux";
import { showAlertWithTimeout } from "../../../../store/slice/toast_alert/ToastAlertSlice";
import {
  NotificationState,
  showNotification,
} from "../../../../store/slice/notification/NotificationSlice";

import { getErrorAlertData } from "../../../../provider/alert_toast_provider/AlertToastProvider";
import { NotificationButton, NotificationButtonType } from "components";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the dashboard home props.
 */
interface IDashboardHomeProps {}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the dashboard home component.
 * @param props The props for the dashboard home component.
 * @returns The dashboard home component.
 */
function DashboardHome(props: IDashboardHomeProps) {
  const dispatch = useDispatch();

  const notificationData: NotificationState = {
    title: "Notification",
    description: "This is a notification data",
  };

  const clickHandler = () => {
    batch(() => {
      showAlertWithTimeout(dispatch, getErrorAlertData("Error"), 3000);
      dispatch(showNotification(notificationData));
    });
  };

  return (
    <div className="p-2">
      <div className="card shadow-lg compact side bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
          <div className="justify-end card-actions">
            <NotificationButton
              buttonText="Notification"
              onClickHandler={clickHandler}
              buttonType={NotificationButtonType.SUCCESS}
              isButtonOutline={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the dashboard home component.
export default DashboardHome;
export type { IDashboardHomeProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

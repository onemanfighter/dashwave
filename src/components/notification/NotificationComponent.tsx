/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useSelector } from "react-redux";
import { RootState } from "store";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the notification provider props.
 *
 * @param title The title of the notification.
 * @param description The description of the notification.
 * @param children The children of the notification.
 * @param onConfirm The on confirm callback.
 */
interface NotificationData {
  title: string;
  description: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The notification modal id.
 */
const NOTIFICATION_MODAL_ID = "notification_modal";

/**
 * Component definition for the notification component.
 * @returns The notification component.
 */
function NotificationComponent() {
  const notificationData = useSelector(
    (state: RootState) => state.notification
  );
  return (
    notificationData && (
      <div className="z-50">
        <input
          type="checkbox"
          id={NOTIFICATION_MODAL_ID}
          className="modal-toggle"
        />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{notificationData.title}</h3>
            <p className="pt-4">{notificationData.description}</p>
            {notificationData.children}
            <div className="modal-action flex flex-row justify-end">
              {notificationData.onConfirm && (
                <div className="modal-action">
                  <label
                    htmlFor={NOTIFICATION_MODAL_ID}
                    className="btn btn-success btn-outline"
                    onClick={notificationData?.onConfirm}
                  >
                    Confirm
                  </label>
                </div>
              )}
              <div className="modal-action ">
                <label
                  htmlFor={NOTIFICATION_MODAL_ID}
                  className="btn btn-error btn-outline"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the NotificationComponent.
export default NotificationComponent;
export type { NotificationData };
export { NOTIFICATION_MODAL_ID };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

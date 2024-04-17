import { useSelector } from "react-redux";
import { RootState } from "store";
import { NOTIFICATION_MODAL_ID } from "./constants";

/**
 * Component definition for the notification component.
 * @returns The notification component.
 */
const NotificationComponent = () => {
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
};

export default NotificationComponent;

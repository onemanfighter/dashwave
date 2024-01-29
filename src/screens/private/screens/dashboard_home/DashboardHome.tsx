import * as React from "react";
import { useDispatch } from "react-redux";
import {
  ToastAlertData,
  showAlertWithTimeout,
} from "../../../../data_store/slice/ToastAlertSlice";
import AlertComponent, { AlertType } from "../../../../components/alert/Alert";
import {
  ToastXPosition,
  ToastYPosition,
} from "../../../../components/toast/ToastComponent";
import {
  NotificationState,
  showNotification,
} from "../../../../data_store/slice/NotificationSlice";
import NotificationButton, {
  NotificationButtonType,
} from "../../../../components/notification/NotificationButton";

export interface IDashboardHomeProps {}

export default function DashboardHome(props: IDashboardHomeProps) {
  const dispatch = useDispatch();

  const alertDatas: ToastAlertData = {
    children: <AlertComponent title="Alert" type={AlertType.WARNING} />,
    xPosition: ToastXPosition.END,
    yPosition: ToastYPosition.BOTTOM,
  };

  const notificationData: NotificationState = {
    title: "Notification",
    description: "This is a notification data",
  };

  const clickHandler = () => {
    dispatch(showNotification(notificationData));
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

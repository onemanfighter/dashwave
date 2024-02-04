import { NOTIFICATION_MODAL_ID } from "./NotificationComponent";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Enums for the notification button type.
 */
enum NotificationButtonType {
  PRIMARY = "btn-primary",
  SECONDARY = "btn-secondary",
  SUCCESS = "btn-success",
  DANGER = "btn-danger",
  WARNING = "btn-warning",
  INFO = "btn-info",
  LIGHT = "btn-light",
  DARK = "btn-dark",
  LINK = "btn-link",
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The notification button props.
 * @param buttonText The text of the button.
 * @param onClickHandler The on click handler of the button.
 * @param buttonType The button type.
 * @param isButtonOutline The button outline.
 */
interface INotificationButtonProps {
  buttonText: string;
  onClickHandler: () => void;
  buttonType?: NotificationButtonType;
  isButtonOutline?: boolean;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Notification button component.
 *
 * @param props  The notification button props.
 * @returns The notification button component.
 */
function NotificationButton(props: INotificationButtonProps) {
  return (
    <div>
      <label
        htmlFor={NOTIFICATION_MODAL_ID}
        className={`btn ${props.buttonType} ${
          props.isButtonOutline ? "btn-outline" : ""
        }`}
        onClick={props.onClickHandler}
      >
        {props.buttonText}
      </label>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the NotificationButton component.
export default NotificationButton;
export type { INotificationButtonProps };
export { NotificationButtonType };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React from "react";
import SuccessIcon from "../../assets/icons/alert_icon/SuccessIcon";
import InfoIcon from "../../assets/icons/alert_icon/InfoIcon";
import WarningIcon from "../../assets/icons/alert_icon/WarningIcon";
import ErrorIcon from "../../assets/icons/alert_icon/ErrorIcon";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Alert type declaration.
 */
enum AlertType {
  NORMAL = "normal",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Alert component data.
 */
interface AlertComponentData {
  title: string;
  type: AlertType;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Alert component.
 *
 * @param props  The alert component data.
 * @returns The alert component.
 */
function AlertComponent(props: AlertComponentData) {
  const { typeString, icon } = getAlertType(props.type);
  return (
    <div role="alert" className={`alert ${typeString}`}>
      {icon}
      <span>{props.title}</span>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Getting alert type.
 */
interface GettingAlertType {
  typeString: string;
  icon: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Get alert type.
 *
 * @param type  The alert type.
 * @returns The alert type.
 */
function getAlertType(type: AlertType): GettingAlertType {
  switch (type) {
    case AlertType.NORMAL:
      return { typeString: "", icon: <></> };
    case AlertType.SUCCESS:
      return { typeString: "alert-success", icon: <SuccessIcon /> };
    case AlertType.INFO:
      return { typeString: "alert-info", icon: <InfoIcon /> };
    case AlertType.WARNING:
      return { typeString: "alert-warning", icon: <WarningIcon /> };
    case AlertType.ERROR:
      return { typeString: "alert-error", icon: <ErrorIcon /> };
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the AlertComponent.
export type { AlertComponentData };
export { AlertType };
export default AlertComponent;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

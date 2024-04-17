import React from "react";
import { SuccessIcon, InfoIcon, WarningIcon, ErrorIcon } from "assets";
import { AlertComponentData, AlertType, GettingAlertType } from "./types";

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
    default:
      return { typeString: "", icon: <></> };
  }
}

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

export default AlertComponent;

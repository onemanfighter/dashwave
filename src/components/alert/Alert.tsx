import React from "react";
import SuccessIcon from "../../assets/icons/alert_icon/SuccessIcon";
import InfoIcon from "../../assets/icons/alert_icon/InfoIcon";
import WarningIcon from "../../assets/icons/alert_icon/WarningIcon";
import ErrorIcon from "../../assets/icons/alert_icon/ErrorIcon";

enum AlertType {
  NORMAL = "normal",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export interface IAlertComponentProps {
  title: string;
  description: string;
  type: AlertType;
  duration: number;
}

export default function AlertComponent(props: IAlertComponentProps) {
  const { typeString, icon } = getAlertType(props.type);
  return (
    <div role="alert" className={`alert ${typeString}`}>
      {icon}
      <span>Your purchase has been confirmed!</span>
    </div>
  );
}

interface GettingAlertType {
  typeString: string;
  icon: React.ReactNode;
}

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

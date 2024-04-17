export enum AlertType {
  NORMAL = "normal",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export type AlertComponentData = {
  title: string;
  type: AlertType;
};

export type GettingAlertType = {
  typeString: string;
  icon: React.ReactNode;
};

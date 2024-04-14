/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useSelector } from "react-redux";
import { RootState } from "store";
import {
  AlertComponentData,
  AlertType,
  ToastAlertComponent,
  ToastXPosition,
  ToastYPosition,
} from "components";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the alert toast provider props.
 */
export interface IToastAlertProviderProps {
  children: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the alert toast provider props.
 */
export interface ToastAlertData {
  alertData: AlertComponentData;
  xPosition?: ToastXPosition;
  yPosition?: ToastYPosition;
  bounce?: boolean;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the alert toast provider.
 * @param props The props for the alert toast provider.
 * @returns The toast provider component.
 */
export default function AlertToastProvider(props: IToastAlertProviderProps) {
  const toastAlert = useSelector((state: RootState) => state.toastAlert);

  return (
    <div className="z-50">
      <ToastAlertComponent
        alertComponentData={toastAlert.alertData}
        xposition={toastAlert.xPosition}
        yposition={toastAlert.yPosition}
        bounce={toastAlert.bounce}
      />
      {props.children}
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Get the error alert data.
 *
 * @param title The title of the alert.
 * @returns The alert data.
 */
export function getSuccessAlertData(title: string): ToastAlertData {
  return {
    alertData: {
      title: title,
      type: AlertType.SUCCESS,
    },
    xPosition: ToastXPosition.END,
    yPosition: ToastYPosition.BOTTOM,
  };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Get the error alert data.
 *
 * @param title The title of the alert.
 * @returns The alert data.
 */
export function getErrorAlertData(title: string): ToastAlertData {
  return {
    alertData: {
      title: title,
      type: AlertType.ERROR,
    },
    xPosition: ToastXPosition.END,
    yPosition: ToastYPosition.BOTTOM,
  };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Get the info alert data.
 *
 * @param title The title of the alert.
 * @returns The alert data.
 */
export function getInfoAlertData(title: string): ToastAlertData {
  return {
    alertData: {
      title: title,
      type: AlertType.INFO,
    },
    xPosition: ToastXPosition.END,
    yPosition: ToastYPosition.BOTTOM,
  };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Get the warning alert data.
 *
 * @param title The title of the alert.
 * @returns The alert data.
 */
export function getWarningAlertData(title: string): ToastAlertData {
  return {
    alertData: {
      title: title,
      type: AlertType.WARNING,
    },
    xPosition: ToastXPosition.END,
    yPosition: ToastYPosition.BOTTOM,
  };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

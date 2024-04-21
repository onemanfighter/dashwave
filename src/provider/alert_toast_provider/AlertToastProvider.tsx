import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { ToastAlertComponent } from '@dash-ui';
import { ToastAlertProviderProps } from './types';

/**
 * Component definition for the alert toast provider.
 * @param props The props for the alert toast provider.
 * @returns The toast provider component.
 */
const AlertToastProvider = (props: ToastAlertProviderProps) => {
    const toastAlert = useSelector((state: RootState) => state.toastAlert);

    return (
        <div className="z-50">
            <ToastAlertComponent
                alertComponentData={toastAlert.alertData}
                xPosition={toastAlert.xPosition}
                yPosition={toastAlert.yPosition}
                bounce={toastAlert.bounce}
            />
            {props.children}
        </div>
    );
};

export default AlertToastProvider;

import { ToastAlertComponent } from '@dash-ui';
import { ToastAlertProviderProps } from './types';
import { appStore } from 'src/zustand_store';
import { alertSelector, useShallow } from 'src/zustand_store/selectors';

/**
 * Component definition for the alert toast provider.
 * @param props The props for the alert toast provider.
 * @returns The toast provider component.
 */
const AlertToastProvider = (props: ToastAlertProviderProps) => {
    const { alertData } = appStore(useShallow(alertSelector));

    return (
        <div className="z-50">
            <ToastAlertComponent
                alertComponentData={alertData.alertData}
                xPosition={alertData.xPosition}
                yPosition={alertData.yPosition}
                bounce={alertData.bounce}
            />
            {props.children}
        </div>
    );
};

export default AlertToastProvider;

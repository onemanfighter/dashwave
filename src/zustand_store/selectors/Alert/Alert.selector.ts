import { ToastAlertData } from '@zustand_store/slice/Alert/types';
import { AppStoreState } from '@zustand_store/store';

export const alertSelector = (state: AppStoreState) => ({
    alertData: state.Alert.alertData,
    showAlertWithTimeout: (alertData: ToastAlertData, time = 1000) => {
        console.log('alertData', alertData);

        state.Alert.showToastAlert(alertData);
        setTimeout(() => {
            state.Alert.hideToastAlert();
        }, time);
    },
});

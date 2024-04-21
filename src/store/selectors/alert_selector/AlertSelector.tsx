import { ToastAlertData } from 'provider';
import { useDispatch } from 'react-redux';
import { alertSlice } from 'store/slice/alert/AlertSlice';
import { RootState } from 'store/store_state';

export const AlertSelector = (state: RootState) => {
    const dispatch = useDispatch();
    const { showToastAlert, hideToastAlert } = alertSlice.actions;

    const showAlertWithTimeout = (
        alertData: ToastAlertData,
        timeMS: number
    ) => {
        dispatch(showToastAlert(alertData));
        setTimeout(() => {
            dispatch(hideToastAlert());
        }, timeMS);
    };

    return { showAlertWithTimeout };
};

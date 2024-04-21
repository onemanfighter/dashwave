import { useDispatch } from 'react-redux';
import {
    NotificationState,
    notificationSlice,
} from 'store/slice/notification/NotificationSlice';
import { RootState } from 'store/store_state';

export const NotificationSelector = (state: RootState) => {
    const dispatch = useDispatch();
    const { showNotification } = notificationSlice.actions;

    const showNotificationAction = (payload: NotificationState) => {
        dispatch(showNotification(payload));
    };

    return {
        notificationData: state.notification,
        showNotificationAction,
    };
};

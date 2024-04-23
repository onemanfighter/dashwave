import { AppStoreState } from 'src/zustand_store/store';

export const notificationSelector = (state: AppStoreState) => ({
    notificationData: state.Notification.data,
    showNotification: state.Notification.showNotification,
    hideNotification: state.Notification.hideNotification,
});

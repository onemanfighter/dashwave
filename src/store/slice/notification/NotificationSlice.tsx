import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NotificationData } from '@dash-ui';

const NOTIFICATION = 'notification';

type NotificationState = NotificationData | null;

const initialNotificationState: NotificationState = null as NotificationState;

export const notificationSlice = createSlice({
    name: NOTIFICATION,
    initialState: initialNotificationState,
    reducers: {
        showNotification: (
            _state,
            action: PayloadAction<NotificationState>
        ) => {
            return action.payload;
        },
    },
});

export type { NotificationState };

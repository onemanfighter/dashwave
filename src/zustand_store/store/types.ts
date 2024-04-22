import { StateCreator } from 'zustand';
import {
    ThemeStateSlice,
    AlertStateSlice,
    AuthStateSlice,
    ProjectStateSlice,
    ImageModalStateSlice,
    NotificationStateSlice,
} from '@zustand_store/slice';

export interface AppStoreState {
    Theme: ThemeStateSlice;
    Alert: AlertStateSlice;
    Auth: AuthStateSlice;
    Projects: ProjectStateSlice;
    ImageModal: ImageModalStateSlice;
    Notification: NotificationStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
    AppStoreState,
    [['zustand/immer', never]],
    [],
    T
>;

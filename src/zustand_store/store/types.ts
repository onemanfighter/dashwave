import { StateCreator } from 'zustand';
import {
    ThemeStateSlice,
    AlertStateSlice,
    AuthStateSlice,
} from '@zustand_store/slice';

export interface AppStoreState {
    Theme: ThemeStateSlice;
    Alert: AlertStateSlice;
    Auth: AuthStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
    AppStoreState,
    [['zustand/immer', never]],
    [],
    T
>;

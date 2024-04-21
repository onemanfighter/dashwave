import { StateCreator } from 'zustand';
import { ThemeStateSlice } from '@zustand_store/slice/Theme/types';
import { AlertStateSlice } from '..';

export interface AppStoreState {
    Theme: ThemeStateSlice;
    Alert: AlertStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
    AppStoreState,
    [['zustand/immer', never]],
    [],
    T
>;

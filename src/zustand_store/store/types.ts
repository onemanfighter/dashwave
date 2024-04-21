import { StateCreator } from 'zustand';
import { ThemeStateSlice } from 'zustand_store/slice/Theme/types';

export interface AppStoreState {
    Theme: ThemeStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
    AppStoreState,
    [['zustand/immer', never]],
    [],
    T
>;
